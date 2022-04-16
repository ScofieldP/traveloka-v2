import {React, useState, useEffect} from 'react';

import { Navbar,Container,Nav,NavDropdown,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from ".././auth/Login";
import Register from ".././auth/Register";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import ReactPaginate from 'react-paginate';

function Choice () {
    //fake DB
  const [foods, setFoods] = useState([
      {
        id:1,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-13.png",
        
      },
      {
        id:2,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-14.png",
      },
      {
        id:3,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-14.png",
      },
      {
        id:4,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-13.png",
      },
      {
        id:5,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-14.png",
      },
      {
        id:6,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-13.png",
      },
      {
        id:7,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-14.png",
      },
      {
        id:8,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-13.png",
      },
      {
        id:9,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-14.png",
      },
      {
        id:10,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-14.png",
      },
      {
        id:11,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-14.png",
      },
      {
        id:12,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-14.png",
      },
      {
        id:13,
        title: 'Order, Reservation',
        foodTitle:'Fried Chicken',
        street: ' District 1, Ho Chi Minh City',
        open:'Opening Hours: Today * 09.00 ~ 22.00',
        price: 'Price Range: $ 500VND/person',
        img:"./assets/img/food-14.png",
      },
  ]);
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 3; //set số lượng item
  const pageVisited = pageNumber * usersPerPage;
  const displayUsers = foods
  .slice(pageVisited, pageVisited + usersPerPage)
  .map((food) =>{
    return(
    <>
    <div className="row border border-dark mt-3">
                        <div className="col-4 ps-0">
                        <img src={food.img} alt="" style={{width:'200px', height:'200px'}}/>
                        </div>
                        <div className="col-6">
                            <p className="mt-3 mb-0">
                                {food.title}
                            </p>
                            <p className="fw-bold fs-3 m-0">
                                {food.foodTitle}
                            </p>
                            <p className="fs-6">
                                {food.price}  
                            </p>
                            <p className="m-0">
                                {food.open}
                            </p>
                        </div>
                        
                    </div>
          </>
    );
  });
  const pageCount = Math.ceil(foods.length / usersPerPage);
  const changePage = ({selected}) =>{
      setPageNumber(selected);
  };

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
            <div className="row">
                <div className ="col-2 border border-dark " style={{height:"100px"}}>
                    aksdjhaklsjdlaksd
              </div>

              <div className="col-8 ms-5">
              <div className="Choice">
                  {displayUsers}
                  <ReactPaginate
                  previousLabel={"Previous"}
                  nextLabel={"Next"}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  preLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}

                  />
                  </div>

{/*               
               <div className="row border border-dark ">
                        <div className="col-4 ps-0">
                            <img src ="./assets/img/food-14.png" className="m-0" alt="" style={{width:"200px" , height:"200px"}}/>
                        </div>
                        <div className="col-6">
                            <p className="mt-3 mb-0">
                                Order, Reservation
                            </p>
                            <p className="fw-bold fs-3 m-0">
                                Fried Chicken - No.1
                            </p>
                            <p className="fs-6">
                               District 1, Ho Chi Minh City  
                            </p>
                            <p className="m-0">
                                Opening Hours: Today * 09.00 ~ 22.00
                            </p>
                             <p className="m-0">Price Range: $ 500VND/person </p>
                        </div>
                        
                    </div>
                    
                    <div className="row mt-3 border border-dark">
                        <div className="col-4 ps-0">
                            <img src ="./assets/img/food-14.png" alt="" style={{width:"200px" , height:"200px"}}/>
                        </div>
                        <div className="col-6">
                            <p className="mt-3 mb-0">
                                Order, Reservation
                            </p>
                            <p className="fw-bold fs-3 m-0">
                                Fried Chicken - No.1
                            </p>
                            <p className="fs-6">
                               District 1, Ho Chi Minh City  
                            </p>
                            <p className="m-0">
                                Opening Hours: Today * 09.00 ~ 22.00
                            </p>
                             <p className="m-0">Price Range: $ 500VND/person </p>
                        </div>
                    </div>
                    <div className="row mt-3 border border-dark">
                        <div className="col-4 ps-0">
                            <img src ="./assets/img/food-14.png" alt="" style={{width:"200px" , height:"200px"}}/>
                        </div>
                        <div className="col-6">
                            <p className="mt-3 mb-0">
                                Order, Reservation
                            </p>
                            <p className="fw-bold fs-3 m-0">
                                Fried Chicken - No.1
                            </p>
                            <p className="fs-6">
                              District 1, Ho Chi Minh City  
                           </p>
                            <p className="m-0">
                                Opening Hours: Today * 09.00 ~ 22.00
                            </p>
                             <p className="m-0">Price Range: $ 500VND/person </p>
                            
                        </div>
                    </div>
                     <div className="row mt-3 border border-dark">
                        <div className="col-4 ps-0">
                            <img src ="./assets/img/food-14.png" alt="" style={{width:"200px" , height:"200px"}}/>
                        </div>
                        <div className="col-6">
                            <p className="mt-3 mb-0">
                                Order, Reservation
                            </p>
                            <p className="fw-bold fs-3 m-0">
                                Fried Chicken - No.1
                            </p>
                            <p className="fs-6">
                              District 1, Ho Chi Minh City  
                           </p>
                            <p className="m-0">
                                Opening Hours: Today * 09.00 ~ 22.00
                            </p>
                             <p className="m-0">Price Range: $ 500VND/person </p>
                            qwkejlkwqjepwq
                        </div>
                    </div> */}
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

export default Choice;
