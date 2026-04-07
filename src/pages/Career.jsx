import { motion } from 'framer-motion';

const Career = () => {
    const jobs = [
        { title: "Production Manager", location: "Kolkata, WB", type: "Full-Time" },
        { title: "Textile Designer", location: "Remote / On-site", type: "Contract" },
        { title: "Quality Assurance Lead", location: "Kolkata, WB", type: "Full-Time" }
    ];

    return (
   <div className="pt-32 pb-20 px-6 bg-white">
    <div className="max-w-4xl mx-auto text-center">
        
        {/* Section Heading */}
        <div className="mb-12">
            <h2 className="text-sm uppercase tracking-[0.4em] text-[#C0A080] font-bold mb-4">
                Careers & Opportunities
            </h2>
            <h3 className="text-5xl font-serif text-[#2C3E50] mb-6">
                Join Our Legacy
            </h3>
            <div className="w-20 h-1 bg-[#C0A080] mx-auto"></div>
        </div>

        {/* No Vacancy Card */}
        <div className="bg-slate-50 p-12 md:p-20 border border-gray-100 rounded-sm shadow-sm">
            <div className="flex justify-center mb-8">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100">
                    <svg 
                        className="w-10 h-10 text-gray-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="1.5" 
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                        />
                    </svg>
                </div>
            </div>

            <h4 className="text-3xl font-serif text-[#2C3E50] mb-4 italic">
                At present, No vacancy
            </h4>
            
            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                While our team is currently complete, we are always looking for passionate individuals. 
                Follow our updates for future opportunities in the textile industry.
            </p>

    
        </div>

    </div>
</div>
    );
};

export default Career;