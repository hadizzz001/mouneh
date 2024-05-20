"use client"

import { cn } from "../utils";
import { useState, useEffect } from "react"; 
import CartIcon from '../components/CartIcon';
import CartModal from '../components/CartModal';



export default function Menu({ className, variant, mini }) {





    return (
        <div className={cn("w-full flex justify-center items-center gap-32 text-[#74645a]", variant === "hero" && !mini && "text-white pt-10", mini && "!text-[#74645a]", className)}>
            <a href="/" className="text-xl uppercase lg:hidden">Home</a>
            <a href="/products" className="text-xl uppercase lg:hidden">
                Products
            </a>
            <img id="mylogo123" src={variant === "hero" && !mini ? "/icons/logo white.png" : "/icons/logo (2).png"} alt="" className={cn("w-20", variant === "hero" && !mini && "w-100")} />
            <a href="/about-us" className="text-xl uppercase lg:hidden">About</a>
            <a href="/contact-us" className="text-xl uppercase lg:hidden">
                Contact
            </a>
            <a className="text-xl uppercase lg:hidden">
            <CartIcon />
            </a>
            
            <CartModal />

            {/* mobile */}
            <div   className={cn("fixed z-40 bottom-0 w-full bg-[#ece3d9] h-20 hidden lg:block mobNav", variant === "hero" && "absolute")}></div>
            <div className={cn("fixed z-50 bottom-0 w-full justify-around text-orange-950/60 font-black h-20 items-center gap-3 hidden lg:flex mobNav", variant === "hero" && "absolute")}>
                <a href="/" className="text-xl uppercase" style={{fontSize: "13px"}}>Home</a>
                <a href="/products" className="text-xl uppercase" style={{fontSize: "13px"}}>Products</a>
                <a href="/about-us" className="text-xl uppercase" style={{fontSize: "13px"}}>About</a>
                <a href="/contact-us" className="text-xl uppercase" style={{fontSize: "13px"}}>Contact</a>
                <a className="text-xl uppercase" style={{fontSize: "13px"}}><CartIcon /></a>
            </div>
        </div>
    );
}
