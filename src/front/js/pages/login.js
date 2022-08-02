import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { actions } = useContext(Context);

  const handleClick = () => {
    const opts = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };

    fetch(process.env.BACKEND_URL + "/api/login", opts)
      .then((resp) => {
        if (resp.status === 200) return resp.json();
        else alert("Error");
      })
      .then((data) => {
        console.log(data.token);
        localStorage.setItem("token", data.token);
        actions.setToken(data.token);
      })
      .catch((error) => {
        console.error("There was an error", error);
      });
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
          <form id="loginform" className="px-4 py-3">
            <div className="form-group mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>
                <input type="text" className="form-control" id="EmailInput" name="email" aria-describedby="emailHelp" placeholder="email@example.com" value={email} onChange={(event) => setEmail(event.target.value)}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="PassworkInput" name="password" placeholder="Password" value={password} onChange={(event) => setPassword(event.target.value)}/>
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                    <label className="form-check-label" htmlFor="dropdownCheck">
                        Remember me
                    </label>
                </div>
            </div>
            <a className="dropdown-item text-info" href="registre">New around here? Sign up</a>
            <div className="text-center">
              <button type="submit" value="Sing" href="/" className="btn btn-primary mt-3 w-100 p-2" name="login-btn" onClick={handleClick}>Login</button>
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