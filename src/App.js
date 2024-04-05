import "./App.css";
import BusinessSec from "./components/BussinessSec/BusinessSec";
import ContactToday from "./components/ContactToday/ContactToday";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Services from "./components/Services/Services";
import Testimonial from "./components/Testimonial/Testimonial";
import Projects from "./components/Projects/Projects";
import SendMessage from "./components/SendMessage/SendMessage";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About/About";

import Contact from "./pages/Contact/Contact";
import ServicesPage from "./pages/Services/Services";
import TestNavbar from "./components/TestNavbar";
import BrandExample from "./components/TestNavbar";

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      <BrandExample />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
