import React, {useState} from 'react';
import {Tab, Tabs} from 'react-bootstrap'
import Food from '../fakeData/Food'
import Water from '../fakeData/Water'
import Header from '../Header';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function OrderFood  (props) {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });
    const {products,onAdd, onRemove} = props;
   
    const {drinks} = props;
    const {cartItems} =props;
    const itemsPrice  = cartItems.reduce((a, c)=> a +c.price * c.qty,0);
    const shippingPrice = itemsPrice < 2000 ? 0:50;
    const totalPrice = itemsPrice + shippingPrice;
    return (
        <>
        <Header/>

        <section className="main_container">
        <div className="container">
          <div className="d-flex justify-content-center ">
          <h2 className="text-center my-5 font_title"> Menu nhà hàng</h2>
          <FontAwesomeIcon 
            icon={faShoppingCart}  
            onClick={() => setState({ isPaneOpen: true })} 
            className=" my-5 dright "
            style={{height:'35px', color:'#FEA116'}} ></FontAwesomeIcon> 
          <SlidingPane
          className="some-custom-class"
          overlayClassName="some-custom-overlay-class"
          isOpen={state.isPaneOpen}
          title="Giỏ hàng"
          subtitle="Optional subtitle."
          width = '40%'
          onRequestClose={() => {
            // triggered on "<" on left top click or on outside click
            setState({ isPaneOpen: false });
          }}
        >
          <div>{cartItems.length ===0 &&<div>Giỏ hàng trống</div>}</div>
          {cartItems.map((item)=>(
            <div key={item.id} className="row">
              <div>
                <img src={item.img} alt=""/>
              </div>
              <div>{item.detailTitle}</div>
              <div>
                <button onClick={()=>onAdd(item)} className = "add">+</button>
                <button onClick={()=>onRemove(item)} className = "remove">-</button>

              </div>

              <div>
                {item.qty} x {item.price}
              </div>
            </div>
          ))}
          {cartItems.length !==0 &&(
            <>
            <div>{itemsPrice}</div>
            <div>{shippingPrice}</div>
            <div>{totalPrice}</div>
            </>
          )}
        </SlidingPane>  
          </div>
        <Tabs id="controlled-tab-example" className="mb-3 justify-content-center">
          <Tab eventKey="food" title="Food">
            <div className="row">
            <div className="col-6">
                {products.map((product)=>(
                  <Food key={product.id} product={product} onAdd = {onAdd} />
                ))}
              </div>
              <div className ="col-6">
              {products.map((product)=>(
                  <Food key={product.id} product={product} />
                ))}
            </div>
            </div>

          </Tab>
          <Tab eventKey="drink" title="Drink">
            <div className="row">
              <div className="col-6">
            {drinks.map((drink)=>(
                  <Water key={drink.id} drink={drink} />
                ))}
              </div>
              <div className ="col-6">
              {products.map((product)=>(
                  <Food key={product.id} product={product} />
                ))}
            </div>
            </div>
          </Tab>
          <Tab eventKey="dessert" title="Dessert" >
          <div className="row">
            <div className="col-6">
                {products.map((product)=>(
                  <Food key={product.id} product={product} />
                ))}
              </div>
              <div className ="col-6">
              {products.map((product)=>(
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

