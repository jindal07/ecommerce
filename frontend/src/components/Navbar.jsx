import React, { useContext } from "react";
import { useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link,NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

function Navbar() {
     const [visible, setVisible] =useState(false);
     const {setShowSearch}=useContext(ShopContext);
  return (
    
    <div className="flex items-center justify-between  py-5 rounded-xl font-medium bg-white shadow-md px-5 sm:px-10">
      <Link to='/'> <img src={assets.logo} className="w-36" alt="logo" /></Link>
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        <NavLink
          to="/"
          className="flex flex-col items-center gap-1 hover:text-gray-900"
        >
          <p>Home</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
         <NavLink
          to="/collection"
          className="flex flex-col items-center gap-1 hover:text-gray-900"
        >
          <p>Collections</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
         <NavLink
          to="/about"
          className="flex flex-col items-center gap-1 hover:text-gray-900"
        >
          <p>About</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink
          to="/contact"
          className="flex flex-col items-center gap-1 hover:text-gray-900"
        >
          <p>Contact</p>
          <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
       
       
      </ul>
      <div className="flex items-center gap-5">
        <img
        onClick={()=>setShowSearch(prev=>!prev)}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt="search-icon"
        />
        <div className="group relative">
          <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="profile-icon"/>
          <div className="group-hover:block hidden absolute dropdown-menu pt-4 right-0 bg-white shadow-md rounded-lg ">
            <div className="flex flex-col gap-2 w-36 px-5 py-3 text-gray-700 bg-slate-100 rounded-lg">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">LogOut</p>
            </div>
          </div>
        </div>
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 cursor-pointer" alt="cart-icon" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 rounded-full leading-4  bg-black text-white text-center aspect-square text-[8px]">10 </p>
        </Link>
        <img  onClick={()=>setVisible(true)} src={assets.menu_icon} alt="menu" className="w-5 cursor-pointer sm:hidden" />
      </div>

      {/* side bar for small screen */}
      <div className={`absolute rounded-2xl mt-1.5  top-0 bottom-0 overflow-hidden bg-white transition-all ${visible?'w-full':'w-0'} `}>
        <div className="flex flex-col text-gray-600">
            <div onClick={()=>setVisible(false)} className="flex items-center gap-4 p-3 cursor-pointer hover:bg-gray-100">
                <img className="h-4 rotate-180" src={assets.dropdown_icon} alt="dropdown icon" />
                <p>Back</p>
            </div>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/collection'>Collection</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
            <NavLink onClick={()=>setVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
