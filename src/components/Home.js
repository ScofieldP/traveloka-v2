import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Container, Nav, NavDropdown, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
export default class Home extends Component {
  render() {
    return (
      <>
        <section className="header">
          <div class="container">
            <div class="row mt-2 ">
              <div className="d-flex justify-content-between  ">
                <div className="logo_img ">
                  <img src="/assets/img/logo.png" alt="logo" />
                </div>
                <div className="auth ">
                  <Link className="authA" to="/login" element={<Login />}>
                    Tạo tài khoản
                  </Link>
                  <Link className="authB" to="/register" element={<Register />}>
                    Đăng nhập
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="nav_bar">
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link href="" className="text-dark">
                      Transports
                    </Nav.Link>
                    <Nav.Link href="" className="text-dark">
                      Accommodations
                    </Nav.Link>
                    <NavDropdown title="Things to do" id="basic-nav-dropdown">
                      <NavDropdown.Item href="" className="text-dark ">
                        Xperience
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="/restaurant"
                        className="text-dark"
                      >
                        Eats
                      </NavDropdown.Item>
                      <NavDropdown.Item href="" className="text-dark">
                        Healthcare
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="" className="text-dark">
                      Bills & Top-ups
                    </Nav.Link>
                    <Nav.Link href="" className="text-dark">
                      Travel Add-ons
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </div>
        </section>
        <section className="main_menu">
          <div className="container">
            <div className="row">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block caro_img"
                    src="/assets/img/res-1.jpg"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block caro_img"
                    src="/assets/img/res-2.jpg"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block caro_img"
                    src="/assets/img/res-3.jpg"
                    alt=""
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>
        <section className="footer mt-5">
          <footer class="bg-dark text-center text-white">
            <div class="container p-4">
              <section class="mb-4">
                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-twitter"></i>
                </a>

                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-google"></i>
                </a>

                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-instagram"></i>
                </a>

                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-linkedin-in"></i>
                </a>

                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                >
                  <i class="fab fa-github"></i>
                </a>
              </section>

              <section class="">
                <form action="">
                  <div class="row d-flex justify-content-center">
                    <div class="col-auto">
                      <p class="pt-2">
                        <strong>Sign up for our newsletter</strong>
                      </p>
                    </div>

                    <div class="col-md-5 col-12">
                      <div class="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="form5Example21"
                          class="form-control"
                        />
                        <label class="form-label" for="form5Example21">
                          Email address
                        </label>
                      </div>
                    </div>

                    <div class="col-auto">
                      <button type="submit" class="btn btn-outline-light mb-4">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </form>
              </section>

              <section class="mb-4">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                  distinctio earum repellat quaerat voluptatibus placeat nam,
                  commodi optio pariatur est quia magnam eum harum corrupti
                  dicta, aliquam sequi voluptate quas.
                </p>
              </section>

              <section class="">
                <div class="row">
                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">About us</h5>

                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 3
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 4
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Product</h5>

                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 3
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 4
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Others</h5>

                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 3
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 4
                        </a>
                      </li>
                    </ul>
                  </div>

                  <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
                    <h5 class="text-uppercase">Payment Partners</h5>

                    <ul class="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">
                          Link 1
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 2
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 3
                        </a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">
                          Link 4
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
            </div>
          </footer>
        </section>
        npm
      </>
    );
  }
}
