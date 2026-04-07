import useSEO from '../hooks/useSEO';

const Circular = () => {
    useSEO(
        'Circulars & Announcements',
        'Latest circulars and announcements from Parekh Linen about products, certifications, and company updates.',
        'circulars, announcements, news, parekh linen, updates'
    );
    
    const circulars = [
        {
            date: "March 15, 2026",
            title: "Quality Assurance Notch",
            description: "Latest updates on our quality standards and certifications",
            priority: "High"
        },
        {
            date: "March 10, 2026",
            title: "New Product Launch - Organic Cotton Collection",
            description: "Introducing our eco-friendly organic cotton bedsheet range",
            priority: "Medium"
        },
        {
            date: "Feb 28, 2026",
            title: "Trade Partner Benefits Announcement",
            description: "Special discounts and incentives for our valued trade partners",
            priority: "Medium"
        },
        {
            date: "Feb 15, 2026",
            title: "Manufacturing Facility Expansion",
            description: "Our Kolkata facility has been expanded to meet growing demand",
            priority: "Low"
        }
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">Circulars & Announcements</h2>
                    <p className="text-gray-500">Stay updated with the latest news and announcements from Parekh Linen</p>
                </div>

            <div className="space-y-6">
    {/* No Circulars Published Message */}
    <div className="bg-white p-16 border-2 border-dashed border-gray-100 flex flex-col items-center justify-center text-center group transition-all">
        
        {/* Decorative Icon Area */}
        <div className="mb-6 relative">
            <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100 group-hover:border-[#C0A080] transition-colors">
                <svg 
                    className="w-8 h-8 text-gray-300 group-hover:text-[#C0A080] transition-colors" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5" 
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" 
                    />
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.5" 
                        d="M14 3v5h5M16 13H8M16 17H8M10 9H8" 
                    />
                </svg>
            </div>
        </div>

        {/* Text Content */}
        <h3 className="text-2xl font-serif text-[#2C3E50] mb-3 italic">
            At present, No circular published
        </h3>
        
        <div className="w-12 h-0.5 bg-[#C0A080] mb-6 opacity-50"></div>
        
        <p className="text-gray-400 text-[11px] uppercase tracking-[0.2em] font-medium max-w-xs leading-relaxed">
            All official notices and trade circulars will be listed here once released.
        </p>

        {/* Date Stamp Placeholder */}

    </div>
</div>
            </div>
        </div>
    );
};

export default Circular;
