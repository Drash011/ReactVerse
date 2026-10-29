import About from "./components/About";
import Booking from "./components/Booking";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Rooms from "./components/Rooms";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Header />
      <Hero />
      <Booking />
      <Features />
      <About/>
      <Rooms/>
      <Testimonials/>
      <Gallery/>
      <Footer/>
    </>
  );
}
