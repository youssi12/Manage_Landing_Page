import {Menu,X} from "lucide-react"
import logo from "../assets/images/logo.svg";
import { useState } from "react";


export default function Navbar() {

    const [menu,setMenu] = useState(false);
    const handleMenu =()=>{
        setMenu(!menu); 
    }

 return (
    <div className="w-full fixed top-0 left-0 z-50 px-4 mt-3 ">
  <div className="w-full flex items-center justify-between mx-auto relative max-w-[1200px] ">
    
   
    {/* Logo */}
    <div className="w-20 h-10 flex items-center scale-120 mr-4 z-10">
      <img src={logo} alt="logo" />
    </div>

    {/* Menu buttons */}
    {menu ? (
      <X className="md:hidden z-10" onClick={handleMenu} />
    ) : (
      <Menu className="md:hidden z-10" onClick={handleMenu} />
    )}

    {/* Dropdown */}
    {menu && (
      <>
        <div
          className="fixed inset-0 bg-black/10 z-20"
          onClick={handleMenu}
        ></div>
        <div className="bg-white absolute top-10 w-full p-7 font-medium text-center mt-4 rounded-md shadow-black/10 shadow-xl md:hidden z-20">
          <ul className="space-y-4">
            <li><a href="###">Pricing</a></li>
            <li><a href="###">Product</a></li>
            <li><a href="###">About Us</a></li>
            <li><a href="###">Careers</a></li>
            <li><a href="###">Community</a></li>
          </ul>
        </div>
      </>
    )}

    {/* Normal menu */}
    <ul className="hidden md:flex items-center gap-4 mx-7 lg:gap-8 z-10">
      <li>Pricing</li>
      <li>Product</li>
      <li>About Us</li>
      <li>Careers</li>
      <li>Community</li>
    </ul>
    <button className="hidden md:bg-primary-orange py-2 px-4 rounded-full md:inline z-10">
      Get Started
    </button>
  </div>
</div>

 )
}
