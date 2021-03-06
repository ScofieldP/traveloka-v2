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
  const itemRes = !localStorage.itemRes ? "" : JSON.parse(localStorage.itemRes);
  var total = carts.itemsPrice;
  if (table) total = total + table.deposit - carts.shippingPrice;
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
    userId: user.userId,
    voucherCode: "free",
    partnerId: itemRes.Fdr_id,
  };

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
            <img
              src={cart.Fd_image}
              style={{ width: "120px", height: "120px" }}
              alt="food"
            />
          </td>
          <td>{cart.Fd_name}</td>
          <td>{cart.Fd_price}</td>
          <td>{cart.qty}</td>
          <td>{total} VND</td>
        </tr>
      );
    });
  }

  async function SendData() {
    const response = await authApi.saveOrders(db);
    console.log(response);
    if (window.confirm("Giao d???ch th??nh c??ng")) navigate("/restaurant");
  }
  return (
    <>
      <body style={{ backgroundColor: "antiquewhite" }}>
        <Header />

        <div className="mainPayment ">
          <div className="container w-75 ">
            <div className="container bg-white">
              <div class="titlePayment">
                <h3>Chi ti???t thanh to??n</h3>
              </div>
            </div>

            {/* ........................................... */}
            {/* Th??ng tin kh??ch ?????t m??n */}
            <div className="container bg-white">
              <div className="userInfo">
                <h4 className="py-3 ms-1 m-0">
                  <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                  {table ? <>Th??ng tin kh??ch h??ng</> : <>?????a ch??? nh???n h??ng</>}
                </h4>
                <div class="row">
                  <div className="col-6">
                    H??? t??n:{" "}
                    <p className="ms-1">{user ? user.name : "V?? danh"}</p>
                  </div>
                  <div className="col-6">
                    ?????a ch???: <p>{user ? user.address : "Kh??ng x??c ?????nh"}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* ?????t d??? ??n */}
            <div className="container bg-white">
              <div className="orderFood mt-3 ">
                <div className="row">
                  <h4 className="py-3 ms-1 m-0">
                    {table ? <>?????t tr?????c m??n ??n</> : <>?????t m??n ??n Online</>}
                  </h4>
                  <div className="">
                    <table>
                      <tr>
                        <th>H??nh minh h???a</th>
                        <th>M??n ??n</th>
                        <th>????n gi??</th>
                        <th>S??? l?????ng</th>
                        <th>Th??nh ti???n</th>
                      </tr>
                      {listCart()}
                    </table>
                  </div>
                </div>
              </div>
            </div>
            {/* ..................................................... end ?????t m??n */}

            {/* Th??ng tin kh??ch ?????t b??n */}
            <div className="container bg-white">
              <div className="userInfo mt-3">
                <h4 className="py-3 ms-1 m-0">
                  <FontAwesomeIcon icon={faCircleInfo} className="me-2" />
                  {table ? (
                    <>Chi ti???t kh??ch ?????t b??n</>
                  ) : (
                    <>H??nh th???c giao d???ch: Online</>
                  )}
                </h4>
                {table && (
                  <div class="row">
                    <div className="">
                      <table>
                        <tr>
                          <th>T??n kh??ch h??ng</th>
                          <th>S??? ??i???n tho???i</th>
                          <th>Ng??y ?????t b??n</th>
                          <th>Ch???n b??n</th>
                          <th>S??? l?????ng ng?????i</th>
                          <th>?????t c???c tr?????c</th>
                          <th>Ghi ch??</th>
                        </tr>
                        <tr>
                          <td>{user.name}</td>
                          <td>{user.phone}</td>
                          <td>{table.formatTime}</td>
                          <td>{table.table}</td>
                          <td>{table.number}</td>
                          <td>{table.deposit}</td>
                          <td>{table.note}</td>
                        </tr>
                      </table>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Ch???n voucher */}
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
                  Ch???n Voucher
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
                            ??p d???ng Voucher gi???m 100% v???i h??a ????n 0??
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 2 voucher gi???ng nhau */}
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
                            ??p d???ng Voucher gi???m 100% v???i h??a ????n 0??
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="btnConfirm d-flex justify-content-end my-3">
                    <button className="btn btn-warning me-3 shadow-none">
                      Tr??? v???
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
                  Ph????ng th???c thanh to??n
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
                  <Tab eventKey="profile" title="Thanh to??n ti???n m???t">
                    ??{" "}
                    <input
                      type="radio"
                      id="html"
                      name="fav_language"
                      value="HTML"
                    />
                    ?? <label for="html">Thanh to??n b???ng ti???n m???t</label>
                  </Tab>
                </Tabs>
              </div>
              <div className="total">
                <p className="d-flex justify-content-end">
                  S??? d???ng Voucher: -{carts.shippingPrice} VND
                </p>
                <p className="d-flex justify-content-end fw-bold">
                  T???ng ti???n:{total} VND
                </p>
              </div>
              <div className="paymentBtn d-flex justify-content-end">
                <button
                  className="btn btn-primary w-25 shadow-none "
                  onClick={SendData}
                >
                  Thanh to??n
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
