import FIREBASE from "../../config/FIREBASE";
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
} from "../../utils/dispatch";
import { ref, onValue, set } from "firebase/database";

export const GET_LIST_PRODUCT = "GET_LIST_PRODUCT";
export const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT";
export const TAMBAH_KERANJANG = "TAMBAH_KERANJANG";

export const getListProduct = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_LIST_PRODUCT);

    const starCountRef = ref(FIREBASE, "product/");
    onValue(starCountRef, (snapshot) => {
      if (snapshot) {
        const data = snapshot.val();
        dispatchSuccess(dispatch, GET_LIST_PRODUCT, data);
      } else {
        dispatchError(dispatch, GET_LIST_PRODUCT, "Error");
      }
    });
  };
};

export const getDetailProduct = (id) => {
  return (dispatch) => {
    dispatchLoading(dispatch, GET_DETAIL_PRODUCT);

    const starCountRef = ref(FIREBASE, "product/" + id);
    onValue(starCountRef, (snapshot) => {
      if (snapshot) {
        const data = snapshot.val();
        console.log("Data Detail Product: ", data);
        dispatchSuccess(dispatch, GET_DETAIL_PRODUCT, data);
      } else {
        dispatchError(dispatch, GET_DETAIL_PRODUCT, "Error");
      }
    });
  };
};

export const tambahKeranjang = (id) => {
  return (dispatch) => {
    dispatchLoading(dispatch, TAMBAH_KERANJANG);

    //Ambil Id nya dulu
    const starCountRef = ref(FIREBASE, "product/" + id);
    onValue(starCountRef, (snapshot) => {
      if (snapshot) {
        const data = snapshot.val();
        // Ketika data sudah dapat, maka tambahkan ke data 'Cart'
        // set(ref(FIREBASE, "cart/" + new Date().getTime() + "-" ));
        console.log("Data Detail Product: ", data);
      } else {
        dispatchError(dispatch, GET_DETAIL_PRODUCT, "Error");
      }
    });
  };
};
