import React from 'react'

export default function Food(props) {
  const {product} = props;
    return (
    <div>
        <img src = {product.img} alt="food"/>
        <h3>{product.title}</h3>
    </div>
  )
}
