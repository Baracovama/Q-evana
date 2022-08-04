import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<h3>Contact with us</h3>
		<div className="container-fluid">
			<div className="row">
				<div className="col-4">
					GMAIL
					<div className="row">
						<i className="fas fa-envelope"> rockylars29565@gmail.com</i>
					</div>
					<div className="row">
						<i className="fas fa-envelope"> juanvguevaram@gmail.com</i>
					</div>
				</div>
				<div className="col-4">
					GitHub
					<div className="row">
						<i className="fab fa-github"> AlejandraPT</i>
					</div>
					<div className="row">
						<i className="fab fa-github"> Baracovama</i>
					</div>
				</div>
				<div className="col-4">
					Linkedln
					<div className="row">
						<i className="fab fa-linkedin"> ALEJANDRA PALLARES TEN</i>
					</div>
					<div className="row">
						<i className="fab fa-linkedin"> Juan Guevara Medina</i>
					</div>
				</div>
			</div>
		</div>
	</footer>
);
