import { useState } from 'react';
import useSEO from '../hooks/useSEO';
import { FaStar } from "react-icons/fa";

const CustomerReviews = () => {
    useSEO(
        'Customer Reviews',
        'Read testimonials and reviews from satisfied customers and business partners of Parekh Linen.',
        'reviews, testimonials, customer feedback, parekh linen quality'
    );
    
    const [reviews] = useState([
        {
            name: "Rajesh Kumar",
            company: "Luxury Hotels Chain",
            rating: 5,
            text: "Exceptional quality bedsheets. Our guests consistently praise the comfort and durability. Parekh Linen has been our trusted partner for over 5 years.",
        },
        {
            name: "Priya Sharma",
            company: "Home Furnishings Store",
            rating: 5,
            text: "The best supplier in the market. Their customer service is outstanding and they always meet our deadlines. Quality is never compromised.",
        },
        {
            name: "Amit Patel",
            company: "Hospitality Group",
            rating: 5,
            text: "We trust them with our entire linen supply. The thread count consistency and color fastness is remarkable. Highly recommended!",
        },
        {
            name: "Sneha Desai",
            company: "Resort & Spa",
            rating: 5,
            text: "Outstanding products and service. They understand hospitality needs perfectly. Our guests love the premium feel of their bedsheets.",
        },
        {
            name: "Vikas Singh",
            company: "Textile Distributor",
            rating: 5,
            text: "Competitive pricing without compromising quality. They offer excellent bulk discounts and their support team is always helpful.",
        },
        {
            name: "Anjali Verma",
            company: "E-commerce Platform",
            rating: 5,
            text: "Our best-selling bedsheet brand. Customers return for quality and durability. Parekh Linen sets the benchmark for excellence.",
        }
    ]);

    // Get initials
    const getInitials = (name) => {
        return name.split(" ").map(n => n[0]).join("");
    };

    return (
        <div className="pt-32 pb-20 bg-[#FDFBF7]">
            <div className="max-w-6xl mx-auto px-6">
                
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
                        Customer Testimonials
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Hear what our valued clients have to say about Parekh Linen
                    </p>
                </div>

                {/* Reviews Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <div 
                            key={idx}
                            className="bg-white p-8 border border-gray-200 hover:border-[#C0A080] hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Top Section */}
                            <div className="flex items-center justify-between mb-6">
                                
                                {/* Avatar */}
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#C0A080] text-white font-bold">
                                    {getInitials(review.name)}
                                </div>

                                {/* Stars */}
                                <div className="flex gap-1">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <FaStar key={i} className="text-[#C0A080]" />
                                    ))}
                                </div>
                            </div>
                            
                            {/* Review Text */}
                            <p className="text-gray-600 leading-relaxed mb-6 italic">
                                "{review.text}"
                            </p>
                            
                            {/* User Info */}
                            <div className="border-t border-gray-200 pt-4">
                                <p className="font-semibold text-[#2C3E50]">
                                    {review.name}
                                </p>
                                <p className="text-sm text-[#C0A080] uppercase tracking-wide">
                                    {review.company}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-16 bg-gradient-to-r from-[#2C3E50] to-[#1A252F] px-12 py-12 text-center rounded-lg shadow-lg">
                    <h3 className="text-2xl font-serif text-white mb-4">
                        Share Your Experience
                    </h3>
                    <p className="text-gray-300 mb-8">
                        Have you experienced Parekh Linen's quality? We'd love to hear from you!
                    </p>
                    <button className="px-8 py-4 bg-[#C0A080] text-[#2C3E50] font-bold uppercase tracking-widest hover:bg-white transition-colors duration-300">
                        Write a Review
                    </button>
                </div>

            </div>
        </div>
    );
};

export default CustomerReviews;
