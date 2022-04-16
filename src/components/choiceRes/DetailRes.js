import {React, useState, useEffect} from 'react';

import { Navbar,Container,Nav,NavDropdown,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from ".././auth/Login";
import Register from ".././auth/Register";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const Detailres = () => {
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
            <div className="bread_crum">

            </div>

            <div className='container w-75'>
                <div className="row">
                    <div className="col-7 border border-dark">
                        <div className="res_title border-0 border-bottom border-danger pb-1 ">
                            <p className="m-0 fw-bold fs-3">KFC</p>
                            <p>Delivery, Reservation</p>
                            
                        </div>
                        <div className="res_img pt-4 border-0 border-bottom border-danger pb-5 ">
                            <img src="/assets/img/food-14.png" alt="" style={{width:"645px" , height:"400px"}}/>
                        </div>
                        <div className="res_collection border-0 border-bottom border-danger pb-3">
                            <div className="d-inline res_all active">All</div>
                            <div className="d-inline res_menu">Menu</div>
                            <div className="d-inline res_photos">Photos</div>
                        </div>

                        <div className="">
                            lksajdkalsjdlkasd   
                        </div>
                    </div>
                    <div className="col-3 border border-danger">
                        alksdjlaksjdklasjp
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default Detailres;
