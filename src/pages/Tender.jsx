import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, FileText, Calendar, CheckCircle2 } from 'lucide-react';
import { tenderApi } from '../utils/api';
import useSEO from '../hooks/useSEO';

const siteId = 'ParekhLinen04';

const Tender = () => {
    useSEO(
        'Tender & Contract',
        'Official Procurement Portal. Explore open expressions of interest, tenders, and contracts from Parekh Linen.',
        'tender, contracts, procurement, eoi, Parekh Linen'
    );

    const [tenders, setTenders] = useState([]);
    const [header, setHeader] = useState({
        title: 'TENDER & CONTRACT',
        description: 'Official Procurement Portal'
    });
    const [loading, setLoading] = useState(true);

    const cleanHtml = (html) => {
        if (!html) return '';
        return html.replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ');
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const [headerRes, listRes] = await Promise.allSettled([
                    tenderApi.getHeader(siteId),
                    tenderApi.getAll(siteId)
                ]);

                if (headerRes.status === 'fulfilled' && headerRes.value.data?.success && headerRes.value.data.data) {
                    setHeader({
                        title: headerRes.value.data.data.title || 'TENDER & CONTRACT',
                        description: headerRes.value.data.data.description || 'Official Procurement Portal'
                    });
                }

                if (listRes.status === 'fulfilled' && listRes.value.data?.success) {
                    const all = listRes.value.data.data || [];
                    const activeOnly = all.filter(t => t.status === 'active');
                    setTenders(activeOnly);
                }
            } catch (error) {
                console.error("Error loading tenders:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return (
        <div className="pt-32 pb-20 px-6 bg-[#fffcf7] min-h-screen">
            {/* Scoped CSS to prevent split/break word and overflow */}
            <style>{`
                .tender-text,
                .tender-text * {
                    word-break: normal !important;
                    overflow-wrap: break-word !important;
                    white-space: normal !important;
                    max-width: 100% !important;
                }
                .rich-text-content ul {
                    list-style-type: disc;
                    margin-left: 1.25rem;
                    margin-bottom: 0.5rem;
                }
                .rich-text-content ol {
                    list-style-type: decimal;
                    margin-left: 1.25rem;
                    margin-bottom: 0.5rem;
                }
            `}</style>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 tender-text">
                    {/* <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#C0A080] bg-[#C0A080]/10 border border-[#C0A080]/30 px-5 py-2 rounded-full mb-6">
                        Procurement Portal
                    </span> */}
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] tracking-tight mb-4">
                        {header.title}
                    </h2>
                    <div className="w-24 h-1 bg-[#C0A080] mx-auto mb-6"></div>
                    <div
                        className="max-w-2xl mx-auto text-slate-800 text-sm md:text-base leading-relaxed font-normal tracking-wide rich-text-content"
                        dangerouslySetInnerHTML={{ __html: cleanHtml(header.description) }}
                    />
                </div>

                <div className="max-w-7xl mx-auto px-6 py-6">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-3">
                            <Loader2 className="animate-spin text-[#C0A080]" size={36} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Tenders...</span>
                        </div>
                    ) : tenders.length > 0 ? (
                        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
                            {tenders.map((tender, idx) => (
                                <motion.div
                                    key={tender._id || idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 relative group overflow-hidden"
                                >
                                    {/* Left Border accent */}
                                    <div className="absolute left-0 top-0 w-1.5 h-full bg-[#2C3E50] group-hover:bg-[#C0A080] transition-colors duration-300"></div>

                                    <div className="tender-text space-y-6 pl-4">
                                        <div className="flex flex-wrap items-center justify-between gap-4">
                                            {tender.date && (
                                                <div className="flex items-center gap-1.5 text-slate-600 text-[10px] font-black uppercase tracking-widest">
                                                    <Calendar size={13} className="text-[#C0A080]" />
                                                    Date: {new Date(tender.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                </div>
                                            )}
                                            <span className="bg-emerald-50 text-emerald-700 border border-emerald-100 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                                                {tender.status || 'Active'}
                                            </span>
                                        </div>

                                        <h3 className="text-xl md:text-2xl font-serif text-[#2C3E50] group-hover:text-[#C0A080] transition-colors">
                                            {tender.title}
                                        </h3>

                                        {/* Rich Text Description */}
                                        <div
                                            className="text-slate-800 text-sm leading-relaxed rich-text-content"
                                            dangerouslySetInnerHTML={{ __html: cleanHtml(tender.description) }}
                                        />

                                        {/* Key Points */}
                                        {tender.keyPoints && tender.keyPoints.length > 0 && (
                                            <div className="pt-4 border-t border-gray-50">
                                                <h4 className="text-[10px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">
                                                    Key Terms & Qualifications
                                                </h4>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                    {tender.keyPoints.map((point, pIdx) => (
                                                        <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700">
                                                            <CheckCircle2 size={14} className="text-[#C0A080] shrink-0 mt-0.5" />
                                                            <span>{point}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    ) : (
                        <div className="bg-white shadow-xl border border-gray-100 rounded-3xl overflow-hidden max-w-4xl mx-auto">
                            {/* Header Bar */}
                            <div className="bg-[#2C3E50] p-4 text-[#C0A080] font-black text-[10px] tracking-[0.3em] flex items-center justify-between">
                                <span>ACTIVE PORTAL</span>
                            </div>

                            {/* Message Container */}
                            <div className="py-24 px-6 flex flex-col items-center justify-center text-center">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-6 border border-gray-100">
                                    <FileText className="text-gray-300" size={28} />
                                </div>

                                <h3 className="text-2xl font-serif text-[#2C3E50] mb-2 italic">
                                    At present, No EOI published
                                </h3>

                                <p className="text-gray-400 text-[11px] uppercase tracking-[0.2em] font-medium max-w-md">
                                    Please check back later for active trade enquiries or digital auctions from Parekh Linen.
                                </p>

                                <div className="mt-8 w-24 h-0.5 bg-gray-100"></div>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Tender;
