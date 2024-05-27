 
import Footer from "../../components/Footer";
import Genesis from "../../components/Genesis";
import Menu from "../../components/Menu";
import React from "react";

export default function AboutUsPage() {
    return (
        <div className="sm:pb-20">
            <Menu />
            <Genesis />
            <Footer/>
            <style
  dangerouslySetInnerHTML={{
    __html:
      "\n  @media only screen and (max-width: 600px) {\n#mylogo123 { \n  width:15em !important;margin-top: 4em;\n}\n}\n"
  }}
/>
        </div>
    );
}
