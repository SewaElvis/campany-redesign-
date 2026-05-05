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
    description: 'Expert coding for developing, redesigning, and maintaining high-performance websites and applications.',
    icon: Code,
    color: 'bg-blue-500'
  },
  {
    title: 'A.I. Consulting',
    description: 'Specialized expertise in Artificial Intelligence implementation, automation, and future-proof digital strategies.',
    icon: Cpu,
    color: 'bg-purple-500'
  },
  {
    title: 'Cyber Security',
    description: 'Protecting your organization with advanced security audits, robust threat prevention, and data safety.',
    icon: Shield,
    color: 'bg-red-500'
  },
  {
    title: 'Digital Rebranding',
    description: 'Transforming your business identity for the digital age to drive growth, innovation, and global presence.',
    icon: Laptop,
    color: 'bg-cyan-500'
  },
  {
    title: 'Network Engineering',
    description: 'Reliable network infrastructure design, implementation, and proactive maintenance for stability.',
    icon: Network,
    color: 'bg-green-500'
  },
  {
    title: 'Social Media Management',
    description: 'Strategic brand engagement and content management to elevate your social presence and reach.',
    icon: Share2,
    color: 'bg-indigo-500'
  },
  {
    title: 'Globalizing Business',
    description: 'Help globalizing your business through strategic digital positioning and worldwide market reach.',
    icon: Laptop,
    color: 'bg-orange-500'
  },
  {
    title: 'IT Mentorship',
    description: 'IT mentorship and career development to empower professionals in the modern tech landscape.',
    icon: GraduationCap,
    color: 'bg-yellow-500'
  }
];

const secondaryServices = [
  { icon: Headphones, title: 'Remote IT Support', desc: 'Dedicated technical assistance available worldwide.' },
  { icon: Code, title: 'Expert Consultations', desc: 'Strategic technology advice for business growth.' },
  { icon: Shield, title: 'Quality Assurance', desc: 'Assured quality of services for every project.' },
];

export default function Services() {
  return (
    <section className="pt-40 pb-24 bg-brand-grey-light overflow-hidden min-h-screen" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-blue mb-4 leading-tight heading-underline">
            Our Core Expertise
          </h2>
          <p className="text-brand-grey max-w-2xl mx-auto">
            Comprehensive technology solutions designed for growth. We empower businesses to thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col h-full"
            >
              <div className={`${service.color} w-14 h-14 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-brand-blue/10`}>
                <service.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-4">{service.title}</h3>
              <p className="text-sm text-brand-grey leading-relaxed flex-1">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
           {secondaryServices.map((service, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.05 }}
               className="bg-white p-6 rounded-3xl border border-slate-100 flex items-center gap-6 group hover:border-brand-orange/30 transition-all"
             >
                <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-all">
                   <service.icon className="w-5 h-5" />
                </div>
                <div>
                   <h4 className="font-bold text-brand-blue text-sm mb-1">{service.title}</h4>
                   <p className="text-[10px] text-brand-grey leading-tight">{service.desc}</p>
                </div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
}

