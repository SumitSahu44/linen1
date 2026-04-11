import React from 'react';
import useSEO from '../hooks/useSEO';
import { Mail, Phone, MapPin, Clock, Briefcase, Headset, ArrowRight } from 'lucide-react';

const Contact = () => {
    useSEO(
        'Contact Us',
        'Get in touch with Parekh Linen. Reach out for inquiries, quotations, and trade requests. Located in KOLKATA, WB, India.',
        'contact parekh linen, email, phone, address, Kolkata'
    );

    return (
        <div className="pt-32 pb-20 bg-[#fffcf7]">
            <div className="max-w-7xl mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-serif text-[#2C3E50] mb-4">Get In Touch</h2>
                    <div className="w-24 h-1 bg-[#C0A080] mx-auto mb-6"></div>
                    <p className="text-gray-500 text-lg font-light tracking-wide">We're here to help with your textile needs</p>
                </div>

                {/* Main Contact Section */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 mb-20">
                    
                    {/* LEFT: Core Info */}
                    <div className="space-y-12">
                        <h3 className="text-3xl font-serif text-[#2C3E50] border-b pb-4 border-gray-200">Contact Information</h3>
                        
                        <div className="space-y-10">
                            {/* Location */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 bg-[#2C3E50] flex items-center justify-center rounded-full text-white group-hover:bg-[#C0A080] transition-colors shrink-0">
                                    <MapPin size={22} />
                                </div>
                                <div>
                                    <p className="font-bold text-[#C0A080] mb-1 uppercase text-xs tracking-[0.2em]">Location</p>
                                    <p className="text-[#2C3E50] text-xl font-bold">KOLKATA, WB, India</p>
                                    {/* <p className="text-gray-500 font-sans">Manufacturing Unit & Regional Office</p> */}
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 bg-[#2C3E50] flex items-center justify-center rounded-full text-white group-hover:bg-[#C0A080] transition-colors shrink-0">
                                    <Phone size={22} />
                                </div>
                                <div>
                                    <p className="font-bold text-[#C0A080] mb-1 uppercase text-xs tracking-[0.2em]">Phone Number</p>
                                    <a href="tel:6353778329" className="text-[#2C3E50] text-xl font-bold hover:text-[#C0A080] transition-colors">6353778329</a>
                                    <p className="text-gray-500 font-sans text-sm mt-1">Mon - Sat: 9:00 AM - 6:00 PM IST</p>
                                </div>
                            </div>

                            {/* Business Hours */}
                            <div className="flex gap-6 group">
                                <div className="w-12 h-12 bg-[#2C3E50] flex items-center justify-center rounded-full text-white group-hover:bg-[#C0A080] transition-colors shrink-0">
                                    <Clock size={22} />
                                </div>
                                <div>
                                    <p className="font-bold text-[#C0A080] mb-1 uppercase text-xs tracking-[0.2em]">Business Hours</p>
                                    <p className="text-gray-700 font-sans">Mon - Fri: 9:00 AM - 6:00 PM</p>
                                    <p className="text-gray-700 font-sans">Saturday: 10:00 AM - 4:00 PM</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: Inquiry & Care Details (Replaced Form) */}
                    <div className="bg-[#2C3E50] p-12 rounded-2xl shadow-2xl relative overflow-hidden">
                        {/* Decorative Background Element */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-[#C0A080]/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
                        
                        <div className="relative z-10 space-y-12">
                            <h3 className="text-3xl font-serif text-white mb-8">Direct Channels</h3>
                            
                            {/* Trade Enquiry */}
                            <div className="flex gap-6 items-start border-b border-white/10 pb-10">
                                <div className="p-3 bg-[#C0A080]/20 rounded-lg">
                                    <Briefcase className="text-[#C0A080]" size={28} />
                                </div>
                                <div>
                                    <p className="text-[#C0A080] text-xs font-bold uppercase tracking-[0.2em] mb-2">Trade Enquiry</p>
                                    <a href="mailto:trade-enquiry@parekhlinen.com" className="text-white text-xl font-medium hover:text-[#C0A080] transition-colors font-sans break-all">
                                        trade-enquiry@parekhlinen.com
                                    </a>
                                </div>
                            </div>

                            {/* Customer Care */}
                            <div className="flex gap-6 items-start">
                                <div className="p-3 bg-[#C0A080]/20 rounded-lg">
                                    <Headset className="text-[#C0A080]" size={28} />
                                </div>
                                <div>
                                    <p className="text-[#C0A080] text-xs font-bold uppercase tracking-[0.2em] mb-2">Customer Care</p>
                                    <a href="mailto:customer-care@parekhlinen.com" className="text-white text-xl font-medium hover:text-[#C0A080] transition-colors font-sans break-all">
                                        customer-care@parekhlinen.com
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map Section */}
                <div className="rounded-2xl overflow-hidden border-8 border-white shadow-xl mb-20 h-[450px]">
                    <iframe
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        allowFullScreen=""
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.2421346969507!2d88.36389!3d22.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b7c3b5a5a5%3A0x123456789!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1234567890"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    />
                </div>

                {/* Quick Action Cards */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { icon: '📍', title: 'Visit Us', desc: 'Kolkata Manufacturing Facility' },
                        { icon: '💬', title: 'Chat Support', desc: 'Available on WhatsApp Business' },
                        { icon: '📧', title: 'Fast Email', desc: 'Response within 24 hours' }
                    ].map((card, index) => (
                        <div key={index} className="bg-white p-10 border border-gray-100 text-center hover:border-[#C0A080] hover:shadow-2xl transition-all group rounded-xl">
                            <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                            <h4 className="font-bold text-[#2C3E50] mb-3 uppercase tracking-widest text-sm">{card.title}</h4>
                            <p className="text-gray-500 text-sm mb-6">{card.desc}</p>
                            <div className="inline-flex items-center text-[#C0A080] font-bold text-[10px] uppercase tracking-widest group-hover:gap-3 transition-all">
                                Action <ArrowRight size={14} className="ml-2" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;