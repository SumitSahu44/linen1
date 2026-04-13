import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from "react-icons/fa";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { eventApi, IMAGE_BASE_URL } from '../utils/api';

const staticMedia = [
    {
        id: 1,
        type: 'image',
        category: 'events',
        title: 'Manufacturing Facility Tour',
        thumb: 'https://plus.unsplash.com/premium_photo-1661954415941-82e240c24560?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFudWZhY3R1cmluZyUyMEZhY2lsaXR5JTIwVG8lMjB0ZXh0aWxlfGVufDB8fDB8fHww'
    },
    {
        id: 2,
        type: 'video',
        category: 'production',
        title: 'Bedsheet Production Process',
        thumb: 'https://media.istockphoto.com/id/171583308/photo/denim-textile-industry-big-weaving-room-hdr.webp?a=1&b=1&s=612x612&w=0&k=20&c=Twkye7uE4XNG9Qg5XkF_hLYsW3aGzM8WVrnRTTsgXkw='
    },
    {
        id: 3,
        type: 'image',
        category: 'events',
        title: 'Trade Expo 2026',
        thumb: 'https://plus.unsplash.com/premium_photo-1673310539347-05cfbcdc95af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VG8lMjB0ZXh0aWxlfGVufDB8fDB8fHww'
    },
    {
        id: 4,
        type: 'image',
        category: 'products',
        title: 'Premium Cotton Collection',
        thumb: 'https://images.unsplash.com/photo-1749367288395-f874bb54bc8a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fFRvJTIwdGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 5,
        type: 'video',
        category: 'testimonials',
        title: 'Client Testimonials',
        thumb: 'https://images.unsplash.com/photo-1722635941018-a9e7de0a5b1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFRvJTIwdGV4dGlsZXxlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 6,
        type: 'image',
        category: 'events',
        title: 'Award Ceremony',
        thumb: 'https://images.unsplash.com/photo-1611331314845-294b3f8cc83b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGV4dGlsZSUyMGltZ3xlbnwwfHwwfHx8MA%3D%3D'
    },
    {
        id: 7,
        type: 'image',
        category: 'products',
        title: 'Luxury Linen Range',
        thumb: 'https://images.unsplash.com/photo-1771098403201-8d0d32e2a062?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHRleHRpbGUlMjBpbWd8ZW58MHx8MHx8fDA%3D'
    },
    {
        id: 8,
        type: 'video',
        category: 'production',
        title: 'Quality Testing',
        thumb: 'https://images.unsplash.com/photo-1734699615194-47e2ec528c60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRleHRpbGUlMjBpbWd8ZW58MHx8MHx8fDA%3D'
    }
];

const MediaGallery = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [media, setMedia] = useState([]);
    const [categories, setCategories] = useState([{ value: 'all', label: 'All' }]);
    const [loading, setLoading] = useState(true);
    const siteId = "ParekhLinen04";

    useEffect(() => {
        const fetchMedia = async () => {
            try {
                const response = await eventApi.getAll(siteId);
                if (response.data.success && response.data.data.length > 0) {
                    const fetchedMedia = response.data.data.map(m => ({
                        id: m._id,
                        type: m.type || 'image',
                        category: m.category,
                        title: m.title,
                        thumb: `${IMAGE_BASE_URL}/${m.image}`
                    }));
                    setMedia(fetchedMedia);

                    // Dynamic Categories extraction
                    const uniqueCats = ['all', ...new Set(fetchedMedia.map(item => item.category))];
                    setCategories(uniqueCats.map(cat => ({
                        value: cat,
                        label: cat.charAt(0).toUpperCase() + cat.slice(1)
                    })));
                } else {
                    setMedia(staticMedia);
                    setCategories([
                        { value: 'all', label: 'All' },
                        { value: 'products', label: 'Products' },
                        { value: 'production', label: 'Production' },
                        { value: 'events', label: 'Events' },
                        { value: 'testimonials', label: 'Testimonials' }
                    ]);
                }
            } catch (error) {
                console.error("Failed to fetch media:", error);
                setMedia(staticMedia);
            } finally {
                setLoading(false);
            }
        };
        fetchMedia();
    }, []);


    const filteredMedia = activeCategory === 'all'
        ? media
        : media.filter(item => item.category === activeCategory);

    return (
        <div className="pt-32 pb-20 bg-[#FDFBF7]">
            <div className="max-w-7xl mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">
                        Media Gallery
                    </h2>
                    <p className="text-gray-500 text-lg">
                        Visual insights into our manufacturing, products, and company culture
                    </p>
                </div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    {categories.map(cat => (
                        <button
                            key={cat.value}
                            onClick={() => setActiveCategory(cat.value)}
                            className={`px-6 py-2 text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${activeCategory === cat.value
                                    ? 'bg-[#2C3E50] text-white'
                                    : 'border border-gray-300 text-gray-600 hover:border-[#C0A080] hover:text-[#C0A080]'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                >
                    {filteredMedia.map((item) => (
                        <motion.div
                            key={item.id}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-lg shadow-sm">

                                {/* Image */}
                                <img
                                    src={item.thumb}
                                    alt={item.title}
                                    className="w-full h-64 object-cover group-hover:scale-110 transition duration-500"
                                />

                                {/* Video Icon */}
                                {item.type === 'video' && (
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition">
                                        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg">
                                            <FaPlay className="text-[#2C3E50] ml-1" />
                                        </div>
                                    </div>
                                )}

                                {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                                    <p className="text-white text-sm font-semibold">
                                        {item.title}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>
    );
};

export default MediaGallery;