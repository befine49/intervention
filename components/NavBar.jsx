import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import Styles from './NavBar.module.css';
const Navbar = ({ role }) => {
  return (
    <header className='container'>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"><span ><img src={logo} alt="" className={Styles}/></span>Intervention</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">  
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Accueill</a>
                </li>
                {(role === 'client')&&
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Services
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Créer une demande</a></li>
                            <li><a class="dropdown-item" href="#">Mes demandes</a></li>
                            <li><a class="dropdown-item" href="#">Historique</a></li>
                        </ul>
                    </li>
                }
                
                <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Profile
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </li>
                
                
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            
            <a class="btn btn-outline-danger mx-2" href="#">Lougout</a>
            
            </div>
        </div>
    </nav>
    </header>
  );
};

export default Navbar;
