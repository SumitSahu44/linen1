import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useSEO from '../hooks/useSEO';

const allProducts = [
    { id: 2, name: "Premium Cotton Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0002.jpg" },
    { id: 3, name: "Luxury Soft Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0003.jpg" },
    { id: 4, name: "Elegant Stripe Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0004.jpg" },
    { id: 5, name: "Hotel Style Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0005.jpg" },
    { id: 6, name: "Premium Satin Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0006.jpg" },
    { id: 7, name: "Soft Touch Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0007.jpg" },
    { id: 8, name: "Designer Pattern Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0008.jpg" },
    { id: 9, name: "Royal Finish Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0009.jpg" },
    { id: 10, name: "Comfort Fit Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0010.jpg" },
    { id: 11, name: "Breathable Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0011.jpg" },
    { id: 12, name: "Modern Print Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0012.jpg" },
    { id: 13, name: "Classic Stripe Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0013.jpg" },
    { id: 14, name: "Ultra Soft Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0014.jpg" },
    { id: 15, name: "Minimal Design Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0015.jpg" },
    { id: 16, name: "Premium Comfort Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0016.jpg" },
    { id: 17, name: "Luxury Hotel Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0017.jpg" },
    { id: 18, name: "Elegant White Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0018.jpg" },
    { id: 19, name: "Classic Comfort Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0019.jpg" },
    { id: 20, name: "Soft Premium Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0020.jpg" },
    { id: 21, name: "Modern Luxury Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0021.jpg" },
    { id: 22, name: "Designer Comfort Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0022.jpg" },
    { id: 23, name: "Ultra Premium Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0023.jpg" },
    { id: 24, name: "Signature Collection Linen Bedsheet", cat: "Linen Bedsheets", img: "/linen-img/Parekh Linen_page-0024.jpg" },
];

const Products = () => {
    useSEO(
        'Products',
        'Browse our premium collection of bedsheets, fabrics, and linen products from Parekh Linen.',
        'products, bedsheets, fabrics, linen, Egyptian cotton, high quality'
    );
    
    const [activeTab, setActiveTab] = useState('All');
    const categories = ['All', 'Fabrics', 'Bedsheets', 'Linen'];

    const filteredProducts = activeTab === 'All'
        ? allProducts
        : allProducts.filter(p => p.cat === activeTab);

    return (
        <div className="bg-white min-h-screen pt-32 pb-20 px-4 md:px-10">
            <div className="max-w-[1600px] mx-auto">
                
                {/* Minimal Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-100 pb-8 gap-6">
                    <div>
                        <h1 className="text-3xl font-serif text-[#2C3E50] tracking-tight">
                            Our <span className="italic text-[#C0A080]">Collections</span>
                        </h1>
                    </div>

                    {/* Minimalist Tabs */}
                    <div className="flex gap-8 overflow-x-auto no-scrollbar">
                        {categories.map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all relative ${
                                    activeTab === tab ? 'text-[#C0A080]' : 'text-gray-400 hover:text-[#2C3E50]'
                                }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div layoutId="underline" className="absolute -bottom-2 left-0 w-full h-[2px] bg-[#C0A080]" />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* 4-Column Grid (Sleek & Low Height) */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.map((p) => (
                            <motion.div
                                key={p.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group cursor-pointer"
                            >
                                {/* Horizontal Low-Height Card */}
                                <div className="relative overflow-hidden aspect-[16/10] bg-gray-50 mb-4 shadow-sm group-hover:shadow-md transition-shadow duration-500">
                                    <img 
                                        src={p.img} 
                                        alt={p.name} 
                                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                                    />
                                    {/* Quick Hover Overlay */}
                                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>

                                {/* Content Details */}
                                <div className="space-y-1 px-1">
                                    <div className="flex justify-between items-center">
                                        <p className="text-[9px] text-[#C0A080] uppercase tracking-widest font-bold">
                                            {p.cat}
                                        </p>
                                        <div className="h-[1px] w-4 bg-gray-200 group-hover:w-8 group-hover:bg-[#C0A080] transition-all duration-500"></div>
                                    </div>
                                    <h3 className="text-sm font-medium text-[#2C3E50] group-hover:text-[#C0A080] transition-colors">
                                        {p.name}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Products;