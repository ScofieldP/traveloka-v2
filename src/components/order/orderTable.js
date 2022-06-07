import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav, NavDropdown, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Login from ".././auth/Login";
import Register from ".././auth/Register";
import { TabContainer, Row, Col, Tab, Tabs } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-modal";
import Header from "../Header";
import Footer from "../Footer";

//modal
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const OrderTable = () => {
  //modal
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  //date
  const [startDate, setStartDate] = useState(new Date());
  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  //foods
  const [orders, setOrder] = useState([
    {
      id: 1,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
    {
      id: 2,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
    {
      id: 3,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
    {
      id: 4,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
  ]);
  const displayOrder = orders.map((order) => {
    return (
      <>
        <div className="row mt-3 border border-dark rounded-3">
          <div className="col-3 p-0">
            <img
              src={order.img}
              alt=""
              style={{ width: "180px", height: "180px" }}
            />
          </div>
          <div className="col-7">
            <div className="food_detail">
              <p className="fw-bold fs-4">{order.title}</p>
              <p className="mb-0">{order.description}</p>
              <p className="m-0">{order.price}</p>
              <p>
                <FontAwesomeIcon icon={faShoppingCart} /> 100+
              </p>
            </div>
          </div>
          <div className="col-2 ">
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="add_btn"
              onClick={openModal}
            />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button onClick={closeModal}>close</button>
              <div className="container">
                <div className="row border border-dark">
                  {/* Thêm vào giỏ hàng */}
                  <div className="col-9 ">
                    <div className="row px-4 py-4">
                      <div className="col-3">
                        <img
                          src={order.img}
                          alt=""
                          style={{ width: "150px", height: "150px" }}
                        />
                      </div>
                      <div className="col-7 ms-5 mt-3">
                        <p className="fw-bold fs-4">{order.title}</p>
                        <p className="mb-0">{order.description}</p>
                        <p className="m-0">{order.price}</p>
                        <p>
                          <FontAwesomeIcon icon={faShoppingCart} /> 100+
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Nút thêm */}
              <button type="button" className="btn btn-primary w-100 mt-2">
                Thêm vào giỏ hàng
              </button>
            </Modal>
          </div>
        </div>
      </>
    );
  });

  //drink
  const [drinks, setDrinks] = useState([
    {
      id: 1,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
    {
      id: 2,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
    {
      id: 3,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
    {
      id: 4,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
  ]);
  const displayDrink = drinks.map((drink) => {
    return (
      <>
        <div className="row mt-3 border border-dark rounded-3">
          <div className="col-3 p-0">
            <img
              src={drink.img}
              alt=""
              style={{ width: "180px", height: "180px" }}
            />
          </div>
          <div className="col-7">
            <div className="food_detail">
              <p className="fw-bold fs-4">{drink.title}</p>
              <p className="mb-0">{drink.description}</p>
              <p className="m-0">{drink.price}</p>
              <p>
                <FontAwesomeIcon icon={faShoppingCart} /> 100+
              </p>
            </div>
          </div>
          <div className="col-2 ">
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="add_btn"
              onClick={openModal}
            />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button onClick={closeModal}>close</button>
              <div className="container">
                <div className="row border border-dark">
                  {/* Thêm vào giỏ hàng */}
                  <div className="col-9 ">
                    <div className="row px-4 py-4">
                      <div className="col-3">
                        <img
                          src={drink.img}
                          alt=""
                          style={{ width: "150px", height: "150px" }}
                        />
                      </div>
                      <div className="col-7 ms-5 mt-3">
                        <p className="fs-4 fw-bold">{drink.title}</p>
                        <p className="mb-0">{drink.description}</p>
                        <p className="m-0">{drink.price}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Nút thêm */}
              <button type="button" className="btn btn-primary w-100 mt-2">
                Thêm vào giỏ hàng
              </button>
            </Modal>
          </div>
        </div>
      </>
    );
  });

  // dessert
  const [desserts, setDesserts] = useState([
    {
      id: 1,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
    {
      id: 2,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
    {
      id: 3,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
    {
      id: 4,
      title: "Fried Chicken",
      description: "Cho nhiều người",
      price: "500.000VND",
      img: "./assets/img/food-13.png",
    },
  ]);
  const displayDesserts = desserts.map((dessert) => {
    return (
      <>
        <div className="row mt-3 border border-dark rounded-3">
          <div className="col-3 p-0">
            <img
              src={dessert.img}
              alt=""
              style={{ width: "180px", height: "180px" }}
            />
          </div>
          <div className="col-7">
            <div className="food_detail">
              <p className="fw-bold fs-4">{dessert.title}</p>
              <p className="mb-0">{dessert.description}</p>
              <p className="m-0">{dessert.price}</p>
              <p>
                <FontAwesomeIcon icon={faShoppingCart} /> 100+
              </p>
            </div>
          </div>
          <div className="col-2 ">
            <FontAwesomeIcon
              icon={faCirclePlus}
              className="add_btn"
              onClick={openModal}
            />
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
              contentLabel="Example Modal"
            >
              <button onClick={closeModal}>close</button>
              <div className="container">
                <div className="row border border-dark">
                  {/* Thêm vào giỏ hàng */}
                  <div className="col-9 ">
                    <div className="row px-4 py-4">
                      <div className="col-3">
                        <img
                          src={dessert.img}
                          alt=""
                          style={{ width: "150px", height: "150px" }}
                        />
                      </div>
                      <div className="col-7 ms-5 mt-3">
                        <p className="fw-bold fs-4">{dessert.title}</p>
                        <p className="mb-0">{dessert.description}</p>
                        <p className="m-0">{dessert.price}</p>
                        <p>
                          <FontAwesomeIcon icon={faShoppingCart} /> 100+
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Nút thêm */}
              <button type="button" className="btn btn-primary w-100 mt-2">
                Thêm vào giỏ hàng
              </button>
            </Modal>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <Header/>

      <section className="main_table py-5">
        <div className="container w-75 border border-dark">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first" >
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
              <Col sm={9} className="p-0" >
                <Tab.Content >
                  {/* Đặt bàn trước */}
                  <Tab.Pane eventKey="first" className="bg-dark">
                    <div className="container border border-dark border-end-0 border-bottom-0 border-top-0 bg-dark">
                      <div className="order_title border-0 border-bottom border-dark ">
                        <h4 className="text-center py-2 font_title">
                          Phiếu đặt bàn
                        </h4>
                      </div>
                      <div className="form_tbl d-flex py-3">
                        <div className="col-6">
                          {/* Thời gian nhận bàn */}
                          <div className="date_picker">
                            <label
                              for="datepicker"
                              class="form-label text-white"
                            >
                              Ngày đặt bàn
                            </label>
                            <DatePicker
                              showTimeSelect
                              selected={startDate}
                              dateFormat="dd/MM/yyyy"
                              onChange={(date) => setStartDate(date)}
                              timeClassName={handleColor}
                            />
                          </div>
                          {/* Số điện thoại */}
                          <div className="phone_number mt-3">
                            <label
                              for="datepicker"
                              class="form-label text-white "
                            >
                              Số điện thoại
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Số điện thoại"
                            />
                          </div>

                          {/* Chọn bàn */}
                          <div className="pick_table mt-3">
                            <label
                              for="datepicker"
                              class="form-label text-white"
                            >
                              Chọn bàn
                            </label>
                            <input
                              type="text"
                              class="form-control text-white"
                              placeholder="Chọn bàn "
                            />
                          </div>

                          {/* Đặt cọc trước */}
                          <div className="pick_table mt-3">
                            <label
                              for="datepicker"
                              class="form-label text-white"
                            >
                              Đặt cọc trước
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Đặt cọc trước"
                            />
                          </div>
                        </div>

                        <div className="col-6 ms-3">
                          {/* Số khách */}
                          <div className="pick_table">
                            <label
                              for="datepicker"
                              class="form-label text-white"
                            >
                              Số lượng người 
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Số lượng người "
                            />
                          </div>

                          {/* Khách hàng */}
                          <div className="pick_table mt-3">
                            <label
                              for="datepicker"
                              class="form-label text-white"
                            >
                              Họ tên khách hàng
                            </label>
                            <input
                              type="text"
                              class="form-control"
                              placeholder="Nhập tên khách hàng"
                            />
                          </div>

                          {/* Ghi chú */}
                          <div className="pick_table mt-3">
                            <label
                              for="datepicker"
                              class="form-label text-white"
                            >
                              Ghi chú
                            </label>
                            <input
                              type="text"
                              class="form-control1 "
                              placeholder="Ghi chú"
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        class="btn btn-primary w-100 py-3 mt-3 "
                      >
                        ĐẶT BÀN
                      </button>
                    </div>
                  </Tab.Pane>

                  {/* Đặt món trước */}
                  <Tab.Pane eventKey="second">
                    <div className="container border border-dark border-top-0 border-end-0">
                      <div className="order_title border-0 border-bottom border-dark">
                        <h4 className="text-center py-2">Đặt món trước</h4>
                      </div>
                      <div className="">
                        <Tabs
                          defaultActiveKey="home"
                          id="uncontrolled-tab-example"
                          className="mb-3 justify-content-center border-0"
                        >
                          <Tab
                            eventKey="home"
                            title="Món ăn"
                            className=" border border-0"
                          >
                            {displayOrder}
                          </Tab>
                          <Tab eventKey="profile" title="Thức uống">
                            {displayDrink}
                          </Tab>
                          <Tab eventKey="contact" title="Tráng miệng">
                            {displayDesserts}
                          </Tab>
                        </Tabs>
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third"></Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>

      <Footer/>
    </>
  );
};

export default OrderTable;
