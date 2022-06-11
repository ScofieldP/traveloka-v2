import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Food from "./Food";
import Water from "../../fakeData/Water";
import Header from "../../Header";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";

export default function OrderFood(props) {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const { onAdd, onRemove } = props;

  const { drinks } = props;
  const { cartItems } = props;
  // tạm tính
  const itemsPrice = cartItems.reduce((a, c) => a + c.Fd_price * c.qty, 0);
  // tiền ship
  const shippingPrice = itemsPrice < 2000 ? 0 : 50;
  // tổng tiền
  const totalPrice = itemsPrice + shippingPrice;

  const token = !localStorage.ToFdata ? "" : JSON.parse(localStorage.ToFdata);
  const db = token.data;

  function RenderTab() {
    let toFData = [...db];
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
                      src={item.img}
                      style={{ width: "100px", height: "100px" }}
                      alt=""
                    />
                  </div>

                  <div className="col-5">
                    <p className="my-4 mb-0 fw-bold fs-5">{item.Fd_name} </p>
                    <div>
                      <p className="m-0">
                        Số lượng: {item.qty} x {item.Fd_price}
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
                      Phí ship: {shippingPrice}
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
    </>
  );
}
