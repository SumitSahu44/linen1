// components/common/Preloader.jsx
import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            onAnimationComplete={() => document.body.style.overflow = 'auto'}
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
                className="text-4xl font-serif text-[#2C3E50] tracking-widest uppercase"
            >
                Parekh Linen
            </motion.div>
            <div className="mt-4 w-48 h-[2px] bg-gray-100 overflow-hidden">
                <motion.div
                    className="h-full bg-[#C0A080]"
                    initial={{ x: "-100%" }}
                    animate={{ x: "100%" }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                />
            </div>
        </motion.div>
    );
};

export default Preloader;
