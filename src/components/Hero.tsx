/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronRight, Sparkles } from 'lucide-react';
import GeminiAIAgent from './GeminiAIAgent';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-blue" id="home">
      {/* Powered by Gemini integrated into Hero for better visibility */}
      <div className="absolute top-28 right-8 z-20 hidden xl:block">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-3xl flex items-center gap-4 group"
        >
          <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center text-white">
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">AI Solution</p>
            <p className="text-white text-xs font-bold leading-none">Powered by <span className="text-brand-orange">Gemini</span></p>
          </div>
        </motion.div>
      </div>

      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-orange/20 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               className="mb-6"
            >
               <span className="text-brand-orange font-bold tracking-[0.2em] uppercase text-sm border-l-4 border-brand-orange pl-4 mb-4 block">
                 Innovation in Motion
               </span>
            </motion.div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-white mb-6" id="hero-title">
              Transform Your <br />
              <span className="text-brand-orange">Digital Presence</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-xl mb-12 leading-relaxed" id="hero-description">
              An IT company for developing, redesigning, and maintaining websites and business digital rebranding. We deliver high-quality services that foster growth and inspire innovation.
            </p>
            
            <div className="mb-12">
               <GeminiAIAgent />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
               {['Web Development', 'AI Consulting', 'Cyber Security', 'IT Support'].map((skill) => (
                 <div key={skill} className="bg-white/5 border border-white/10 rounded-2xl p-3 backdrop-blur-sm">
                    <span className="text-brand-orange text-[10px] font-bold uppercase tracking-widest">{skill}</span>
                 </div>
               ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="btn-orange"
                id="hero-cta-primary"
              >
                Get a Quote
              </motion.button>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 pt-8 border-t border-white/10 max-w-sm">
               <div>
                  <h4 className="text-3xl font-bold text-white mb-1">5+</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Years Industry Experience</p>
               </div>
               <div>
                  <h4 className="text-3xl font-bold text-white mb-1">100+</h4>
                  <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Projects Completed</p>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
            id="hero-image-container"
          >
            <div className="relative group">
               <div className="absolute -inset-1 bg-brand-orange/20 rounded-[2.5rem] blur opacity-25 group-hover:opacity-40 transition duration-1000" />
               <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 glass shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2070"
                  alt="IT Infrastructure"
                  className="w-full h-full object-cover opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blue via-transparent to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
