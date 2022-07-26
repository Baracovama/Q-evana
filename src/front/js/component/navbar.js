import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg bg-dark">
			<div class="container-fluid col-12 mb-3 text-center">
				<div className="row">
					<a class="navbar-brand nav-link active" aria-current="page" href="#"><img src="https://c8.alamy.com/zoomses/6/18ffc9230d2a4d208dfdf33ecf623007/2j632rd.jpg" alt="" width="60" height="60"/></a>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent"></div>
				</div>
				<div className="row">
					<form class="d-flex" role="search">
						<input class="form-control me-8" type="search" placeholder="Search" aria-label="Search"/>
						<button class="btn btn-outline-primary" type="submit">Search</button>
					</form>
				</div>
				<div className="row">
					<form class="d-flex" role="search">
						<button class="btn btn-outline-primary" type="submit">Iniciar Sesion</button>
						<button class="btn btn-outline-primary" type="submit">Registrate</button>
					</form>
				</div>
			</div>
		</nav>
	);
};
