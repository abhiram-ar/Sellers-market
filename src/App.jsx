import { Outlet } from "react-router-dom";
import Footer from "./Components/Home/Footer";
import Navbar from "./Components/Home/Navbar";

export default function App() {
  return (
   <div className="bg-[#f2f4f5]">
    <Navbar/>
    <Outlet/>
    <Footer/>
   </div> 
  )
}