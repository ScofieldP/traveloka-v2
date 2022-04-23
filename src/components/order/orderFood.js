import {React, useState, useEffect} from 'react';
import { Navbar,Container,Nav,NavDropdown,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from ".././auth/Login";
import Register from ".././auth/Register";

function ButtonIncrement(props) {
  
  return (
    <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
    +
    </button>
  )
}


function ButtonDecrement(props) {
  
  return (
    <button style={{ marginLeft: '.5rem'}} onClick={props.onClickFunc}>
    -
    </button>
  )
}


function Display(props) {
  return (
    <label style={{ marginLeft: '.5rem'}} >{props.message}</label>
  )
}

const OrderFood = () => {
  const [counter, setCounter] = useState(1);
  const incrementCounter = () => setCounter(counter + 1);
  let decrementCounter = () => setCounter(counter - 1);
  if(counter<=1) {
    decrementCounter = () => setCounter(1);
  }

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
        
        <section class="section section-lg bg-gray-1">
        <div> 
        <ButtonDecrement onClickFunc={decrementCounter}/>
      <Display message={counter}/> 
     
      <ButtonIncrement onClickFunc={incrementCounter}/>
    </div>
      </section>
        </>
    );
}

export default OrderFood;
