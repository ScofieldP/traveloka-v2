import {React, useState, useEffect} from 'react';
import { Navbar,Container,Nav,NavDropdown,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import OrderFood from '../order/orderFood';
import OrderTable from '../order/orderTable';

import {Tabs,Tab} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

import Header from '../Header';
import Footer from '../Footer';


function ReadMore({children =0}){
    const text = children; 
    const [isShow, setIsShowLess] = useState(true)
    const result = isShow ? text.slice(0,0) :text;
    function toggleIsShow(){
        setIsShowLess((!isShow));
    }
    return (
        <p>
        {result}
        <span className="btn btn-show btn-link p-0 text-decoration-none" onClick={toggleIsShow}>{isShow ? "SHOW MORE" : "SHOW LESS"}</span>
        </p>
    )
}
const Detailres = () => {
    return (
        <>
        <Header/>
        <section className="main_container">
            <div className="bread_crum">
              <div className='container w-75'>
              <p>Eats / Jakarta / Jakarta Barat / Taman Sari / Mangga Besar / Mangga Besar / 312 HokBen - Lokasari (Delivery)</p>
              </div>
            </div>

            <div className='container w-75'>
                <div className="row">
                    <div className="col-7">
                        <div className="res_title border-0 border-bottom border-secondary pb-1 ">
                            <p className="m-0 fw-bold fs-3">KFC</p>
                            <p>Delivery, Reservation</p>
                            
                        </div>
                        <div className="res_img pt-3 border-0 border-bottom border-secondary pb-3 ">
                            <img src="/assets/img/food-14.png" alt="" style={{width:"645px" , height:"400px"}}/>
                        </div>
                        <div className="res_collection border-0 border-bottom border-secondary pb-3">
                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                            <Tab eventKey="home" title="All">
                                All
                            </Tab>
                        <Tab eventKey="profile" title="Review">
                                Review  
                        </Tab>
                        <Tab eventKey="contact" title="Photos" >
                                Photos
                        </Tab>
                        </Tabs>
                        </div>

                        <div className="">
                            lksajdkalsjdlkasd   
                        </div>
                    </div>
                    <div className="col-4 border border-secondary ms-5">
                        <h3 className="mb-3">Restaurant Details</h3>
                        <p className="fs-5 m-0 fw-bold"><FontAwesomeIcon icon={faClock} className ="me-3" />Opening Hours</p>
                        <div className="datetime">
                            <span>Tody</span>
                            <span>•</span>
                            <span>Open Now</span>
                        </div>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        <ReadMore>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        <p className="m-0 time_p">10.00 - 22.00</p>
                        </ReadMore>

                        <div className="categories_res">
                          <div className="cate_a">
                            <p className="fs-5 m-0 fw-bold">Dishes & Cuisines</p>
                            <ul class="list-unstyled ul_cate ">
                            <li>Fried Chicken</li>
                            <li>Asian</li>
                            <li>Takoyaki</li>
                            <li>Yakiniku</li>
                            <li>Teriyaki</li>
                            </ul>
                          </div>
                          <div className="cate_b">
                            <p className="fs-5 m-0 fw-bold">Dietary Restrictions</p>
                            <span className="m-0 sp_noinfo">Info not available</span>
                          </div>
                        </div>

                          <div className="price_range">
                            <p className="fs-5 m-0 fw-bold">Price Range</p>
                            <FontAwesomeIcon icon={faDollarSign} />
                            <FontAwesomeIcon icon={faDollarSign}  /> 
                            <span className ="mx-2 ">•</span>
                            <span className="sp_noinfo">500.000VND</span>
                          </div>

                          <div className ="phone_number mt-3">
                            <p className="fs-5 fw-bold m-0"><FontAwesomeIcon icon={faPhoneFlip} className ="me-3" />Phone Number</p>
                            <span className="m-0 sp_noinfo">Info not available</span>
                          </div>

                          <div className="address mt-3">
                            <p className="fs-5 m-0 fw-bold"><FontAwesomeIcon icon={faLocationDot} className ="me-3" />Address</p>
                            <span className="m-0 sp_noinfo">TP.HCM</span>
                          </div>

                          <div className="other mt-3">
                            <p className="fs-5 m-0 fw-bold">Other Facilities</p>
                            <span className="m-0 sp_noinfo">Take away</span>
                          </div>


                          <div className="btn_order d-flex mt-3">
                            <div className="order_food">
                              <button type="button" class="btn btn-warning me-3">
                                <Link className="text-decoration-none text-black" to ="/orderFood" element={ <OrderFood />}>Đặt Online</Link>
                              </button>

                            </div>
                            <div className="order_table pb-5  ">
                              <button type="button" class="btn btn-info ">
                              <Link className="text-decoration-none text-black" to ="/orderTable" element={ <OrderTable />}>Đặt bàn</Link>
                              </button>

                            </div>
                          </div>
                    </div>

                    
                </div>
            </div>
        </section>



        <Footer/>
        </>
    );
}

export default Detailres;
