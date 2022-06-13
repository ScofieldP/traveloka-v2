import React from "react";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Food(props) {
  const { food, onAdd } = props;
  return (
    <div className="row mt-3 border border-dark rounded-3">
      <div className="col-3 p-0">
        <img
          src={food.Fd_image}
          alt=""
          style={{ width: "180px", height: "200px" }}
        />
      </div>
      <div className="col-7">
        <div className="food_detail my-4 ms-4">
          {/* Tên món ăn */}
          <p className="fw-bold fs-4">{food.Fd_name}</p>
          {/* Mô tả */}
          <p className="mb-0">Miêu tả: {food.Fd_description}</p>
          {/* Giá tiền */}
          <p className="m-0"> Giá: {food.Fd_price}</p>
          <p className="m-0">
            {" "}
            Tình trạng: {food.Fd_foodStatus ? <>Đang bán</> : <>Tạm đóng</>}
          </p>
          <p>
            <FontAwesomeIcon icon={faShoppingCart} /> 100+
          </p>
        </div>
      </div>
      {food.Fd_foodStatus && (
        <div className="col-2 ">
          <FontAwesomeIcon
            icon={faCirclePlus}
            className="add_btn"
            onClick={() => onAdd(food)}
          />
        </div>
      )}
    </div>
  );
}
