import React, { useState, useEffect } from 'react';
import { Loader2, FileText, Calendar, Printer, Eye } from 'lucide-react';
import { circularApi, IMAGE_BASE_URL } from '../utils/api';
import useSEO from '../hooks/useSEO';

const siteId = "ParekhLinen04";

const Circular = () => {
    useSEO(
        'Circulars & Announcements',
        'Latest circulars and announcements from Parekh Linen about products, certifications, and company updates.',
        'circulars, announcements, news, parekh linen, updates'
    );

    const [circulars, setCirculars] = useState([]);
    const [header, setHeader] = useState({
        title: 'Circulars & Announcements',
        description: 'Stay updated with the latest news and announcements from Parekh Linen'
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
                    circularApi.getHeader(siteId),
                    circularApi.getAll(siteId)
                ]);

                if (headerRes.status === 'fulfilled' && headerRes.value.data?.success && headerRes.value.data.data) {
                    setHeader({
                        title: headerRes.value.data.data.title || 'Circulars & Announcements',
                        description: headerRes.value.data.data.description || 'Stay updated with the latest news and announcements from Parekh Linen'
                    });
                }

                if (listRes.status === 'fulfilled' && listRes.value.data?.success) {
                    setCirculars(listRes.value.data.data || []);
                }
            } catch (error) {
                console.error("Failed to load circular data:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const getFileUrl = (pdfUrl) => {
        if (!pdfUrl) return '#';
        return pdfUrl.startsWith('http') ? pdfUrl : `${IMAGE_BASE_URL}/${pdfUrl}`;
    };

    const handlePrint = async (pdfUrl) => {
        if (!pdfUrl) return;
        const fullUrl = getFileUrl(pdfUrl);
        
        try {
            const response = await fetch(fullUrl);
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = blobUrl;
            document.body.appendChild(iframe);
            
            iframe.onload = () => {
                setTimeout(() => {
                    iframe.contentWindow.focus();
                    iframe.contentWindow.print();
                    setTimeout(() => document.body.removeChild(iframe), 1000);
                }, 100);
            };
        } catch (error) {
            console.error("Print failed via iframe:", error);
            window.open(fullUrl, '_blank');
        }
    };

    return (
        <div className="pt-32 pb-20 bg-[#fffcf7] min-h-screen">
            {/* Scoped CSS to prevent split/break word and overflow */}
            <style>{`
                .circular-text,
                .circular-text * {
                    word-break: normal !important;
                    overflow-wrap: break-word !important;
                    white-space: normal !important;
                    max-width: 100% !important;
                }
            `}</style>

            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 circular-text">
                    {/* <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#C0A080] bg-[#C0A080]/10 border border-[#C0A080]/30 px-5 py-2 rounded-full mb-6">
                        Official Gazette
                    </span> */}
                    <h2 className="text-4xl font-serif text-[#2C3E50] tracking-tight mb-4">
                        {header.title}
                    </h2>
                    <div className="w-20 h-1 bg-[#C0A080] mx-auto mb-6"></div>
                    <div
                        className="max-w-2xl mx-auto text-slate-800 text-sm md:text-base leading-relaxed font-normal tracking-wide rich-text-content"
                        dangerouslySetInnerHTML={{ __html: cleanHtml(header.description) }}
                    />
                </div>

                <div className="space-y-6">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-3">
                            <Loader2 className="animate-spin text-[#C0A080]" size={36} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Circulars...</span>
                        </div>
                    ) : circulars.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 max-w-4xl mx-auto">
                            {circulars.map((item, idx) => {
                                const docUrl = getFileUrl(item.pdfUrl);
                                return (
                                    <div
                                        key={item._id || idx}
                                        className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative group overflow-hidden pl-8"
                                    >
                                        <div className="absolute left-0 top-0 w-1.5 h-full bg-[#2C3E50] group-hover:bg-[#C0A080] transition-colors duration-300"></div>

                                        <div className="circular-text space-y-2 flex-1">
                                            {item.publishDate && (
                                                <div className="flex items-center gap-1.5 text-slate-600 text-[10px] font-black uppercase tracking-widest">
                                                    <Calendar size={13} className="text-[#C0A080]" />
                                                    Published: {item.publishDate}
                                                </div>
                                            )}
                                            <h3 className="text-lg font-serif text-[#2C3E50] group-hover:text-[#C0A080] transition-colors">
                                                {item.subject}
                                            </h3>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <a
                                                href={docUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-slate-100 hover:bg-slate-200 text-[#2C3E50] text-[10px] font-black uppercase tracking-widest rounded-xl transition-colors"
                                            >
                                                <Eye size={13} />
                                                View
                                            </a>
                                            <button
                                                onClick={() => handlePrint(item.pdfUrl)}
                                                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#2C3E50] hover:bg-[#C0A080] text-white text-[10px] font-black uppercase tracking-widest rounded-xl transition-all shadow-sm"
                                            >
                                                <Printer size={13} />
                                                Print
                                            </button>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="bg-white p-16 border border-gray-100 rounded-3xl flex flex-col items-center justify-center text-center group shadow-sm max-w-4xl mx-auto">
                            {/* Decorative Icon Area */}
                            <div className="mb-6 relative">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                                    <FileText className="text-gray-300" size={24} />
                                </div>
                            </div>

                            {/* Text Content */}
                            <h3 className="text-2xl font-serif text-[#2C3E50] mb-2 italic">
                                At present, No circular published
                            </h3>

                            <p className="text-slate-600 text-sm max-w-xs leading-relaxed">
                                All official notices and trade circulars will be listed here once released.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Circular;
