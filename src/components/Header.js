import React, { useEffect, useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import Register from "./auth/Register";
import { findGetParameter } from "../js/gettoken";
import authApi from "../apis/authapi";

const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      const response = await authApi.getUser(findGetParameter("token"));
      localStorage.setItem("user", JSON.stringify(response.data.data));
      setUser(response.data.data);
    };
    getUser();
  }, []);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      let data = JSON.parse(localStorage.getItem("user"));
      setUser(data);
    }
  }, []);

  const logout = () => {
    localStorage.clear();
    window.history.replaceState({}, document.title, "/");

    window.location.reload();
  };

  return (
    <section className="header">
      <div className="container">
        <div className="row">
          <div className="d-flex justify-content-between  ">
            <div className="logo_img ">
              <img src="/assets/img/logo.png" alt="logo" />
            </div>
            {user ? (
              <>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title={"Xin chào " + user.name}
                >
                  <NavDropdown.Item href="/">Trang chủ</NavDropdown.Item>
                  <NavDropdown.Item href="/restaurant">
                    Đặt nhà hàng
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="https://profile.vinhphancommunity.xyz/profile/view"
                    target="_blank"
                  >
                    Lịch sử giao dịch
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout} href="/">
                    Đăng Xuất
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            ) : (
              <>
                <div className="auth ">
                  <Link className="authA" to="/login" element={<Register />}>
                    Tạo tài khoản
                  </Link>
                  <a
                    className="authB"
                    href="https://profile.vinhphancommunity.xyz/Login?redirect=http://localhost:3000/restaurant"
                  >
                    Đăng nhập
                  </a>
                </div>
              </>
            )}
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
                  Vận chuyển
                </Nav.Link>
                <Nav.Link href="" className="text-dark">
                  Chỗ ở
                </Nav.Link>
                <NavDropdown
                  title="Hoạt động và giải trí"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/restaurant" className="text-dark">
                    Ăn uống
                  </NavDropdown.Item>
                  <NavDropdown.Item href="" className="text-dark">
                    Chăm sóc sức khỏe
                  </NavDropdown.Item>
                  <NavDropdown.Item href="" className="text-dark">
                    Trải nghiệm
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Gift Voucher" id="basic-nav-dropdown">
                  <NavDropdown.Item href="" className="text-dark">
                    Điểm thưởng của tôi
                  </NavDropdown.Item>
                  <NavDropdown.Item href="" className="text-dark">
                    Phiếu quà tặng
                  </NavDropdown.Item>
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
