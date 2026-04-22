import { motion } from 'framer-motion';

const ProductPreview = () => {
    const products = [
        { title: "Pure Egyptian Linen", category: "Fabrics", img: "https://media.istockphoto.com/id/1396225423/photo/colorful-gradient-of-textile-fabrics.webp?a=1&b=1&s=612x612&w=0&k=20&c=3fOmze273rpaWue2nqPZR8P9xgoaXn-Jn8C9X4B46-8=" },
        { title: "Hotel Collection Sheets", category: "Bedsheets", img: "https://media.istockphoto.com/id/942626548/photo/laundry.webp?a=1&b=1&s=612x612&w=0&k=20&c=sR2tA975am7y_E07je5HSfkEfvKrLmgO04iC61hHeWI=" },
        { title: "Organic Cotton Wraps", category: "Linen", img: "https://plus.unsplash.com/premium_photo-1754310671646-d55d96e769ec?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T3JnYW5pYyUyMENvdHRvbiUyMFdyYXBzJTIwTGluZW58ZW58MHx8MHx8fDA%3D" }
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
            {products.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    className="group relative cursor-pointer"
                >
                    {/* --- Image Card --- */}
                    <div className="relative overflow-hidden aspect-[4/5] bg-gray-50 border border-gray-100">
                        {/* Luxury Frame Reveal on Hover */}
                        <div className="absolute inset-4 border border-white/0 group-hover:border-white/40 transition-all duration-700 z-20 pointer-events-none"></div>
                        
                        {/* Number Indicator */}
                        <span className="absolute top-6 right-6 text-white/20 text-4xl font-serif italic z-10 group-hover:text-white/60 transition-colors duration-500">
                            0{index + 1}
                        </span>

                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 group-hover:grayscale-[20%]"
                        />

                        {/* Centered Glass Button */}
                        <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center z-10">
                            <motion.button 
                                whileHover={{ scale: 1.05 }}
                                className="bg-white/90 backdrop-blur-md text-[#2C3E50] px-7 py-3 text-[10px] font-bold uppercase tracking-[0.3em] shadow-xl border border-white/50"
                            >
                                View Collection
                            </motion.button>
                        </div>
                    </div>

                    {/* --- Card Details --- */}
                    <div className="mt-6 space-y-2">
                        <div className="flex items-center gap-3">
                            <div className="h-[1px] w-6 bg-[#C0A080] group-hover:w-12 transition-all duration-500"></div>
                            <p className="text-[#C0A080] text-[9px] font-black uppercase tracking-[0.4em]">
                                {item.category}
                            </p>
                        </div>
                        <h3 className="text-xl font-serif text-[#2C3E50] group-hover:translate-x-2 transition-transform duration-500">
                            {item.title}
                        </h3>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default ProductPreview;
