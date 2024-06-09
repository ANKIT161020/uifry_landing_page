import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Advantages from "./components/Advantages/Advantages";
import Testimonial from "./components/Testimonial/Testimonial";
import Faq from "./components/Faq/Faq";
import Getstarted from "./components/Getstarted/Getstarted";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Features></Features>
      <Advantages></Advantages>
      <Testimonial></Testimonial>
      <Faq></Faq>
      <Getstarted></Getstarted>
      <Footer></Footer>
    </>
  );
}

export default App;
