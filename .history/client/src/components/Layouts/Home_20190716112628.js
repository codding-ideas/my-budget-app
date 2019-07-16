import React from 'react'
import {Link } from 'react-router-dom';

const Home = () => {
 return (
  <section className="landing">
<div className="dark-overlay">
  <div className="landing-inner">
    <h1 className="x-large">Track your Income and Expenses</h1>
    <p className="lead">
      Manage your resouces in your own dashbaord by creating an account with us
    </p>
    <div className="buttons">
      <Link to="/register" className="btn btn-danger">Sign Up</Link>
      <Link to="/login" className="btn btn-success">Login</Link>
    </div>
  </div>
</div>
</section>
)
}

export default Home
