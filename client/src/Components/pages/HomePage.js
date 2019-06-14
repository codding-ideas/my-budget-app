import React, { Component } from "react";


class HomePage extends Component {
  render() {
    return (
      <div>
        <header className="bg-primary text-white">
          <div className="container text-center">
            <h1>Welcome to Coding-Ideas </h1>
            <p className="lead">We devlop with you in mind</p>
          </div>
        </header>

        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>App Update 2</h2>
                <p className="lead">Below list what d has been done on the app</p>
                <ul>
                  <li>Created two API's</li>
                  <li>Installing client side app</li>
                  <li>
                    Setting up proxy for client to communicate with the sever
                  </li>
                  <li>Running both client side and sever side concurrently </li>
                  <li>Installing bootstrap theme</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-light">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Services we offer</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut
                  optio velit inventore, expedita quo laboriosam possimus ea
                  consequatur vitae, doloribus consequuntur ex. Nemo assumenda
                  laborum vel, labore ut velit dignissimos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2>Contact us</h2>
                <p className="lead">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero
                  odio fugiat voluptatem dolor, provident officiis, id iusto!
                  Obcaecati incidunt, qui nihil beatae magnam et repudiandae
                  ipsa exercitationem, in, quo totam.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">
              Copyright &copy; Coding Ideas 2019
            </p>
          </div>
        </footer>
      </div>
    );
  }
}

export default HomePage;
