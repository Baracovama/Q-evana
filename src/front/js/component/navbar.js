import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light bg-dark">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
				<a class="navbar-brand" href="#"> <img src="https://www.textbroker.es/wp-content/uploads/sites/7/2017/09/1823382-750x447.jpg" alt="" width="150px"/></a>
				<ul class="navbar-nav me-auto mb-2 mb-lg-0">
					<li class="nav-item">
					<h3 class="nav-link active text-light" aria-current="page" href="#">Q'UEVANA</h3>
					</li>
				</ul>
				<form class="d-flex">
					<input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					<a class="nav-link active me-2" aria-current="page" href="#">Login</a>
					<a class="nav-link active me-2" aria-current="page" href="#">Registrate</a>
				</form>
				</div>
			</div>
		</nav>
	);
};
