import ContactSection from "../../components/ContactSection";
import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import React from "react";

export default function ConatctUsPage() {
    return (
        <div className="sm:pb-20">

            <Menu />
            <ContactSection />
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
