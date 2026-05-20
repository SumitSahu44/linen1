import React, { useState, useEffect } from 'react';
import { Loader2, Briefcase, MapPin, Mail, DollarSign } from 'lucide-react';
import { careerApi } from '../utils/api';

const siteId = "ParekhLinen04";
const defaultEmail = "careers@parekhchamber.com";

const Career = () => {
    const [jobs, setJobs] = useState([]);
    const [header, setHeader] = useState({
        title: 'Careers & Opportunities',
        description: 'Join Our Legacy'
    });
    const [loading, setLoading] = useState(true);

    const cleanHtml = (html) => {
        if (!html) return '';
        return html.replace(/&nbsp;/gi, ' ').replace(/\u00a0/g, ' ');
    };

    const isRichText = (str) => {
        if (!str) return false;
        return str.includes('<') || str.includes('>') || str.includes('&NBSP;') || str.includes('&nbsp;') || str.length > 50;
    };

    const formatSalary = (salary) => {
        if (!salary) return '';
        // Replace dollar sign with Indian Rupee symbol
        return salary.replace(/\$/g, '₹ ').replace(/usd/i, 'INR');
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const [headerRes, listRes] = await Promise.allSettled([
                    careerApi.getHeader(siteId),
                    careerApi.getAll(siteId)
                ]);

                if (headerRes.status === 'fulfilled' && headerRes.value.data?.success && headerRes.value.data.data) {
                    setHeader({
                        title: headerRes.value.data.data.title || 'Careers & Opportunities',
                        description: headerRes.value.data.data.description || 'Join Our Legacy'
                    });
                }

                if (listRes.status === 'fulfilled' && listRes.value.data?.success) {
                    const all = listRes.value.data.data || [];
                    const activeOnly = all.filter(j => j.status === 'Open' || j.status === 'active');
                    setJobs(activeOnly);
                }
            } catch (error) {
                console.error("Failed to fetch careers:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    const handleApply = (job) => {
        const email = job.contactEmail || job.email || defaultEmail;
        const subject = encodeURIComponent(`Application for ${job.title} - Parekh Linen`);
        const body = encodeURIComponent(`Hello Team,\n\nI am interested in applying for the position of "${job.title}" at Parekh Linen.\n\nPlease find attached my CV/Resume and experience details.\n\nBest Regards,\n[My Name]`);
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
        window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="pt-32 pb-20 px-6 bg-[#fffcf7] min-h-screen">
            {/* Scoped CSS to prevent split/break word and overflow */}
            <style>{`
                .career-text,
                .career-text * {
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

            <div className="max-w-6xl mx-auto text-center">

                {/* Section Heading */}
                <div className="mb-16 career-text">
                    {/* <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-[#C0A080] bg-[#C0A080]/10 border border-[#C0A080]/30 px-5 py-2 rounded-full mb-6">
                        Careers & Recruitment
                    </span> */}
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2C3E50] tracking-tight mb-4">
                        {header.title}
                    </h2>
                    <div className="w-20 h-1 bg-[#C0A080] mx-auto mb-6"></div>
                    <div
                        className="max-w-2xl mx-auto text-slate-800 text-sm md:text-base leading-relaxed font-normal tracking-wide rich-text-content"
                        dangerouslySetInnerHTML={{ __html: cleanHtml(header.description) }}
                    />
                </div>

                {/* Career Content */}
                <div className="bg-white p-6 md:p-12 border border-gray-100 rounded-3xl shadow-sm min-h-[400px] flex flex-col justify-center">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-3">
                            <Loader2 className="animate-spin text-[#C0A080]" size={36} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Vacancies...</span>
                        </div>
                    ) : jobs.length > 0 ? (
                        <div className="grid grid-cols-1 gap-8 text-left w-full">
                            {jobs.map((job, i) => (
                                <div
                                    key={job._id || i}
                                    className="bg-[#fffcf7] p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow relative group overflow-hidden"
                                >
                                    <div className="absolute left-0 top-0 w-1.5 h-full bg-[#2C3E50] group-hover:bg-[#C0A080] transition-colors duration-300"></div>

                                    <div className="career-text space-y-4 pl-4">
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                            <h4 className="text-2xl font-serif text-[#2C3E50] group-hover:text-[#C0A080] transition-colors">
                                                {job.title}
                                            </h4>
                                            <span className="px-4 py-1 bg-[#C0A080]/15 text-[#C0A080] text-[10px] font-black uppercase tracking-widest rounded-full">
                                                {job.type || "Full-Time"}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap items-center gap-6 text-slate-600 text-xs font-bold uppercase tracking-wider">
                                            <span className="flex items-center gap-1.5">
                                                <MapPin size={14} className="text-[#C0A080]" />
                                                {job.location || "Kolkata, WB, India"}
                                            </span>
                                            {job.experience && !isRichText(job.experience) && (
                                                <span className="flex items-center gap-1.5">
                                                    <Briefcase size={14} className="text-[#C0A080]" />
                                                    Exp: {job.experience}
                                                </span>
                                            )}
                                            {job.salary && (
                                                <span className="flex items-center gap-1.5">
                                                    <span className="text-[#C0A080] font-black text-sm">₹</span>
                                                    Salary: {formatSalary(job.salary)}
                                                </span>
                                            )}
                                        </div>

                                        <div
                                            className="text-slate-800 text-sm leading-relaxed rich-text-content pt-2"
                                            dangerouslySetInnerHTML={{ __html: cleanHtml(job.description) }}
                                        />

                                        {job.experience && isRichText(job.experience) && (
                                            <div className="pt-4 border-t border-gray-200/60 mt-4">
                                                <h5 className="text-xs font-black uppercase tracking-widest text-[#2C3E50] mb-2 flex items-center gap-1.5">
                                                    <Briefcase size={12} className="text-[#C0A080]" /> Requirements & Experience
                                                </h5>
                                                <div
                                                    className="text-slate-800 text-sm leading-relaxed rich-text-content pl-4"
                                                    dangerouslySetInnerHTML={{ __html: cleanHtml(job.experience) }}
                                                />
                                            </div>
                                        )}

                                        <div className="pt-4">
                                            <button
                                                onClick={() => handleApply(job)}
                                                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2C3E50] text-white text-[11px] uppercase tracking-widest font-black rounded-xl hover:bg-[#C0A080] transition-colors shadow-md"
                                            >
                                                <Mail size={14} />
                                                Apply Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="py-12">
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                                    <Briefcase className="text-gray-300" size={24} />
                                </div>
                            </div>

                            <h4 className="text-2xl font-serif text-[#2C3E50] mb-2 italic">
                                At present, No vacancy
                            </h4>

                            <p className="text-slate-600 text-sm leading-relaxed max-w-md mx-auto">
                                While our team is currently complete, we are always looking for passionate individuals.
                                Please check back later for future opportunities in the textile industry.
                            </p>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Career;
