/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Users, Globe, Briefcase, Award } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Projects Completed', value: '100+' },
  { icon: Users, label: 'Expert Team Members', value: '25+' },
  { icon: Globe, label: 'Global Clients', value: '15+' },
  { icon: Award, label: 'Years Experience', value: '5+' },
];

export default function Stats() {
  return (
    <section className="relative -mt-16 z-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-blue-dark rounded-[3rem] p-10 md:p-14 lg:p-16 shadow-2xl relative overflow-hidden flex flex-col md:flex-row justify-around items-center gap-12 text-center"
        >
          {/* Subtle glow background */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-brand-orange/5 blur-[100px] rounded-full" />
          
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="relative group transition-all duration-300 hover:scale-105"
              id={`stat-${stat.label.toLowerCase().replace(/ /g, '-')}`}
            >
              <div className="flex flex-col items-center">
                 <stat.icon className="w-10 h-10 text-brand-orange mb-6 group-hover:scale-110 transition-transform" />
                 <p className="text-5xl font-display font-bold text-white mb-2">{stat.value}</p>
                 <p className="text-xs text-slate-400 font-bold uppercase tracking-[0.2em]">{stat.label}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
