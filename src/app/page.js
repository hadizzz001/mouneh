import AboutSection from "../components/AboutSection";
import ConnectSection from "../components/ConnectSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Genesis from "../components/Genesis";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import OurRange from "../components/OurRange";
import Section from "../components/Section";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <Hero/>
    <main className="text-3xl">
      <AboutSection/>
      <Genesis />
 
      <ContactSection />
      <Footer />
    </main>
    <style
  dangerouslySetInnerHTML={{
    __html:
      "\n  \n@media screen and (min-width: 1000px) {\n    #mylogo123 {\n      width:150px;\n    }\n}\n\n"
  }}
/>
<style dangerouslySetInnerHTML={{ __html: "\n  @media only screen and (max-width: 600px) {\n#mylogo123 { \n padding: 2em;\n}\n}\n" }} />

    </>
  );
}
