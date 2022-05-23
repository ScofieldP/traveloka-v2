import React from 'react'
import {useState, useEffect} from 'react';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import IncrementButton from '.././quantity/IncrementButton';
import DecrementButton from '.././quantity/DecrementButton';
import Display from '.././quantity/display';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function Food(props) {
  //thư mục quantity
 //số lượng tăng, giảm
const [counter, setCounter] = useState(1);
const incrementCounter = () => setCounter(counter + 1);
let decrementCounter = () => setCounter(counter - 1);
if(counter<=1) {
 decrementCounter = () => setCounter(1);
}


//modal
const [modalIsOpen, setIsOpen] = React.useState(false);
function openModal() {
  setIsOpen(true);
}
function closeModal() {
  setIsOpen(false);
}
  const {product, onAdd} = props;
    return (
      <div className="row mt-3 border border-dark rounded-3">
        <div className="col-3 p-0">
          <img src={product.img} alt="" style={{width:'180px', height:'180px'}}/>
        </div>
          <div className = "col-7">
            <div className="food_detail">
              {/* Tên món ăn */}
            <p className ="fw-bold fs-4">{product.title}</p>
            {/* Mô tả */}
          <p className ="mb-0">{product.description}</p>
          {/* Giá tiền */}
          <p className ="m-0">{product.price}</p>
          <p><FontAwesomeIcon icon={faShoppingCart}  /> 100+</p>
            </div>      
      </div>
      <div className="col-2 ">
          <p className="add_btn" onClick={openModal}> Xem chi tiết</p>
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal">
        <button onClick={closeModal}>close</button>
        <div className="container">
        <div className="row border border-dark">
            {/* Thêm vào giỏ hàng */}
            <div className="col-6 ">
                {
                  product.details && product.details.map(detail=>{
                    return(
                      <>
                        <div className="row mt-3 border border-dark rounded-3">
                          <div className="col-3 p-0">
                            <img src={detail.img} alt="" style={{width:'180px', height:'180px'}}/>
                          </div>
                          <div className = "col-7">
                            <div className="food_detail">
                              {/* Tên món ăn */}
                            <p className ="fw-bold fs-4">{detail.detailTitle}</p>
                            {/* Mô tả */}
                          <p className ="mb-0">{detail.description}</p>
                          {/* Giá tiền */}
                          <p className ="m-0">{detail.price}</p>
                          <p><FontAwesomeIcon icon={faShoppingCart}  /> 100+</p>
                            </div>
                          </div>
                          <div className="col-2 ">
                            <button onClick = {() => onAdd(detail)}>Add</button>
                            </div>
                        </div>
                      </>
                      
                      
                    )
                  })
                }
              </div>
              <div className="col-6 ">
                {
                  product.details && product.details.map(detail=>{
                    return(
                      <>
                        <div className="row mt-3 border border-dark rounded-3">
                          <div className="col-3 p-0">
                            <img src={detail.img} alt="" style={{width:'180px', height:'180px'}}/>
                          </div>
                          <div className = "col-7">
                            <div className="food_detail">
                              {/* Tên món ăn */}
                            <p className ="fw-bold fs-4">{detail.detailTitle}</p>
                            {/* Mô tả */}
                          <p className ="mb-0">{detail.description}</p>
                          {/* Giá tiền */}
                          <p className ="m-0">{detail.price}</p>
                          <p><FontAwesomeIcon icon={faShoppingCart}  /> 100+</p>
                            </div>
                          </div>
                          <div className="col-2 ">
                            <FontAwesomeIcon icon={faCirclePlus} className="add_btn"/>
                          </div>
                        </div>
                      </>
                      
                      
                    )
                  })
                }
              </div>    
        </div>
        </div>
        {/* Nút thêm */}
        <button type="button" className="btn btn-primary w-100 mt-2">Xác nhận</button>
        </Modal>
      </div>
      </div>  
                              
  )
}
