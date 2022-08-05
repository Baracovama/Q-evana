import React, { Component } from "react";
import "../../styles/footer.css";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center">
		<h3>Contact with us</h3>
		<div className="container">
			<div className="row">
				<div className="col-4 p-0">
					GMAIL
					<div className="row">
						<i className="fas fa-envelope"> rockylars29565@gmail.com</i>
					</div>
					<div className="row">
						<i className="fas fa-envelope"> juanvguevaram@gmail.com</i>
					</div>
				</div>
				<div className="col-4 p-0">
					GitHub
					<div className="row">
						<i className="fab fa-github"> AlejandraPT</i>
					</div>
					<div className="row">
						<i className="fab fa-github"> Baracovama</i>
					</div>
				</div>
				<div className="col-4 p-0">
						Linkedln
						<div className="row">
							<i className="fab fa-linkedin p-0"> ALEJANDRA PALLARES TEN</i>
						</div>
						<div className="row">
							<i className="fab fa-linkedin p-0"> Juan Guevara Medina</i>
						</div>
				</div>
			</div>
		</div>
	</footer>
);
