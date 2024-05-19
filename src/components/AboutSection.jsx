import React from "react";
import Section from "./Section";
import { Cairo } from "next/font/google";
import { cn } from "../utils";

const cairo = Cairo({ subsets: ["arabic"] });



export default function AboutSection() {
    return (
        <Section
            className={
                "-translate-y-11 lg:translate-y-0 max-w-[70vw] sm:max-w-[100vw] bg-primary flex flex-col items-center"
            }
            title={"About Us"}
            color={"#eab45d"}
        >
            <p className={cn("text-3xl sm:text-2xl text-center uppercase font-thin", cairo.className)} style={{fontFamily: "'arslan'", fontSize:"35px"}}>
                من هونيك،من هيديك الأرض الحلوة، من مطرح مليان بساطة ، عفوية
                وطيبة... من راشيا ، هيدي الأرض البعيدي ، عن المدينة وضجتها ، من
                جبل الشيخ الابيض بلشت قصتنا . حبينا الأرض ، وحبينا أهلها ، وحبنا
                بيّن بكل منتوجاتنا ، حتى انو، ما رضينا الا ّنشارك بإيدينا. ومن
                حرصنا لتوصلكم بكل أمانة ، كانت عينينا، عليها ، دقيقة بدقيفة
                سهراني . تجربتنا هيدي ، ما كان هدفنا منها الربح وبس ، هي فرصة،
                لألنا ولكل الصبايا اللي حبوا يعبروا عن حالن وقدرتن وعن غنى
                منطقتن... وهيك كانت مونة وزيتونة ، هي فكرتنا وفكرتن .
            </p>
            <img alt="" src="/icons/icon.png" className="mt-10 w-16" />
        </Section>
    );
}
