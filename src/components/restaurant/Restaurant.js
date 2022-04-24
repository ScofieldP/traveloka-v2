import React from 'react'
import { Navbar,Container,Nav,NavDropdown,Carousel, Input } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from "../auth/Login";
import Register from "../auth/Register";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export default function Restaurant() {
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
        <Nav.Link href="#home" className="text-dark">Transports</Nav.Link>
        <Nav.Link href="#link" className="text-dark">Accommodations</Nav.Link>
        <NavDropdown title="Things to do" id="basic-nav-dropdown" >
          <NavDropdown.Item href="#action/3.1"className="text-dark ">Xperience</NavDropdown.Item>
          <NavDropdown.Item href="/restaurant"className="text-dark">Eats</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"className="text-dark">Healthcare</NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#link"className="text-dark">Bills & Top-ups</Nav.Link>
        <Nav.Link href="#link"className="text-dark">Travel Add-ons</Nav.Link>
      </Nav>
    </Navbar.Collapse>
     </Container>
    </Navbar>
        </div>
        </section>
      <section className="main_menu">
        <div className="back_img ">
          <img src="/assets/img/background.png" alt="logo" />
        </div>
        <div className="search_bar">
            <div className="container w-75 shadow-lg px-4 bg-white">
              <div className="row mt-3 py-4">
                <p className="fs-1">Discover the amazing cuisine</p>
                <div className="col-4 mt-1">
                  <p>Location</p>
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faLocationDot} /></span>
                    <input type="text" class="form-control shadow-none border-dark" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                </div>   
                <div className="col-8 mt-1">
                  <p>Cuisine, dish, or Restaurant name</p>  
                  <div class="input-group mb-3">
                    <span class="input-group-text" id="basic-addon1"><FontAwesomeIcon icon={faSearch} /></span>
                    <input type="text" class="form-control shadow-none border-dark" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
                  </div>
                </div>
              </div> 
              <div className="btn_search  d-flex justify-content-end">
                <button type="button" class="btn btn-warning btn-md my-4 "><FontAwesomeIcon icon={faSearch} className="me-2" />Search</button>
              </div>              
            </div>
        </div>
        <div className="about_area">
        <div className="container">
            <div className="row">
            <div className="col-xl-7 col-lg-7">
                    <div className="about_thumb d-flex">
                        <div className="img_1">
                            <img src="assets/img/food-1.png" alt="" style={{width: '294px', height: '400px',}}/>
                        </div>
                        <div className="img_2">
                        <img src="assets/img/food-2.png" alt="" style={{width: '294px', height: '400px',}}/>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5">
                    <div className="about_info">
                        <div className="section_title ">
                            <span className="mb-3" >Delicious Food</span>
                            <h3 className="mt-3 fs-2">Our customer's satisfaction is our proud and our goal.</h3>
                        </div>
                        <p className="mt-3">
                          Suscipit libero pretium nullam potenti. Interdum, blandit phasellus consectetuer dolor ornare dapibus enim ut tincidunt rhoncus tellus sollicitudin pede nam maecenas, dolor sem. Neque sollicitudin enim. Dapibus lorem feugiat facilisi faucibus et. Rhoncus.
                        </p>
                        <a href="/" className="line-button">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="popular_food">
          <div className="container w-75">
            <div className="row ">
              <p className="text-center fs-3 fw-bold">
                Food in Vietnamese
              </p>
              <div className="col-6">
                <p className="fs-4 fw-bold">Popular Cuisines</p>
                <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                <div class="col">
                  <img src="/assets/img/food-3.png" alt="logo" style ={{width: '160px', height: '120px'}} />
                  <p className="fw-bold">Drinks </p>
                </div>
                <div class="col">
                <img src="/assets/img/food-4.png" alt="logo" />
                <p className="fw-bold">Vietnamese</p>
                </div>
                <div class="col">
                <img src="/assets/img/food-5.png" alt="logo" />
                <p className="fw-bold">Coffee & Tea</p>
                </div>
                <div class="col">
                <img src="/assets/img/food-7.png" alt="logo" />
                <p className="fw-bold">Western</p>
                </div>
                <div class="col">
                <img src="/assets/img/food-8.png" alt="logo" />
                <p className="fw-bold">Asian</p>
                </div>
                <div class="col">
                <img src="/assets/img/food-6.png" alt="logo" />
                <p className="fw-bold">Desert</p>
                </div>
                </div>
              </div>
              <div className="col-6">
                <p className="fs-4 fw-bold">Popular Dishes</p>
                <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                <div class="col">
                <img src="/assets/img/food-9.png" alt="logo" style ={{width: '160px', height: '120px'}} />
                <p className="fw-bold">Fried Chicken</p>
                </div>
                <div class="col">
                <img src="/assets/img/food-10.png" alt="logo" style ={{width: '160px', height: '120px'}} />
                <p className="fw-bold">Noodles</p>
                </div>
                <div class="col">
                <img src="/assets/img/food-11.png" alt="logo" style ={{width: '160px', height: '120px'}}/>
                <p className="fw-bold">Fried Rice</p>
                </div>
                <div class="col">
                <img src="/assets/img/food-12.png" alt="logo" style ={{width: '160px', height: '120px'}} />
                <p className="fw-bold">Beverages</p>
                </div>
                <div class="col">
                <img src="/assets/img/food-13.png" alt="logo" style ={{width: '160px', height: '120px'}} />
                <p className="fw-bold">Cakes</p>
                </div>
                <div class="col">
                <img src="/assets/img/food-5.png" alt="logo" />
                <p className="fw-bold">Coffee</p>

                </div>
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
  )
}
