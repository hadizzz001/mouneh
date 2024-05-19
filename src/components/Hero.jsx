"use client";
import React, { useRef } from "react";
import Menu from "./Menu";
import { useInViewport } from 'react-in-viewport';
import { cn } from "../utils";

export default function Hero() {
    const heroRef = useRef();
    const { inViewport } = useInViewport(
        heroRef,
    );
    return (
        <header ref={heroRef} className="h-[110vh] lg:h-screen flex flex-col items-center relative overflow-hidden text-primary">
            <img
                src={"/images/herobg.jpg"}
                className="-z-20 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-cover min-h-full w-full"
                alt=""
            />
            <div className="absolute inset-0 -z-10 bg-black/40"></div>

            <Menu variant={"hero"} className={cn(!inViewport && "fixed z-50 top-0 left-0 right-0 w-full bg-primary")} mini={!inViewport}/>
             
            <img
                src={"/icons/scroll-icon.png"}
                className="mt-40 cursor-pointer sm:hidden"
                alt=""
                onClick={() => window.scrollTo(0, window.innerHeight)}
            />
        </header>
    );
}
