import { useState } from 'react';
import { useForm } from 'react-hook-form'; // Install: npm install react-hook-form
import { API_BASE_URL } from '../../utils/api';

const TradeEnquiry = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState(null);

    const onSubmit = async (data) => {
        setLoading(true);
        setMessage(null);

        const formData = new FormData();
        // Append all text fields
        formData.append("siteId", "ParekhLinen04");
        formData.append("traderName", data.traderName);
        formData.append("businessName", data.businessName);
        formData.append("businessAddress", data.businessAddress);
        formData.append("gstNo", data.gstNo || "");
        formData.append("mobileNo", data.mobileNo);
        formData.append("email", data.email);
        formData.append("enquiryType", data.enquiryType);

        // Append file if exists
        if (data.gstCertificate && data.gstCertificate.length > 0) {
            formData.append("gstCertificate", data.gstCertificate[0]);
        }

        try {
            const response = await fetch(`${API_BASE_URL}/trade-enquiry`, {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                setMessage({ type: 'success', text: 'Enquiry Sent Successfully!' });
                reset();
            } else {
                setMessage({ type: 'error', text: result.message || 'Failed to send enquiry.' });
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setMessage({ type: 'error', text: 'Server error. Please try again later.' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-2xl border-t-8 border-[#2C3E50]">
            <h3 className="text-3xl font-serif text-center mb-8 text-[#2C3E50]">Trade Enquiry</h3>

            {message && (
                <div className={`p-4 mb-6 text-center ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {message.text}
                </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="grid md:grid-cols-2 gap-6" encType="multipart/form-data">
                <div>
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">Trader Name *</label>
                    <input
                        {...register("traderName", { required: "Trader Name is required" })}
                        className={`w-full p-3 border ${errors.traderName ? 'border-red-500' : 'border-gray-200'} outline-none focus:border-[#C0A080]`}
                    />
                    {errors.traderName && <span className="text-red-500 text-xs">{errors.traderName.message}</span>}
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">Business Name *</label>
                    <input
                        {...register("businessName", { required: "Business Name is required" })}
                        className={`w-full p-3 border ${errors.businessName ? 'border-red-500' : 'border-gray-200'} outline-none focus:border-[#C0A080]`}
                    />
                    {errors.businessName && <span className="text-red-500 text-xs">{errors.businessName.message}</span>}
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">Mobile Number *</label>
                    <input
                        type="tel"
                        {...register("mobileNo", { required: "Mobile Number is required" })}
                        className={`w-full p-3 border ${errors.mobileNo ? 'border-red-500' : 'border-gray-200'} outline-none focus:border-[#C0A080]`}
                    />
                    {errors.mobileNo && <span className="text-red-500 text-xs">{errors.mobileNo.message}</span>}
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">Email *</label>
                    <input
                        type="email"
                        {...register("email", { required: "Email is required" })}
                        className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-200'} outline-none focus:border-[#C0A080]`}
                    />
                    {errors.email && <span className="text-red-500 text-xs">{errors.email.message}</span>}
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">GST No</label>
                    <input
                        {...register("gstNo")}
                        className="w-full p-3 border border-gray-200 outline-none focus:border-[#C0A080]"
                    />
                </div>

                <div>
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">Upload GST Certificate</label>
                    <input
                        type="file"
                        {...register("gstCertificate")}
                        className="w-full p-2 border border-gray-200 outline-none focus:border-[#C0A080] bg-white cursor-pointer"
                    />
                </div>

                <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">Enquiry Type *</label>
                    <select 
                        {...register("enquiryType", { required: "Enquiry Type is required" })} 
                        className={`w-full p-3 border ${errors.enquiryType ? 'border-red-500' : 'border-gray-200'} outline-none focus:border-[#C0A080] bg-white`}
                    >
                        <option value="">Select Enquiry Type</option>
                        <option value="For Bulk Purchase">For Bulk Purchase</option>
                        <option value="For Retail Purchase">For Retail Purchase</option>
                        <option value="For Job Work Contract">For Job Work Contract</option>
                        <option value="Others">Others</option>
                    </select>
                    {errors.enquiryType && <span className="text-red-500 text-xs">{errors.enquiryType.message}</span>}
                </div>

                <div className="md:col-span-2">
                    <label className="block text-xs uppercase tracking-widest font-bold mb-2">Business Address *</label>
                    <textarea
                        rows="3"
                        {...register("businessAddress", { required: "Business Address is required" })}
                        className={`w-full p-3 border ${errors.businessAddress ? 'border-red-500' : 'border-gray-200'} outline-none focus:border-[#C0A080]`}
                        placeholder="Enter your complete business address..."
                    ></textarea>
                    {errors.businessAddress && <span className="text-red-500 text-xs">{errors.businessAddress.message}</span>}
                </div>

                <button 
                    type="submit" 
                    disabled={loading}
                    className="md:col-span-2 bg-[#2C3E50] text-white py-4 font-bold tracking-[0.2em] hover:bg-[#C0A080] transition-colors duration-500 disabled:bg-gray-400"
                >
                    {loading ? "SUBMITTING..." : "SUBMIT FORM"}
                </button>
            </form>
        </div>
    );
};

export default TradeEnquiry;