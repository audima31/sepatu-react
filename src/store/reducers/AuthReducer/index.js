import {
  LOGIN_USER,
  REGISTER_USER,
  CHECK_LOGIN,
} from "../../actions/AuthAction";

const initialState = {
  registerUserLoading: false,
  registerUserResult: false,
  registerUserError: false,

  loginUserLoading: false,
  loginUserResult: false,
  loginUserError: false,

  checkLoginLoading: false,
  checkLoginResult: false,
  checkLoginError: false,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        registerUserLoading: action.payload.loading,
        registerUserResult: action.payload.data,
        registerUserError: action.payload.errorMessage,
      };
    case LOGIN_USER:
      return {
        ...state,
        loginUserLoading: action.payload.loading,
        loginUserResult: action.payload.data,
        loginUserError: action.payload.errorMessage,
      };
    case CHECK_LOGIN:
      return {
        ...state,
        checkLoginLoading: action.payload.loading,
        checkLoginResult: action.payload.data,
        checkLoginError: action.payload.errorMessage,
      };

    default:
      return state;
  }
}
