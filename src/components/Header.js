import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from "././auth/Login";
import Register from "./auth/Register";

const Header = () => {
  const findGetParameter = (parameterName) => {
    let result = null;
    let tmp = [];
    let items = window.location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
      tmp = items[index].split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
  };
  return (
    <section className="header">  
        <div className="container">
        <div className="row">
            <div className="d-flex justify-content-between  ">
            <div className="logo_img ">
                <img src="/assets/img/logo.png" alt="logo" />
            </div>
            <div className="auth ">
            <Link className="authA" to ="/login" element={ <Register/>}>Tạo tài khoản</Link>
            <a className="authB" href ="https://profile.vinhphancommunity.xyz/Login?redirect=http://localhost:3000/" >Đăng nhập</a>
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
        <Nav.Link href="" className="text-dark">Vận chuyển</Nav.Link>
        <Nav.Link href="" className="text-dark">Chỗ ở</Nav.Link>
        <NavDropdown title="Hoạt động và giải trí" id="basic-nav-dropdown" >
        <NavDropdown.Item href="/restaurant"className="text-dark">Ăn uống</NavDropdown.Item>
        <NavDropdown.Item href=""className="text-dark">Chăm sóc sức khỏe</NavDropdown.Item>
        <NavDropdown.Item href=""className="text-dark">Trải nghiệm</NavDropdown.Item>
        </NavDropdown>
        <NavDropdown title="Gift Voucher" id="basic-nav-dropdown" >
        <NavDropdown.Item href=""className="text-dark">Điểm thưởng của tôi</NavDropdown.Item>
        <NavDropdown.Item href=""className="text-dark">Phiếu quà tặng</NavDropdown.Item>
        </NavDropdown>
    </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
        </div>
</section> 
  );
};

export default Header;
