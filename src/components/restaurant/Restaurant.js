import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../SearchBar";
import Footer from "../Footer";
import Header from "../Header";

const Restaurant = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (window.location.pathname !== "/restaurant") {
      navigate("/restaurant");
    }
  }, []);

  return (
    <>
      <Header />
      <section className="main_menu">
        <div className="col-12 ">
          <img src="/assets/img/background.png" alt="logo" />
        </div>
        <SearchBar />
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
