import React from "react";
import { useState } from "react";
import { Nav } from "react-bootstrap";

import { Row, Col, Tab, Tabs } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Header";
import Footer from "../../Footer";
import Food from "../Food.js/Food";
import Water from "../../fakeData/Water";
export default function OrderTable(props) {
  const { products, onAdd, onRemove } = props;

  const { drinks } = props;
  const { cartItems } = props;
  // tạm tính
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  // tổng tiền
  const totalPrice = itemsPrice;
  //date
  const [startDate, setStartDate] = useState(new Date());
  let handleColor = (time) => {
    return time.getHours() > 12 ? "text-success" : "text-error";
  };

  return (
    <>
      <Header />

      <section className="main_table py-5">
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
              <Col sm={9} className="p-0">
                <Tab.Content>
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
                            title="Thức ăn"
                            className=" border border-0"
                          >
                            {products.map((product) => (
                              <Food
                                key={product.id}
                                product={product}
                                onAdd={onAdd}
                              />
                            ))}
                          </Tab>
                          <Tab eventKey="profile" title="Thức uống">
                            {drinks.map((drink) => (
                              <Water
                                key={drink.id}
                                drink={drink}
                                onAdd={onAdd}
                              />
                            ))}
                          </Tab>
                          <Tab eventKey="contact" title="Tráng miệng"></Tab>
                        </Tabs>
                      </div>
                    </div>
                  </Tab.Pane>

                  <Tab.Pane eventKey="third">
                    {/* Chi tiết hóa đơn */}
                    <div>
                      {cartItems.length === 0 && <div>Giỏ hàng trống</div>}
                    </div>
                    {cartItems.map((item) => (
                      <div key={item.id} className="row mt-2">
                        <div className="col-3">
                          <img
                            src={item.img}
                            style={{ width: "100px", height: "100px" }}
                            alt=""
                          />
                        </div>

                        <div className="col-5">
                          <p className="my-4 mb-0 fw-bold fs-5">
                            {item.title}{" "}
                          </p>
                          <div>
                            <p className="m-0">
                              Số lượng: {item.qty} x {item.price}
                            </p>
                          </div>
                        </div>
                        <div className="col-4 ">
                          <div className="d-flex justify-content-center my-5">
                            <FontAwesomeIcon
                              icon={faCirclePlus}
                              className="me-3"
                              onClick={() => onAdd(item)}
                            />

                            <FontAwesomeIcon
                              icon={faCircleMinus}
                              className=""
                              onClick={() => onRemove(item)}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                    {cartItems.length !== 0 && (
                      <>
                        <div className=" justify-content-end">
                          <p className="d-flex justify-content-end">
                            Tạm tính: {itemsPrice}
                          </p>
                          <p className="d-flex justify-content-end">
                            Tiền cọc:
                          </p>
                          <p className="d-flex justify-content-end">
                            Tổng tiền: {totalPrice}
                          </p>
                        </div>

                        <input
                          type="submit"
                          value="Thanh toán"
                          className="w-100 p-2"
                        />
                      </>
                    )}
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </section>

      <Footer />
    </>
  );
}
