import React from 'react';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import { Navbar,Container,Nav,NavDropdown,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from ".././auth/Login";
import Register from ".././auth/Register";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Choice = () => {
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
            <Link className="authA" to ="/login" element={ <Login />}>Tạo tài khoản</Link>
            <Link className="authB" to ="/register" element={ <Register/>}>Đăng nhập</Link>
            </div>
            </div>
        </div>
        </div>
        <div className="nav_bar">
        <Navbar bg="light" expand="lg">
        <Container >
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
        <Nav.Link href="" className="text-dark">Transports</Nav.Link>
        <Nav.Link href="" className="text-dark">Accommodations</Nav.Link>
        <NavDropdown title="Things to do" id="basic-nav-dropdown" >
          <NavDropdown.Item href=""className="text-dark ">Xperience</NavDropdown.Item>
          <NavDropdown.Item href="/restaurant"className="text-dark">Eats</NavDropdown.Item>
          <NavDropdown.Item href=""className="text-dark">Healthcare</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href=""className="text-dark">Bills & Top-ups</Nav.Link>
        <Nav.Link href=""className="text-dark">Travel Add-ons</Nav.Link>
      </Nav>
    </Navbar.Collapse>
     </Container>
    </Navbar>
        </div>
        </section>
        <section className="main_container">
            <div className="search_res">
                <div className="container w-75 shadow-lg px-4 mt-4">
                    <div className="row">
                        <div className="col-4 mt-3">
                        <p>Location</p>
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLocationDot} /></span>
                            <input type="text" class="form-control shadow-none border-dark" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        </div>
                        <div className="col-8 mt-3">
                        <p>Cuisine, dish, or Restaurant name</p>  
                        <div class="input-group mb-3">
                            <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
                            <input type="text" class="form-control shadow-none border-dark" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                        </div>
                        </div>
                    </div>
                    <div className="btn_search  d-flex justify-content-end">
                        <button type="button" class="btn btn-warning btn-md my-1 "><FontAwesomeIcon icon={faSearch} className="me-2" />Search</button>
                    </div>    
                </div>
            </div>
            <div className="bread_crum mt-4">
                <div className="container w-75 ">
                    <p>Eats/ A Place/ Asian</p>
                    <p className="fs-3">Asian Food Around A Place</p>
                </div>

            </div>
            <div className="select_res mt-4">
            <div className="container w-75  ">
                <div className="d-flex justify-content-between">
                    <div className="w-25 border border-dark me-5">
                        alksdjaklsd
                    </div>
                    <div className="w-75 border border-danger">
                        aslkdjaskld
                    </div>
                </div>
            </div>
            </div>
           
        </section>
        </>
    );
}

export default Choice;
