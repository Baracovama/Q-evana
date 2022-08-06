import React, { useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";

export const Registre = () => {
  const {store, actions} = useContext (Context)
  const [datos, setDatos] = useState({
    email: "",
    username: "",
    password: "",
  });

  let navigate = useNavigate();

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const sendDatos = (event) => {
    event.preventDefault();
    console.log(datos);
    const respdata = actions.addDatos(datos);
    if(respdata){
      navigate('/')
    }
  };

  return (
    <div id="login1 template-bg-3" className="d-flex flex-column min-vh-100 justify-content-center align-items-center">
      <div className="card mb-5 p-5 bg-dark bg-gradient text-white col-md-4">
        <div className="card-header text-center">
          <h3><img src="logo.png" className="logo"/></h3>
        </div>
        <div className="card-body mt-3">
          <form id="loginform" className="px-4 py-3" onSubmit={sendDatos}>
            <div className="form-group mb-3">
                <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email address</label>      
                <input name="email" className="form-control" id="EmailInput" aria-describedby="emailHelp" placeholder="email@example.com" type="email" onChange={handleInputChange}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleDropdownFormUsername1" className="form-label">Real Name</label>      
                <input name="realname" className="form-control" id="RealnameInput" placeholder="Pepe Gonzalez" type="text" onChange={handleInputChange}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleDropdownFormUsername1" className="form-label">Username</label>      
                <input name="username" className="form-control" id="UsernameInput" placeholder="Nickname" type="text" onChange={handleInputChange}/>
            </div>
            <div className="form-group mb-3">
                <label htmlFor="exampleDropdownFormPassword1" className="form-label">Password</label>                
                <input type="password" className="form-control" id="PasswordInput" name="password" placeholder="Password" onChange={handleInputChange}/>
            </div>
            <div className="mb-3">
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck"/>
                    <label className="form-check-label" htmlFor="dropdownCheck">
                      I accept the terms and conditions
                    </label>
                </div>
            </div>
            <div className="text-center">
              <button type="submit" value="Sing in" className="btn btn-primary mt-3 w-100 p-2" name="login-btn">
                 Registre
              </button>
              
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