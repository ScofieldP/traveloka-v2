import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachographDigital } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";
import { Tabs, Tab } from "react-bootstrap";
import authApi from "../../apis/authapi";

const Payment = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const user = !localStorage.user ? "" : JSON.parse(localStorage.user);
  const table = !localStorage.orderTable
    ? ""
    : JSON.parse(localStorage.orderTable);
  const carts = !localStorage.lstOrFd ? "" : JSON.parse(localStorage.lstOrFd);
  console.log(user, table, carts);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "35%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0",
      width: "50%",
    },
    overlay: {
      backgroundColor: "rgba(0,0,0,.4)",
    },
  };

  function listCart() {
    let cartdb = [...carts.cart];
    return cartdb.map((cart, i) => {
      const total = cart.Fd_price * cart.qty;
      return (
        <tr>
          <td>
            <div class="row">
              <div className="col-3">
                <img
                  src="/assets/img/food-1.png"
                  style={{ width: "120px", height: "120px" }}
                  alt="food"
                />
              </div>
              <div className="col-6">
                <p className="align-middle">{cart.Fd_name}</p>
              </div>
            </div>
          </td>
          <td>{cart.Fd_price}</td>
          <td>{cart.qty}</td>
          <td>{total} VND</td>
        </tr>
      );
    });
  }

  function SendData() {
    const details = carts.cart.map((x) => {
      const dt = {
        productName: x.Fd_name,
        quantity: x.qty,
        price: x.Fd_price,
        thumbnail: "",
        link: "http://g08-cusrestaurant-traveloka.surge.sh/restaurant",
      };
      return dt;
    });
    const db = {
      total: carts.cart.length,
      reward: 100,
      details,
      userId: table.userId,
      voucherCode: "free",
      partnerId: "",
    };

    const senddb = async () => {
      const response = await authApi.saveOrders(db);
      return response;
    };
    if (senddb) {
      if (
        window.confirm(
          "Giao dịch thành công, bạn có muốn xem lịch sử giao dịch?"
        )
      ) {
        navigate("https://profile.vinhphancommunity.xyz/profile/view");
      }
    }
  }
  return (
    <>
      <body style={{ backgroundColor: "antiquewhite" }}>
        <Header />

        <div className="mainPayment ">
          <div className="container w-75 ">
            <div className="container bg-white">
              <div class="titlePayment">
                <h3>Chi tiết thanh toán</h3>
              </div>
            </div>

            {/* ........................................... */}
            {/* Thông tin khách đặt món */}
            <div className="container bg-white">
              <div className="userInfo">
                <h4 className="py-3 ms-1 m-0">
                  <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                  Địa chỉ nhận hàng
                </h4>
                <div class="row">
                  <div className="col-6">
                    <p className="ms-1">{user ? user.name : "Vô danh"}</p>
                  </div>
                  <div className="col-6">
                    <p>{user ? user.address : "Không xác định"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Đặt dồ ăn */}
            <div className="container bg-white">
              <div className="orderFood mt-3 ">
                <div className="row">
                  <h4 className="py-3 ms-1 m-0">Đặt đồ ăn</h4>
                  <div className="">
                    <table>
                      <tr>
                        <th>Món ăn</th>
                        <th>Đơn giá</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                      </tr>
                      {listCart()}
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* ..................................................... end đặt món */}

            {/* Thông tin khách đặt bàn */}
            <div className="container bg-white">
              <div className="userInfo mt-3">
                <h4 className="py-3 ms-1 m-0">
                  <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
                  {table ? (
                    <>Chi tiết khách đặt bàn</>
                  ) : (
                    <>Hình thức giao dịch: Online</>
                  )}
                </h4>
                {table && (
                  <div class="row">
                    <div className="">
                      <table>
                        <tr>
                          <th>Tên khách hàng</th>
                          <th>Số điện thoại</th>
                          <th>Ngày đặt bàn</th>
                          <th>Chọn bàn</th>
                          <th>Số lượng người</th>
                          <th>Đặt cọc trước</th>
                        </tr>
                        <tr>
                          <td>{user.name}</td>
                          <td>{user.phone}</td>
                          <td>{table.startDate}</td>
                          <td>{table.table}</td>
                          <td>{table.number}</td>
                          <td>{table.deposit}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Chọn voucher */}
            <div class="container bg-white">
              <div className="choiceVoucher mt-3 d-flex justify-content-between">
                <h4 className="py-3 ms-1 m-0">
                  <FontAwesomeIcon
                    icon={faTachographDigital}
                    className="me-2"
                  />
                  Traveloka Voucher
                </h4>
                <p
                  className="py-3 ms-1 m-0"
                  style={{ cursor: "pointer" }}
                  onClick={openModal}
                >
                  Chọn Voucher
                </p>
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <div className="headerModal d-flex justify-content-between">
                    <p className="text-white px-5">Traveloka Voucher</p>
                    <span className="text-white px-5" onClick={closeModal}>
                      X
                    </span>
                  </div>
                  <div className="container d-flex justify-content-center w-75 py-2">
                    <div className="row mt-3 border border-dark w-100">
                      <div className="col-3 p-0">
                        <div className="voucherImg">
                          <img
                            src="/assets/img/food-1.png"
                            style={{ width: "120px", height: "120px" }}
                            alt="food"
                          />
                        </div>
                      </div>
                      <div className="col-9 ">
                        <div className="voucherTitle ">
                          <p className="p-4 my-4 m-0">
                            Áp dụng Voucher giảm 100% với hóa đơn 0đ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2 voucher giống nhau */}
                  <div className="container d-flex justify-content-center w-75 py-2">
                    <div className="row mt-1 border border-dark w-100">
                      <div className="col-3 p-0">
                        <div className="voucherImg">
                          <img
                            src="/assets/img/food-1.png"
                            style={{ width: "120px", height: "120px" }}
                            alt="food"
                          />
                        </div>
                      </div>
                      <div className="col-9 ">
                        <div className="voucherTitle ">
                          <p className="p-4 my-4 m-0">
                            Áp dụng Voucher giảm 100% với hóa đơn 0đ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btnConfirm d-flex justify-content-end my-3">
                    <button className="btn btn-warning me-3 shadow-none">
                      Trở về
                    </button>
                    <button className="btn btn-primary me-3 shadow-none">
                      OK
                    </button>
                  </div>
                </Modal>
              </div>
            </div>

            <div className="container bg-white">
              <div className="choicePayment mt-3">
                <h4 className="py-3 ms-1 m-0">
                  <FontAwesomeIcon
                    icon={faTachographDigital}
                    className="me-2"
                  />
                  Phương thức thanh toán
                </h4>

                <Tabs
                  defaultActiveKey="home"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Stripe">
                    <a href="https://stripe.com/">
                      <img src="/assets/img/stripe.png" alt="food" />
                    </a>
                  </Tab>
                  <Tab eventKey="profile" title="Thanh toán tiền mặt">
                     {" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                      <label for="html">Thanh toán bằng tiền mặt</label>
                  </Tab>
                </Tabs>
              </div>
              <div className="total">
                <p className="d-flex justify-content-end">Tạm tính:VND</p>
                <p className="d-flex justify-content-end">Tạm tính:VND</p>
                <p className="d-flex justify-content-end">
                  Sử dụng Voucher:VND
                </p>
                <p className="d-flex justify-content-end fw-bold">
                  Tổng tiền:VND
                </p>
              </div>
              <div className="paymentBtn d-flex justify-content-end">
                <button
                  className="btn btn-primary w-25 shadow-none "
                  onClick={SendData}
                >
                  Thanh toán
                </button>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </body>
    </>
  );
};

export default Payment;
