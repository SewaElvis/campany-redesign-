/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowUpRight, Sparkles, Users, Star, Code } from 'lucide-react';
import GeminiAIAgent from './GeminiAIAgent';

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-brand-blue pt-32 pb-20 overflow-hidden" id="home">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-orange/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 border border-white/10">
              <Sparkles className="w-4 h-4 text-brand-orange" />
              <span className="text-xs font-bold uppercase tracking-widest">Expert Digital Solutions</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight mb-8" id="hero-title">
              Web Development & <br />
              <span className="text-brand-orange">Digital Presence</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-xl mb-12 leading-relaxed" id="hero-description">
              ELMI Tech Space: An IT company for developing, redesigning, and maintaining websites and business digital rebranding. We deliver high-quality services that foster growth and inspire innovation.
            </p>
            
            <div className="mb-12">
               <GeminiAIAgent />
            </div>

            <div className="flex flex-wrap gap-6">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-orange"
              >
                GET A QUOTE
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2"
              >
                Our Services <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative rounded-[3.5rem] overflow-hidden shadow-4xl aspect-[4/3] group">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070" 
                alt="Technology background" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-blue/60 backdrop-blur-[2px] flex items-center justify-center">
                 <div className="text-center p-12 border-2 border-white/20 rounded-[2.5rem] backdrop-blur-xl">
                    <h2 className="text-8xl font-bold text-white mb-2 opacity-50">AI</h2>
                    <p className="text-xl font-bold text-white tracking-[0.5em] uppercase">Artificial Intelligence</p>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Stats Overlay - Overlapping Hero and next section */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-full max-w-5xl px-4 z-20">
        <div className="bg-brand-blue rounded-[3rem] shadow-4xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12 border border-white/10">
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-4xl font-bold mb-1">200+</h3>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">Specialized Consultants</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-4xl font-bold mb-1">100%</h3>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">Customer Satisfaction</p>
          </div>
          <div className="w-px h-12 bg-white/10 hidden md:block" />
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-brand-orange" />
            </div>
            <h3 className="text-4xl font-bold mb-1">1K+</h3>
            <p className="text-xs text-slate-400 uppercase tracking-widest font-medium">Completed Projects</p>
          </div>
        </div>
      </div>
    </section>
  );
}

