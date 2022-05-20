import React from 'react';
import {Tab, Tabs} from 'react-bootstrap'
import Food from '../fakeData/Food'
import Water from '../fakeData/Water'
import Header from '../Header';

export default function OrderFood  (props) {
    const {products} = props;
    const {drinks} = props;
    return (
        <>
        <Header/>

        <section className="main_container">
        <div className="container">
          <h2 className="text-center my-5 font_title">  Our Restaurant Menu</h2>
        <Tabs id="controlled-tab-example" className="mb-3 justify-content-center">
          <Tab eventKey="food" title="Food">
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

