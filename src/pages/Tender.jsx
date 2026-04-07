import { motion } from 'framer-motion';

const Tender = () => {
    const activeAuctions = [
        { id: "TND-2026-001", item: "Grey Fabric - 2000 Meters", status: "Live", closing: "2h 40m" },
        { id: "TND-2026-042", item: "Bleached Linen - 500 Rolls", status: "Upcoming", closing: "Starts tomorrow" },
    ];

    return (
        <div className="pt-32 pb-20 px-6 bg-[#F8F9FA]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-serif text-[#2C3E50] mb-2">Tenders & e-Auctions</h2>
                <p className="text-[#C0A080] mb-12 uppercase tracking-widest text-sm">Official Procurement Portal</p>

          <div className="max-w-7xl mx-auto px-6 py-12">
    <div className="bg-white shadow-sm border border-gray-100 overflow-hidden">
        {/* Header Bar */}
        <div className="bg-[#2C3E50] p-4 text-white font-bold text-sm tracking-[0.3em] flex items-center justify-between">
            <span>ACTIVE PORTAL</span>
            {/* <span className="text-[10px] bg-[#C0A080] px-2 py-0.5 rounded italic font-medium">Updated Live</span> */}
        </div>

        {/* Message Container */}
        <div className="py-24 px-6 flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
                <svg className="w-8 h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            </div>
            
            <h3 className="text-2xl font-serif text-[#2C3E50] mb-2 italic">
                At present, No EOI published
            </h3>
            
            <p className="text-gray-400 text-[11px] uppercase tracking-[0.2em] font-medium max-w-md">
                Please check back later for active trade enquiries or digital auctions from Parekh Textiles.
            </p>
            
            <div className="mt-8 w-24 h-0.5 bg-gray-100"></div>
        </div>
    </div>
</div>

            </div>
        </div>
    );
};

export default Tender;