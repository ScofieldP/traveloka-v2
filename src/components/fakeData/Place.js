import React from 'react'
import { Link } from 'react-router-dom';
import Detailres from '../choiceRes/DetailRes';

export default function Place(props) {
  const {restaurant} = props
  return (
    <Link className="authc" to = "/detailres" element = {<Detailres/>}>

<div className="row border border-dark rounded-3">
    
    <div className="col-4 ps-0">
    <img src={restaurant.img} alt="" style={{width:'200px', height:'200px'}}/>
    </div>
    <div className="col-6">
        <p className="mt-3 mb-0">
            {restaurant.title}
        </p>
        <p className="fw-bold fs-3 m-0">
            {restaurant.foodTitle}
        </p>
        <p className="fs-6">
            {restaurant.price}  
        </p>
        <p className="m-0">
            {restaurant.open}
        </p>
    </div>

</div> 
    </Link>

    
        )
}
