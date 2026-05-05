/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Target, Eye, Heart, Compass } from 'lucide-react';

const values = [
  { icon: Heart, title: 'Integrity', desc: 'We build trust through transparency and honest advice.' },
  { icon: Compass, title: 'Innovation', desc: 'Constantly exploring new horizons in technology.' },
  { icon: Target, title: 'Excellence', desc: 'Delivering only the highest quality results.' },
  { icon: Eye, title: 'Collaboration', desc: 'Your success is our success. We thrive together.' },
];

export default function About() {
  return (
    <section className="section-padding bg-brand-grey-light" id="about">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-grey-dark mb-8" id="about-heading">
              Bridging the Gap Between <span className="text-brand-blue">Tech & Success</span>
            </h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-blue flex items-center justify-center text-white">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-grey-dark mb-2">Our Mission</h3>
                  <p className="text-brand-grey leading-relaxed">
                    To bridge technology and business success through innovative solutions, helping organizations leverage tech effectively for sustainable growth.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-blue-light flex items-center justify-center text-white">
                  <Eye className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-brand-grey-dark mb-2">Our Vision</h3>
                  <p className="text-brand-grey leading-relaxed">
                    To be the leading tech partner for businesses in Uganda and worldwide, bridging the digital divide with excellence.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-white rounded-2xl border border-brand-grey-light">
              <h4 className="font-bold text-brand-blue mb-2 uppercase text-xs tracking-widest">Global Reach</h4>
              <p className="text-brand-grey text-sm">
                Based in <span className="font-bold text-brand-grey-dark">Mukono, Uganda</span>, we serve organizations across Kampala and international markets, delivering world-class IT solutions without borders.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-brand-grey-light hover:shadow-lg transition-all"
                id={`value-${v.title.toLowerCase()}`}
              >
                <v.icon className="w-8 h-8 text-brand-blue mb-4" />
                <h4 className="font-bold text-brand-grey-dark mb-2">{v.title}</h4>
                <p className="text-sm text-brand-grey">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CEO Section */}
        <div className="bg-white rounded-[3rem] p-8 lg:p-16 shadow-2xl shadow-brand-blue/5 border border-brand-grey-light relative overflow-hidden" id="team">
          <div className="absolute top-0 right-0 w-full lg:w-1/3 h-full bg-brand-blue/5 -skew-x-12 transform origin-top-right" />
          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-4">
              <div className="relative">
                <div className="absolute -inset-4 bg-brand-blue/10 rounded-[2.5rem] blur-2xl" />
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=687" 
                  alt="Mr. Sewankambo Elvis" 
                  className="w-full aspect-square object-cover rounded-[2rem] shadow-xl relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="lg:col-span-8">
              <span className="text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block">Founder & CEO</span>
              <h3 className="text-4xl font-display font-bold text-brand-grey-dark mb-6">Mr. Sewankambo Elvis</h3>
              <p className="text-xl text-brand-grey leading-relaxed mb-8 italic">
                "With a vision to bridge technology and business success, we founded ELMI Tech Space with passion and innovation. Our mission is to help businesses leverage technology effectively for sustainable growth."
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-brand-grey-light px-4 py-2 rounded-lg text-sm font-semibold text-brand-grey-dark">Technology Strategy</div>
                <div className="bg-brand-grey-light px-4 py-2 rounded-lg text-sm font-semibold text-brand-grey-dark">Business Consulting</div>
                <div className="bg-brand-grey-light px-4 py-2 rounded-lg text-sm font-semibold text-brand-grey-dark">Innovation Management</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
