import './App.css';
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
import data from './components/fakeData/data'
import data1 from './components/fakeData/data1'
function App() {
  const {prodcts} = data;
  const {products} = data1;
  return (
   
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/restaurant' element={<Restaurant />} />
    <Route path='/choicerestaurant' element={<Choice />} />
    <Route path='/detailres' element={<DetailRes />} />
    <Route path='/orderFood' element={<OrderFood products ={prodcts} drinks ={products}/>} />
    <Route path='/orderTable' element={<OrderTable />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
