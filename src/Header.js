import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-warning">
        <div class="container-fluid">

          <a class="navbar-brand fs-3 ms-5" href="/">
            <img src='https://th.bing.com/th/id/OIP.TShS4NDe1ZZF8lWmfww1IwHaE8?w=272&h=181&c=7&r=0&o=5&dpr=1.3&pid=1.7'></img>
            SMART WATCH</a>
          
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span></button>
         
          <div class="navbar-collapse collapse show" id="navbarNav" >
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about">About US</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#product">Review</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  PAGES
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#about">About Us</a></li>
                  <li><a class="dropdown-item" href="#contact">Contact US</a></li>
                  <li><a class="dropdown-item" href="#product">Review</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>

      </div>
    </div>

  )
}

export default Header
