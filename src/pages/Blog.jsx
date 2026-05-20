import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Loader2, BookOpen } from 'lucide-react';
import { blogApi, IMAGE_BASE_URL } from '../utils/api';
import useSEO from '../hooks/useSEO';

const siteId = "ParekhLinen04";

const Blog = () => {
    useSEO(
        'Linen Insights & Articles',
        'Explore the latest trends, insights, and campaign updates on textiles and linen manufacturing from Parekh Linen.',
        'blogs, articles, textile news, organic cotton, parekh linen'
    );

    const [posts, setPosts] = useState([]);
    const [header, setHeader] = useState({
        title: 'Blog & Articles',
        description: 'Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India.',
        authorName: 'HC Parekh',
        authorRole: 'Textile Manufacturer & Entrepreneur',
        country: 'India'
    });
    const [loading, setLoading] = useState(true);

    const cleanHtml = (html) => {
        if (!html) return '';
        return html.replace(/&nbsp;/gi, ' ').replace(/\u00a0/g, ' ');
    };

    const cleanText = (html) => {
        if (!html) return '';
        let text = html.replace(/&nbsp;/gi, ' ').replace(/\u00a0/g, ' ');
        text = text.replace(/<[^>]*>/g, '');
        return text;
    };

    useEffect(() => {
        const loadData = async () => {
            try {
                setLoading(true);
                const [headerRes, listRes] = await Promise.allSettled([
                    blogApi.getHeader(siteId),
                    blogApi.getAll(siteId)
                ]);

                if (headerRes.status === 'fulfilled' && headerRes.value.data?.success && headerRes.value.data.data) {
                    const data = headerRes.value.data.data;
                    setHeader({
                        title: data.title || 'Blog & Articles',
                        description: data.description || '',
                        authorName: data.authorName || 'HC Parekh',
                        authorRole: data.authorRole || 'Textile Manufacturer & Entrepreneur',
                        country: data.country || 'India'
                    });
                }

                if (listRes.status === 'fulfilled' && listRes.value.data?.success) {
                    const all = listRes.value.data.data || [];
                    const publishedOnly = all.filter(p => p.status === 'Published' || p.status === 'published');
                    setPosts(publishedOnly);
                }
            } catch (error) {
                console.error("Failed to load blog data:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    return (
        <div className="pt-32 pb-20 bg-[#fffcf7] min-h-screen">
            {/* Scoped CSS to prevent split/break word and overflow */}
            <style>{`
                .blog-text,
                .blog-text * {
                    word-break: normal !important;
                    overflow-wrap: break-word !important;
                    white-space: normal !important;
                    max-width: 100% !important;
                }
            `}</style>

            <div className="max-w-5xl mx-auto px-6">
                
                {/* Heading & Campaign Message */}
                <div className="text-center mb-16 blog-text">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#2C3E50] tracking-tight">
                        {header.title}
                    </h2>
                    
                    {/* Campaign Line */}
                    <div className="relative py-10 px-6 max-w-4xl mx-auto overflow-hidden mt-8">
                        <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-[2rem] -z-10 border border-white/20 shadow-sm" />

                        <div className="relative text-center">
                            <div className="text-[#C0A080] text-3xl font-serif opacity-40 italic">"</div>
                            
                            <div 
                                className="text-slate-800 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-medium italic tracking-tight rich-text-content"
                                dangerouslySetInnerHTML={{ __html: cleanHtml(header.description) }}
                            />
                            
                            {/* HC Parekh Signature Section */}
                            <div className="mt-8 flex flex-col items-center">
                                <div className="w-12 h-[2px] bg-[#C0A080] mb-3 opacity-45" />
                                
                                <h4 className="text-[#1A252F] font-serif text-xl font-black tracking-wide uppercase">
                                    {header.authorName}
                                </h4>
                                
                                <p className="text-slate-600 text-[10px] md:text-xs uppercase tracking-[0.25em] font-bold mt-1">
                                    {header.authorRole}
                                </p>
                                
                                <div className="flex items-center gap-1.5 mt-2">
                                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                    <p className="text-slate-500 text-[9px] font-black tracking-widest uppercase">
                                        {header.country}
                                    </p>
                                    <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-8 flex justify-center items-center gap-3">
                        <div className="w-16 h-[1px] bg-[#C0A080]/40"></div>
                        <div className="w-2 h-2 rounded-full bg-[#C0A080]"></div>
                        <div className="w-16 h-[1px] bg-[#C0A080]/40"></div>
                    </div>
                </div>

                {/* Articles List */}
                <div className="space-y-12 max-w-4xl mx-auto">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-20 gap-3">
                            <Loader2 className="animate-spin text-[#C0A080]" size={36} />
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Articles...</span>
                        </div>
                    ) : posts.length > 0 ? (
                        <div className="space-y-16">
                            {posts.map((post) => {
                                const postDate = post.date || post.createdAt;
                                const formattedDate = postDate 
                                    ? new Date(postDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
                                    : '';

                                // Clean description extract (truncate content for thumbnail view)
                                const summaryText = post.content 
                                    ? cleanText(post.content).substring(0, 180) + '...'
                                    : 'Read our latest insights...';

                                const imgSrc = post.thumbnail 
                                    ? (post.thumbnail.startsWith('http') ? post.thumbnail : `${IMAGE_BASE_URL}/${post.thumbnail}`)
                                    : 'https://images.unsplash.com/photo-1545042679-40d229a98933?q=80&w=800';

                                return (
                                    <Link 
                                        key={post._id}
                                        to={`/blog/${post._id}`}
                                        className="block border-l-2 border-[#C0A080]/30 pl-6 py-2 hover:border-[#C0A080] transition-colors"
                                    >
                                        <article className="blog-text flex flex-col md:flex-row gap-8 items-start">
                                            <div className="w-full md:w-56 h-40 overflow-hidden rounded-2xl bg-slate-50 border border-gray-100 shrink-0 shadow-sm relative">
                                                <img 
                                                    src={imgSrc} 
                                                    alt={post.title}
                                                    className="w-full h-full object-cover"
                                                    onError={(e) => {
                                                        e.target.src = 'https://images.unsplash.com/photo-1545042679-40d229a98933?q=80&w=800';
                                                    }}
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-[#C0A080] text-[10px] font-black uppercase tracking-[0.3em] mb-2.5">
                                                    {post.category} {formattedDate && `— ${formattedDate}`}
                                                </p>
                                                
                                                <h3 className="text-2xl md:text-3xl font-serif text-[#2C3E50] hover:text-[#C0A080] transition-colors duration-300">
                                                    {post.title}
                                                </h3>
                                                
                                                <p className="mt-3 text-slate-800 leading-relaxed text-sm md:text-base font-normal">
                                                    {summaryText}
                                                </p>
                                                
                                                <div className="mt-6 flex items-center gap-4">
                                                    <div className="w-10 h-[2px] bg-[#2C3E50]"></div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-[#2C3E50] hover:text-[#C0A080] transition-colors">
                                                        Read Article
                                                    </span>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="bg-white p-16 border border-gray-100 rounded-3xl flex flex-col items-center justify-center text-center group shadow-sm">
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center border border-gray-100">
                                    <BookOpen className="text-gray-300" size={24} />
                                </div>
                            </div>

                            <h3 className="text-2xl font-serif text-[#2C3E50] mb-2 italic">
                                At present, No blogs published
                            </h3>
                            
                            <p className="text-slate-600 text-sm max-w-xs leading-relaxed mx-auto">
                                Check back soon for news, stories, and insights from Parekh Linen.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Blog;
