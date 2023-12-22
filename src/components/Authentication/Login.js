import React, { Component } from "react";
import Swal from "sweetalert2";
import { loginUser } from "../../store/actions/AuthAction";
import { connect } from "react-redux";
import { getAuth, onAuthStateChanged } from "firebase/auth";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleLoginSubmit(event) {
    const { email, password } = this.state;
    event.preventDefault();

    if (!email) {
      Swal.fire({
        icon: "error",
        text: "Masukan email terlebih dahulu!",
      });
    } else if (password.length < 6) {
      Swal.fire({
        icon: "error",
        text: "Password minimal 6 karakter!",
      });
    } else {
      const data = {
        email,
        password,
      };
      this.props.dispatch(loginUser(data));
    }
  }

  handleCheckLogin() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        Swal.fire({
          title: "Berhasil login",
          icon: "success",
        });

        setTimeout(() => {
          window.location = "/";
        }, 2000);
      } else {
        // User is signed out
      }
    });
  }

  componentDidMount() {
    this.handleCheckLogin();
  }
  render() {
    const { loginUserResult, loginUserError, loginUserLoading } = this.props;

    return (
      <div>
        <div className="row  d-flex align-items-center">
          <div className="col"></div>
          <div className="col px-5 ">
            <p
              style={{ fontSize: "2em", lineHeight: "1em" }}
              className="fw-bold"
            >
              Log in
            </p>

            <label style={{ color: "#9ea1af" }}>
              Hello! Please login for better experience.
            </label>
            <form onSubmit={(event) => this.handleLoginSubmit(event)}>
              <div className="mt-4 mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={(event) => this.handleEmail(event)}
                ></input>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput2"
                  onChange={(event) => this.handlePassword(event)}
                ></input>
              </div>

              <button
                type="submit"
                className="btn fw-semibold button1 w-100"
                style={{ borderRadius: "5px" }}
              >
                LOG IN
              </button>
            </form>

            <div className="text-center mt-3">
              <label>
                Don't have an account?{" "}
                <a href="/register">
                  <label>Sign Up</label>
                </a>
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loginUserLoading: state.AuthReducer.loginUserLoading,
  loginUserResult: state.AuthReducer.loginUserResult,
  loginUserError: state.AuthReducer.loginUserError,
});

export default connect(mapStateToProps, null)(Login);
