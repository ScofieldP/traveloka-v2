import {React, useState, useEffect} from 'react';
import { Navbar,Container,Nav,NavDropdown,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from ".././auth/Login";
import Register from ".././auth/Register";
import {TabContainer,Row, Col, Tab} from 'react-bootstrap'
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const OrderTable = () => {
    const [startDate, setStartDate] = useState(new Date());
    let handleColor = (time) => {
        return time.getHours() > 12 ? "text-success" : "text-error";
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

        <section className="main_table">
            <div className="container w-75 border border-dark">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
                <Col sm={3}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Đặt bàn </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Đặt món trước</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Chi tiết hóa đơn</Nav.Link>
                    </Nav.Item>
                </Nav>
                </Col>
                <Col sm={9}>
                <Tab.Content>
                    <Tab.Pane eventKey="first">
                        <div className="container border border-dark">
                            <div className="order_title border-0 border-bottom border-dark"> 
                                <h4 className="text-center">Thêm đặt bàn</h4>
                            </div>
                            <div className="form_tbl d-flex">
                                <div className="col-6  border border-danger">
                                    {/* Thời gian nhận bàn */}
                                    <div className="date_picker">
                                    <label for="datepicker" class="form-label">Thời gian nhận bàn</label>
                                        <DatePicker
                                        showTimeSelect
                                        selected={startDate}
                                        dateFormat='dd/MM/yyyy'
                                        onChange={(date) => setStartDate(date)}
                                        timeClassName={handleColor}
                                        />
                                    </div>
                                    {/* Số điện thoại */}
                                    <div className="phone_number mt-3">
                                    <label for="datepicker" class="form-label">Số điện thoại</label>
                                    <input type="text" class="form-control" placeholder="Số điện thoại"/>
                                    </div>
                                    
                                    {/* Chọn bàn */}
                                    <div className="pick_table mt-3">
                                    <label for="datepicker" class="form-label">Chọn bàn</label>
                                    <input type="text" class="form-control" placeholder="Số điện thoại"/>
                                    </div>
                                    
                                    {/* Đặt cọc trước */}
                                    <div className="pick_table mt-3">
                                    <label for="datepicker" class="form-label">Đặt cọc trước</label>
                                    <input type="text" class="form-control" placeholder="Đặt cọc trước"/>
                                    </div>
                                </div>

                                
                                <div className="col-6 border border-warning">
                                    {/* Số khách */}
                                    <div className="pick_table">
                                    <label for="datepicker" class="form-label">Số khách</label>
                                    <input type="text" class="form-control" placeholder="Đặt cọc trước"/>
                                    </div>

                                    {/* Khách hàng */}
                                    <div className="pick_table mt-3">
                                    <label for="datepicker" class="form-label">Khách hàng</label>
                                    <input type="text" class="form-control" placeholder="Nhập tên khách hàng"/>
                                    </div>

                                    {/* Ghi chú */}
                                    <div className="pick_table mt-3">
                                    <label for="datepicker" class="form-label">Ghi chú</label>
                                    <input type="text" class="form-control" placeholder="Ghi chú"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                        <div className="container border border-dark">
                        <div className="order_title border-0 border-bottom border-dark"> 
                            <h4 className="text-center">Đặt món trước</h4>

                        </div>

                        

                        
                        </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        aslkdjasoido
                    </Tab.Pane>
                </Tab.Content>
                </Col>
            </Row>
            </Tab.Container>
            </div>

        </section>



        </>
    );
}

export default OrderTable;
