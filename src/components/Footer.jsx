import React from "react";

export default function Footer() {

    const currentYear = new Date().getFullYear();
    return (
        <footer className="flex flex-col justify-center items-center pt-10 pb-[52%] sm:py-12 relative">
           
            <div className="flex gap-2 mb-10 order-2 sm:order-1">
                <a
                    href="https://www.facebook.com/mounehwzaytouneh"
                    className="w-10 h-10 bg-[url('/icons/fb.svg')] bg-no-repeat hover:bg-[url('/icons/fb2.svg')] hover:bg-[length:100%] bg-center rounded-full"
                ></a>
                <a
                    href="https://wa.me/96181352620"
                    className="w-10 h-10 bg-[url('/icons/wa.svg')] bg-no-repeat hover:bg-[url('/icons/wa2.svg')] hover:bg-[length:100%] bg-center rounded-full"
                ></a>
                <a
                    href="https://www.instagram.com/mounehwzeytouneh.lb/"
                    className="w-10 h-10 bg-[url('/icons/ig.svg')] bg-no-repeat hover:bg-[url('/icons/ig2.svg')] hover:bg-[length:100%] bg-center rounded-full"
                ></a>
<div className="flex ">
    <a 
        className="w-10 h-10 bg-[url('/icons/phone.svg')] bg-no-repeat bg-center rounded-full"
    ></a>
    <p className="ml-2" style={{fontSize:"18px"}}>+961 81 352 620</p>
</div>


            </div>
            <p className="font-light text-[#74645a] uppercase text-sm text-center order-3">
                © MOUNE W Zaytonue {currentYear} - DEVELOPED BY{" "}
                <span className="text-red-500"><a href="https://www.hadizproductions.com" target="_blank">Hadiz Productions</a></span>
            </p>
            <img
                src="/images/footerbg.jpg"
                alt="footer"
                className="absolute w-full inset-0 h-full object-cover -z-10 sm:hidden"
            />
        </footer>
    );
}
