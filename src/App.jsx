import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Gift from "./components/Gift";
import Order from "./components/Order";
import Home from "./components/Home";
import { Footer } from "./components/Footer";

const App = () => {
    return (
       <div>
        <Navbar/> 
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/gift" element={<Gift/>} />
        <Route path="/order" element={<Order/>} />
        </Routes>
        <Footer/>
       </div>
    );
};

export default App;
