import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../other/Button';

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-stone-100  via-orange-200 to-stone-400 text-white">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/imgEglise/notredamedesanges1.jpg')",
          backgroundBlendMode: "overlay",
          opacity: 0.5
        }}
      ></div>
      
      <div className="relative container mx-auto px-4 pt-24 pb-16 flex flex-col items-center justify-center min-h-screen text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Bienvenue à la Paroisse Notre Dame des Anges
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Une communauté vivante et fraternelle au service de la mission
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => document.getElementById('announcements')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Actualités
            </Button>
            <Link to="/horaires-messes">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                Horaires des messes
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
      
      {/* Down arrow animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById('announcements')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="7 13 12 18 17 13"></polyline>
          <polyline points="7 6 12 11 17 6"></polyline>
        </svg>
      </motion.div>
    </section>
  );
};
