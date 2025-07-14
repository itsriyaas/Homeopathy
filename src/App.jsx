
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import WhatsAppButton from './components/WhatsAppButton'
import Footer from './components/Footer'
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import DoctorProfile from "./components/DoctorProfile";
import Blog from "./pages/Blog";
import ScrollToTopButton from "./components/ScrollTop";
import NotFound from "./pages/PageNotFound";

function App() {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);

  return (
     <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header/>
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="*" element={<NotFound/>} />
          </Routes>
          <WhatsAppButton/>
          <ScrollToTopButton/>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
