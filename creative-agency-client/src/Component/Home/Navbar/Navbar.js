import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';

const Navbar = () => {
  return (
    <nav class=" container navbar navbar-expand-lg navbar-light ">
      <a class="navbar-brand" href="/">
        <img style={{height: '47px'}} src={logo} alt=""/>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link className="nav-link mr-4 mt-2 text-dark" to="/"><small>Home</small></Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link mr-4 mt-2 text-dark" to="/"><small>Our Portfolio</small></Link>
          </li>
          <li class="nav-item">
          <Link className="nav-link mr-4 mt-2 text-dark" to="/"><small>Our Team</small></Link>
          </li>
          <li class="nav-item" >
            <a ><Link  className="nav-link mr-4 mt-2 text-dark" to="/"><small>Contact Us</small></Link></a>
          </li>
          <li class="nav-item">
          <Link className="nav-link mr-5" to="/login">
            <button className="btn btn-dark text-white pr-4 pl-4"> Login</button>
          </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;