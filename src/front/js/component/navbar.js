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
						<h4 class="nav-link active text-light" aria-current="page" href="#">Q'UEVANA</h4>
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
					<form class="d-flex">
						<input class="form-control me-2 dropstart" type="search" placeholder="Search" aria-label="Search"/>
						<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
							Login
						</button>
						<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
						<div class="modal-dialog">
							<div class="modal-content">
							<div class="modal-header">
								<h5 class="modal-title" id="exampleModalLabel">LOGO</h5>
								<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
							</div>
							<div class="modal-body">
							<form class="px-4 py-3">
								<div class="mb-3">
									<label for="exampleDropdownFormEmail1" class="form-label">Email address</label>
									<input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
								</div>
								<div class="mb-3">
									<label for="exampleDropdownFormPassword1" class="form-label">Password</label>
									<input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
								</div>
								<div class="mb-3">
									<div class="form-check">
										<input type="checkbox" class="form-check-input" id="dropdownCheck"/>
										<label class="form-check-label" for="dropdownCheck">
											Remember me
										</label>
									</div>
								</div>
								<button type="submit" class="btn btn-primary">Sign in</button>
							</form>
							<div class="dropdown-divider"></div>
							<a class="dropdown-item" href="#">New around here? Sign up</a>
							<a class="dropdown-item" href="#">Forgot password?</a>
							</div>
							<div class="modal-footer">
								<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
								<button type="button" class="btn btn-primary">Save changes</button>
							</div>
							</div>
						</div>
						</div>
					</form>
				</div>
			</div>
		</nav>
	);
};