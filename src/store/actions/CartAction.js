import Swal from "sweetalert2";
import FIREBASE from "../../config/FIREBASE";
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
} from "../../utils/dispatch";
import {
  equalTo,
  onValue,
  orderByChild,
  query,
  ref,
  remove,
  set,
} from "firebase/database";

export const CART_BELANJA = "CART_BELANJA";
export const GET_LIST_KERANJANG = "GET_LIST_KERANJANG";
export const DELETE_KERANJANG = "DELETE_KERANJANG";
export const TOTAL_CART = "TOTAL_CART";

export const tambahCartBelanja = (data) => {
  return (dispatch) => {
    dispatchLoading(dispatch, CART_BELANJA);

    // Tambahin datanya ke 'cart/'
    if (data) {
      set(ref(FIREBASE, "cart/" + data.idCart), {
        brand: data.brand,
        caption: data.caption,
        color: data.color,
        gender: data.gender,
        idProduct: data.idProduct,
        image: data.image,
        price: data.price,
        priceAwal: data.priceAwal,
        type: data.type,
        jumlahBarang: data.jumlahBarang,
        idCart: data.idCart,
        idUser: data.idUser,
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode) {
          dispatchError(dispatch, CART_BELANJA, errorCode);
        } else if (errorMessage) {
          dispatchError(dispatch, CART_BELANJA, errorMessage);
        }
      });
      dispatchSuccess(dispatch, CART_BELANJA, data);
    } else {
      console.log("Error di action");
    }
  };
};

export const getListKeranjang = (uid) => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_KERANJANG);

    const startCountRef = query(
      ref(FIREBASE, "cart/"),
      orderByChild("idUser"),
      equalTo(uid)
    );

    onValue(startCountRef, (snapshot) => {
      if (snapshot) {
        const data = snapshot.val();
        console.log("Data keranjang : ", data);
        dispatchSuccess(dispatch, GET_LIST_KERANJANG, data);
      } else {
        dispatchError(dispatch, GET_LIST_KERANJANG, "error");
      }
    });
  };
};

export const deleteKeranjang = (data) => {
  return (dispatch) => {
    dispatchLoading(dispatch, DELETE_KERANJANG);

    if (data) {
      remove(ref(FIREBASE, "cart/" + data));
      dispatchSuccess(dispatch, DELETE_KERANJANG, "berhasil");
    } else {
      dispatchError(dispatch, DELETE_KERANJANG, "gagal");
    }
  };
};

export const totalCartUser = (uid) => {
  return (dispatch) => {
    dispatchLoading(dispatch, TOTAL_CART);

    const startCountRef = query(
      ref(FIREBASE, "cart/"),
      orderByChild("idUser"),
      equalTo(uid)
    );

    onValue(startCountRef, (snapshot) => {
      if (snapshot) {
        const data = snapshot.size;
        console.log("Banyak data cart : ", data);
        dispatchSuccess(dispatch, TOTAL_CART, data);
      } else {
        dispatchError(dispatch, TOTAL_CART, "error");
      }
    });
  };
};
