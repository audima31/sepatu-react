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
  set,
} from "firebase/database";

export const CART_BELANJA = "CART_BELANJA";
export const GET_LIST_KERANJANG = "GET_LIST_KERANJANG";

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
