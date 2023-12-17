import { CART_BELANJA, GET_LIST_KERANJANG } from "../../actions/CartAction";

const initialState = {
  tambahCartBelanjaLoading: false,
  tambahCartBelanjaResult: false,
  tambahCartBelanjaError: false,

  getListKeranjangLoading: false,
  getListKeranjangResult: false,
  getListKeranjangError: false,
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
    default:
      return state;
  }
}
