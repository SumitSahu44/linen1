// Basic Routing Structure
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import ScrollToTop from './components/common/ScrollToTop';
import LiveChat from './features/Chat/LiveChat';

// Pages
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Products from './pages/Products';
import Gallery from './pages/Gallery';
import Management from './pages/Management';
import TradeEnquiry from './pages/TradeEnquiry';
import Tender from './pages/Tender';
import Career from './pages/Career';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Circular from './pages/Circular';
import CustomerReviews from './pages/CustomerReviews';
import MediaGallery from './pages/MediaGallery';
import Quotation from './pages/Quotation';
import Auction from './pages/Auction';
import IndiaMap from './features/Maps/IndiaMap';
import Loader from '../Loader';
function App() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3. Fake loading time (2-3 seconds) ya window.onload ka wait
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds tak loader dikhega

    return () => clearTimeout(timer);
  }, []);

return (
    <Router>
      {/* 4. Agar loading true hai toh Loader dikhao, varna content */}
      {loading ? (
        <Loader />
      ) : (
        <>
          <ScrollToTop />
          <div className="font-sans text-slate-900 bg-slate-50">
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/products" element={<Products />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/media-gallery" element={<MediaGallery />} />
              <Route path="/management" element={<Management />} />
              <Route path="/trade-enquiry" element={<TradeEnquiry />} />
              <Route path="/quotation" element={<Quotation />} />
              <Route path="/auction" element={<Auction />} />
              <Route path="/tender-contract" element={<Tender />} />
              <Route path="/career" element={<Career />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/circular" element={<Circular />} />
              <Route path="/reviews" element={<CustomerReviews />} />
              <Route path="/india-map" element={<IndiaMap />} />
            </Routes>

            <LiveChat />
            <FloatingWhatsApp phoneNumber="+91XXXXXXXXXX" />
            <Footer />
          </div>
        </>
      )}
    </Router>
  );

}


export default App;