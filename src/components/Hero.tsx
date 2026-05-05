/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-brand-grey-light" id="home">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 skew-x-12 transform origin-top-right" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-brand-blue px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase mb-6" id="hero-badge">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-blue opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-blue"></span>
              </span>
              Innovation Meets Excellence
            </div>
            <h1 className="text-5xl lg:text-7xl font-display font-bold leading-tight text-brand-grey-dark mb-6" id="hero-title">
              Transform Your <br />
              <span className="text-brand-blue">Digital Presence</span>
            </h1>
            <p className="text-xl text-brand-grey max-w-xl mb-10 leading-relaxed" id="hero-description">
              From concept to deployment, we deliver cutting-edge technology solutions that drive results. Empowering businesses to thrive in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-brand-blue text-white px-8 py-4 rounded-xl text-lg font-bold shadow-xl shadow-brand-blue/30 flex items-center justify-center gap-2 hover:bg-brand-blue-dark transition-all"
                id="hero-cta-primary"
              >
                Boost Your Business <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-brand-grey-dark px-8 py-4 rounded-xl text-lg font-semibold border border-brand-grey-light shadow-sm flex items-center justify-center gap-2 hover:border-brand-blue/30 transition-all"
                id="hero-cta-secondary"
              >
                Our Services <ChevronRight className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/100?u=${i}`}
                    alt="User"
                    className="w-10 h-10 rounded-full border-2 border-white"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p className="text-sm text-brand-grey font-medium">
                Joined by <span className="text-brand-grey-dark font-bold">100+</span> successful projects
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
            id="hero-image-container"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070"
                alt="IT Team working"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-multiply" />
            </div>
            
            {/* Floating stats card */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-brand-grey-light hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-3 rounded-xl text-brand-blue font-bold text-2xl">
                  5+
                </div>
                <div>
                  <p className="text-xs text-brand-grey font-bold uppercase tracking-wider">Years of</p>
                  <p className="text-sm text-brand-grey-dark font-bold">Experience</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
