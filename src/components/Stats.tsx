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
    <section className="bg-brand-grey-dark py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
              id={`stat-${stat.label.toLowerCase().replace(/ /g, '-')}`}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10 text-brand-blue-light mb-4 group-hover:bg-brand-blue group-hover:text-white transition-all">
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-4xl font-display font-bold text-white mb-2">{stat.value}</p>
              <p className="text-sm text-slate-400 font-medium uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
