import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Axios from "axios";

import Food from "./food";
import Header from "../../Header";
import Footer from "../../Footer";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { CONNECTION_STRING } from "../../../config/index";

export default function OrderFood(props) {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const [tof, setTof] = useState([]);
  const { onAdd, onRemove } = props;
  const { cartItems } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.Fd_price * c.qty, 0);
  const shippingPrice = itemsPrice < 2000 ? 0 : 50;
  const totalPrice = itemsPrice + shippingPrice;
  const data = !localStorage.itemRes ? "" : JSON.parse(localStorage.itemRes);

  function SetCartPayment() {
    const lstOrFd = {
      cart: cartItems,
      itemsPrice: itemsPrice ? itemsPrice : "",
      shippingPrice: shippingPrice ? shippingPrice : "",
      totalPrice: totalPrice ? totalPrice : "",
    };
    localStorage.setItem("lstOrFd", JSON.stringify(lstOrFd));
  }

  useEffect(() => {
    const getTof = async () => {
      const TofRes = await Axios.get(
        CONNECTION_STRING + `/typeofFood/${data.Res_id}`
      );
      setTof(TofRes.data);
    };
    getTof();
  }, []);

  function RenderTab() {
    let toFData = [...tof];
    return toFData.map((tof, i) => {
      const foodDb = tof.Food;
      return (
        <Tab eventKey={tof.ToF_name} title={tof.ToF_name}>
          {!tof.ToF_state ? (
            <>
              {tof.ToF_name} hiện đang tạm dừng bán. Chúng tôi chân thành xin
              lỗi vì sự bất tiện này
            </>
          ) : (
            <>
              {foodDb.length > 0 ? (
                <div className="row">
                  {foodDb.map((food) => (
                    <div className="col-6">
                      <Food key={food.ToF_id} food={food} onAdd={onAdd} />
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  Thực đơn đang được cập nhập. Chúng tôi chân thành xin lỗi vì
                  sự bất tiện này{" "}
                </>
              )}
            </>
          )}
        </Tab>
      );
    });
  }

  return (
    <>
      <Header />

      <section className="mainContainer">
        <div className="container">
          <div className="d-flex justify-content-center ">
            <h2 className="text-center my-5 font_title"> Menu nhà hàng</h2>
            <FontAwesomeIcon
              icon={faShoppingCart}
              onClick={() => setState({ isPaneOpen: true })}
              className=" my-5 dright "
              style={{ height: "35px", color: "#FEA116" }}
            ></FontAwesomeIcon>
            <SlidingPane
              className="some-custom-class"
              overlayClassName="some-custom-overlay-class"
              isOpen={state.isPaneOpen}
              title="Giỏ hàng"
              width="40%"
              onRequestClose={() => {
                setState({ isPaneOpen: false });
              }}
            >
              <div>{cartItems.length === 0 && <div>Giỏ hàng trống</div>}</div>
              {cartItems.map((item) => (
                <div key={item.id} className="row mt-2">
                  <div className="col-3">
                    <img
                      src={item.Fd_image}
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>

                  <div className="col-6">
                    <p className="my-4 mb-0 fw-bold fs-5">{item.Fd_name} </p>
                    <div>
                      <p className="m-0">
                        Số lượng: {item.qty} x {item.Fd_price}
                      </p>
                    </div>
                  </div>
                  <div className="col-3 ">
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
                      Phí ship: {shippingPrice}
                    </p>
                    <p className="d-flex justify-content-end">
                      Tổng tiền: {totalPrice}
                    </p>
                  </div>

                  <a
                    type="submit"
                    value="Thanh toán"
                    className="w-100 p-2"
                    href="/payment"
                    onClick={SetCartPayment}
                  >
                    Thanh Toán
                  </a>
                </>
              )}
            </SlidingPane>
          </div>

          <Tabs
            id="controlled-tab-example"
            className="mb-3 justify-content-center"
          >
            {RenderTab()}
          </Tabs>
        </div>
      </section>

      <Footer />
    </>
  );
}
