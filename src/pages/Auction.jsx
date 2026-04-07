import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGavel, FaClock, FaUserPlus, FaShoppingCart } from "react-icons/fa";
import useSEO from '../hooks/useSEO';

const Auction = () => {
    useSEO(
        'e-Auction',
        'Participate in online auctions for premium bedsheets and linens from Parekh Linen.',
        'auction, online bidding, premium linens'
    );
    
    const [auctionItems] = useState([
        {
            id: 1,
            title: 'Premium Egyptian Cotton Bedsheet Set',
            currentBid: 2500,
            startingPrice: 1500,
            endsWith: '2d 3h 45m',
            bids: 12,
            image: 'https://images.unsplash.com/photo-1669763437072-802a9b128d68?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8UHJlbWl1bSUyMEVneXB0aWFuJTIwQ290dG9uJTIwQmVkc2hlZXQlMjBTZXR8ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 2,
            title: 'Luxury 1000 TC White Linen',
            currentBid: 3200,
            startingPrice: 2000,
            endsWith: '1d 5h 20m',
            bids: 8,
            image: 'https://plus.unsplash.com/premium_photo-1732017764574-f3a6d3a348e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UHJlbWl1bSUyMEVneXB0aWFuJTIwQ290dG9uJTIwU2V0fGVufDB8fDB8fHww'
        },
        {
            id: 3,
            title: 'Organic Cotton Bulk Lot',
            currentBid: 5500,
            startingPrice: 3500,
            endsWith: '3d 2h 10m',
            bids: 15,
            image: 'https://plus.unsplash.com/premium_photo-1701157946903-57c2821d71b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGluZW58ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 4,
            title: 'Jacquard Weave Collection',
            currentBid: 1800,
            startingPrice: 1000,
            endsWith: '6h 30m',
            bids: 5,
            image: 'https://images.unsplash.com/photo-1591625591034-75d303d2e1a4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGluZW58ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 5,
            title: 'Hotel Grade Bedsheet Bundle',
            currentBid: 4200,
            startingPrice: 2500,
            endsWith: '2d 8h 15m',
            bids: 18,
            image: 'https://plus.unsplash.com/premium_photo-1674747086512-5f73de8f7350?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bGluZW58ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 6,
            title: 'Sateen Weave Luxury Linen',
            currentBid: 3500,
            startingPrice: 2000,
            endsWith: '1d 12h 50m',
            bids: 10,
            image: 'https://plus.unsplash.com/premium_photo-1674747086515-5fa9f1363978?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGluZW58ZW58MHx8MHx8fDA%3D'
        }
    ]);

    return (
        <div className="pt-32 pb-20 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
                        <span className="lowercase">e</span>-Auction
                    </h2>
                    <p className="text-gray-500 text-lg mb-8">
                        Bid for premium linens and exclusive collections
                    </p>
                  
                </div>

           <section className="py-20 bg-gray-50 px-6">
    <div className="max-w-4xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-white shadow-2xl border-t-4 border-[#C0A080] rounded-b-xl overflow-hidden"
        >
            {/* Header Section */}
            <div className="bg-[#2C3E50] p-8 text-center text-white">
                <h2 className="text-3xl font-serif tracking-tight mb-2">e-Auction Participation Form</h2>
                <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-medium">Official Trade Enquiry Portal</p>
            </div>

            <form className="p-8 md:p-12 space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* 1. Name of the Participant */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Name of the Participant *</label>
                        <input 
                            type="text" 
                            className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase" 
                            placeholder="Full Name" 
                            required 
                        />
                    </div>

                    {/* 2. Legal Name of the Business */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Legal Name of the Business *</label>
                        <input 
                            type="text" 
                            className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase" 
                            placeholder="Company Name" 
                            required 
                        />
                    </div>
                </div>

                {/* 3. Business Address with Pin code */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Business Address with Pin code *</label>
                    <input 
                        type="text" 
                        className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase" 
                        placeholder="Complete Office Address & Pincode" 
                        required 
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* 4. GST No. */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">GST No. *</label>
                        <input 
                            type="text" 
                            className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase" 
                            placeholder="GSTIN Number" 
                            required 
                        />
                    </div>

                    {/* 5. Mobile No. */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Mobile No. *</label>
                        <input 
                            type="tel" 
                            className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold" 
                            placeholder="+91 00000 00000" 
                            required 
                        />
                    </div>

                    {/* 6. Email Id */}
                    <div className="flex flex-col gap-2">
                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Email Id *</label>
                        <input 
                            type="email" 
                            className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold" 
                            placeholder="official@email.com" 
                            required 
                        />
                    </div>
                </div>

                {/* 7. Upload GST Certificate */}
                <div className="flex flex-col gap-4">
                    <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Upload GST Certificate (PDF/Image)</label>
                    <div className="relative border-2 border-dashed border-gray-100 p-10 rounded-xl hover:border-[#C0A080] transition-all bg-gray-50 flex flex-col items-center justify-center gap-2 group cursor-pointer">
                        <input type="file" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" />
                        <svg className="w-8 h-8 text-gray-300 group-hover:text-[#C0A080] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12 a2 2 0 002-2v-1M16 8l-4-4m0 0L8 8m4-4v12" />
                        </svg>
                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Click to upload document</p>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                    <motion.button 
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-[#2C3E50] text-white py-5 font-black uppercase text-[20px]  hover:bg-[#C0A080] transition-all shadow-xl"
                    >
                        Submit Auction Entry
                    </motion.button>
                </div>
            </form>
        </motion.div>
    </div>
</section>

               

            </div>
        </div>
    );
};

export default Auction;