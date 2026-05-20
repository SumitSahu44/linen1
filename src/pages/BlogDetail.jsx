import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Loader2, ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { blogApi, IMAGE_BASE_URL } from '../utils/api';
import useSEO from '../hooks/useSEO';

const BlogDetail = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const cleanHtml = (html) => {
        if (!html) return '';
        return html.replace(/&nbsp;/g, ' ').replace(/\u00a0/g, ' ');
    };

    useEffect(() => {
        const fetchBlogDetail = async () => {
            try {
                setLoading(true);
                setError(false);
                const response = await blogApi.getById(id);
                if (response.data?.success && response.data.data) {
                    setPost(response.data.data);
                } else {
                    setError(true);
                }
            } catch (err) {
                console.error("Failed to load blog detail:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        };

        if (id) {
            fetchBlogDetail();
        }
    }, [id]);

    useSEO(
        post?.title ? `${post.title} | Parekh Linen` : 'Blog Article | Parekh Linen',
        post?.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 150) : 'Read details about this insights circular from Parekh Linen.',
        `blog, article, textile, linen, ${post?.category || 'insights'}`
    );

    if (loading) {
        return (
            <div className="pt-40 pb-20 flex flex-col items-center justify-center min-h-screen bg-[#fffcf7] gap-3">
                <Loader2 className="animate-spin text-[#C0A080]" size={36} />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Loading Article Details...</span>
            </div>
        );
    }

    if (error || !post) {
        return (
            <div className="pt-40 pb-20 flex flex-col items-center justify-center min-h-screen bg-[#fffcf7] px-6 text-center">
                <div className="max-w-md mx-auto">
                    <h3 className="text-3xl font-serif text-[#2C3E50] mb-4">Article Not Found</h3>
                    <p className="text-slate-600 text-sm mb-8 leading-relaxed">
                        The article you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                    <Link 
                        to="/blog"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#2C3E50] text-white text-[11px] uppercase tracking-widest font-black rounded-xl hover:bg-[#C0A080] transition-colors"
                    >
                        <ArrowLeft size={14} />
                        Back to Articles
                    </Link>
                </div>
            </div>
        );
    }

    const postDate = post.date || post.createdAt;
    const formattedDate = postDate 
        ? new Date(postDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
        : '';

    const imgSrc = post.thumbnail 
        ? (post.thumbnail.startsWith('http') ? post.thumbnail : `${IMAGE_BASE_URL}/${post.thumbnail}`)
        : null;

    return (
        <div className="pt-32 pb-20 bg-[#fffcf7] min-h-screen">
            {/* Scoped CSS to prevent split/break word and overflow */}
            <style>{`
                .blog-detail-text,
                .blog-detail-text * {
                    word-break: normal !important;
                    overflow-wrap: break-word !important;
                    white-space: normal !important;
                    max-width: 100% !important;
                }
                .rich-content img {
                    max-width: 100% !important;
                    height: auto !important;
                    border-radius: 1rem;
                    margin: 2rem auto;
                    display: block;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                }
                .rich-content p {
                    margin-bottom: 1.5rem;
                    line-height: 1.8;
                }
                .rich-content ul {
                    list-style-type: disc;
                    margin-left: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .rich-content ol {
                    list-style-type: decimal;
                    margin-left: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .rich-content h1, .rich-content h2, .rich-content h3, .rich-content h4 {
                    font-family: serif;
                    color: #2C3E50;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                    font-weight: bold;
                }
                .rich-content h1 { font-size: 2rem; }
                .rich-content h2 { font-size: 1.75rem; }
                .rich-content h3 { font-size: 1.5rem; }
            `}</style>

            <div className="max-w-4xl mx-auto px-6">
                
                {/* Back button */}
                <div className="mb-8">
                    <Link 
                        to="/blog"
                        className="inline-flex items-center gap-2 text-[#2C3E50] hover:text-[#C0A080] text-[10px] font-black uppercase tracking-widest transition-colors"
                    >
                        <ArrowLeft size={14} className="text-[#C0A080]" />
                        Back to Articles
                    </Link>
                </div>

                {/* Article Header */}
                <header className="blog-detail-text mb-12">
                    <div className="flex flex-wrap gap-4 items-center mb-4">
                        <span className="inline-flex items-center gap-1 bg-[#C0A080]/15 text-[#C0A080] text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                            <Tag size={10} />
                            {post.category || 'Article'}
                        </span>
                        {formattedDate && (
                            <span className="flex items-center gap-1.5 text-slate-600 text-[10px] font-black uppercase tracking-widest">
                                <Calendar size={12} className="text-[#C0A080]" />
                                {formattedDate}
                            </span>
                        )}
                        <span className="flex items-center gap-1.5 text-slate-600 text-[10px] font-black uppercase tracking-widest">
                            <User size={12} className="text-[#C0A080]" />
                            By {post.author || 'Admin'}
                        </span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-serif text-[#2C3E50] leading-tight tracking-tight">
                        {post.title}
                    </h1>
                </header>

                {/* Thumbnail Image */}
                {imgSrc && (
                    <div className="mb-12 rounded-[2rem] overflow-hidden bg-slate-50 border border-gray-100 shadow-sm max-h-[500px]">
                        <img 
                            src={imgSrc} 
                            alt={post.title}
                            className="w-full h-full object-cover max-h-[500px]"
                            onError={(e) => {
                                e.target.style.display = 'none';
                            }}
                        />
                    </div>
                )}

                {/* Article Content */}
                <article className="blog-detail-text prose prose-slate max-w-none text-slate-800 text-base md:text-lg leading-relaxed">
                    <div 
                        className="rich-content"
                        dangerouslySetInnerHTML={{ __html: cleanHtml(post.content) }}
                    />
                </article>

                {/* Footer back button */}
                <div className="mt-16 pt-8 border-t border-gray-200/60">
                    <Link 
                        to="/blog"
                        className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#2C3E50] text-white text-[11px] uppercase tracking-widest font-black rounded-xl hover:bg-[#C0A080] transition-colors shadow-md"
                    >
                        <ArrowLeft size={14} />
                        Back to Articles
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default BlogDetail;
