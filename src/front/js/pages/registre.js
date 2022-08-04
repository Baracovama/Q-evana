import React, { useState, useEffect } from "react";

export const Registre = () => {
  const [datos, setDatos] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const sendDatos = (event) => {
    event.preventDefault();
    console.log(datos);
    addDatos(datos);
  };

  //llamada fetch api
  const addDatos = (datos) => {
    fetch(
        process.env.BACKEND_URL + "/api/user",
      {
        method: "POST",
        body: JSON.stringify(datos),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((resp) => {
        return resp.json(); // (regresa una promesa) will try to parse the result as json as return a promise that you can .then for results
      })
      .then((data) => {
        //Aquí es donde debe comenzar tu código después de que finalice la búsqueda
        console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
      })
      .catch((error) => {
        //manejo de errores
        console.log(error);
      });
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
              <input type="submit" value="Sing in" href="/" className="btn btn-primary mt-3 w-100 p-2" name="login-btn"
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