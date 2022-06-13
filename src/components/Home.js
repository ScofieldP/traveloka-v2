import React, { Component } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
export default class Home extends Component {
  render() {
    let owl_carousel = require('owl.carousel');
    window.fn = owl_carousel;
    const options = {
      loop: true,
      margin: 10,
      items: 1,
      autoplay: true
    };
    return (
      
      <>
        <Header/>
        <section className="main_menu">
          <div className="container">
            <div className="row " >
            <OwlCarousel className="owl-theme position-static" {...options}>
      <div className="item position-static">
        <img src="https://unsplash.it/400/300/?image=511" />
      </div>
      <div className="item position-static">
        <img src="https://unsplash.it/400/300/?image=514" />
      </div>
      <div className="item position-static">
        <img src="https://unsplash.it/400/300/?image=513" />
      </div>
    </OwlCarousel>
            </div>
          </div>
        </section>
        <Footer/>
      </>
    );
  }
}
