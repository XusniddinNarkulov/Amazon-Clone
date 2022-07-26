// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import { setUser } from "./redux/action";
import { connect } from "react-redux";
import { useEffect } from "react";
import { auth } from "./utils/firebase";
import SingleProduct from "./pages/SingleProduct/SingleProduct";
import Checkout from "./pages/Checkout/Checkout";
import Payment from "./pages/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
   "pk_test_51LPF0TGXO1k80Ua2IA0ch7Ero9DiAB8p4LcxwiozlteKm97j8gvmE41Rzc66R1nvtfzopvjWuC0JX5QBYrtBd63O00iBSxVd76"
);

function App(props) {
   const { setUser } = props;

   useEffect(() => {
      auth.onAuthStateChanged((authUser) => {
         if (authUser) {
            setUser(authUser);
         } else {
            setUser(null);
         }
      });
   }, [setUser]);

   return (
      <BrowserRouter>
         <div className="App">
            <Header />

            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/products/:id" element={<SingleProduct />} />
               <Route path="/checkout" element={<Checkout />} />
               <Route
                  path="/payment"
                  element={
                     <Elements stripe={promise}>
                        <Payment />
                     </Elements>
                  }
               />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default connect((s) => s, { setUser })(App);
