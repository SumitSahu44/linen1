const Gallery = () => {
    return (
        <div className="pt-32 pb-20 px-6">
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif">Visual Experience</h2>
                <p className="text-[#C0A080] tracking-[0.2em] mt-2">OUR UNIT & PRODUCTS</p>
            </div>
            <div className="columns-1 md:columns-3 gap-4 space-y-4 max-w-7xl mx-auto">
                {[...Array(6)].map((_, i) => (
                    <img
                        key={i}
                        src={`https://plus.unsplash.com/premium_photo-1673429738990-2b85964723ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZhYnJpYyUyMHRleHRpbGV8ZW58MHx8MHx8fDA%3D`}
                        alt="Gallery"
                        className="w-full rounded-sm hover:opacity-80 transition-opacity cursor-zoom-in"
                    />
                ))}
            </div>
        </div>
    );
};

export default Gallery;
