import React, { useState, useEffect } from 'react';
import useSEO from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { API_BASE_URL, equotationApi, IMAGE_BASE_URL } from '../utils/api';

const siteId = "ParekhLinen04";

const Quotation = () => {
    useSEO(
        'Request Quotation',
        'Get a competitive quotation for bulk orders of bedsheets and fabrics from Parekh Linen.',
        'quotation, price, bulk order, bedsheet prices, fabric pricing'
    );

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loadingForm, setLoadingForm] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // Backend listings state
    const [quotations, setQuotations] = useState([]);
    const [header, setHeader] = useState({
        title: 'E-QUOTATION',
        description: 'Get competitive quotes for bulk orders with customized specifications'
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
                    equotationApi.getHeader(siteId),
                    equotationApi.getAll(siteId)
                ]);

                if (headerRes.status === 'fulfilled' && headerRes.value.data?.success && headerRes.value.data.data) {
                    setHeader({
                        title: headerRes.value.data.data.title || 'E-QUOTATION',
                        description: headerRes.value.data.data.description || ''
                    });
                }

                if (listRes.status === 'fulfilled' && listRes.value.data?.success) {
                    const all = listRes.value.data.data || [];
                    const activeOnly = all.filter(q => q.status === 'active');
                    setQuotations(activeOnly);
                }
            } catch (error) {
                console.error("Error loading quotation data:", error);
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
            const formData = {
                siteId: siteId,
                ...data
            };

            const response = await fetch(`${API_BASE_URL}/quotation`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                setErrorMsg(result.message || 'Failed to send quotation request. Please try again.');
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
                .quotation-text,
                .quotation-text * {
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

            <div className="max-w-5xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-16 quotation-text">
                    {/* <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#C0A080] bg-[#C0A080]/10 border border-[#C0A080]/30 px-5 py-2 rounded-full mb-6">
                        Procurement & Offers
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

                {/* Active Quotations Section */}
                <div className="mb-20">
                    <h3 className="text-2xl font-serif text-[#2C3E50] mb-8 border-b pb-4 border-gray-200 uppercase tracking-tight">
                        Active Quotation Requirements
                    </h3>

                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-10 gap-3">
                            <Loader2 className="animate-spin text-[#C0A080]" size={36} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Openings...</span>
                        </div>
                    ) : quotations.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                            {quotations.map((item, idx) => {
                                return (
                                    <div
                                        key={item._id || idx}
                                        className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col shadow-sm relative group p-8"
                                    >
                                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#C0A080] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>

                                        {/* Content */}
                                        <div className="flex flex-col justify-between flex-1 gap-4 quotation-text">
                                            <div>
                                                {item.date && (
                                                    <span className="text-slate-600 text-[9px] font-black uppercase tracking-widest block mb-2">
                                                        Published: {new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                                    </span>
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
                                ( At present, No quotation requirements published )
                            </p>
                        </div>
                    )}
                </div>

                {/* Form Section */}
                <h3 className="text-2xl font-serif text-[#2C3E50] mb-8 border-b pb-4 border-gray-200 uppercase tracking-tight">
                    Quotation Request Form
                </h3>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center justify-center bg-white p-12 text-center shadow-xl rounded-3xl border border-gray-100"
                    >
                        <div className="w-20 h-20 bg-[#C0A080]/10 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-10 h-10 text-[#C0A080]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-serif text-[#2C3E50] mb-4 uppercase tracking-tight">Request Received!</h3>
                        <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                            Your e-Quotation request has been successfully submitted. Our team will prepare the details and contact you shortly.
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 md:p-12 border border-gray-100 rounded-3xl shadow-xl space-y-8">
                        {errorMsg && (
                            <div className="p-4 bg-red-50 text-red-600 text-sm font-medium border border-red-100 rounded-sm">
                                {errorMsg}
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* 1. Name of the Trader */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Name of the Trader *</label>
                                <input
                                    type="text"
                                    {...register("traderName", { required: true })}
                                    className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase"
                                    placeholder="Full Name"
                                />
                                {errors.traderName && <span className="text-red-500 text-[10px]">Required</span>}
                            </div>

                            {/* 2. Business Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Business Name *</label>
                                <input
                                    type="text"
                                    {...register("businessName", { required: true })}
                                    className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase"
                                    placeholder="Company Name"
                                />
                                {errors.businessName && <span className="text-red-500 text-[10px]">Required</span>}
                            </div>

                            {/* 3. Business Address with Pin Code */}
                            <div className="md:col-span-2 flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Business Address with Pin Code *</label>
                                <input
                                    type="text"
                                    {...register("businessAddress", { required: true })}
                                    className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase"
                                    placeholder="Full Address & Pincode"
                                />
                                {errors.businessAddress && <span className="text-red-500 text-[10px]">Required</span>}
                            </div>

                            {/* 4. GST No. */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">GST No.</label>
                                <input
                                    type="text"
                                    {...register("gstNo")}
                                    className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase"
                                    placeholder="Enter GST Number"
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

                            {/* 6. Email id */}
                            <div className="md:col-span-2 flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Email id *</label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    className="border-b-2 border-gray-100 py-2 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold"
                                    placeholder="business@email.com"
                                />
                                {errors.email && <span className="text-red-500 text-[10px]">Required</span>}
                            </div>

                            {/* 7. Quotation Options */}
                            <div className="md:col-span-2 flex flex-col gap-2">
                                <label className="text-[10px] uppercase tracking-widest font-black text-gray-400">Options *</label>
                                <select
                                    {...register("quotationType", { required: true })}
                                    className="w-full p-4 border border-gray-100 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase cursor-pointer bg-white"
                                >
                                    <option value="">Select Option</option>
                                    <option value="Quotation for White Bedsheets">Quotation for White Bedsheets</option>
                                    <option value="Quotation for Printed Bedsheets">Quotation for Printed Bedsheets</option>
                                    <option value="Particulars of the size of Bedsheets">Particulars of the size of Bedsheets</option>
                                </select>
                                {errors.quotationType && <span className="text-red-500 text-[10px]">Required</span>}
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loadingForm}
                            className="w-full bg-[#2C3E50] text-white py-5 uppercase font-black text-[20px] hover:bg-[#C0A080] transition-all shadow-lg disabled:opacity-70 rounded-2xl"
                        >
                            {loadingForm ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Quotation;
