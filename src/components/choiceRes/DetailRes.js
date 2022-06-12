import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Axios from "axios";
import OrderFood from "../order/Food/orderFood";
import OrderTable from "../order/Table/orderTable";

import { Tabs, Tab } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { faPhoneFlip } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import Header from "../Header";
import Footer from "../Footer";
import { CONNECTION_STRING } from "../../config/index";
function ReadMore({ children = 0 }) {
  const text = children;
  const [isShow, setIsShowLess] = useState(true);
  const result = isShow ? text.slice(0, 0) : text;
  function toggleIsShow() {
    setIsShowLess(!isShow);
  }
  return (
    <p>
      {result}
      <span
        className="btn btn-show btn-link p-0 text-decoration-none"
        onClick={toggleIsShow}
      >
        {isShow ? "Bật Mí" : "Bí Mật"}
      </span>
    </p>
  );
}

const Detailres = () => {
  const location = useLocation();
  const { data } = location.state;
  const today = new Date();
  var time =
    today.getHours().length !== 1 ? "0" + today.getHours() : today.getHours();
  time = time + ":" + today.getMinutes();

  function SetResItem() {
    localStorage.setItem("itemRes", JSON.stringify(data));
  }

  return (
    <>
      <Header />
      <section className="mainContainer">
        <div className="bread_crum">
          <div className="container w-75">
            <p>
              Traveloka / Nhà hàng / thức ăn / An toàn / Vệ sinh / Nhanh chóng /
              Tiện lợi / Giao hàng tận nơi
            </p>
          </div>
        </div>

        <div className="container w-75">
          <div className="row">
            <div className="col-7">
              <div className="res_title border-0 border-bottom border-secondary pb-1 ">
                <p className="m-0 fw-bold fs-3">{data.Res_name}</p>
                <p>Sự lụa chọn hoàn hảo theo phong cách của bạn</p>
              </div>
              <div className="res_img pt-3 border-0 border-bottom border-secondary pb-3 ">
                <img
                  src="/assets/img/food-14.png"
                  alt=""
                  style={{ width: "100%" }}
                />
              </div>
              <div className="res_collection border-0 border-bottom border-secondary pb-3">
                <Tabs
                  defaultActiveKey="profile"
                  id="uncontrolled-tab-example"
                  className="mb-3"
                >
                  <Tab eventKey="home" title="Tất cả">
                    Tất cả
                  </Tab>
                  <Tab eventKey="profile" title="Miêu tả">
                    Miêu tả
                  </Tab>
                  <Tab eventKey="contact" title="Hình ảnh">
                    Hình ảnh
                  </Tab>
                </Tabs>
              </div>

              <div className="">
                Liên hệ chúng tôi qua Hotline: {data.Res_phone}
              </div>
            </div>
            <div className="col-4 border border-secondary ms-5 h-50">
              <h3 className="mb-3">Thông tin nhà hàng</h3>
              <p className="fs-5 m-0 fw-bold">
                <FontAwesomeIcon icon={faClock} className="me-3" />
                Thời gian hoạt động
              </p>
              <div className="datetime">
                {time >= data.Res_time_open && time <= data.Res_time_closed ? (
                  <>
                    <span>Hôm nay</span>
                    <span>•</span>
                    <span>Đang mở cửa</span>
                  </>
                ) : (
                  <>
                    <span>Hôm nay</span>
                    <span>•</span>
                    <span>Ngoài giờ làm việc</span>
                  </>
                )}
              </div>
              <p className="m-0 time_p">
                Khung giờ làm việc: {data.Res_time_open} ~{" "}
                {data.Res_time_closed}
              </p>
              <ReadMore>
                <p className="m-0 time_p">
                  Hãy thường xuyên ghé nhà hàng chúng tôi để biết thêm thông tin
                  khuyến mãi, voucher giảm giá nhé.
                </p>
                <p className="m-0 time_p">
                  Bạn có thể đặt bàn ăn trực tiếp 24/24
                </p>
              </ReadMore>
              <div className="price_range">
                <p className="fs-5 m-0 fw-bold">Mức giá bình quân</p>
                <FontAwesomeIcon icon={faDollarSign} />
                <FontAwesomeIcon icon={faDollarSign} />
                <span className="mx-2 ">•</span>
                <span className="sp_noinfo">~200.000VND</span>
              </div>

              <div className="phone_number mt-3">
                <p className="fs-5 fw-bold m-0">
                  <FontAwesomeIcon icon={faPhoneFlip} className="me-3" />
                  HotLine liên hệ
                </p>
                <span className="m-0 sp_noinfo">{data.Res_phone}</span>
              </div>

              <div className="address mt-3">
                <p className="fs-5 m-0 fw-bold">
                  <FontAwesomeIcon icon={faLocationDot} className="me-3" />
                  Địa chỉ quán
                </p>
                <span className="m-0 sp_noinfo">{data.Res_address}</span>
              </div>

              <div className="other mt-3">
                <p className="fs-5 m-0 fw-bold">Hình thức phục vụ</p>
              </div>

              <div className="btn_order d-flex mt-3">
                <div className="order_food">
                  <button type="button" class="btn btn-warning me-3">
                    <Link
                      className="text-decoration-none text-black"
                      to="/orderFood"
                      element={<OrderFood />}
                      onClick={SetResItem()}
                    >
                      Đặt Online
                    </Link>
                  </button>
                </div>
                <div className="order_table pb-5  ">
                  <button type="button" class="btn btn-info ">
                    <Link
                      className="text-decoration-none text-black"
                      to="/orderTable"
                      element={<OrderTable />}
                      onClick={SetResItem()}
                      data={data}
                    >
                      Đặt bàn
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Detailres;
