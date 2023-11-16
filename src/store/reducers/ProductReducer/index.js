import {
  GET_LIST_PRODUCT,
  GET_DETAIL_PRODUCT,
} from "../../actions/ProductAction";

const initialState = {
  getListProductLoading: false,
  getListProductResult: false,
  getListProductError: false,

  getDetailProductLoading: false,
  getDetailProductResult: false,
  getDetailProductError: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_LIST_PRODUCT:
      return {
        ...state,
        getListProductLoading: action.payload.loading,
        getListProductResult: action.payload.data,
        getListProductError: action.payload.errorMessage,
      };
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        getDetailProductLoading: action.payload.loading,
        getDetailProductResult: action.payload.data,
        getDetailProductError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
