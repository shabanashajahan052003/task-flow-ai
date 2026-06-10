import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Stats from "./components/Stats";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Dashboard />
      <Features />
      <Stats />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
}