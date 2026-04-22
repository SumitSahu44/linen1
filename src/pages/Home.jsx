import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import ProductPreview from '../components/sections/ProductPreview'; // Brief view
import IndiaMap from '../features/Maps/IndiaMap';
import Testimonials from '../components/sections/Testimonials';
import useSEO from '../hooks/useSEO';

const Home = () => {
    useSEO(
        'Home',
        'Parekh Linen - Premium Bedsheets & Fabrics Manufacturer in Kolkata. Quality linens since decades.',
        'bedsheets, fabrics, linen, Kolkata, premium quality, cotton bedsheets'
    );
    return (
        <main className="overflow-x-hidden">
            <Hero />
            <About />
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-6 text-center mb-12">
                    <h2 className="text-4xl font-serif text-[#2C3E50]">Our Signature Collections</h2>
                    <div className="w-24 h-1 bg-[#C0A080] mx-auto mt-4"></div>
                </div>
                <ProductPreview />
            </section>
            <IndiaMap />
            <Testimonials />
        </main>
    );
};

export default Home;
