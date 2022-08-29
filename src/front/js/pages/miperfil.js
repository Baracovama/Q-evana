import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import "../../styles/perfil.css";

export const Miperfil = () => {
  const { actions, store } = useContext(Context);
  const [email, setEmail] = useState(store.user.email);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState(store.user.username);
  const [name, setName] = useState(store.user.name);
  let navigate = useNavigate();

  return (
    <div className="perfil1 w-100">
      <div
        id="perfil1 template-bg-3"
        className="d-flex flex-column min-vh-100 justify-content-center align-items-center"
      >
        <div className="card-login mb-5 p-5 text-white col-md-4">
          <div className="card-header text-center">
            <h4>
              <img src="logo.png" className="logo" />
              <p>Hola {store.username}</p>
            </h4>
          </div>
          <div className="card-body mt-3">
            <div className="form-group mb-3">
              <label htmlFor="exampleDropdownFormEmail1" className="form-label">
                Email address
              </label>
              <input
                type="text"
                className="form-control"
                id="EmailInput"
                name="email"
                aria-describedby="emailHelp"
                placeholder="email@example.com"
                defaultValue={store.user.email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="exampleDropdownFormPassword1"
                className="form-label"
              >
                Username
              </label>
              <input
                type="text"
                className="form-control"
                id="PassworkInput"
                name="password"
                placeholder="Username"
                defaultValue={store.user.username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="form-group mb-3">
              <label
                htmlFor="exampleDropdownFormPassword1"
                className="form-label"
              >
                Name
              </label>
              <input
                type="name"
                className="form-control"
                id="PassworkInput"
                name="password"
                placeholder="Nombre"
                defaultValue={store.user.name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group mb-3">
              <label
                htmlFor="exampleDropdownFormPassword1"
                className="form-label"
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="PassworkInput"
                name="password"
                placeholder="Password"
                defaultValue={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <button
              onClick={() => {
                actions.CambiosUser(email, username, name, password);
              }}
            >
              Realizar cambios
            </button>

            <div className="text-danger"></div>
          </div>
          <div className="card-footer p-3">
            <div className="d-flex justify-content-center"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
