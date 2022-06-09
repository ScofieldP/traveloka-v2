import React, { useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import Food from "../fakeData/Food";
import Water from "../fakeData/Water";
import Header from "../Header";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import {  faCircleMinus } from "@fortawesome/free-solid-svg-icons";

export default function OrderFood(props) {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
  const { products, onAdd, onRemove } = props;

  const { drinks } = props;
  const { cartItems } = props;
  // tạm tính
  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  // tiền ship
  const shippingPrice = itemsPrice < 2000 ? 0 : 50;
  // tổng tiền
  const totalPrice = itemsPrice + shippingPrice;
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
                    <img src={item.img} style={{width:'100px', height:'100px'}}alt="" />
                  </div>

                  <div className="col-5">
                    <p  className="my-4 mb-0 fw-bold fs-5">{item.title} </p>
                    <div>
                    <p className="m-0">Số lượng: {item.qty} x {item.price}</p>

                    </div>                   

                  </div>
                  <div className="col-4 ">
                    <div className="d-flex justify-content-center my-5">
                      <FontAwesomeIcon 
                        icon={ faCirclePlus} 
                        className="me-3"
                        onClick={() => onAdd(item)}/>   

                    <FontAwesomeIcon 
                        icon={ faCircleMinus} 
                        className=""
                        onClick={() => onRemove(item)}/>  
                  
                    </div>    
                  </div>

                </div>
              ))}
              {cartItems.length !== 0 && (
                <>
                <div className=" justify-content-end">
                <p className="d-flex justify-content-end">Tạm tính: {itemsPrice}</p>
                  <p className="d-flex justify-content-end">Phí ship: {shippingPrice}</p>
                  <p className="d-flex justify-content-end">Tổng tiền: {totalPrice}</p>
                </div>
                
                <input type="submit" value="Thanh toán" className="w-100 p-2"/>

                </>
              )}
              
            </SlidingPane>

           
          </div>

          <Tabs
            id="controlled-tab-example"
            className="mb-3 justify-content-center"
          >
            <Tab eventKey="food" title="Thức ăn">
              <div className="row">
                <div className="col-6">
                  {products.map((product) => (
                    <Food key={product.id} product={product} onAdd={onAdd} />
                  ))}
                </div>
                <div className="col-6">
                  {products.map((product) => (
                    <Food key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </Tab>
            <Tab eventKey="drink" title="Đồ uống">
              <div className="row">
                <div className="col-6">
                  {drinks.map((drink) => (
                    <Water key={drink.id} drink={drink}  onAdd={onAdd}/>
                  ))}
                </div>
                <div className="col-6">
                  {products.map((product) => (
                    <Food key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </Tab>
            <Tab eventKey="dessert" title="Tráng miệng">
              <div className="row">
                <div className="col-6">
                  {products.map((product) => (
                    <Food key={product.id} product={product} />
                  ))}
                </div>
                <div className="col-6">
                  {products.map((product) => (
                    <Food key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </Tab>
          </Tabs>
        </div>
      </section>
    </>
  );
}
