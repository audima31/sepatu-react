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
        }, 1500);
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
        <div className="formLogin">
          <div className="text-center" style={{ fontSize: "2.8em" }}>
            <label style={{ color: "#212529", fontWeight: "lighter" }}>
              okta
              <label style={{ color: "#fa9200", fontWeight: "lighter" }}>
                S
              </label>
              hoes
              <label style={{ color: "#fa9200", fontWeight: "bold" }}>.</label>
            </label>
          </div>
          <div
            className="d-none d-md-block"
            style={{ paddingLeft: "25%", paddingRight: "25%" }}
          >
            <form onSubmit={(event) => this.handleLoginSubmit(event)}>
              <div className="mt-4 mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={(event) => this.handleEmail(event)}
                ></input>
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
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

          {/*  */}
          <div className="d-block d-md-none">
            <form onSubmit={(event) => this.handleLoginSubmit(event)}>
              <div className="mt-4 mb-3">
                <input
                  type="email"
                  placeholder="Email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={(event) => this.handleEmail(event)}
                ></input>
              </div>

              <div className="mb-3">
                <input
                  type="password"
                  placeholder="Password"
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
