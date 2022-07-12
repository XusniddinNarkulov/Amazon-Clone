// import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

function App() {
   return (
      <BrowserRouter>
         <div className="App">
            <Header /> 
            <Routes>
               <Route path="/" element={<Home />} />
            </Routes>
         </div>
      </BrowserRouter>
   );
}

export default App;
