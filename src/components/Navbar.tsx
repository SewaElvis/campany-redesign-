/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Rocket, ArrowUpRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'py-3 bg-white/90 backdrop-blur-xl shadow-lg border-b border-brand-blue/10' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
            id="nav-logo"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-brand-blue rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-brand-blue p-2 rounded-lg text-white">
                <Rocket className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <span className="text-2xl font-display font-bold tracking-tight text-brand-grey-dark">
              ELMI<span className="text-brand-blue">Tech</span><span className="hidden sm:inline">Space</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="px-4 py-2 text-sm font-semibold text-brand-grey hover:text-brand-blue rounded-full hover:bg-brand-blue/5 transition-all duration-300"
                id={`nav-link-${link.name.toLowerCase()}`}
              >
                {link.name}
              </motion.a>
            ))}
            <div className="pl-4">
              <motion.button
                whileHover={{ scale: 1.05, y: -1 }}
                whileTap={{ scale: 0.95 }}
                className="relative group bg-brand-blue text-white px-7 py-3 rounded-full text-sm font-bold shadow-xl shadow-brand-blue/20 overflow-hidden"
                id="nav-cta"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-light to-brand-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  Get Started <ArrowUpRight className="w-4 h-4" />
                </span>
              </motion.button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-brand-grey-light/50 text-brand-grey-dark hover:text-brand-blue transition-colors"
              id="mobile-menu-toggle"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'menu'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <X /> : <Menu />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full md:hidden bg-white/95 backdrop-blur-2xl border-b border-brand-grey-light shadow-2xl overflow-hidden"
            id="mobile-nav-panel"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link, idx) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-xl font-bold text-brand-grey-dark hover:text-brand-blue transition-colors group"
                >
                  {link.name}
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              <div className="pt-4">
                <button className="w-full bg-brand-blue text-white px-6 py-4 rounded-2xl text-lg font-bold shadow-xl shadow-brand-blue/20">
                  Speak to an Expert
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
