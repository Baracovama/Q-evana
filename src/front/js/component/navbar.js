import React from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (
		<nav class="navbar navbar-expand-lg navbar-light">
			<div class="container-fluid">
				<a class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
				</a>
				<div class="collapse navbar-collapse" id="navbarTogglerDemo01">
					<a class="navbar-brand" href="#"></a>
					<ul class="navbar-nav me-auto mb-2 mb-lg-0">
						<li class="nav-item">
						<a class="nav-link active text-light" aria-current="page" href="/">Q'UEVANA</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle text-light" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Category 
							</a>
							<ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
								<li><a class="dropdown-item" href="#">Action</a></li>
								<li><a class="dropdown-item" href="#">Romance</a></li>
								<li><a class="dropdown-item" href="#">Thriller</a></li>
								<li><a class="dropdown-item" href="#">Science Fiction</a></li>
							</ul>
						</li>
					</ul>
					<form class="d-flex" role="search">
						<input class="form-control me-2 dropstart" type="search" placeholder="Search" aria-label="Search"/>
						<Link to="/Login">
							<button to="/Loguin" class="btn btn-primary" type="submit"> Login</button>
						</Link>
					</form>
				</div>
			</div>
		</nav>
	);
};