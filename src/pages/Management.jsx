import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Users } from 'lucide-react';
import { managementApi, IMAGE_BASE_URL } from '../utils/api';
import useSEO from '../hooks/useSEO';

const siteId = 'ParekhLinen04';

const Management = () => {
    useSEO(
        'Our Management',
        'Meet the highly skilled, experienced, and qualified management team governing Parekh Linen.',
        'management, leaders, managing director, Parekh Linen'
    );

    const [members, setMembers] = useState([]);
    const [header, setHeader] = useState({
        title: 'OUR MANAGEMENT',
        description: 'Parekh Linen is administered and governed by the highly skilled, experienced and qualified Management.'
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const [contentRes, membersRes] = await Promise.allSettled([
                    managementApi.getContent(siteId),
                    managementApi.getMembers(siteId)
                ]);

                if (contentRes.status === 'fulfilled' && contentRes.value.data?.success && contentRes.value.data.data) {
                    setHeader({
                        title: contentRes.value.data.data.title || 'OUR MANAGEMENT',
                        description: contentRes.value.data.data.description || ''
                    });
                }

                if (membersRes.status === 'fulfilled' && membersRes.value.data?.success) {
                    setMembers(membersRes.value.data.data || []);
                }
            } catch (error) {
                console.error("Error loading management data:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const cleanHtml = (html) => {
        if (!html) return '';
        return html.replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ');
    };

    return (
        <div className="pt-32 pb-20 bg-[#fffcf7] min-h-screen">
            {/* Scoped CSS to prevent split/break word and overflow */}
            <style>{`
                .management-text,
                .management-text * {
                    word-break: normal !important;
                    overflow-wrap: break-word !important;
                    white-space: normal !important;
                    max-width: 100% !important;
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-20 management-text">
                    {/* <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#C0A080] bg-[#C0A080]/10 border border-[#C0A080]/30 px-5 py-2 rounded-full mb-6">
                        Leadership & Governance
                    </span> */}
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] tracking-tight mb-4">
                        {header.title}
                    </h2>
                    <div className="w-24 h-1 bg-[#C0A080] mx-auto mb-6"></div>
                    <div
                        className="max-w-2xl mx-auto text-gray-500 text-sm md:text-base leading-relaxed font-light tracking-wide rich-text-content"
                        dangerouslySetInnerHTML={{ __html: cleanHtml(header.description) }}
                    />
                </div>

                {/* Team Members */}
                {loading ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4">
                        <Loader2 className="animate-spin text-[#C0A080]" size={40} />
                        <span className="text-xs font-black uppercase tracking-widest text-slate-400">Loading Leaders...</span>
                    </div>
                ) : members.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
                        {members.map((member, idx) => {
                            const imgSrc = member.image
                                ? (member.image.startsWith('http') ? member.image : `${IMAGE_BASE_URL}/${member.image}`)
                                : 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400';

                            return (
                                <motion.div
                                    key={member._id || idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col relative"
                                >
                                    {/* Accent strip on hover */}
                                    <div className="absolute top-0 left-0 w-full h-1.5 bg-[#C0A080] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-10"></div>

                                    {/* Image Wrapper */}
                                    <div className="h-80 overflow-hidden bg-slate-50 relative shrink-0">
                                        <img
                                            src={imgSrc}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            onError={(e) => {
                                                e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400';
                                            }}
                                        />
                                    </div>

                                    {/* Content Wrapper */}
                                    <div className="p-8 flex flex-col flex-1 gap-2 management-text">
                                        <h4 className="text-xl font-bold text-[#2C3E50] tracking-tight uppercase group-hover:text-[#C0A080] transition-colors">
                                            {member.name}
                                        </h4>
                                        <p className="text-gray-400 text-xs font-black uppercase tracking-[0.2em] mb-4">
                                            {member.role}
                                        </p>
                                        <div className="w-10 h-0.5 bg-gray-100 group-hover:w-20 transition-all duration-500"></div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                ) : (
                    <div className="bg-white border border-gray-100 rounded-3xl p-16 text-center max-w-2xl mx-auto shadow-sm">
                        <div className="w-16 h-16 bg-[#C0A080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                            <Users className="text-[#C0A080]" size={30} />
                        </div>
                        <h3 className="text-xl font-bold text-[#2C3E50] uppercase tracking-tight mb-2">No Leaders Listed</h3>
                        <p className="text-xs font-bold text-[#C0A080] bg-[#C0A080]/10 inline-block px-5 py-2.5 rounded-full italic uppercase">
                            ( At present, team details are being updated )
                        </p>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Management;
