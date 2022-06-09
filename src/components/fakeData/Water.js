import React from 'react'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function Water(props) {



    const {drink, onAdd} = props;
  return (
    <div className="row mt-3 border border-dark rounded-3">
        <div className="col-3 p-0">
          <img src={drink.img} alt="" style={{width:'180px', height:'180px'}}/>
        </div>
          <div className = "col-7">
            <div className="food_detail">
              {/* Tên món ăn */}
            <p className ="fw-bold fs-4">{drink.title}</p>
            {/* Mô tả */}
          <p className ="mb-0">{drink.description}</p>
          {/* Giá tiền */}
          <p className ="m-0">{drink.price}</p>
          <p><FontAwesomeIcon icon={faShoppingCart}  /> 100+</p>
            </div>
          </div>
      <div className="col-2 ">
      <FontAwesomeIcon 
        icon={faCirclePlus} 
        className="add_btn"
        onClick = {() => onAdd(drink)}/>       
      </div>
      </div>  
  )
}
