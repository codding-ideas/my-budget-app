import React, { Component } from 'react';
import '../../themes/homeTheme/css/scrolling-nav.css'
import '../../themes/homeTheme/bootstrap/css/bootstrap.min.css';
import { Link } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
          <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href='/'>Coding - ideas</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">


              <li className="nav-item">
                      <Link to='/' className='red btn-flat white-text nav-link js-scroll-trigger' >
                          Home
                      </Link>
              </li>
      
                
        

              <li className="nav-item">
                      <Link to='/register' className='red btn-flat white-text nav-link js-scroll-trigger' >
                          Register
                      </Link>
              </li>


              <li className="nav-item">
                      <Link to='/addexpenses' className='red btn-flat white-text nav-link js-scroll-trigger' >
                          Add Expenses
                      </Link>
              </li>
              <li className="nav-item">
                      <Link to='/expenses' className='red btn-flat white-text nav-link js-scroll-trigger' >
                          All Expenses
                      </Link>
                </li>
                <li className="nav-item">
                      <Link to='/users' className='red btn-flat white-text nav-link js-scroll-trigger' >
                          Customers
                      </Link>
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