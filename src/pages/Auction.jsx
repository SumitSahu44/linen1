import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Loader2, Calendar } from 'lucide-react';
import useSEO from '../hooks/useSEO';
import { useForm } from 'react-hook-form';
import { API_BASE_URL, eauctionApi, IMAGE_BASE_URL } from '../utils/api';

const siteId = "ParekhLinen04";

const Auction = () => {
    useSEO(
        'e-Auction',
        'Participate in online auctions for premium bedsheets and linens from Parekh Linen.',
        'auction, online bidding, premium linens'
    );

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loadingForm, setLoadingForm] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // Backend listings state
    const [auctions, setAuctions] = useState([]);
    const [header, setHeader] = useState({
        title: 'E-AUCTION',
        description: 'Bid for premium linens and exclusive collections'
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
                    eauctionApi.getHeader(siteId),
                    eauctionApi.getAll(siteId)
                ]);

                if (headerRes.status === 'fulfilled' && headerRes.value.data?.success && headerRes.value.data.data) {
                    setHeader({
                        title: headerRes.value.data.data.title || 'E-AUCTION',
                        description: headerRes.value.data.data.description || ''
                    });
                }

                if (listRes.status === 'fulfilled' && listRes.value.data?.success) {
                    const all = listRes.value.data.data || [];
                    const activeOnly = all.filter(a => a.status === 'active');
                    setAuctions(activeOnly);
                }
            } catch (error) {
                console.error("Error loading auction data:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const onSubmit = async (data) => {
        setLoadingForm(true);
        setErrorMsg('');

        try {
            const formData = new FormData();
            formData.append("siteId", siteId);
            formData.append("participantName", data.participantName);
            formData.append("legalBusinessName", data.legalBusinessName);
            formData.append("businessAddress", data.businessAddress);
            formData.append("gstNo", data.gstNo || "");
            formData.append("mobileNo", data.mobileNo);
            formData.append("email", data.email);

            if (data.gstCertificate && data.gstCertificate.length > 0) {
                formData.append("gstCertificate", data.gstCertificate[0]);
            }

            const response = await fetch(`${API_BASE_URL}/auction`, {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                setErrorMsg(result.message || 'Failed to submit participation info. Please try again.');
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setErrorMsg('Server error. Please try again later.');
        } finally {
            setLoadingForm(false);
        }
    };

    return (
        <div className="pt-32 pb-20 bg-[#fffcf7] min-h-screen">
            {/* Scoped CSS to prevent split/break word and overflow */}
            <style>{`
                .auction-text,
                .auction-text * {
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

            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 auction-text">
                    {/* <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#C0A080] bg-[#C0A080]/10 border border-[#C0A080]/30 px-5 py-2 rounded-full mb-6">
                        Official Trade Portal
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

                {/* Active Auctions Section */}
                <div className="mb-20">
                    <h3 className="text-2xl font-serif text-[#2C3E50] mb-8 border-b pb-4 border-gray-200 uppercase tracking-tight">
                        Active Auction Openings
                    </h3>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-10 gap-3">
                            <Loader2 className="animate-spin text-[#C0A080]" size={36} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Auctions...</span>
                        </div>
                    ) : auctions.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {auctions.map((item, idx) => {
                                const imgSrc = item.image
                                    ? (item.image.startsWith('http') ? item.image : `${IMAGE_BASE_URL}/${item.image}`)
                                    : 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800';

                                return (
                                    <div
                                        key={item._id || idx}
                                        className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row shadow-sm relative group"
                                    >
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C0A080] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

                                        {/* Image */}
                                        <div className="w-full md:w-44 h-48 md:h-44 overflow-hidden bg-slate-50 relative shrink-0">
                                            <img
                                                src={imgSrc}
                                                alt={item.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                                onError={(e) => {
                                                    e.target.src = 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=800';
                                                }}
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-6 flex flex-col justify-between flex-1 gap-4 auction-text">
                                            <div>
                                                {item.date && (
                                                    <div className="flex items-center gap-1.5 text-slate-600 text-[9px] font-black uppercase tracking-widest mb-2">
                                                        <Calendar size={12} className="text-[#C0A080]" />
                                                        Published: {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                    </div>
                                                )}
                                                <h4 className="text-lg font-bold text-[#2C3E50] uppercase tracking-tight mb-2 group-hover:text-[#C0A080] transition-colors">
                                                    {item.title}
                                                </h4>
                                                <div
                                                    className="text-slate-800 text-sm leading-relaxed rich-text-content"
                                                    dangerouslySetInnerHTML={{ __html: cleanHtml(item.description) }}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="bg-white border border-gray-100 rounded-3xl p-16 text-center max-w-xl mx-auto mb-16 shadow-sm">
                            <p className="text-xs font-bold text-[#C0A080] bg-[#C0A080]/10 inline-block px-5 py-2.5 rounded-full italic uppercase">
                                ( At present, No active e-Auction published )
                            </p>
                        </div>
                    )}
                </div>

                {/* Form Section */}
                <section className="py-10 bg-transparent">
                    <div className="max-w-4xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="bg-white shadow-2xl border-t-4 border-[#C0A080] rounded-3xl overflow-hidden"
                        >
                            {/* Header Section */}
                            <div className="bg-[#2C3E50] p-8 text-center text-white">
                                <h2 className="text-3xl font-serif tracking-tight mb-2">e-Auction Participation Form</h2>
                                <p className="text-gray-400 text-xs uppercase tracking-[0.3em] font-medium">Official Trade Enquiry Portal</p>
                            </div>

                            {isSubmitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4 }}
                                    className="p-16 text-center"
                                >
                                    <div className="w-20 h-20 bg-[#C0A080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <svg className="w-10 h-10 text-[#C0A080]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-3xl font-serif text-[#2C3E50] mb-4 uppercase tracking-tight">You're In!</h3>
                                    <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                                        Your participation request for the e-Auction has been successfully submitted. We will verify your details and connect with you soon.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="p-8 md:p-12 space-y-8" encType="multipart/form-data">
                                    {errorMsg && (
                                        <div className="p-4 bg-red-50 text-red-600 text-sm font-medium border border-red-100 rounded-sm">
                                            {errorMsg}
                                        </div>
                                    )}

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* 1. Name of the Participant */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Name of the Participant *</label>
                                            <input
                                                type="text"
                                                {...register("participantName", { required: true })}
                                                className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase"
                                                placeholder="Full Name"
                                            />
                                            {errors.participantName && <span className="text-red-500 text-[10px]">Required</span>}
                                        </div>

                                        {/* 2. Legal Name of the Business */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Legal Name of the Business *</label>
                                            <input
                                                type="text"
                                                {...register("legalBusinessName", { required: true })}
                                                className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase"
                                                placeholder="Company Name"
                                            />
                                            {errors.legalBusinessName && <span className="text-red-500 text-[10px]">Required</span>}
                                        </div>
                                    </div>

                                    {/* 3. Business Address with Pin code */}
                                    <div className="flex flex-col gap-2">
                                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Business Address with Pin code *</label>
                                        <input
                                            type="text"
                                            {...register("businessAddress", { required: true })}
                                            className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase"
                                            placeholder="Complete Office Address & Pincode"
                                        />
                                        {errors.businessAddress && <span className="text-red-500 text-[10px]">Required</span>}
                                    </div>

                                    <div className="grid md:grid-cols-3 gap-8">
                                        {/* 4. GST No. */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">GST No.</label>
                                            <input
                                                type="text"
                                                {...register("gstNo")}
                                                className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase"
                                                placeholder="GSTIN Number"
                                            />
                                        </div>

                                        {/* 5. Mobile No. */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Mobile No. *</label>
                                            <input
                                                type="tel"
                                                {...register("mobileNo", { required: true })}
                                                className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold"
                                                placeholder="+91 00000 00000"
                                            />
                                            {errors.mobileNo && <span className="text-red-500 text-[10px]">Required</span>}
                                        </div>

                                        {/* 6. Email Id */}
                                        <div className="flex flex-col gap-2">
                                            <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Email Id *</label>
                                            <input
                                                type="email"
                                                {...register("email", { required: true })}
                                                className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold"
                                                placeholder="official@email.com"
                                            />
                                            {errors.email && <span className="text-red-500 text-[10px]">Required</span>}
                                        </div>
                                    </div>

                                    {/* 7. Upload GST Certificate */}
                                    <div className="flex flex-col gap-4">
                                        <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Upload GST Certificate (PDF/Image)</label>
                                        <div className="relative border-2 border-dashed border-gray-100 p-10 rounded-xl hover:border-[#C0A080] transition-all bg-gray-50 flex flex-col items-center justify-center gap-2 group cursor-pointer">
                                            <input
                                                type="file"
                                                {...register("gstCertificate")}
                                                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                            />
                                            <svg className="w-8 h-8 text-gray-300 group-hover:text-[#C0A080] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a2 2 0 002 2h12 a2 2 0 002-2v-1M16 8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Click to upload document</p>
                                        </div>
                                    </div>

                                    {/* Submit Button */}
                                    <div className="pt-6">
                                        <motion.button
                                            type="submit"
                                            disabled={loadingForm}
                                            whileHover={{ scale: loadingForm ? 1 : 1.02 }}
                                            whileTap={{ scale: loadingForm ? 1 : 0.98 }}
                                            className="w-full bg-[#2C3E50] text-white py-5 font-black uppercase text-[20px] hover:bg-[#C0A080] transition-all shadow-xl disabled:opacity-70 rounded-2xl"
                                        >
                                            {loadingForm ? "Submitting..." : "Submit Auction Entry"}
                                        </motion.button>
                                    </div>
                                </form>
                            )}
                        </motion.div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Auction;
