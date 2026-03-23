import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

// Swiper Styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

const Hero = () => {
  const navigate = useNavigate();

  const slides = [
    {
      img: "https://plus.unsplash.com/premium_photo-1670044658983-98476afd7002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGxpbmVuJTIwY2xvdGh8ZW58MHx8MHx8fDA%3D",
      title: "Sustainable Textiles",
      subtitle: "Eco-friendly fabrics for a better tomorrow"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1701157946903-57c2821d71b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGluZW4lMjBjbG90aHxlbnwwfHwwfHx8MA%3D%3D",
      title: "Premium Linen Collections",
      subtitle: "Crafting Comfort, Delivering Quality"
    },
    
    {
      img: "https://media.istockphoto.com/id/171578874/photo/high-resolution-artist-natural-linen-canvas-grunge-texture.webp?a=1&b=1&s=612x612&w=0&k=20&c=YKjuVxD1OwzOn3hChuMEfOvL4oOuP_avCq72BoeFrQk=",
      title: "Global Export Quality",
      subtitle: "Bridging the gap between mills and markets"
    }
  ];

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation]}
        effect={'fade'}
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            {/* Background Image with Overlay */}
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[5000ms] scale-110"
              style={{ backgroundImage: `url(${slide.img})` }}
            >
              <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
              <div className="max-w-4xl">
                <motion.span
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-[#C0A080] uppercase tracking-[0.3em] font-semibold text-xs md:text-sm mb-6 block"
                >
                  Established Excellence since 1990
                </motion.span>

                <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-5xl md:text-8xl font-black text-white mb-8 italic uppercase tracking-tighter"
                >
                  {slide.title} <br />
                  <span className="not-italic text-2xl md:text-4xl font-light text-slate-200 block mt-4">
                    {slide.subtitle}
                  </span>
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  className="flex flex-col md:flex-row gap-4 justify-center items-center"
                >
                  <button 
                    onClick={() => navigate('/products')}
                    className="px-10 py-4 bg-[#C0A080] text-white hover:bg-[#a88a6a] transition-all duration-300 rounded-sm font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#C0A080]/20"
                  >
                    Explore Collection
                  </button>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="px-10 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 rounded-sm font-bold text-xs uppercase tracking-widest"
                  >
                    Contact Us
                  </button>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Styles for Swiper Navigation (Clean Look) */}
      <style jsx global>{`
        .swiper-button-next, .swiper-button-prev {
          color: white !important;
          transform: scale(0.5);
          transition: all 0.3s ease;
        }
        .swiper-button-next:hover, .swiper-button-prev:hover {
          color: #C0A080 !important;
          transform: scale(0.6);
        }
        @media (max-width: 768px) {
          .swiper-button-next, .swiper-button-prev {
            display: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;