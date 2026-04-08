import { motion } from 'framer-motion';

const TradeEnquiry = () => {
    return (
        <div className="bg-white min-h-screen">
            
            {/* --- HERO SECTION --- */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-[#1A252F]">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2000" 
                        alt="Textile Manufacturing" 
                        className="w-full h-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#1A252F]/80"></div>
                </div>

                <div className="relative z-10 text-center px-6">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-[#C0A080] text-xs md:text-sm font-bold tracking-[0.5em] uppercase mb-4 block"
                    >
                        Global Supply Chain Partner
                    </motion.span>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-5xl md:text-7xl font-serif text-white mb-6"
                    >
                        <span className="lowercase">e</span>-Trade & <span className="italic text-[#C0A080]">Bulk</span> Enquiry
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="max-w-2xl mx-auto text-gray-300 text-sm md:text-base leading-relaxed font-light tracking-wide"
                    >
                        Partner with India's leading export-house for premium linen. From boutique hotels to global retail chains, we provide bespoke manufacturing and seamless logistics.
                    </motion.p>
                </div>
            </section>

           

            {/* --- FORM SECTION --- */}
            <section className="py-24 px-6 bg-[#F9FAFB]">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-16">
                        
                        {/* Left: Contact Info */}
                        <div className="lg:col-span-1 space-y-12">
                            <div>
                                <h3 className="text-[11px] font-black uppercase tracking-[0.3em] text-[#C0A080] mb-6">Contact Office</h3>
                                <div className="space-y-4 text-[#2C3E50]">
                                    <p className="text-sm leading-relaxed">
                                        <strong>Headquarters:</strong><br />
                                      KOLKATA, WB,INDIA
                                      
                                    </p>
                                    <p className="text-sm"><strong>Email:</strong> exports@parekhlinen.com</p>
                                    <p className="text-sm"><strong>Support:</strong> 6353778329</p>
                                </div>
                            </div>

                            <div className="p-8 bg-[#2C3E50] text-white rounded-sm">
                                <h4 className="font-serif text-xl mb-4 text-[#C0A080]">Custom Solutions?</h4>
                                <p className="text-xs text-gray-400 leading-relaxed mb-6">
                                    Need custom thread counts or specific Pantone shades? Our R&D team is ready to help.
                                </p>
                                <button className="text-[10px] font-bold tracking-widest border-b border-[#C0A080] pb-1 hover:text-[#C0A080] transition-colors">DOWNLOAD CATALOGUE ↓</button>
                            </div>
                        </div>

                        {/* Right: The Form */}
                 <div className="lg:col-span-2 bg-white p-8 md:p-12 shadow-sm border border-gray-100">
    <form className="grid md:grid-cols-2 gap-8">
        {/* 1. Name of the Trader */}
        <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Name of the Trader</label>
            <input type="text" className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-medium uppercase" placeholder="Enter Trader Name" />
        </div>

        {/* 2. Business Name */}
        <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Business Name</label>
            <input type="text" className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-medium uppercase" placeholder="Enter Business Name" />
        </div>

        {/* 3. Business Address with Pin code */}
        <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Business Address with Pin code</label>
            <input type="text" className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-medium uppercase" placeholder="Full Address with Pincode" />
        </div>

        {/* 4. GST No. */}
        <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">GST No.</label>
            <input type="text" className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-medium uppercase" placeholder="22AAAAA0000A1Z5" />
        </div>

        {/* 5. Mobile No. */}
        <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Mobile No.</label>
            <input type="tel" className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-medium" placeholder="+91 00000 00000" />
        </div>

        {/* 6. Email id */}
        <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Email id</label>
            <input type="email" className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-medium" placeholder="business@email.com" />
        </div>

        {/* 7. Inquiry Type (Roll-down mode) */}
        <div className="flex flex-col gap-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Inquiry Type</label>
            <select className="border-b-2 border-gray-100 py-2 bg-transparent outline-none focus:border-[#C0A080] text-sm font-medium cursor-pointer uppercase">
                <option value="">Select Option</option>
                <option value="bulk">For Bulk Purchase</option>
                <option value="retail">For Retail Purchase</option>
                <option value="jobwork">For Job Work Contract</option>
                <option value="others">Others</option>
            </select>
        </div>

        {/* 8. Upload GST Certificate */}
        <div className="flex flex-col gap-2 md:col-span-2">
            <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Upload GST Certificate</label>
            <div className="relative border-2 border-dashed border-gray-100 p-6 rounded-sm hover:border-[#C0A080] transition-all bg-gray-50/30 flex flex-col items-center justify-center cursor-pointer">
                <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                <p className="text-[11px] text-gray-400 font-bold uppercase tracking-wider">Click to upload or drag & drop</p>
            </div>
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2 pt-4">
            <motion.button 
                whileHover={{ backgroundColor: '#1A252F' }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#C0A080] text-white py-5 text-[11px] font-bold uppercase tracking-[0.5em] transition-all shadow-xl"
            >
                Send Professional Inquiry
            </motion.button>
        </div>
    </form>
</div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TradeEnquiry;