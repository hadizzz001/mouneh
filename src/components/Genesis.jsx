/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function Genesis() {
    return (
        <section className="relative bg-[url('/images/genesisbg.webp')] bg-no-repeat min-h-[510px] bg-[length:2560px_605px] bg-center sm:bg-none sm:bg-[#ecb656]">
            <img src="/images/genesisbg_mobile.webp" className="w-full hidden sm:block"/>
            <div className="p-[80px_40px_70px] sm:py-12 sm:px-6 text-center w-[530px] mx-auto sm:w-fit">
                <h3 className="text-3xl uppercase font-black text-primary mb-9">
                    The genesis
                </h3>
                <p className="block mb-2 text-[17px] sm:text-xl leading-5 font-light text-primary">
                Nestled at the base of Lebanon's Western Bekaa, lies the picturesque villages of Rachaya, a serene landscape where nature's bounty thrives. It is here, amidst the rolling hills and fertile soil that the journey of MounehWZeytouneh began. Our passion for preserving the timeless traditions of Lebanese cuisine is infused into every jar of Labneh, every jar of olives, every spoonful of jams, and every drop of fragrant flower water we meticulously craft.
                </p>
                <p className="block mb-2 text-[17px] sm:text-xl leading-5 font-light text-primary">
                At MounehWZeytouneh, we believe in honoring the essence of our heritage, embracing the art of artisanal production, and celebrating the richness of our land. Each ingredient is lovingly handpicked, ensuring only the finest quality reaches your home. Our commitment to excellence has saved us a real reputation, cherished by those who seek authenticity and flavor in every bite.
                </p>
                <p className="block mb-2 text-[17px] sm:text-xl leading-5 font-light text-primary">
                Yet, beyond the delicious products we offer, there beats a heart of purpose within our endeavor. Our mission extends beyond mere commerce; it is a dedication to empowerment. Central to our vision is the upliftment of women in the villages, providing them with opportunities to cultivate the land and cultivate their own destinies. Through our business, we strive to foster sustainable growth, nurturing both the land and the communities that call it home.
                </p>
                <p className="block mb-2 text-[17px] sm:text-xl leading-5 font-light text-primary">
                Join us on a journey that transcends taste; experience the spirit of Lebanon, bottled with love, and shared with the world.
                </p>
            </div>
        </section>
    );
}
