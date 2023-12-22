import Swal from "sweetalert2";
import FIREBASE from "../../config/FIREBASE";
import {
  dispatchError,
  dispatchLoading,
  dispatchSuccess,
} from "../../utils/dispatch";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { ref, onValue, set, child, get } from "firebase/database";

export const LOGIN_USER = "LOGIN_USER";
export const REGISTER_USER = "REGISTER_USER";
export const CHECK_LOGIN = "CHECK_LOGIN";

export const registerUser = (data) => {
  return (dispatch) => {
    dispatchLoading(dispatch, REGISTER_USER);

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Sign in
        const user = userCredential.user;

        const dataUserBaru = {
          id: user.uid,
          name: data.name,
          email: data.email,
          password: data.password,
        };

        // Tambahin ke realtime databasenya
        set(ref(FIREBASE, "user/" + user.uid), {
          id: user.uid,
          name: data.name,
          email: data.email,
          password: data.password,
        });

        // Berhasil
        dispatchSuccess(dispatch, REGISTER_USER, dataUserBaru);
        Swal.fire({
          title: "Pendaftaran akun berhasil",
          icon: "success",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (errorCode) {
          console.log("Error Code :", errorCode);
          dispatchError(dispatch, REGISTER_USER, errorCode);
        } else if (errorMessage) {
          dispatchError(dispatch, REGISTER_USER, errorMessage);
        }
      });
  };
};

export const loginUser = (data) => {
  return (dispatch) => {
    dispatchLoading(dispatch, LOGIN_USER);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        // Signed In
        const user = userCredential.user;
        console.log("Masuk if : ", user.uid);

        onValue(ref(FIREBASE, "user/" + user.uid), (snapshot) => {
          //Ngambil data di database
          console.log("Cek : ", snapshot.exists());
          if (snapshot.exists()) {
            const dataUser = snapshot.val();
            console.log("Data : ", dataUser);
            dispatchSuccess(dispatch, LOGIN_USER, dataUser);
          } else {
            console.log("Masuk else");

            console.log("No data available");
            Swal.fire({
              title: "Email dan Password tidak terdaftar!",
              icon: "error",
            });
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("Error code : ", errorCode);
        console.log("Error Message : ", errorMessage);
        dispatchError(dispatch, LOGIN_USER, errorMessage);
        Swal.fire({
          title: "Email dan Password tidak terdaftar!",
          icon: "error",
        });
      });
  };
};

export const statusUser = () => {
  return (dispatch) => {
    dispatchLoading(dispatch, CHECK_LOGIN);

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.id;
        dispatchSuccess(dispatch, CHECK_LOGIN, uid);
      }
    }).catch((error) => {
      dispatchError(dispatch, CHECK_LOGIN, error);
    });
  };
};
