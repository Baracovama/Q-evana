import React from "react";
import "../../styles/contacta.css";

export const Contacta = () => {

  return (
    <div className="body">
       <div className="slide-container">
            <div className="slide-content"> 
                <div class="container mt-auto">
                    <div class="row">
                        <div class="col-6">
                            <div className="card-wrapper">
                                <div className="cardContact">
                                    <div className="image-content">
                                        <span className="overlay"></span>

                                        <div className="card-image">
                                            <img src="https://phantom-marca.unidadeditorial.es/5f35dc7ba0a175d12db238a6c6e8d549/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/24/16456899624763.jpg" alt="" className="card-img"/>
                                        </div>
                                    </div>

                                    <div className="card-content">
                                        <h2 className="name"> Juan Guevara</h2>
                                        <p className="datos"> <i className="fas fa-envelope"> juanvguevaram@gmail.com</i></p>
                                        <p className="datos"> <i className="fab fa-github"> Baracovama</i></p>
                                        <p className="datos"> <i className="fab fa-linkedin p-0"> Juan Guevara Medina</i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-6">
                            <div className="card-wrapper">
                                <div className="cardContact">
                                    <div className="image-content">
                                        <span className="overlay"></span>

                                        <div className="card-image">
                                            <img src="https://phantom-marca.unidadeditorial.es/5f35dc7ba0a175d12db238a6c6e8d549/resize/1320/f/jpg/assets/multimedia/imagenes/2022/02/24/16456899624763.jpg" alt="" className="card-img"/>
                                        </div>
                                    </div>

                                    <div className="card-content">
                                        <h2 className="name"> Alejandra Pallares</h2>
                                        <p className="datos"> <i className="fas fa-envelope"> rockylars29565@gmail.com</i></p>
                                        <p className="datos"> <i className="fab fa-github"> AlejandraPT</i></p>
                                        <p className="datos"> <i className="fab fa-linkedin p-0"> ALEJANDRA PALLARES TEN</i></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    </div>
   
  );
};

