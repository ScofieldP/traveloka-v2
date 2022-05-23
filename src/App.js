import './App.css';
import { useState } from 'react';
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Restaurant from './components/restaurant/Restaurant';
import Choice from './components/choiceRes/Choice';
import DetailRes from './components/choiceRes/DetailRes'
import OrderFood from './components/order/orderFood'
import OrderTable from './components/order/orderTable';
import Test from './components/Test'
import data from './components/fakeData/data'
import data1 from './components/fakeData/data1'
import data2 from './components/fakeData/data2'
function App() {
  const {prodcts} = data;
  const {products} = data1;
  const {restaurants} = data2;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product)=>{
    const exist = cartItems.find(x=>x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x)=>
        x.id === product.id ? { ...exist,qty:exist.qty + 1}: x
          )
        );
    }
    else{
      setCartItems([...cartItems, { ...product, qty:1}]);
    }
  };
  const onRemove = (product) =>{
    const exist = cartItems.find(x=>x.id === product.id);
    if (exist.qty === 1 ){
      setCartItems(cartItems.filter((x)=>x.id !== product.id));
    } 
    else{
      setCartItems(cartItems.map ((x)=>
      x.id ===product.id ? { ...exist, qty: exist.qty-1} :x
      )
      );
    }
  }
  return (
   
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/restaurant' element={<Restaurant />} />
    <Route path='/choicerestaurant' element={<Choice restaurants = {restaurants}/>} />
    <Route path='/detailres' element={<DetailRes />} />
    <Route path='/orderFood' element={<OrderFood 
                                          onAdd = {onAdd} 
                                          onRemove = {onRemove}
                                          products ={prodcts} 
                                          drinks ={products} 
                                          cartItems ={cartItems} />} />
    <Route path='/orderTable' element={<OrderTable />} />
    <Route path='/test' element={<Test />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
