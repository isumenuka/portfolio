
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader: React.FC = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000;
        const steps = 20;
        const intervalTime = duration / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                if (prev < 100) {
                    return Math.min(prev + 5, 100);
                }
                clearInterval(timer);
                return 100;
            });
        }, intervalTime);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden pointer-events-none">
            {/* Top Curtain */}
            <motion.div
                initial={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="absolute top-0 left-0 w-full h-[50vh] bg-[#050505]"
            />
            {/* Bottom Curtain */}
            <motion.div
                initial={{ y: 0 }}
                exit={{ y: "100%" }}
                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
                className="absolute bottom-0 left-0 w-full h-[50vh] bg-[#050505]"
            />

            {/* Content Container - Fades out slightly before curtains open */}
            <motion.div
                className="z-10 relative flex flex-col items-center justify-center text-white"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
                    <span className="text-xs md:text-sm font-mono tracking-[0.3em] text-cyan-500/80 uppercase">
                        Initializing
                    </span>
                </div>

                <div className="text-6xl md:text-8xl font-bold font-mono tracking-tighter tabular-nums opacity-90">
                    {count}%
                </div>

                <motion.div
                    className="w-40 h-[1px] bg-white/20 mt-8 relative overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-cyan-500"
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{ duration: 2, ease: "linear" }}
                    />
                </motion.div>

                <div className="mt-2 text-[10px] text-white/40 font-mono">
                    LOADING ASSETS
                </div>
            </motion.div>
        </div>
    );
};

export default Preloader;

