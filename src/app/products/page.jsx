"use client"

 
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import Section from "../../components/Section";
import { React, useEffect, useState } from "react";
import { fetchTemp } from '../../utils/index' 

export default function ProductsPage() {
    const [allTemp, setTemp] = useState()




    const a = async () => {
        const b = await fetchTemp()
        setTemp(b) 
    }
    useEffect(() => {
        a()
    }, [])


    useEffect(() => {
        console.log(allTemp);
    }, [allTemp])










    return (
        <div className="sm:pb-20">
            <Menu />
            <Section title="Our Products">
                <div className="grid grid-cols-4 gap-8 lg:grid-cols-1">
                    {allTemp && allTemp?.length > 0 ? (
                        allTemp.map((item) => (

                            <a key={item.id} href={`/product?id=${item.id}`}>
                                <div
                                    className="flex flex-col justify-center items-center"
                                    key={item.title}
                                >

                                    <img
                                        src={item.img[0]}
                                        className="w-96"
                                    />
                                    <p className="pt-3 pb-1">{item.title}</p>
                                    <p className="font-bold">${item.price}</p>
                                </div>
                            </a>
                        ))

                    ) : (
                        <div className='home___error-container'>
                            <h2 className='text-black text-xl dont-bold'>...</h2>

                        </div>
                    )

                    }
                </div>
            </Section>
            <Footer />
            <style
  dangerouslySetInnerHTML={{
    __html:
      "\n  @media only screen and (max-width: 600px) {\n#mylogo123 { \n  width:15em !important;\n}\n}\n"
  }}
/>
        </div>
    );
}
