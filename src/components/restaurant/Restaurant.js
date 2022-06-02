import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";
import Header from "../Header";
export default function Restaurant() {
  return (
    <>
      <Header />
      <section className="main_menu">
        <div className="back_img ">
          <img src="/assets/img/background.png" alt="logo" />
        </div>
        <div className="search_bar">
          <div className="container w-75 shadow-lg px-4 bg-white">
            <div className="row mt-3 py-4">
              <p className="fs-1">Khám phá Nền ẩm thực tuyệt vời</p>
              <div className="col-4 mt-1">
                <p>Location</p>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </span>
                  <input
                    type="text"
                    class="form-control shadow-none border-dark"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
              <div className="col-8 mt-1">
                <p>Cuisine, dish, or Restaurant name</p>
                <div class="input-group mb-3">
                  <span class="input-group-text" id="basic-addon1">
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <input
                    type="text"
                    class="form-control shadow-none border-dark"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </div>
              </div>
            </div>
            <div className="btn_search  d-flex justify-content-end">
              <button type="button" class="btn btn-warning btn-md my-4 ">
                <FontAwesomeIcon icon={faSearch} className="me-2" />
                Search
              </button>
            </div>
          </div>
        </div>
        <div className="about_area">
          <div className="container">
            <div className="row">
              <div className="col-xl-7 col-lg-7">
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
              <div className="col-xl-5 col-lg-5">
                <div className="about_info">
                  <div className="section_title ">
                    <span className="mb-3">
                      <i className="d-flex justify-content-center">
                        Cảm nhận sự tinh tế trên từng món ăn
                      </i>
                    </span>
                    <h3 className="mt-3 fs-2">
                      Sự hài lòng của bạn là niềm TỰ HÀO và MỤC TIÊU của chúng
                      tôi
                    </h3>
                  </div>
                  <p className="mt-3">
                    Chúng tôi - Những con người cùng chí hướng, mục tiêu và hoài
                    bão đem đến sự phục vụ tinh tế, sự trải nghiệm hoàn hảo.
                    Nhanh - đơn giản - tiện lợi - an toàn là Những tiêu chí hàng
                    đầu mà chúng tôi hướng đến. Hãy để chúng tôi - Traveloka
                    Đồng hành cùng bữa cơm của các bạn.
                    <br /> <h4>-Traveloka - Người bạn của sự an toàn-</h4>
                  </p>
                  <a href="#" className="line-button">
                    Tìm hiểu thêm
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popular_food">
          <div className="container w-75">
            <div className="row ">
              <p className="text-center fs-3 fw-bold">Nét riêng Việt Nam</p>
              <div className="col-6">
                <p className="fs-4 fw-bold">Ẩm thực nổi tiếng</p>
                <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                  <div class="col">
                    <img
                      src="/assets/img/nuocmia.jfif"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Nước mía </p>
                  </div>
                  <div class="col">
                    <img src="/assets/img/food-4.png" alt="logo" />
                    <p className="fw-bold">Vietnamese</p>
                  </div>
                  <div class="col">
                    <img src="/assets/img/food-5.png" alt="logo" />
                    <p className="fw-bold">Coffee & Tea</p>
                  </div>
                  <div class="col">
                    <img src="/assets/img/food-7.png" alt="logo" />
                    <p className="fw-bold">Western</p>
                  </div>
                  <div class="col">
                    <img src="/assets/img/food-8.png" alt="logo" />
                    <p className="fw-bold">Asian</p>
                  </div>
                  <div class="col">
                    <img src="/assets/img/food-6.png" alt="logo" />
                    <p className="fw-bold">Desert</p>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <p className="fs-4 fw-bold">Truyền thống người Việt</p>
                <div class="row row-cols-2 row-cols-lg-3 g-2 g-lg-3">
                  <div class="col">
                    <img
                      src="/assets/img/pho.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Phở</p>
                  </div>
                  <div class="col">
                    <img
                      src="/assets/img/hutieu.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Hủ tiếu</p>
                  </div>
                  <div class="col">
                    <img
                      src="/assets/img/comtam.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Cơm tấm</p>
                  </div>
                  <div class="col">
                    <img
                      src="/assets/img/banhmi.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Bánh mì</p>
                  </div>
                  <div class="col">
                    <img
                      src="/assets/img/banhcuon.jpg"
                      alt="logo"
                      style={{ width: "160px", height: "120px" }}
                    />
                    <p className="fw-bold">Bánh cuốn</p>
                  </div>
                  <div class="col">
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
}
