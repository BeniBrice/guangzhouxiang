"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 50);
    };
    window?.addEventListener?.('scroll', handleScroll);
    return () => window?.removeEventListener?.('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12">
              <Image
                src="/logo.jpeg"
                alt="Guangzhou Xiang Technology Logo"
                fill
                className="object-contain rounded-md"
              />
            </div>
            <span className={`font-bold text-base sm:text-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Guangzhou Xiang
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks?.map?.((link) => (
              <Link
                key={link?.href}
                href={link?.href ?? '#'}
                className={`font-medium transition-colors hover:text-[#E53935] ${
                  isScrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {link?.label ?? ''}
              </Link>
            )) ?? null}
            <Link
              href="#contact"
              className="bg-[#E53935] hover:bg-[#C62828] text-white px-5 py-2.5 rounded-lg font-medium transition-all shadow-md hover:shadow-lg"
            >
              Get Started
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-900' : 'text-white'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t shadow-lg"
          >
            <nav className="flex flex-col p-4 gap-2">
              {navLinks?.map?.((link) => (
                <Link
                  key={link?.href}
                  href={link?.href ?? '#'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  {link?.label ?? ''}
                </Link>
              )) ?? null}
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#E53935] hover:bg-[#C62828] text-white px-4 py-2.5 rounded-lg font-medium text-center mt-2"
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
