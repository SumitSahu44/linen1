import { motion } from 'framer-motion';

const Loader = () => {
    return (
        <div className="fixed inset-0 z-[200] flex items-center justify-center bg-[#1A252F]">
            <div className="relative flex flex-col items-center">
                
                {/* ── Animated Logo Ring ── */}
                <div className="relative w-24 h-24 flex items-center justify-center">
                    {/* Spinning Outer Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                        className="absolute inset-0 border-t-2 border-r-2 border-[#C0A080] rounded-full"
                    />
                    
                    {/* Pulsing Inner Circle */}
                    <motion.div
                        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="absolute inset-2 bg-[#C0A080]/10 rounded-full"
                    />

                    {/* Central Logo Letter */}
                    <motion.div 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#C0A080] text-white font-serif font-bold text-2xl shadow-xl z-10"
                    >
                        P
                    </motion.div>
                </div>

                {/* ── Text Branding ── */}
                <div className="mt-8 text-center overflow-hidden">
                    <motion.h2 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-white font-serif text-xl tracking-[0.2em] uppercase"
                    >
                        PAREKH <span className="font-light opacity-60">LINEN</span>
                    </motion.h2>
                    
                    {/* Progress Bar Container */}
                    <div className="mt-4 w-40 h-[1px] bg-white/10 relative overflow-hidden mx-auto">
                        <motion.div 
                            initial={{ x: "-100%" }}
                            animate={{ x: "100%" }}
                            transition={{ 
                                repeat: Infinity, 
                                duration: 1.5, 
                                ease: "easeInOut" 
                            }}
                            className="absolute inset-0 bg-[#C0A080]"
                        />
                    </div>
                    
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5 }}
                        className="mt-3 text-[9px] text-[#C0A080] font-bold uppercase tracking-[0.5em]"
                    >
                     Kolkata, India
                    </motion.p>
                </div>

            </div>

            {/* Subtle Background Text Decoration */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
                <h1 className="text-[20vw] font-serif font-bold text-white select-none uppercase">
                    PAREKH
                </h1>
            </div>
        </div>
    );
};

export default Loader;