import { useState, useEffect } from 'react';
import { careerApi } from '../utils/api';

const Career = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const siteId = "ParekhLinen04";

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await careerApi.getAll(siteId);
                if (response.data.success && response.data.data.length > 0) {
                    setJobs(response.data.data);
                } else {
                    setJobs([]);
                }
            } catch (error) {
                console.error("Failed to fetch jobs:", error);
                setJobs([]);
            } finally {
                setLoading(false);
            }
        };
        fetchJobs();
    }, []);

    return (
        <div className="pt-32 pb-20 px-6 bg-white">
            <div className="max-w-4xl mx-auto text-center">

                {/* Section Heading */}
                <div className="mb-12">
                    <h2 className="text-sm uppercase tracking-[0.4em] text-[#C0A080] font-bold mb-4">
                        Careers & Opportunities
                    </h2>
                    <h3 className="text-5xl font-serif text-[#2C3E50] mb-6">
                        Join Our Legacy
                    </h3>
                    <div className="w-20 h-1 bg-[#C0A080] mx-auto"></div>
                </div>

                {/* Career Content */}
                <div className="bg-slate-50 p-6 md:p-12 border border-gray-100 rounded-sm shadow-sm min-h-[400px] flex flex-col justify-center">
                    {jobs.length > 0 ? (
                        <div className="grid grid-cols-1 gap-6 text-left w-full">
                            {jobs.map((job, i) => (
                                <div key={i} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-4">
                                        <h4 className="text-2xl font-serif text-[#2C3E50]">{job.title}</h4>
                                        <span className="px-4 py-1 bg-[#C0A080]/10 text-[#C0A080] text-[10px] font-bold uppercase tracking-widest rounded-full">
                                            {job.type || "Full-Time"}
                                        </span>
                                    </div>
                                    <p className="text-[#C0A080] text-xs font-bold uppercase tracking-widest mb-4 flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        {job.location || "KOLKATA, WB, India"}
                                    </p>
                                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                        {job.role || job.description || "Join our team of textile professionals... Contact HR for more details."}
                                    </p>
                                    <a 
                                        href={`mailto:careers@parekhtextiles.com?subject=Application for ${job.title}`}
                                        className="inline-block px-8 py-3 bg-[#2C3E50] text-white text-[10px] uppercase tracking-widest font-bold hover:bg-[#C0A080] transition-colors"
                                    >
                                        Apply Now
                                    </a>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-center mb-8">
                                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-sm border border-gray-100 mx-auto">
                                    <svg 
                                        className="w-10 h-10 text-gray-300" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        viewBox="0 0 24 24"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="1.5" 
                                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                                        />
                                    </svg>
                                </div>
                            </div>

                            <h4 className="text-3xl font-serif text-[#2C3E50] mb-4 italic">
                                At present, No vacancy
                            </h4>
                            
                            <p className="text-gray-500 text-lg leading-relaxed max-w-xl mx-auto mb-10">
                                While our team is currently complete, we are always looking for passionate individuals. 
                                Follow our updates for future opportunities in the textile industry.
                            </p>
                        </>
                    )}
                </div>

            </div>
        </div>
    );
};

export default Career;