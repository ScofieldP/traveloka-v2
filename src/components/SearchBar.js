import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { CONNECTION_STRING } from "../config/index";
const SearchBar = () => {
  const [res, setRes] = useState("");
  const [food, setFood] = useState("");
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
        localStorage.setItem("listRes", JSON.stringify(res.data.rows));
      } catch (err) {
        if (err.response && err.response.data.errorMessage)
          console.log(err.response.data.errorMessage);
        return;
      }
    } else {
      try {
        const food = await Axios.post(
          CONNECTION_STRING + `/search/food`,
          foodData
        );
        localStorage.setItem("food", JSON.stringify(food.data.rows));
      } catch (err) {
        if (err.response && err.response.data.errorMessage)
          console.log(err.response.data.errorMessage);
        return;
      }
    }
    if (window.location.pathname === "/choicerestaurant") {
      navigate(0);
    } else navigate("/choicerestaurant");
  }
  return (
    <div className="search_bar">
      <div className="container w-75 shadow-lg px-4 bg-white">
        <form onSubmit={Search}>
          <div className="row mt-3 py-4">
            <p className="fs-1">Khám phá nền ẩm thực đa dạng và phong phú</p>
            <div className="col-4 mt-1">
              <p>Món ăn</p>
              <div className="input-group mb-3 position-static">
                <label
                  className="input-group-text position-static"
                  id="basic-addon1"
                  htmlFor="food"
                >
                  <FontAwesomeIcon icon={faLocationDot} />
                </label>
                <input
                  type="text"
                  className="form-control shadow-none border-dark position-static"
                  placeholder="Nhập món ăn "
                  onChange={(e) => setFood(e.target.value)}
                  id="food"
                />
              </div>
            </div>
            <div className="col-8 mt-1">
              <p>Địa điểm, tên nhà hàng</p>
              <div className="input-group mb-3 position-static">
                <label
                  className="input-group-text position-static"
                  id="basic-addon1"
                  htmlFor="name"
                >
                  <FontAwesomeIcon icon={faSearch} />
                </label>
                <input
                  type="text"
                  className="form-control shadow-none border-dark position-static"
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
  );
};

export default SearchBar;
