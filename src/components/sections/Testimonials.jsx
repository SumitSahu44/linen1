import { motion } from 'framer-motion';

const Testimonials = () => {
    const reviews = [
        { name: "Suresh Gupta", company: "Luxury Inn Resorts", text: "Parekh Linen's bedsheets have transformed our guest experience. The thread count and durability are unmatched in the Indian market." },
        { name: "Elena Rodriguez", company: "Global Textiles Inc.", text: "Their export-quality fabrics are consistently high-grade. A reliable partner for our international supply chain for over 5 years." },
        { name: "Amitabh Shah", company: "Shah Furnishings", text: "Professionalism and quality. From trade enquiries to delivery, everything is seamless. Highly recommended for bulk linen." }
    ];

    return (
        <section className="py-24 bg-[#2C3E50] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div>
                        <h2 className="text-4xl font-serif">What Our Clients Say</h2>
                        <div className="w-20 h-1 bg-[#C0A080] mt-4"></div>
                    </div>
                    <p className="text-gray-400 max-w-sm text-sm">Trusted by 500+ hospitality and retail partners across the globe.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    {reviews.map((rev, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-[#34495E] p-10 relative"
                        >
                            {/* Quote Icon */}
                            <span className="absolute top-6 right-8 text-6xl text-[#C0A080] opacity-20 font-serif">“</span>

                            <p className="text-gray-300 italic mb-8 leading-relaxed">"{rev.text}"</p>

                            <div>
                                <h4 className="font-bold text-[#C0A080] tracking-wide">{rev.name}</h4>
                                <p className="text-xs text-gray-400 uppercase mt-1">{rev.company}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Trusted Logos Placeholder */}
                <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-30 grayscale contrast-125">
                    {['HOTEL HILTON', 'MARRIOTT', 'TAJ GROUPS', 'RELIANCE RETAIL'].map((brand) => (
                        <span key={brand} className="text-xl font-black tracking-tighter">{brand}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
