import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const moreRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => { setIsOpen(false); }, [location]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact Us', path: '/contact' },
        { name: 'Products', path: '/products' },
        { name: 'Media Gallery', path: '/media-gallery' },
        { name: 'Our Management', path: '/management' },
    ];

    const moreLinks = [
        { name: 'e-Quotation', path: '/quotation' },
        { name: 'e-Auction', path: '/auction' },
        { name: 'Tender & Contract', path: '/tender-contract' },
        { name: 'Careers', path: '/career' },
        { name: 'Circular', path: '/circular' },
        { name: 'Blog', path: '/blog' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Visit with Appointment', path: '/appointment' },
        { name: 'Our Textile Associates', path: '/india-map' },
    ];

    // Fixed Colors for consistent visibility
    const textMain = 'text-[#1A252F]';
    const textMuted = 'text-gray-600';
    const textHover = 'hover:text-[#C0A080]';
    const hamColor = 'bg-[#1A252F]';

    return (
        <nav
            className={`fixed w-full z-[100] transition-all duration-300 ease-in-out bg-white/95 backdrop-blur-md border-b border-gray-100 ${
                isScrolled ? 'py-2 shadow-md' : 'py-4 shadow-sm'
            }`}
        >
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 flex justify-between items-center">

                {/* ── Logo ── */}
                <Link to="/" className={`group flex items-center gap-2 ${textMain}`}>
                    <div className="w-11 h-11 md:w-13 md:h-13 flex items-center justify-center rounded-xl shrink-0 bg-slate-50 border border-slate-100">
                        <img
                            src="/6.png"
                            alt="Logo"
                            className="w-full h-full object-contain p-1"
                        />
                    </div>

                    <div className="flex flex-col leading-tight">
                        <span className="text-lg md:text-xl font-serif font-bold uppercase tracking-wide">
                            PAREKH <span className="font-light">LINEN</span>
                        </span>
                        <span className={`text-[9px] md:text-[10px] text-black tracking-[0.35em] font-bold opacity-70 group-hover:text-[#C0A080] uppercase transition-colors duration-300`}>
                            KOLKATA, WB, India
                        </span>
                    </div>
                </Link>

                {/* ── Desktop Nav ── */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => {
                        const isActive = location.pathname === link.path;
                        return (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`relative text-[10px] xl:text-[11px] uppercase tracking-[0.22em] font-black transition-colors duration-300 group ${isActive ? 'text-[#C0A080]' : textMuted} ${textHover}`}
                            >
                                {link.name}
                                <span className={`absolute -bottom-1.5 left-0 h-[1.5px] bg-[#C0A080] transition-all duration-400 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
                            </Link>
                        );
                    })}

                    {/* More Dropdown */}
                    <div
                        ref={moreRef}
                        className="relative"
                        onMouseEnter={() => setIsMoreOpen(true)}
                        onMouseLeave={() => setIsMoreOpen(false)}
                    >
                        <button
                            className={`flex items-center gap-1.5 text-[10px] xl:text-[11px] uppercase tracking-[0.22em] font-black transition-colors duration-300 ${textMuted} ${textHover}`}
                        >
                            More
                            <svg
                                className={`w-2.5 h-2.5 transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`}
                                fill="currentColor" viewBox="0 0 10 6"
                            >
                                <path d="M0 0l5 6 5-6z" />
                            </svg>
                        </button>

                        <AnimatePresence>
                            {isMoreOpen && (
                                <motion.div
                                    initial={{ opacity: 0, y: 8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 8 }}
                                    transition={{ duration: 0.18 }}
                                    className="absolute top-full left-0 mt-3 bg-white shadow-2xl rounded-sm min-w-max border border-gray-100 overflow-hidden z-50"
                                >
                                    {moreLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            className="block px-6 py-3 text-[11px] uppercase tracking-widest font-bold text-gray-700 hover:bg-[#C0A080] hover:text-white transition-colors whitespace-nowrap border-b border-gray-50 last:border-0"
                                        >
                                            {link.name.startsWith('e-') ? (
                                                <>
                                                    <span className="lowercase italic font-serif">e</span>-{link.name.substring(2)}
                                                </>
                                            ) : (
                                                link.name
                                            )}
                                        </Link>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* CTA */}
                    <Link
                        to="/trade-enquiry"
                        className="ml-2 px-5 xl:px-7 py-2.5 text-[10px] font-black uppercase tracking-[0.18em] border rounded-sm transition-all duration-400 bg-[#2C3E50] text-white border-[#2C3E50] hover:bg-transparent hover:text-[#2C3E50]"
                    >
                        <span className="lowercase italic font-serif">e</span>-Trade Enquiry
                    </Link>
                </div>

                {/* ── Hamburger ── */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden flex flex-col justify-center gap-[5px] p-2 focus:outline-none"
                >
                    <span className={`h-[2px] w-6 transition-all duration-300 origin-center ${hamColor} ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`h-[2px] w-6 transition-all duration-300 ${hamColor} ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
                    <span className={`h-[2px] transition-all duration-300 origin-center ${hamColor} ${isOpen ? 'w-6 -rotate-45 -translate-y-[7px]' : 'w-4'}`} />
                </button>
            </div>

            {/* ── Mobile Overlay ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'tween', duration: 0.35 }}
                        className="fixed inset-0 h-screen w-screen bg-white z-[150] lg:hidden overflow-y-auto"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-5 right-5 text-slate-900 text-3xl p-2"
                        >
                            ×
                        </button>

                        <div className="flex flex-col items-center justify-center min-h-screen px-8 py-20">
                            <div className="flex flex-col items-center gap-7 w-full">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className={`text-2xl font-serif font-black tracking-widest ${location.pathname === link.path ? 'text-[#C0A080]' : 'text-slate-900'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            <div className="w-full border-t border-slate-100 pt-8 mt-8">
                                <p className="text-center text-[#C0A080] text-[10px] uppercase tracking-[0.4em] mb-6 font-black">More Resources</p>
                                <div className="grid grid-cols-1 gap-4 text-center">
                                    {moreLinks.map((link) => (
                                        <Link
                                            key={link.name}
                                            to={link.path}
                                            onClick={() => setIsOpen(false)}
                                            className="text-slate-600 text-sm font-bold tracking-widest py-1"
                                        >
                                            {link.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <Link
                                to="/trade-enquiry"
                                onClick={() => setIsOpen(false)}
                                className="mt-10 w-full py-4 border-2 border-[#2C3E50] bg-[#2C3E50] text-white text-center uppercase text-xs font-black tracking-widest shadow-xl"
                            >
                                e-Trade Enquiry
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
