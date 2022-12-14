import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import Footer from '../../components/Footer/Footer';
import CheckoutPage from '../../pages/CheckoutPage/CheckoutPage';
import ShopList from '../ShopList/ShopList';
import Shop from "../Shop/Shop";
import ShopDetail from "../ShopDetail/ShopDetail";
import OrderHistory from "../OrderHistory/OrderHistory";


export default function App() {
  const [user, setUser] = useState(getUser());



  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/checkout" element={<CheckoutPage user={user} setUser={setUser}/>} />
            <Route path="/items" element={<ShopList user={user} setUser={setUser} />} />
            <Route path="/yourshop" element={<Shop user={user} setUser={setUser} />} />
            <Route path="/history" element={<OrderHistory user={user} setUser={setUser} />} />
            <Route path="/shopdetail" element={<ShopDetail />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
      <Footer />
    </main>
  );
}
