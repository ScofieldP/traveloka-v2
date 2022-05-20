import React from 'react';
import {useState, useEffect} from 'react';
import { Navbar,Container,Nav,NavDropdown,Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Login from ".././auth/Login";
import Register from ".././auth/Register";
import {TabContainer,Row, Col, Tab, Tabs} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';
import IncrementButton from '.././quantity/IncrementButton';
import DecrementButton from '.././quantity/DecrementButton';
import Display from '.././quantity/display';
import data from '../fakeData/data'
import Food from '../fakeData/Food'
import Header from '../Header';
//modal
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
export default function OrderFood  (props) {
    const {products} = props;
    return (
        <>
        <Header/>
        

        <section className="main_container">
        <div className="container">
          <h2 className="text-center my-5 font_title">  Our Restaurant Menu</h2>
        <Tabs id="controlled-tab-example" className="mb-3 justify-content-center">
          <Tab eventKey="food" title="Food">
            <div className="row">
            <div className="col-6">
                {products.map((product)=>(
                  <Food key={product.id} product={product} />
                ))}
              </div>
              <div className ="col-6">
              askldjaslkdklsakl
            </div>
            </div>

          </Tab>
          <Tab eventKey="drink" title="Drink">
            
          </Tab>
          <Tab eventKey="dessert" title="Dessert" >
            
          </Tab>
        </Tabs>
        </div>
      
        </section>
        </>
    );

}

//    //thư mục quantity
//     //số lượng tăng, giảm
//   const [counter, setCounter] = useState(1);
//   const incrementCounter = () => setCounter(counter + 1);
//   let decrementCounter = () => setCounter(counter - 1);
//   if(counter<=1) {
//     decrementCounter = () => setCounter(1);
//   }

  
//    //modal
//    const [modalIsOpen, setIsOpen] = React.useState(false);
//    function openModal() {
//      setIsOpen(true);
//    }
//    function closeModal() {
//      setIsOpen(false);
//    }
//  const {foods} = data;

//   const [drinks, setDrinks] = useState([
//     {
//         id:1,
//         title: 'Fried Chicken',
//         description: 'Cho nhiều người',
//         price: '500.000VND',
//         img:"./assets/img/food-13.png",
//     },
//     {
//         id:2,
//         title: 'Fried Chicken',
//         description: 'Cho nhiều người',
//         price: '500.000VND',
//         img:"./assets/img/food-13.png",
//     },
//     {
//         id:3,
//         title: 'Fried Chicken',
//         description: 'Cho nhiều người',
//         price: '500.000VND',
//         img:"./assets/img/food-13.png",
//     },
//     {       
//         id:4,
//         title: 'Fried Chicken',
//         description: 'Cho nhiều người',
//         price: '500.000VND',
//         img:"./assets/img/food-13.png",
//     },
// ]);
//     const displayDrink = drinks
//     .map((drink) =>{
//         return(
//         <>
//         <div className="row mt-3 border border-dark rounded-3">
//                             <div className="col-3 p-0">
//                                 <img src={drink.img} alt="" style={{width:'180px', height:'180px'}}/>
//                             </div>
//                             <div className = "col-7">
//                                 <div className="food_detail">
//                                 <p className ="fw-bold fs-4">
//                                     {drink.title}
//                                 </p>
//                                 <p className ="mb-0">
//                                     {drink.description}
//                                 </p>
//                                 <p className ="m-0">
//                                     {drink.price}
//                                 </p>
//                                 <p><FontAwesomeIcon icon={faShoppingCart}  /> 100+</p>
//                                 </div>
                                
//                             </div>
//                             <div className="col-2 ">
//                                 <FontAwesomeIcon icon={faCirclePlus} className="add_btn" onClick={openModal}/>
//                                     <Modal
//                                     isOpen={modalIsOpen}
//                                     onRequestClose={closeModal}
//                                     style={customStyles}
//                                     contentLabel="Example Modal">
//                                     <button onClick={closeModal}>close</button>
//                                     <div className="container">
//                                     <div className="row border border-dark">
//                                         {/* Thêm vào giỏ hàng */}
//                                         <div className="col-9 ">
//                                                 <div className="row px-4 py-4">
//                                                     <div className="col-3">
//                                                         <img src={drink.img} alt="" style={{width:'150px', height:'150px'}}/>
//                                                     </div>
//                                                     <div className = "col-7 ms-5 mt-3">
//                                                         <p className ="fs-4 fw-bold">
//                                                             {drink.title}
//                                                         </p>
//                                                         <p className ="mb-0">
//                                                             {drink.description}
//                                                         </p>
//                                                         <p className ="m-0">
//                                                             {drink.price}
//                                                         </p>
//                                                     </div>
//                                                 </div>
                                                
//                                             </div>
//                                             <div className="col-3 ">
//                                                 <div className="btns">
//                                                 <DecrementButton onClickFunc={decrementCounter}/> 
//                                                 <Display message={counter}/> 
//                                                 <IncrementButton onClickFunc={incrementCounter}/>  
//                                                 </div>
                                                
//                                             </div>
//                                             </div>
//                                     </div>
//                                     {/* Nút thêm */}
//                                     <button type="button" className="btn btn-primary w-100 mt-2">Thêm vào giỏ hàng</button>
//                                     </Modal>
//                             </div>
//         </div>

//         </>   
//         )
//     });
    