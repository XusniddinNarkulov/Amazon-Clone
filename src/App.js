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
            {/* <SingleProduct /> */}
            <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/login" element={<Login />} />
               <Route path="/register" element={<Register />} />
               <Route path="/products/:id" element={<SingleProduct />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default connect((s) => s, { setUser })(App);
