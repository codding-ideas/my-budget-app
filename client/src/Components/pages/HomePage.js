import React, { Component } from "react";
import { Link } from 'react-router-dom'
import '../../themes/startBoot/vendor/bootstrap/css/bootstrap.min.css'
import '../../themes/startBoot/vendor/fontawesome-free/css/all.css'
import '../../themes/startBoot/css/agency.css';


class HomePage extends Component {
  render() {
    return (
      <div>
  <header className="masthead">
    <div className="container">
      <div className="intro-text">
        <div className="intro-lead-in">Plan -> Design -> Develop</div>
        <div className="intro-heading text-uppercase">Coding ideas</div>
        <Link to = {'/register'} className="btn btn-danger btn-xl text-uppercase js-scroll-trigger" >Register</Link>
      </div>
    </div>
  </header>


  <section className="page-section" id="services">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 text-center">
          <h2 className="section-heading text-uppercase">Services</h2>
          <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">E-Commerce</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Responsive Design</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
        <div className="col-md-4">
          <span className="fa-stack fa-4x">
            <i className="fas fa-circle fa-stack-2x text-primary"></i>
            <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
          </span>
          <h4 className="service-heading">Web Security</h4>
          <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
        </div>
      </div>
    </div>
  </section>

        <section>
          
        </section>
  
      </div>
    );
  }
}

export default HomePage;
