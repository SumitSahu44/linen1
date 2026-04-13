import { useState, useEffect } from 'react';
import { blogApi, IMAGE_BASE_URL } from '../utils/api';

const staticPosts = [
    { date: "March 10, 2026", title: "Future of Organic Cotton in India", category: "Trends" },
    { date: "Feb 28, 2026", title: "Maintaining 1000 Thread Count: A Guide", category: "Maintenance" },
    { date: "Jan 15, 2026", title: "Parekh Linen Wins Quality Award", category: "News" }
];

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const siteId = "ParekhLinen04";

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await blogApi.getAll(siteId);
                if (response.data.success && response.data.data.length > 0) {
                    setPosts(response.data.data.map(p => ({
                        date: new Date(p.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' }),
                        title: p.title,
                        category: p.category || "General",
                        description: p.content || "Read our latest insights about the evolving textile industry..."
                    })));
                } else {
                    setPosts(staticPosts);
                }
            } catch (error) {
                console.error("Failed to fetch blogs:", error);
                setPosts(staticPosts);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    return (
   <div className="pt-32 pb-20 max-w-5xl mx-auto px-6">
    {/* Heading & Campaign Message */}
<div className="text-center mb-20">
    <h2 className="text-4xl md:text-5xl font-serif mb-6 text-[#2C3E50]">
        Linen Insights & Circulars
    </h2>
    
    {/* New Campaign Line */}
    <div className="relative py-4">
        <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light italic">
            "Join and participate in our nation-wide campaign to digitalize the Textile Sector, one of the largest sectors of India."
        </p>
        
        {/* HC Parekh Signature Section */}
        <div className="mt-6 flex flex-col items-center">
            <h4 className="text-[#2C3E50] font-serif text-xl font-bold tracking-wide">
                HC Parekh
            </h4>
            <p className="text-[#C0A080] text-sm uppercase tracking-[0.2em] font-medium mt-1">
                Textile Manufacturer & Entrepreneur
            </p>
            <p className="text-gray-400 text-xs mt-1 font-sans">
                India
            </p>
        </div>
    </div>
    
    <div className="mt-10 flex justify-center items-center gap-3">
        <div className="w-16 h-[1px] bg-[#C0A080]/40"></div>
        <div className="w-2 h-2 rounded-full bg-[#C0A080]"></div>
        <div className="w-16 h-[1px] bg-[#C0A080]/40"></div>
    </div>
</div>

    {/* Articles List */}
    <div className="space-y-16">
        {posts.map((post, i) => (
            <article key={i} className="group cursor-pointer border-l border-transparent hover:border-[#C0A080] pl-0 hover:pl-8 transition-all duration-500">
                <p className="text-[#C0A080] text-[10px] font-black uppercase tracking-[0.3em] mb-3">
                    {post.category} — {post.date}
                </p>
                
                <h3 className="text-2xl md:text-3xl font-serif text-[#2C3E50] group-hover:text-[#C0A080] transition-colors duration-300">
                    {post.title}
                </h3>
                
                <p className="mt-4 text-gray-500 leading-relaxed max-w-2xl text-sm md:text-base">
                    {post.description}
                </p>
                
                <div className="mt-8 flex items-center gap-4">
                    <div className="w-10 h-[2px] bg-[#2C3E50] group-hover:w-20 group-hover:bg-[#C0A080] transition-all duration-500"></div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-300 group-hover:text-[#C0A080] opacity-0 group-hover:opacity-100 transition-all">
                        Read Article
                    </span>
                </div>
            </article>
        ))}
    </div>
</div>
    );
};

export default Blog;