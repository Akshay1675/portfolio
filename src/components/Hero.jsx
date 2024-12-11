import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id='home' className="h-screen bg-black text-white flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-4">Hi, I'm Akshay</h1>
        <p className="text-lg">React Developer | Frontend Enthusiast</p>
      </motion.div>
    </section>
  );
};

export default Hero;
