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
    </>
  );
}
