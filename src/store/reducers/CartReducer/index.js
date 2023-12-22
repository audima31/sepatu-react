import {
  CART_BELANJA,
  GET_LIST_KERANJANG,
  DELETE_KERANJANG,
  TOTAL_CART,
} from "../../actions/CartAction";

const initialState = {
  tambahCartBelanjaLoading: false,
  tambahCartBelanjaResult: false,
  tambahCartBelanjaError: false,

  getListKeranjangLoading: false,
  getListKeranjangResult: false,
  getListKeranjangError: false,

  deleteKeranjangLoading: false,
  deleteKeranjangResult: false,
  deleteKeranjangError: false,

  totalKeranjangLoading: false,
  totalKeranjangResult: false,
  totalKeranjangError: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case CART_BELANJA:
      return {
        ...state,
        tambahCartBelanjaLoading: action.payload.loading,
        tambahCartBelanjaResult: action.payload.data,
        tambahCartBelanjaError: action.payload.errorMessage,
      };

    case GET_LIST_KERANJANG:
      return {
        ...state,
        getListKeranjangLoading: action.payload.loading,
        getListKeranjangResult: action.payload.data,
        getListKeranjangError: action.payload.errorMessage,
      };

    case DELETE_KERANJANG:
      return {
        ...state,
        deleteKeranjangLoading: action.payload.loading,
        deleteKeranjangResult: action.payload.data,
        deleteKeranjangError: action.payload.errorMessage,
      };

    case TOTAL_CART:
      return {
        ...state,
        totalKeranjangLoading: action.payload.loading,
        totalKeranjangResult: action.payload.data,
        totalKeranjangError: action.payload.errorMessage,
      };
    default:
      return state;
  }
}
