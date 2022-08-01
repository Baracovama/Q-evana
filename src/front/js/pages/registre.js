import React, { useState, useEffect } from "react";
import "../../styles/index.css";

export const Registre = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
  });
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

  const handleInputChange = (event) => {
    //console.log(event.target.value);
    setInfo({
      ...info,
      [event.target.name]: event.target.value,
    });
  };

  const sendInfo = (event) => {
    event.preventDefault();
    console.log(info);
    addInfo(info);
  };

  const loginSubmit = (e) => {
    e.preventDefault();
    handleValidation();
  };

  return (
    <div
      id="login1 template-bg-3"
      className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div className="card mb-5 p-5 bg-dark bg-gradient text-white col-md-4">
        <div className="card-header text-center">
          <h3>LOGO </h3>
        </div>
        <div className="card-body mt-3">
          <form id="loginform" className="px-4 py-3" onSubmit={loginSubmit}>
            <div className="form-group mb-3">
                <label for="exampleDropdownFormEmail1" className="form-label">Email address</label>      
                <input name="email" className="form-control" id="EmailInput" aria-describedby="emailHelp" placeholder="email@example.com" type="email" onChange={handleInputChange}/>
                <small id="emailHelp" className="text-light form-text">{emailError}</small>
            </div>
            <div className="form-group mb-3">
                <label for="exampleDropdownFormPassword1" className="form-label">Password</label>                
                <input type="password" className="form-control" id="PassworkInput" name="password" placeholder="Password" onChange={handleInputChange}/>
                <small id="passworderror" className="text-light form-text">{passwordError}</small>
            </div>
            <div class="mb-3">
                <div class="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                    <label className="form-check-label" for="dropdownCheck">
                        Remember me
                    </label>
                </div>
            </div>
            <a className="dropdown-item text-info" href="#">New around here? Sign up</a>
            <div className="text-center">
              <input type="submit" value="Sing in" className="btn btn-primary mt-3 w-100 p-2" name="login-btn"
                onChange={(event) => setPassword(event.target.value)}
              />
              
            </div>
          </form>

          <div className="text-danger"></div>
        </div>
        <div className="card-footer p-3">
          <div className="d-flex justify-content-center"></div>
        </div>
      </div>
    </div>
  );
};