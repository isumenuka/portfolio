import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
    onLoadComplete?: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [loadingStatus, setLoadingStatus] = useState('Initializing');

    useEffect(() => {
        let mounted = true;
        const startTime = Date.now();
        const MIN_DISPLAY_TIME = 2000; // Minimum 2 seconds display
        const resources: string[] = [];

        // Collect all images from the page
        const collectResources = () => {
            // Get images
            const images = Array.from(document.images).map(img => img.src);
            resources.push(...images);

            // Get background images from CSS
            const elements = document.querySelectorAll('*');
            elements.forEach(el => {
                const bgImage = window.getComputedStyle(el).backgroundImage;
                if (bgImage && bgImage !== 'none') {
                    const matches = bgImage.match(/url\(['"]?(.*?)['"]?\)/);
                    if (matches && matches[1]) {
                        resources.push(matches[1]);
                    }
                }
            });

            return [...new Set(resources)]; // Remove duplicates
        };

        const preloadResources = async () => {
            // Wait a bit for DOM to be ready
            await new Promise(resolve => setTimeout(resolve, 100));

            const urls = collectResources();
            const totalResources = Math.max(urls.length, 1); // Prevent division by zero
            let loadedCount = 0;

            setLoadingStatus('Loading Assets');

            // Create promises for all resources
            const loadPromises = urls.map((url) => {
                return new Promise<void>((resolve) => {
                    if (url.startsWith('data:')) {
                        // Skip data URLs
                        loadedCount++;
                        if (mounted) {
                            setProgress(Math.round((loadedCount / totalResources) * 100));
                        }
                        resolve();
                        return;
                    }

                    const img = new Image();

                    const onLoad = () => {
                        loadedCount++;
                        if (mounted) {
                            setProgress(Math.round((loadedCount / totalResources) * 100));
                        }
                        resolve();
                    };

                    const onError = () => {
                        // Still count as loaded to prevent hanging
                        loadedCount++;
                        if (mounted) {
                            setProgress(Math.round((loadedCount / totalResources) * 100));
                        }
                        resolve();
                    };

                    img.onload = onLoad;
                    img.onerror = onError;

                    // Set timeout to prevent hanging
                    setTimeout(onLoad, 3000);

                    img.src = url;
                });
            });

            // Wait for all resources or timeout
            await Promise.race([
                Promise.all(loadPromises),
                new Promise(resolve => setTimeout(resolve, 5000)) // Max 5 second wait
            ]);

            // Ensure we reach 100%
            if (mounted) {
                setProgress(100);
                setLoadingStatus('Ready');

                // Calculate remaining time to meet minimum display time
                const elapsed = Date.now() - startTime;
                const remainingTime = Math.max(0, MIN_DISPLAY_TIME - elapsed);

                // Wait for remaining time before completing
                setTimeout(() => {
                    if (mounted && onLoadComplete) {
                        onLoadComplete();
                    }
                }, remainingTime);
            }
        };

        // Start preloading
        preloadResources();

        return () => {
            mounted = false;
        };
    }, [onLoadComplete]);

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
                        {loadingStatus}
                    </span>
                </div>

                <div className="text-6xl md:text-8xl font-bold font-mono tracking-tighter tabular-nums opacity-90">
                    {progress}%
                </div>

                <motion.div
                    className="w-40 h-[1px] bg-white/20 mt-8 relative overflow-hidden"
                >
                    <motion.div
                        className="absolute inset-0 bg-cyan-500"
                        style={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                <div className="mt-2 text-[10px] text-white/40 font-mono">
                    OPTIMIZING PERFORMANCE
                </div>
            </motion.div>
        </div>
    );
};

export default Preloader;
