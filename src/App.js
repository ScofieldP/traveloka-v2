import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Restaurant from "./components/restaurant/Restaurant";
import Choice from "./components/choiceRes/Choice";
import DetailRes from "./components/choiceRes/DetailRes";
import OrderFood from "./components/order/Food/orderFood";
import OrderTable from "./components/order/Table/orderTable";
import data from "./components/fakeData/data";
import data1 from "./components/fakeData/data1";
import data2 from "./components/fakeData/data2";
import Payment from "./components/payment/Payment";
function App() {
  const { prodcts } = data;
  const { products } = data1;
  const { restaurants } = data2;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.Fd_id === product.Fd_id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.Fd_id === product.Fd_id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.Fd_id === product.Fd_id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.Fd_id !== product.Fd_id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.Fd_id === product.Fd_id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <Routes>
      <Route path="/" element={<Restaurant />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/restaurant" element={<Restaurant />} />
      <Route
        path="/choicerestaurant"
        element={<Choice restaurants={restaurants} />}
      />
      <Route path="/detailres" element={<DetailRes />} />
      <Route
        path="/orderFood"
        element={
          <OrderFood
            onAdd={onAdd}
            onRemove={onRemove}
            products={prodcts}
            drinks={products}
            cartItems={cartItems}
          />
        }
      />
      <Route
        path="/orderTable"
        element={
          <OrderTable
            onAdd={onAdd}
            onRemove={onRemove}
            products={prodcts}
            drinks={products}
            cartItems={cartItems}
          />
        }
      />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
