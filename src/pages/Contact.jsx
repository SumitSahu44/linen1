import useSEO from '../hooks/useSEO';

const Contact = () => {
    useSEO(
        'Contact Us',
        'Get in touch with Parekh Linen. Reach out for inquiries, quotations, and trade requests. Located in Kolkata, India.',
        'contact parekh linen, email, phone, address, Kolkata'
    );
    return (
        <div className="pt-32 pb-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">Get In Touch</h2>
                    <p className="text-gray-500 text-lg">We're here to help with your textile needs</p>
                </div>

                {/* Main Contact Section */}
                <div className="grid md:grid-cols-2 gap-16 mb-16">
                    <div>
                        <h3 className="text-2xl font-serif text-[#2C3E50] mb-8">Contact Information</h3>
                        
                        <div className="space-y-8">
                            <div className="group">
                                <p className="font-bold text-[#C0A080] mb-2 uppercase text-sm tracking-widest">📍 Location</p>
                                <p className="text-gray-700 text-lg">Parekh Linen</p>
                                <p className="text-gray-600">Kolkata, West Bengal, India</p>
                            </div>

                       

                            <div className="group">
                                <p className="font-bold text-[#C0A080] mb-2 uppercase text-sm tracking-widest">📞 Phone</p>
                                <a href="tel:+913300000000" className="text-gray-700 hover:text-[#C0A080] transition-colors text-lg">6353778329</a>
                                <p className="text-gray-600 text-sm mt-1">Mon - Fri: 9AM - 6PM IST</p>
                            </div>

                            <div className="group">
                                <p className="font-bold text-[#C0A080] mb-2 uppercase text-sm tracking-widest">🕐 Business Hours</p>
                                <p className="text-gray-700">Monday - Friday: 9:00 AM - 6:00 PM</p>
                                <p className="text-gray-700">Saturday: 10:00 AM - 4:00 PM</p>
                                <p className="text-gray-600 text-sm mt-2">Closed on Sundays and National Holidays</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-slate-50 p-10 border border-gray-200">
                        <h3 className="text-2xl font-serif mb-6 text-[#2C3E50]">Send us a Message</h3>
                        <form className="space-y-5">
                            <div className="grid md:grid-cols-2 gap-4">
                                <input 
                                    type="text" 
                                    placeholder="Full Name" 
                                    className="w-full p-3 border-b-2 border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-colors"
                                    required
                                />
                                <input 
                                    type="email" 
                                    placeholder="Email Address" 
                                    className="w-full p-3 border-b-2 border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-colors"
                                    required
                                />
                            </div>
                            
                            <input 
                                type="text" 
                                placeholder="Company Name" 
                                className="w-full p-3 border-b-2 border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-colors"
                            />
                            
                            <input 
                                type="tel" 
                                placeholder="Phone Number" 
                                className="w-full p-3 border-b-2 border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-colors"
                            />
                            
                            <select className="w-full p-3 border-b-2 border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-colors">
                                <option value="">Select Inquiry Type</option>
                                <option value="trade">Trade Enquiry</option>
                                <option value="quotation">Request Quotation</option>
                                <option value="visit">Schedule Visit</option>
                                <option value="partnership">Business Partnership</option>
                                <option value="other">Other</option>
                            </select>
                            
                            <textarea 
                                placeholder="Your Message" 
                                rows="5"
                                className="w-full p-3 border-b-2 border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-colors resize-none"
                            />
                            
                            <button 
                                type="submit"
                                className="w-full bg-[#2C3E50] text-white px-10 py-4 mt-6 uppercase text-xs tracking-widest hover:bg-[#C0A080] transition-colors font-bold"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>

                {/* Google Map Section */}
                <div className="bg-gray-100 rounded-sm overflow-hidden border border-gray-200 mb-16">
                    <div className="relative w-full h-96 bg-gray-300 flex items-center justify-center">
                        <iframe
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen=""
                            referrerPolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.2421346969507!2d88.36389!3d22.567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b7c3b5a5a5%3A0x123456789!2sKolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1234567890"
                        />
                    </div>
                </div>

                {/* Quick Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white p-8 border border-gray-200 text-center hover:border-[#C0A080] hover:shadow-lg transition-all">
                        <div className="text-5xl mb-4">📍</div>
                        <h4 className="font-semibold text-[#2C3E50] mb-2 uppercase tracking-widest">Visit Us</h4>
                        <p className="text-gray-600 text-sm">Kolkata Manufacturing Facility</p>
                        <button className="mt-4 text-[#C0A080] font-semibold uppercase text-xs tracking-widest hover:text-[#2C3E50] transition-colors">Get Directions →</button>
                    </div>
                    
                    <div className="bg-white p-8 border border-gray-200 text-center hover:border-[#C0A080] hover:shadow-lg transition-all">
                        <div className="text-5xl mb-4">💬</div>
                        <h4 className="font-semibold text-[#2C3E50] mb-2 uppercase tracking-widest">Chat With Us</h4>
                        <p className="text-gray-600 text-sm">Live support available during business hours</p>
                        <button className="mt-4 text-[#C0A080] font-semibold uppercase text-xs tracking-widest hover:text-[#2C3E50] transition-colors">Start Chat →</button>
                    </div>
                    
                    <div className="bg-white p-8 border border-gray-200 text-center hover:border-[#C0A080] hover:shadow-lg transition-all">
                        <div className="text-5xl mb-4">📧</div>
                        <h4 className="font-semibold text-[#2C3E50] mb-2 uppercase tracking-widest">Email Us</h4>
                        <p className="text-gray-600 text-sm">Response within 24 hours</p>
                        <button className="mt-4 text-[#C0A080] font-semibold uppercase text-xs tracking-widest hover:text-[#2C3E50] transition-colors">Send Email →</button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Contact;