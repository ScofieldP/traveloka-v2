import {React, useState, useEffect} from 'react';
import { Navbar,Container,Nav,NavDropdown,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from ".././auth/Login";
import Register from ".././auth/Register";
import OrderFood from '../order/orderFood';
import OrderTable from '../order/orderTable';

import {Tabs,Tab} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import ShowMoreText from "react-show-more-text";



function ReadMore({children =0}){
    const text = children; 
    const [isShow, setIsShowLess] = useState(true)
    const result = isShow ? text.slice(0,0) :text;
    function toggleIsShow(){
        setIsShowLess((!isShow));
    }
    return (
        <p>
        {result}
        <span className="btn btn-show btn-link p-0 text-decoration-none" onClick={toggleIsShow}>{isShow ? "SHOW MORE" : "SHOW LESS"}</span>
        </p>
    )
}
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
              <div className='container w-75'>
              <p>Eats / Jakarta / Jakarta Barat / Taman Sari / Mangga Besar / Mangga Besar / 312 HokBen - Lokasari (Delivery)</p>
              </div>
            </div>

            <div className='container w-75'>
                <div className="row">
                    <div className="col-7">
                        <div className="res_title border-0 border-bottom border-secondary pb-1 ">
                            <p className="m-0 fw-bold fs-3">KFC</p>
                            <p>Delivery, Reservation</p>
                            
                        </div>
                        <div className="res_img pt-3 border-0 border-bottom border-secondary pb-3 ">
                            <img src="/assets/img/food-14.png" alt="" style={{width:"645px" , height:"400px"}}/>
                        </div>
                        <div className="res_collection border-0 border-bottom border-secondary pb-3">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="All">
                                All
                            </Tab>
                        <Tab eventKey="profile" title="Review">
                                Review  
                        </Tab>
                        <Tab eventKey="contact" title="Photos" >
                                Photos
                        </Tab>
                        </Tabs>
                        </div>

                        <div className="">
                            lksajdkalsjdlkasd   
                        </div>
                    </div>
                    <div className="col-4 border border-secondary ms-5">
                        <h3 className="mb-3">Restaurant Details</h3>
                        <p className="fs-5 m-0 fw-bold"><FontAwesomeIcon icon={faClock} className ="me-3" />Opening Hours</p>
                        <div className="datetime">
                            <span>Tody</span>
                            <span>•</span>
                            <span>Open Now</span>
                        </div>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        <ReadMore>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        </ReadMore>

                        <div className="categories_res">
                          <div className="cate_a">
                            <p className="fs-5 m-0 fw-bold">Dishes & Cuisines</p>
                            <ul class="list-unstyled ul_cate ">
                            <li>Fried Chicken</li>
                            <li>Asian</li>
                            <li>Takoyaki</li>
                            <li>Yakiniku</li>
                            <li>Teriyaki</li>
                            </ul>
                          </div>
                          <div className="cate_b">
                            <p className="fs-5 m-0 fw-bold">Dietary Restrictions</p>
                            <span className="m-0 sp_noinfo">Info not available</span>
                          </div>
                        </div>

                          <div className="price_range">
                            <p className="fs-5 m-0 fw-bold">Price Range</p>
                            <FontAwesomeIcon icon={faDollarSign} />
                            <FontAwesomeIcon icon={faDollarSign}  /> 
                            <span className ="mx-2 ">•</span>
                            <span className="sp_noinfo">500.000VND</span>
                          </div>

                          <div className ="phone_number mt-3">
                            <p className="fs-5 fw-bold m-0"><FontAwesomeIcon icon={faPhoneFlip} className ="me-3" />Phone Number</p>
                            <span className="m-0 sp_noinfo">Info not available</span>
                          </div>

                          <div className="address mt-3">
                            <p className="fs-5 m-0 fw-bold"><FontAwesomeIcon icon={faLocationDot} className ="me-3" />Address</p>
                            <span className="m-0 sp_noinfo">TP.HCM</span>
                          </div>

                          <div className="other mt-3">
                            <p className="fs-5 m-0 fw-bold">Other Facilities</p>
                            <span className="m-0 sp_noinfo">Take away</span>
                          </div>


                          <div className="btn_order d-flex mt-3">
                            <div className="order_food">
                              <button type="button" class="btn btn-warning me-3">
                                <Link className="text-decoration-none text-black" to ="/orderFood" element={ <OrderFood />}>Đặt Online</Link>
                              </button>

                            </div>
                            <div className="order_table pb-5  ">
                              <button type="button" class="btn btn-info ">
                              <Link className="text-decoration-none text-black" to ="/orderTable" element={ <OrderTable />}>Đặt bàn</Link>
                              </button>

                            </div>
                          </div>
                    </div>

                    
                </div>
            </div>
        </section>



        <section className="footer mt-5">    
        <footer class="bg-dark text-center text-white"> 
          <div class="container p-4">
            <section class="mb-4">
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-facebook-f"></i></a>
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i class="fab fa-twitter"></i></a>

     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-google"></i
      ></a>

     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-instagram"></i
      ></a>

     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-linkedin-in"></i
      ></a>

     
      <a class="btn btn-outline-light btn-floating m-1" href="#!" role="button"
        ><i class="fab fa-github"></i
      ></a>
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
              <input type="email" id="form5Example21" class="form-control" />
              <label class="form-label" for="form5Example21">Email address</label>
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
        eum harum corrupti dicta, aliquam sequi voluptate quas.
      </p>
    </section>
  
   
    <section class="">
      
      <div class="row">
    
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">About us</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>
       
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Product</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>
       
        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Others</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
          <h5 class="text-uppercase">Payment Partners</h5>

          <ul class="list-unstyled mb-0">
            <li>
              <a href="#!" class="text-white">Link 1</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 2</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 3</a>
            </li>
            <li>
              <a href="#!" class="text-white">Link 4</a>
            </li>
          </ul>
        </div>
      
      </div>
    
    </section>
    
  </div>
</footer>
      </section>
        </>
    );
}

export default Detailres;
