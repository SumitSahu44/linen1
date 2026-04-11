import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaClock, FaFacebook } from "react-icons/fa";
// import {  Linkedin, Twitter } from 'lucide-react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';


const Footer = () => {


const socialLinks = [
  { 
    name: 'Facebook', 
    url: 'https://facebook.com/parekhlinen', 
    icon: <FaFacebook size={20} strokeWidth={1.5} /> 
  },
  { 
    name: 'Instagram', 
    url: 'https://instagram.com/parekhlinen', 
    icon: <BsInstagram size={20} strokeWidth={1.5} /> 
  },
  { 
    name: 'LinkedIn', 
    url: 'https://linkedin.com/company/parekhlinen', 
    icon: <LiaLinkedin size={30} strokeWidth={1.5} /> 
  },
  { 
    name: 'Twitter', 
    url: 'https://twitter.com/parekhlinen', 
    icon: <BsTwitter size={20} strokeWidth={1.5} /> 
  },
];

    return (
        <footer className="bg-[#1A1A1A] text-white pt-20 pb-10 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
                <div className="col-span-1 md:col-span-1">
                    <h3 className="text-2xl font-serif mb-6">Parekh Linen</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        Leading manufacturers and suppliers of premium bedsheets and fabrics in Kolkata. Quality you can feel.
                    </p>
                    <div className="flex gap-4">
                        {socialLinks.map((social, idx) => (
                            <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-[#C0A080] text-[#1A1A1A] flex items-center justify-center hover:bg-white transition-colors text-lg font-bold"
                                title={social.name}
                            >
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-[#C0A080]">Company</h4>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><Link to="/about" className="hover:text-[#C0A080] transition-colors">About Us</Link></li>
                        <li><Link to="/management" className="hover:text-[#C0A080] transition-colors">Our Management</Link></li>
                        <li><Link to="/career" className="hover:text-[#C0A080] transition-colors">Career Opportunities</Link></li>
                        <li><Link to="/blog" className="hover:text-[#C0A080] transition-colors">Blog</Link></li>
                        <li><Link to="/circular" className="hover:text-[#C0A080] transition-colors"><span className="lowercase">e</span>-Circulars</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-[#C0A080]">Resources</h4>
                    <ul className="space-y-3 text-gray-400 text-sm">
                        <li><Link to="/products" className="hover:text-[#C0A080] transition-colors">Products</Link></li>
                        <li><Link to="/quotation" className="hover:text-[#C0A080] transition-colors"><span className="lowercase">e</span>-Quotation</Link></li>
                        <li><Link to="/auction" className="hover:text-[#C0A080] transition-colors"><span className="lowercase">e</span>-Auction</Link></li>
                        <li><Link to="/reviews" className="hover:text-[#C0A080] transition-colors">Reviews</Link></li>
                        <li><Link to="/gallery" className="hover:text-[#C0A080] transition-colors">Gallery</Link></li>
                    </ul>
                </div>

                <div>
  <h4 className="font-bold mb-6 uppercase text-sm tracking-widest text-[#C0A080]">
    Contact
  </h4>

  <p className="text-gray-400 text-sm mb-3 flex items-center gap-2">
    <FaMapMarkerAlt className="text-[#C0A080]" />
    KOLKATA, WB,India
  </p>

<div className="space-y-4">
  {/* Trade Enquiry Section */}
  <div className="flex flex-col gap-1">
    <p className="text-[#C0A080] text-[10px] font-bold uppercase tracking-[0.2em]">Trade Enquiry</p>
    <p className="text-gray-400 text-sm flex items-center gap-2">
      <FaEnvelope className="text-[#C0A080] shrink-0" />
      <a href="mailto:trade-enquiry@parekhlinen.com" className="hover:text-white transition-colors truncate">
        trade-enquiry@parekhlinen.com
      </a>
    </p>
  </div>

  {/* Customer Care Section */}
  <div className="flex flex-col gap-1">
    <p className="text-[#C0A080] text-[10px] font-bold uppercase tracking-[0.2em]">Customer Care</p>
    <p className="text-gray-400 text-sm flex items-center gap-2">
      <FaEnvelope className="text-[#C0A080] shrink-0" />
      <a href="mailto:customer-care@parekhlinen.com" className="hover:text-white transition-colors truncate">
        customer-care@parekhlinen.com
      </a>
    </p>
  </div>
</div>
<p className="text-gray-400 text-sm mb-3 mt-3 flex items-center gap-2 group">
  <FaPhone className="text-[#C0A080] group-hover:scale-110 transition-transform" />
  <a href="tel:+916353778329" className="hover:text-white transition-colors">
    6353778329
  </a>
</p>

  <p className="text-gray-400 text-sm flex items-center gap-2">
    <FaClock className="text-[#C0A080]" />
    Mon - Fri: 9AM - 6PM IST
  </p>
</div>
            </div>

            <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs gap-4">
                <p>© 2026 PAREKH LINEN. All Rights Reserved.</p>
                <div className="flex gap-6">
                    <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
                    <Link to="/contact" className="hover:text-white transition-colors">Terms & Conditions</Link>
                    <Link to="/contact" className="hover:text-white transition-colors">Sitemap</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;