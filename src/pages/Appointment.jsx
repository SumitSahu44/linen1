import React, { useState } from 'react';
import useSEO from '../hooks/useSEO';
import { FaCalendarAlt, FaClock, FaUserPlus, FaMapMarkerAlt } from 'react-icons/fa';

const Appointment = () => {
    useSEO(
        'Book an Appointment | Parekh Linen',
        'Schedule a visit to our Kolkata facility. Book your appointment for factory tours, trade meetings, or product sampling.',
        'appointment, visit parekh linen, factory visit, trade meeting kolkata'
    );

    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        date: '',
        timeSlot: '',
        purpose: 'Factory Tour',
        notes: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Appointment Data:", formData);
        alert("Thank you! Your appointment request has been submitted. We will confirm via email.");
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
                            <p className="text-gray-500 text-sm">Industrial Hub, Kolkata, WB</p>
                        </div>
                    </div>

                    {/* Right Side: Appointment e-Form */}
                <div className="md:col-span-2 bg-slate-50 p-8 md:p-12 border border-gray-100 shadow-sm">
    <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Name & Business Section */}
        <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Name of the Visitor</label>
                <input 
                    type="text" 
                    required
                    className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all"
                    placeholder="Enter your full name"
                    onChange={(e) => setFormData({...formData, visitorName: e.target.value})}
                />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Name of the Business</label>
                <input 
                    type="text" 
                    required
                    className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all"
                    placeholder="Enter Business/Organization"
                    onChange={(e) => setFormData({...formData, businessName: e.target.value})}
                />
            </div>
        </div>

        {/* Address & Pin Code */}
        <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Visitor Address with Pin code</label>
            <textarea 
                rows="2"
                required
                className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all resize-none"
                placeholder="Complete address including PIN"
                onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
        </div>

        {/* Contact Details */}
        <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Mobile No.</label>
                <input 
                    type="tel" 
                    required
                    className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all"
                    placeholder="+91 00000 00000"
                    onChange={(e) => setFormData({...formData, mobile: e.target.value})}
                />
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Id</label>
                <input 
                    type="email" 
                    required
                    className="w-full p-3 border-b border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all"
                    placeholder="email@example.com"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
            </div>
        </div>

        {/* Identity Verification Section */}
        <div className="grid md:grid-cols-2 gap-6 p-4 bg-white border border-gray-100 rounded-sm">
            <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Identity Document (Roll-down)</label>
                <select 
                    required
                    className="w-full p-3 bg-gray-50 border-none text-sm outline-none focus:ring-1 ring-[#C0A080]"
                    onChange={(e) => setFormData({...formData, idType: e.target.value})}
                >
                    <option value="">Select Document Type</option>
                    <option value="Aadhaar Card">Aadhaar Card</option>
                    <option value="ECI Card">ECI Card (Voter ID)</option>
                    <option value="DL">Driving License (DL)</option>
                </select>
            </div>
            <div className="space-y-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Upload Proof (Image/PDF)</label>
                <input 
                    type="file" 
                    required
                    className="text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:bg-[#C0A080] file:text-white hover:file:bg-[#2C3E50] transition-all"
                    onChange={(e) => setFormData({...formData, proofFile: e.target.files[0]})}
                />
            </div>
        </div>

        {/* Reason for Visit */}
        <div className="space-y-2">
            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Describe the reason for Visit</label>
            <textarea 
                rows="4"
                required
                className="w-full p-3 border border-gray-300 bg-transparent focus:border-[#C0A080] outline-none transition-all resize-none"
                placeholder="Please provide details about your visit purpose..."
                onChange={(e) => setFormData({...formData, visitReason: e.target.value})}
            />
        </div>

        {/* Submit Button */}
        <button 
            type="submit"
            className="w-full bg-[#2C3E50] text-white py-4 font-bold uppercase text-xs tracking-[0.2em] hover:bg-[#C0A080] transition-all duration-300 shadow-lg hover:shadow-xl"
        >
            Request Appointment
        </button>

    </form>
</div>

                </div>
            </div>
        </div>
    );
};

export default Appointment;