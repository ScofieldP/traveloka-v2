import React, { Component } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Carousel } from "react-bootstrap";
import Header from "./Header";
import Footer from "./Footer";
export default class Home extends Component {
  render() {
    return (
      <>
        <Header/>
        <section className="main_menu">
          <div className="container">
            <div className="row">
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block caro_img"
                    src="/assets/img/res-1.jpg"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block caro_img"
                    src="/assets/img/res-2.jpg"
                    alt=""
                  />
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block caro_img"
                    src="/assets/img/res-3.jpg"
                    alt=""
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </section>
        <Footer/>
      </>
    );
  }
}
