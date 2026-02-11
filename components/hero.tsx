"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Server, Code2, Database } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/server-room.jpg"
          alt="Server room infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95" />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-[10%] hidden lg:block"
      >
        <Server className="w-12 h-12 text-[#E53935]/40" />
      </motion.div>
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 right-[15%] hidden lg:block"
      >
        <Code2 className="w-16 h-16 text-[#E53935]/30" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/3 left-[20%] hidden lg:block"
      >
        <Database className="w-10 h-10 text-[#E53935]/35" />
      </motion.div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-[#E53935] font-semibold text-sm sm:text-base tracking-wider uppercase mb-4">
            广州祥科技 • Guangzhou Xiang Technology
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Empowering Small Businesses with
            <span className="text-[#E53935]"> Reliable Tech</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional hosting, custom software development, and database management
            solutions tailored for growing businesses. Your success is our mission.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="#contact"
              className="group bg-[#E53935] hover:bg-[#C62828] text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#services"
              className="text-white border border-white/30 hover:border-white/60 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { number: '50+', label: 'Projects Delivered' },
            { number: '99.9%', label: 'Uptime Guaranteed' },
            { number: '24/7', label: 'Support Available' },
            { number: '25+', label: 'Years Experience' },
          ]?.map?.((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat?.number ?? '0'}</div>
              <div className="text-sm text-gray-400">{stat?.label ?? ''}</div>
            </div>
          )) ?? null}
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
