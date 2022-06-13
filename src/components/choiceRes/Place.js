import React from "react";
import { Link } from "react-router-dom";

export default function Place(props) {
  const { restaurant } = props;
  return (
    <Link className="authc" to="/detailres" state={{ data: restaurant }}>
      <div className="row border border-dark rounded-3">
        <div className="col-4 ps-0">
          <img
            src={restaurant.Res_image}
            alt=""
            style={{ width: "200px", height: "200px" }}
          />
        </div>
        <div className="col-6">
          <p className="mt-3 mb-0">Nhà hàng 5 sao</p>
          <p className="fw-bold fs-3 m-0">{restaurant.Res_name}</p>
          <p className="fs-6">Địa chỉ: {restaurant.Res_address}</p>
          <p className="m-0">
            Thời gian mở hoạt động: *{restaurant.Res_time_open} ~{" "}
            {restaurant.Res_time_closed}
          </p>
        </div>
      </div>
    </Link>
  );
}
