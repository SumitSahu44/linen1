import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';

const AboutUs = () => {
    useSEO(
        'About Us',
        'Learn about Parekh Linen - 30+ years of excellence in manufacturing premium bedsheets and fabrics in Kolkata.',
        'about parekh linen, textile manufacturer Kolkata, history, quality, sustainability'
    );


    return (
      <div className="pt-24">
  {/* Vision Section - Split Layout */}
  <section className="py-24 bg-[#f9f7f4] px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12 items-center">
      
      {/* Left: Heading */}
      <div className="md:col-span-2 border-l-4 border-[#C0A080] pl-8">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif text-[#2C3E50] leading-tight"
        >
          Quality Assurance <br /> 
          <span className="text-[#C0A080] italic">& Excellence.</span>
        </motion.h1>
      </div>

      {/* Right: Content */}
      <div className="md:col-span-3">
        <motion.p 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-gray-600 leading-relaxed text-lg md:text-xl font-medium uppercase tracking-wide italic border-t md:border-t-0 md:border-l border-gray-200 pt-8 md:pt-0 md:pl-12"
        >
          "Parekh Linen is a trusted manufacturers and supplier of the high standard 
          quality of the Bedsheets and Linen, from lower range to higher range with 
          different TC at reasonable and low price range with best and premium quality, 
          with Quality Assurance and Quality Seal."
        </motion.p>
        
        <div className="mt-6 md:ml-12 flex items-center gap-4">
          <span className="h-[1px] w-8 bg-[#C0A080]"></span>
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#C0A080]">
            The Fabric of Trust
          </span>
        </div>
      </div>

    </div>
  </section>
</div>
    );
};

export default AboutUs;