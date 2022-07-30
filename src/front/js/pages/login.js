import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import Carousel from "../component/carousel";
import cardlogin from "../component/cardlogin";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordError, setpasswordError] = useState("");
  const [emailError, setemailError] = useState("");

  const handleValidation = (event) => {
    let formIsValid = true;

    if (!email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
      formIsValid = false;
      setemailError("Email Not Valid");
      return false;
    } else {
      setemailError("");
      formIsValid = true;
    }

    if (!password.match(/^[a-zA-Z]{8,22}$/)) {
      formIsValid = false;
      setpasswordError(
        "Solo las letras y la longitud deben tener un mínimo de 8 caracteres y un máximo de 22 caracteres"
      );
      return false;
    } else {
      setpasswordError("");
      formIsValid = true;
    }

    return formIsValid;
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <div
      id="login1 template-bg-3"
      class="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div class="card mb-5 p-5 bg-dark bg-gradient text-white col-md-4">
        <div class="card-header text-center">
          <h3>LOGO </h3>
        </div>
        <div class="card-body mt-3">
          <form id="loginform" class="px-4 py-3" onSubmit={loginSubmit}>
            <div class="form-group mb-3">
                <label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="EmailInput" name="EmailInput" aria-describedby="emailHelp" placeholder="email@example.com" onChange={(event) => setEmail(event.target.value)}/>
                <small id="emailHelp" class="text-light form-text">{emailError}</small>
            </div>
            <div class="input-group form-group mb-3">
                <label for="exampleDropdownFormPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" id="PassworkInput" name="PasswordImput" placeholder="Password"/>
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="dropdownCheck"/>
                    <label class="form-check-label" for="dropdownCheck">
                        Remember me
                    </label>
                </div>
            </div>
            <a class="dropdown-item text-info" href="#">New around here? Sign up</a>
			<a class="dropdown-item text-info" href="#">Forgot password?</a>
            <div class="text-center">
              <input type="submit" value="Sing in" class="btn btn-primary mt-3 w-100 p-2" name="login-btn"
                onChange={(event) => setPassword(event.target.value)}
              />
              <small id="passworderror" className="text-light form-text">
                {passwordError}
              </small>
            </div>
          </form>

          <div class="text-danger"></div>
        </div>
        <div class="card-footer p-3">
          <div class="d-flex justify-content-center"></div>
        </div>
      </div>
    </div>
  );
};