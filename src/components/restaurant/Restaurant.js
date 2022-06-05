import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import Footer from "../Footer";
import Header from "../Header";
import { CONNECTION_STRING } from "../../config/index";
const Restaurant = () => {
  const [res, setRes] = useState("");
  const [food, setFood] = useState("");
  const [data, setdata] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  async function Search(e) {
    e.preventDefault();

    const resData = {
      keyfind: res ? res : "",
    };
    const foodData = {
      keyfind: food ? food : "",
    };
    if (res !== "") {
      try {
        const res = await Axios.post(
          CONNECTION_STRING + "/search/restaurant",
          resData
        );
        localStorage.setItem("res", JSON.stringify(res.data.rows));
      } catch (err) {
        if (err.response && err.response.data.errorMessage)
          setErrorMessage(err.response.data.errorMessage);
        return;
      }
    } else {
      try {
        console.log(foodData);
        const food = await Axios.post(
          CONNECTION_STRING + `/search/food`,
          foodData
        );
        localStorage.setItem("food", JSON.stringify(food.data.rows));
      } catch (err) {
        if (err.response && err.response.data.errorMessage)
          setErrorMessage(err.response.data.errorMessage);
        return;
      }
    }
    navigate("/choicerestaurant");
  }
  return (
    <>
      <Header />
      <section className="main_menu">
        <div className="back_img ">
          <img src="/assets/img/background.png" alt="logo" />
        </div>
        <div className="search_bar">
          <div className="container w-75 shadow-lg px-4 bg-white">
            <form onSubmit={Search}>
              <div className="row mt-3 py-4">
                <p className="fs-1">
                  Khám phá nền ẩm thực đa dạng và phong phú
                </p>
                <div className="col-4 mt-1">
                  <p>Món ăn</p>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-text"
                      id="basic-addon1"
                      htmlFor="food"
                    >
                      <FontAwesomeIcon icon={faLocationDot} />
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-none border-dark"
                      placeholder="Nhập món ăn "
                      onChange={(e) => setFood(e.target.value)}
                      id="food"
                    />
                  </div>
                </div>
                <div className="col-8 mt-1">
                  <p>Địa điểm, tên nhà hàng</p>
                  <div className="input-group mb-3">
                    <label
                      className="input-group-text"
                      id="basic-addon1"
                      htmlFor="name"
                    >
                      <FontAwesomeIcon icon={faSearch} />
                    </label>
                    <input
                      type="text"
                      className="form-control shadow-none border-dark"
                      placeholder="Nhập địa điểm, nhà hàng bạn mong muốn tìm"
                      onChange={(e) => setRes(e.target.value)}
                      id="name"
                    />
                  </div>
                </div>
              </div>
              <div className="btn_search  d-flex justify-content-end">
                <button type="submit" className="btn btn-warning btn-md my-4 ">
                  <FontAwesomeIcon icon={faSearch} className="me-2" />
                  Tìm kiếm
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="about_area">
          <div
            className="container "
            style={{ borderRadius: "15px", backgroundColor: "antiquewhite" }}
          >
            <div className="content_top mt-3">
              <div className="heading">
                <h2 className="text-center py-4 fw-bold ">
                  ĐÔI NÉT VỀ TRAVELOKA
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col7 col-lg-7">
                <div className="about_thumb d-flex">
                  <div className="img_1">
                    <img
                      src="assets/img/food-1.png"
                      alt=""
                      style={{ width: "294px", height: "400px" }}
                    />
                  </div>
                  <div className="img_2">
                    <img
                      src="assets/img/food-2.png"
                      alt=""
                      style={{ width: "294px", height: "400px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-5 border border-dark bg-white">
                <div className="about_info">
                  <div className="section_title ">
                    <span className="mb-3">
                      <i className="d-flex justify-content-center">
                        Cảm nhận sự tinh tế trên từng món ăn
                      </i>
                    </span>
                    <h3 className="mt-3 fs-2">
                      Sự hài lòng của bạn là niềm <br />{" "}
                      <b style={{ color: "#51BBED" }}>TỰ HÀO</b> và{" "}
                      <b style={{ color: "#51BBED" }}>MỤC TIÊU</b> của{" "}
                      <b style={{ color: "#51BBED" }}>Traveloka</b>
                    </h3>
                  </div>
                  <p className="mt-3 ">
                    <b style={{ color: "#51BBED" }}>Traveloka</b> - Đem đến cho
                    khách hàng những dịch vụ tốt nhất
                    <ul className="fs-5">
                      <li>Phục vụ tinh tế, sự trải nghiệm hoàn hảo</li>
                      <li> Nhanh - đơn giản - tiện lợi - an toàn</li>
                    </ul>
                    <p className="fs-5">
                      {" "}
                      Đây là những tiêu chí hàng đầu mà chúng tôi hướng đến.
                    </p>
                    <p className="fs-5">
                      Hãy để <b style={{ color: "#51BBED" }}>Traveloka</b> -
                      Dịch vụ đồng hành cùng những bữa ăn của bạn.
                    </p>
                    <h4
                      style={{ color: "#51BBED", fontWeight: "bold" }}
                      className="d-flex justify-content-end"
                    >
                      Traveloka - Người bạn của sự an toàn
                    </h4>
                  </p>
                  <h5
                    href="#"
                    className="line-button d-flex justify-content-end "
                    style={{
                      color: "#51BBED",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Tìm hiểu thêm
                  </h5>
                </div>
              </div>
            </div>
            <div className=" d-flex justify-content-center py-5 "></div>
          </div>
        </div>
        <div className="popular_food">
          <div className="container w-75">
            <div className="row ">
              <p className="text-center fs-3 fw-bold">Nét riêng Việt Nam</p>
              <div className="col-6">
                <p className="fs-4 fw-bold">Ẩm thực nổi tiếng</p>
                <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                  <div className="col">
                    <img
                      src="/assets/img/nuocmia.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Nước mía </p>
                  </div>
                  <div className="col">
                    <img
                      src="/assets/img/caphetrung.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Cà phê trứng</p>
                  </div>
                  <div className="col">
                    <img
                      src="/assets/img/cari.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Cà ri</p>
                  </div>
                  <div className="col">
                    <img src="/assets/img/food-7.png" alt="logo" />
                    <p className="fw-bold">Hamburger</p>
                  </div>
                  <div className="col">
                    <img
                      src="/assets/img/sapagetti.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Sapagetti</p>
                  </div>
                  <div className="col">
                    <img
                      src="/assets/img/pizza.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Pizza</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <p className="fs-4 fw-bold">Truyền thống người Việt</p>
                <div className="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                  <div className="col">
                    <img
                      src="/assets/img/pho.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Phở</p>
                  </div>
                  <div className="col">
                    <img
                      src="/assets/img/hutieu.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Hủ tiếu</p>
                  </div>
                  <div className="col">
                    <img
                      src="/assets/img/comtam.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Cơm tấm</p>
                  </div>
                  <div className="col">
                    <img
                      src="/assets/img/banhmi.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Bánh mì</p>
                  </div>
                  <div className="col">
                    <img
                      src="/assets/img/banhcuon.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Bánh cuốn</p>
                  </div>
                  <div className="col">
                    <img
                      src="/assets/img/bunbo.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Bún bò</p>
                  </div>
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
export default Restaurant;
