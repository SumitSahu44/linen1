import React, { useState } from 'react';
import useSEO from '../hooks/useSEO';
import { FaCalendarAlt, FaClock, FaUserPlus, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { API_BASE_URL } from '../utils/api';

const Appointment = () => {
    useSEO(
        'Book an Appointment | Parekh Linen',
        'Schedule a visit to our Kolkata facility. Book your appointment for factory tours, trade meetings, or product sampling.',
        'appointment, visit parekh linen, factory visit, trade meeting kolkata'
    );

    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const onSubmit = async (data) => {
        setLoading(true);
        setErrorMsg('');

        try {
            const formData = new FormData();
            formData.append("siteId", "ParekhLinen04");
            formData.append("visitorName", data.visitorName);
            formData.append("businessName", data.businessName);
            formData.append("visitorAddress", data.visitorAddress);
            formData.append("mobileNo", data.mobileNo);
            formData.append("email", data.email);
            formData.append("proofType", data.proofType);
            formData.append("reasonForVisit", data.reasonForVisit);

            if (data.proofFile && data.proofFile.length > 0) {
                formData.append("proofFile", data.proofFile[0]);
            }

            const response = await fetch(`${API_BASE_URL}/appointment`, {
                method: "POST",
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                setErrorMsg(result.message || 'Failed to submit appointment request. Please try again.');
            }
        } catch (error) {
            console.error("Submission Error:", error);
            setErrorMsg('Server error. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="pt-32 pb-20 bg-white">
            <div className="max-w-5xl mx-auto px-6">
                
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-4">Visit with Appointment</h2>
                    <div className="w-20 h-1 bg-[#C0A080] mx-auto mb-6"></div>
                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                        We welcome our trade partners and bulk buyers to our manufacturing facility. 
                        Please fill out the e-form below to schedule your visit.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-10">
                    
                    {/* Left Side: Info Cards */}
                    <div className="md:col-span-1 space-y-6">
                        <div className="bg-[#2C3E50] p-6 text-white rounded-sm shadow-xl">
                            <h4 className="text-[#C0A080] font-bold uppercase tracking-widest text-sm mb-4">Visit Guidelines</h4>
                            <ul className="text-sm space-y-4 opacity-90">
                                <li className="flex gap-3"><span className="text-[#C0A080]">✔</span> Appointments must be booked 48 hours in advance.</li>
                                <li className="flex gap-3"><span className="text-[#C0A080]">✔</span> Max 3 persons per group.</li>
                                <li className="flex gap-3"><span className="text-[#C0A080]">✔</span> Visiting hours: 10 AM - 5 PM.</li>
                            </ul>
                        </div>

                        <div className="border border-gray-200 p-6 rounded-sm text-center">
                            <FaMapMarkerAlt className="text-[#C0A080] mx-auto text-3xl mb-3" />
                            <p className="font-semibold text-[#2C3E50]">Factory Location</p>
                            <p className="text-gray-500 text-sm">Industrial Hub, KOLKATA, WB, India</p>
                        </div>
                    </div>

                    {/* Right Side: Appointment e-Form */}
                    <div className="md:col-span-2 bg-slate-50 p-8 md:p-12 border border-gray-100 shadow-sm">
                        {isSubmitted ? (
                            <motion.div 
                                initial={{ opacity: 0, scale: 0.95 }} 
                                animate={{ opacity: 1, scale: 1 }} 
                                transition={{ duration: 0.4 }}
                                className="flex flex-col items-center justify-center h-full text-center py-12"
                            >
                                <div className="w-20 h-20 bg-[#C0A080]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-10 h-10 text-[#C0A080]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <h3 className="text-3xl font-serif text-[#2C3E50] mb-4">Appointment Requested</h3>
                                <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
                                    Thank you! Your appointment request has been submitted successfully. Our team will verify your details and connect with you shortly.
                                </p>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" encType="multipart/form-data">
                                {errorMsg && (
                                    <div className="p-4 bg-red-50 text-red-600 text-sm font-medium border border-red-100 rounded-sm">
                                        {errorMsg}
                                    </div>
                                )}

                                {/* Name & Business Section */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Name of the Visitor *</label>
                                        <input 
                                            type="text" 
                                            {...register("visitorName", { required: true })}
                                            className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all"
                                            placeholder="Enter your full name"
                                        />
                                        {errors.visitorName && <span className="text-red-500 text-[10px]">Required</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Name of the Business *</label>
                                        <input 
                                            type="text" 
                                            {...register("businessName", { required: true })}
                                            className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all"
                                            placeholder="Enter Business/Organization"
                                        />
                                        {errors.businessName && <span className="text-red-500 text-[10px]">Required</span>}
                                    </div>
                                </div>

                                {/* Address & Pin Code */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Visitor Address with Pin code *</label>
                                    <textarea 
                                        rows="2"
                                        {...register("visitorAddress", { required: true })}
                                        className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all resize-none"
                                        placeholder="Complete address including PIN"
                                    />
                                    {errors.visitorAddress && <span className="text-red-500 text-[10px]">Required</span>}
                                </div>

                                {/* Contact Details */}
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mobile No. *</label>
                                        <input 
                                            type="tel" 
                                            {...register("mobileNo", { required: true })}
                                            className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all"
                                            placeholder="+91 00000 00000"
                                        />
                                        {errors.mobileNo && <span className="text-red-500 text-[10px]">Required</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Id *</label>
                                        <input 
                                            type="email" 
                                            {...register("email", { required: true })}
                                            className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all"
                                            placeholder="email@example.com"
                                        />
                                        {errors.email && <span className="text-red-500 text-[10px]">Required</span>}
                                    </div>
                                </div>

                                {/* Identity Verification Section */}
                                <div className="grid md:grid-cols-2 gap-6 p-4 bg-white border border-gray-100 rounded-sm">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Identity Document * (Roll-down)</label>
                                        <select 
                                            {...register("proofType", { required: true })}
                                            className="w-full p-3 bg-gray-50 border-none text-sm outline-none focus:ring-1 ring-[#C0A080]"
                                        >
                                            <option value="">Select Document Type</option>
                                            <option value="Aadhaar Card">Aadhaar Card</option>
                                            <option value="ECI Card">ECI Card (Voter ID)</option>
                                            <option value="DL">Driving License (DL)</option>
                                        </select>
                                        {errors.proofType && <span className="text-red-500 text-[10px]">Required</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Upload Proof (Image/PDF)</label>
                                        <input 
                                            type="file" 
                                            {...register("proofFile")}
                                            className="text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:bg-[#C0A080] file:text-white hover:file:bg-[#2C3E50] transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Reason for Visit */}
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Describe the reason for Visit *</label>
                                    <textarea 
                                        rows="4"
                                        {...register("reasonForVisit", { required: true })}
                                        className="w-full p-3 border border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all resize-none"
                                        placeholder="Please provide details about your visit purpose..."
                                    />
                                    {errors.reasonForVisit && <span className="text-red-500 text-[10px]">Required</span>}
                                </div>

                                {/* Submit Button */}
                                <button 
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-[#2C3E50] text-white py-4 font-bold uppercase text-xs tracking-[0.2em] hover:bg-[#C0A080] transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-70"
                                >
                                    {loading ? "Submitting..." : "Request Appointment"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;