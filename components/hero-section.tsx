"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import h1 from '@/public/pexels-glauber-torquato-1161877-2219274.jpg';
import h2 from '@/public/pexels-habib-hosseini-3650331.jpg';
import h3 from '@/public/pexels-jonathanborba-2917380.jpg';
import h4 from '@/public/pexels-vera-arsic-304265-984935.jpg';
import h5 from '@/public/pexels-visoesdomundo-2808658.jpg';

const HeroSection = () => {
  const images = [h1, h2, h3, h4, h5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative flex flex-col items-center justify-center h-screen w-full bg-black text-white">
      <AnimatePresence>
        {images.map((image, index) => (
          index === currentImageIndex && (
            <motion.div
              key={index}
              className="absolute w-full h-full inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url(${image.src})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 2, // Fade in/out duration
              }}
            />
          )
        ))}
      </AnimatePresence>
      <div className="relative z-10 text-center px-4 py-20">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Find Your Perfect Match</h1>
        <p className="text-lg md:text-xl mb-6">Join the best dating app and meet compatible singles near you.</p>
        <a
          href="#cta"
          className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-6 rounded transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
