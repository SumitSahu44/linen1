import { useState } from 'react';
import useSEO from '../hooks/useSEO';

const Quotation = () => {
    useSEO(
        'Request Quotation',
        'Get a competitive quotation for bulk orders of bedsheets and fabrics from Parekh Linen.',
        'quotation, price, bulk order, bedsheet prices, fabric pricing'
    );
    
    const [formData, setFormData] = useState({
        companyName: '',
        contactPerson: '',
        email: '',
        phone: '',
        productType: 'bedsheet',
        gsm: '200',
        quantity: '',
        color: '',
        threadCount: '',
        deadline: '',
        specifications: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Quotation Request:', formData);
        alert('Quotation request submitted! Our team will contact you shortly.');
        setFormData({
            companyName: '',
            contactPerson: '',
            email: '',
            phone: '',
            productType: 'bedsheet',
            gsm: '200',
            quantity: '',
            color: '',
            threadCount: '',
            deadline: '',
            specifications: ''
        });
    };

    return (
        <div className="pt-32 pb-20">
            <div className="max-w-5xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-[#2C3E50] mb-4"><span className="lowercase">e</span>-Quotation</h2>
                    <p className="text-gray-500">Get competitive quotes for bulk orders with customized specifications</p>
                </div>

          

       <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border border-gray-200 shadow-sm">
    <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* 1. Name of the Trader */}
        <div>
            <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Name of the Trader *</label>
            <input 
                type="text" 
                name="traderName"
                value={formData.traderName}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm uppercase"
                placeholder="Full Name"
            />
        </div>

        {/* 2. Business Name */}
        <div>
            <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Business Name *</label>
            <input 
                type="text" 
                name="businessName"
                value={formData.businessName}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm uppercase"
                placeholder="Company Name"
            />
        </div>

        {/* 3. Business Address with Pin Code */}
        <div className="md:col-span-2">
            <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Business Address with Pin Code *</label>
            <input 
                type="text" 
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm uppercase"
                placeholder="Full Address & Pincode"
            />
        </div>

        {/* 4. GST No. */}
        <div>
            <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">GST No. *</label>
            <input 
                type="text" 
                name="gstNo"
                value={formData.gstNo}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm uppercase"
                placeholder="Enter GST Number"
            />
        </div>

        {/* 5. Mobile No. */}
        <div>
            <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Mobile No. *</label>
            <input 
                type="tel" 
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm"
                placeholder="+91 00000 00000"
            />
        </div>

        {/* 6. Email id */}
        <div>
            <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Email id *</label>
            <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm"
                placeholder="business@email.com"
            />
        </div>

        {/* 7. Quotation Options (Roll-down mode) */}
        <div>
            <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Quotation Type *</label>
            <select 
                name="quotationType"
                value={formData.quotationType}
                onChange={handleChange}
                className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm font-bold uppercase cursor-pointer bg-white"
            >
                <option value="">Select Quotation For</option>
                <option value="white">Quotation for White Bedsheets</option>
                <option value="printed">Quotation for Printed Bedsheets</option>
            </select>
        </div>
    </div>

    {/* 8. Particulars of the size of Bedsheets */}
    <div className="mb-8">
        <label className="block text-[11px] font-black uppercase tracking-widest text-[#2C3E50] mb-3">Particulars of the size of Bedsheets *</label>
        <textarea 
            name="bedsheetSize"
            value={formData.bedsheetSize}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-4 border border-gray-200 focus:border-[#C0A080] outline-none transition-colors text-sm uppercase"
            placeholder="Describe size details (e.g., King, Queen, Single, or specific dimensions like 90x100 inches)..."
        />
    </div>

    <button 
        type="submit"
        className="w-full bg-[#2C3E50] text-white py-5 uppercase font-black text-[20px] hover:bg-[#C0A080] transition-all shadow-lg"
    >
        Request Quotation
    </button>
</form>
            </div>
        </div>
    );
};

export default Quotation;
