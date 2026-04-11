import { motion } from 'framer-motion';

const Management = () => {
    const team = [
        { name: "Rajesh Parekh", role: "Managing Director", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" },
        { name: "Sanjay Parekh", role: "Operations Head", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
        { name: "Anjali Mehta", role: "Design Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" }
    ];

    return (
  <div className="pt-32 pb-20 px-6">
    <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-serif text-[#2C3E50]">Our Management</h2>
            <div className="w-20 h-1 bg-[#C0A080] mx-auto mt-4 mb-6"></div>
            
            {/* Added P Tag with your content */}
            <p className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base uppercase tracking-widest leading-relaxed font-medium">
                Parekh Linen is administered and governed by the highly skilled, 
                experienced and qualified Management.
            </p>
        </div>

    </div>
</div>
    );
};

export default Management;