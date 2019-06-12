import React, { Component } from 'react';
import '../../css/scrolling-nav.css';
import '../../homeTheme/bootstrap/css/bootstrap.min.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div class="container">
              <a class="navbar-brand js-scroll-trigger" href='/'>Codhing-Ideas v</a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav ml-auto">


               
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="/api/expenses">Expenses API</a>
                  </li>
                  
                  <li class="nav-item">
                    <a class="nav-link js-scroll-trigger" href="/api/users">Users API</a>
                  </li>
       
                </ul>
              </div>
            </div>
          </nav>
        </div>
        );
    }
}

export default Navbar;