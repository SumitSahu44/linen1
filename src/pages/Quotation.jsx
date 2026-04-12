import { useState } from 'react';
import useSEO from '../hooks/useSEO';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { API_BASE_URL } from '../utils/api';

const Quotation = () => {
    useSEO(
        'Request Quotation',
        'Get a competitive quotation for bulk orders of bedsheets and fabrics from Parekh Linen.',
        'quotation, price, bulk order, bedsheet prices, fabric pricing'
    );

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = async (data) => {
        setLoading(true);
        setErrorMsg('');

        try {
            const formData = {
                siteId: "ParekhLinen04",
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
            setLoading(false);
        }
    };

    return (
        <div className="pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-4"><span className="lowercase">e</span>-Quotation</h2>
                    <p className="text-gray-500">Get competitive quotes for bulk orders with customized specifications</p>
                </div>

                {isSubmitted ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="flex flex-col items-center justify-center bg-white p-12 text-center shadow-sm border border-gray-100"
                    >
                        <div className="w-20 h-20 bg-[#C0A080]/10 rounded-full flex items-center justify-center mb-6">
                            <svg className="w-10 h-10 text-[#C0A080]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h3 className="text-3xl font-serif text-[#2C3E50] mb-4">Request Received!</h3>
                        <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                            Your e-Quotation request has been successfully submitted. Our team will prepare the details and contact you shortly.
                        </p>
                    </motion.div>
                ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm">
                        {errorMsg && (
                            <div className="mb-8 p-4 bg-red-50 text-red-600 text-sm font-medium border border-red-100 rounded-sm">
                                {errorMsg}
                            </div>
                        )}

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            {/* 1. Name of the Trader */}
                            <div>
                                <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Name of the Trader *</label>
                                <input
                                    type="text"
                                    {...register("traderName", { required: true })}
                                    className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm uppercase"
                                    placeholder="Full Name"
                                />
                                {errors.traderName && <span className="text-red-500 text-[10px]">Required</span>}
                            </div>

                            {/* 2. Business Name */}
                            <div>
                                <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Business Name *</label>
                                <input
                                    type="text"
                                    {...register("businessName", { required: true })}
                                    className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm uppercase"
                                    placeholder="Company Name"
                                />
                                {errors.businessName && <span className="text-red-500 text-[10px]">Required</span>}
                            </div>

                            {/* 3. Business Address with Pin Code */}
                            <div className="md:col-span-2">
                                <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Business Address with Pin Code *</label>
                                <input
                                    type="text"
                                    {...register("businessAddress", { required: true })}
                                    className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm uppercase"
                                    placeholder="Full Address & Pincode"
                                />
                                {errors.businessAddress && <span className="text-red-500 text-[10px]">Required</span>}
                            </div>

                            {/* 4. GST No. */}
                            <div>
                                <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">GST No.</label>
                                <input
                                    type="text"
                                    {...register("gstNo")}
                                    className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm uppercase"
                                    placeholder="Enter GST Number"
                                />
                            </div>

                            {/* 5. Mobile No. */}
                            <div>
                                <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Mobile No. *</label>
                                <input
                                    type="tel"
                                    {...register("mobileNo", { required: true })}
                                    className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm"
                                    placeholder="+91 00000 00000"
                                />
                                {errors.mobileNo && <span className="text-red-500 text-[10px]">Required</span>}
                            </div>

                            {/* 6. Email id */}
                            <div className="md:col-span-2">
                                <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Email id *</label>
                                <input
                                    type="email"
                                    {...register("email", { required: true })}
                                    className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm"
                                    placeholder="business@email.com"
                                />
                                {errors.email && <span className="text-red-500 text-[10px]">Required</span>}
                            </div>

                            {/* 7. Quotation Options (Roll-down mode) */}
                            <div className="md:col-span-2">
                                <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Options *</label>
                                <select
                                    {...register("quotationType", { required: true })}
                                    className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase cursor-pointer bg-white"
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
                            disabled={loading}
                            className="w-full bg-[#2C3E50] text-white py-5 uppercase font-black text-[20px] hover:bg-[#C0A080] transition-all shadow-lg disabled:opacity-70"
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </button>
                    </form>
                )}
            </div>
        </div>
    );
};

export default Quotation;
