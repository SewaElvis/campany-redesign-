/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Code, Shield, Cpu, Share2, 
  Network, Headphones, GraduationCap, Laptop 
} from 'lucide-react';

const services = [
  {
    title: 'Web & App Development',
    description: 'Expert coding from concept to deployment. We build responsive, high-performance websites and apps.',
    icon: Code,
    color: 'bg-blue-500'
  },
  {
    title: 'A.I. Solutions',
    description: 'Leverage the power of Artificial Intelligence to automate processes and unlock new business potentials.',
    icon: Cpu,
    color: 'bg-purple-500'
  },
  {
    title: 'Cyber Security',
    description: 'Protect your digital assets with our robust security solutions and threat management systems.',
    icon: Shield,
    color: 'bg-red-500'
  },
  {
    title: 'Social Media Management',
    description: 'Elevate your brand presence across all social platforms with strategic content and engagement.',
    icon: Share2,
    color: 'bg-indigo-500'
  },
  {
    title: 'Network Engineering',
    description: 'Reliable network infrastructure design, implementation, and maintenance for your organization.',
    icon: Network,
    color: 'bg-green-500'
  },
  {
    title: 'Remote IT Support',
    description: 'Dedicated technical assistance available whenever and wherever you need it.',
    icon: Headphones,
    color: 'bg-orange-500'
  },
  {
    title: 'IT Mentorship',
    description: 'Career development and professional coaching to bridge the gap between education and industry.',
    icon: GraduationCap,
    color: 'bg-yellow-500'
  },
  {
    title: 'Digital Rebranding',
    description: 'Complete business transformation, modernizing your identity for the global marketplace.',
    icon: Laptop,
    color: 'bg-cyan-500'
  }
];

export default function Services() {
  return (
    <section className="section-padding bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-5xl font-display font-bold text-brand-grey-dark mb-4"
            id="services-heading"
          >
            Our Core <span className="text-brand-blue">Expertise</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-grey max-w-2xl mx-auto text-lg"
          >
            We offer comprehensive technology solutions designed for growth. From development to expert tech consultations.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-brand-grey-light hover:border-brand-blue/20 hover:shadow-2xl hover:shadow-brand-blue/5 transition-all group"
              id={`service-card-${idx}`}
            >
              <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-black/5 group-hover:scale-110 transition-transform`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-grey-dark mb-3 group-hover:text-brand-blue transition-colors">
                {service.title}
              </h3>
              <p className="text-brand-grey text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
