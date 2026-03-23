import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const location = useLocation();

    // Scroll listener to change navbar style
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Products', path: '/products' },
        { name: 'Contact', path: '/contact' },
        { name: 'Media Gallery', path: '/media-gallery' },
        { name: 'Blog', path: '/blog' },
        { name: 'Reviews', path: '/reviews' },
    ];

    const moreLinks = [
        { name: 'Management', path: '/management' },
       { name: 'Circular', path: '/circular' },
       { name: 'Book Appointment', path: '/appointment' },
        { name: 'Tenders', path: '/tender-contract' },
        { name: 'Careers', path: '/career' },
        { name: 'India Map', path: '/india-map' },
        { name: 'Quotation', path: '/quotation' },
        { name: 'e-Auction', path: '/auction' },
    ];

    return (
        <nav 
            className={`fixed w-full z-[100] transition-all duration-700 ease-in-out ${
                isScrolled 
                ? 'bg-white/90 backdrop-blur-xl shadow-2xl py-3 border-b border-gray-100' 
                : 'bg-black/20 backdrop-blur-[2px] py-6'
            }`}
        >
            <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">

                {/* Logo Section */}
                <Link 
                    to="/" 
                    className={`group flex flex-col leading-none transition-all duration-500 ${
                        isScrolled ? 'text-[#1A252F]' : 'text-white'
                    }`}
                >
                    <span className="text-2xl font-serif font-bold tracking-[0.15em]">PAREKH</span>
                    <span className="text-[10px] tracking-[0.6em] font-light mt-1 opacity-80 group-hover:text-[#C0A080]">LINEN</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`relative text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 group ${
                                isScrolled ? 'text-gray-600 hover:text-[#C0A080]' : 'text-white/90 hover:text-white'
                            }`}
                        >
                            {link.name}
                            {/* Animated Underline */}
                            <span className={`absolute -bottom-2 left-0 h-[1.5px] bg-[#C0A080] transition-all duration-500 ${
                                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                            }`}></span>
                        </Link>
                    ))}

                    {/* More Dropdown */}
                    <div className="relative group">
                        <button
                            onMouseEnter={() => setIsMoreOpen(true)}
                            onMouseLeave={() => setIsMoreOpen(false)}
                            className={`relative text-[11px] uppercase tracking-[0.25em] font-semibold transition-all duration-300 flex items-center gap-2 ${
                                isScrolled ? 'text-gray-600 hover:text-[#C0A080]' : 'text-white/90 hover:text-white'
                            }`}
                        >
                            More
                            <span className="text-[8px]">▼</span>
                        </button>
                        
                        {/* Dropdown Menu */}
                        <div
                            onMouseEnter={() => setIsMoreOpen(true)}
                            onMouseLeave={() => setIsMoreOpen(false)}
                            className={`absolute top-full left-0 bg-white shadow-xl rounded-sm min-w-max transition-all duration-300 overflow-hidden ${
                                isMoreOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                            }`}
                        >
                            {moreLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="block px-6 py-3 text-[11px] uppercase tracking-widest font-semibold text-gray-700 hover:bg-[#C0A080] hover:text-white transition-colors whitespace-nowrap"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                    {/* CTA Button */}
                    <Link 
                        to="/trade-enquiry" 
                        className={`ml-4 px-7 py-3 text-[10px] font-bold uppercase tracking-[0.2em] transition-all duration-500 border rounded-sm ${
                            isScrolled 
                            ? 'bg-[#2C3E50] text-white border-[#2C3E50] hover:bg-transparent hover:text-[#2C3E50]' 
                            : 'bg-white text-[#2C3E50] border-white hover:bg-transparent hover:text-white'
                        }`}
                    >
                        Trade Enquiry
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="lg:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
                >
                    <span className={`h-0.5 w-7 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-white'} ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`h-0.5 w-7 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-white'} ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`h-0.5 w-4 transition-all duration-300 ${isScrolled ? 'bg-black' : 'bg-white'} ${isOpen ? '-rotate-45 translate-y-[-8px] w-7' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 h-screen w-screen bg-[#1A252F]/98 backdrop-blur-2xl z-[150] lg:hidden flex flex-col items-center justify-center"
                    >
                        <div className="flex flex-col gap-8 text-center">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        to={link.path}
                                        onClick={() => setIsOpen(false)}
                                        className="text-white text-3xl font-serif tracking-widest hover:text-[#C0A080] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                            
                            {/* More Links Section */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: navLinks.length * 0.1 }}
                                className="border-t border-white/20 pt-8 mt-8"
                            >
                                <p className="text-[#C0A080] text-sm uppercase tracking-widest mb-6 font-bold">More</p>
                                <div className="flex flex-col gap-6">
                                    {moreLinks.map((link, idx) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="text-white text-lg tracking-widest hover:text-[#C0A080] transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </motion.div>
                            
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: (navLinks.length + moreLinks.length/2) * 0.1 }}
                                className="mt-8"
                            >
                                <Link
                                    to="/trade-enquiry"
                                    onClick={() => setIsOpen(false)}
                                    className="px-10 py-4 border-2 border-[#C0A080] text-[#C0A080] uppercase text-sm font-bold tracking-[0.3em]"
                                >
                                    Enquiry Now
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;