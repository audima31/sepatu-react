import React, { Component } from "react";
import { registerUser } from "../../store/actions/AuthAction";
import { connect } from "react-redux";
import Swal from "sweetalert2";

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleName(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handlePassword(event) {
    this.setState({
      password: event.target.value,
    });
  }

  handleEmail(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleSubmit(event) {
    const { name, email, password } = this.state;
    event.preventDefault();

    if (!name) {
      Swal.fire({
        icon: "error",
        text: "Data nama boleh kosong!",
      });
    } else if (!email) {
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
        name,
        email,
        password,
      };

      this.props.dispatch(registerUser(data));
    }
  }

  render() {
    return (
      <div>
        <div className="row  d-flex align-items-center">
          <div className="col"></div>
          <div className="col px-5">
            <h5 className="fw-bold mb-4">Sign Up</h5>
            <form onSubmit={(event) => this.handleSubmit(event)}>
              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput1"
                  className="form-label"
                >
                  Nama
                </label>
                <input
                  type="text"
                  placeholder="Masukan nama lengkap"
                  className="form-control"
                  id="exampleFormControlInput1"
                  onChange={(event) => this.handleName(event)}
                ></input>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput2"
                  className="form-label"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="name@gmail.com"
                  className="form-control"
                  id="exampleFormControlInput2"
                  onChange={(event) => this.handleEmail(event)}
                ></input>
              </div>

              <div className="mb-3">
                <label
                  htmlFor="exampleFormControlInput3"
                  className="form-label"
                >
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleFormControlInput3"
                  placeholder="Minimal 6 karakter"
                  onChange={(event) => this.handlePassword(event)}
                ></input>
              </div>

              <button
                type="submit"
                className="btn fw-semibold button1 w-100"
                style={{ borderRadius: "5px" }}
              >
                SIGN UP
              </button>
            </form>

            <div className="text-center mt-3">
              <label>
                Have an account?{" "}
                <a href="/login">
                  <label>Log in</label>
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
  registerUserLoading: state.AuthReducer.registerUserLoading,
  registerUserResult: state.AuthReducer.registerUserResult,
  registerUserError: state.AuthReducer.registerUserError,
});

export default connect(mapStateToProps, null)(Register);
