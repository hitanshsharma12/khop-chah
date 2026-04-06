import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import MenuPage from "./menu/page";
import Visit from "./components/Visit";
import About from "./components/About";

export default function Home() {
  return (
    <>
    <div className="w-full"> <Navbar />
      <Hero />
      <MenuPage />
      <Visit />
      <About/>
       <Footer/></div>
     
    </>
  );
}