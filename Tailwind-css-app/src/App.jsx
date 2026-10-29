import About from "./components/About";
import CallToAction from "./components/CallToAction";
import Categories from "./components/Categories";
import Destinations from "./components/Destinations";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import TravelGuides from "./components/TravelGuides";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Destinations/>
        <About/>
        <Packages/>
        <Testimonials/>
        <TravelGuides/>
        <CallToAction/>
      </main>
        <Footer/>
    </div>
  );
}
