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
    <section className="pt-60 pb-24 bg-brand-grey-light overflow-hidden min-h-screen" id="services">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Header Card */}
          <div className="lg:col-span-4 flex flex-col justify-center">
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-brand-blue mb-6 leading-tight" id="services-heading">
              We Provide Best <br />
              <span className="text-brand-orange">AI Consulting</span>
            </h2>
            <p className="text-brand-grey mb-8 text-lg">
              Unlock your business's potential with ELMI Tech Space! Comprehensive technology solutions designed for growth.
            </p>
            <motion.button 
              whileHover={{ x: 10 }}
              className="bg-brand-orange text-white px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest w-fit mb-12 lg:mb-0"
            >
               VIEW ALL SERVICES
            </motion.button>
          </div>

          <div className="lg:col-span-8 grid md:grid-cols-2 gap-8">
             {/* Primary Orange Card */}
             <motion.div 
               whileHover={{ y: -10 }}
               className="bg-brand-orange p-10 rounded-[2.5rem] text-white shadow-2xl shadow-brand-orange/20 flex flex-col justify-between min-h-[350px]"
             >
               <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-10">
                 <Cpu className="w-8 h-8 text-white" />
               </div>
               <div>
                  <h3 className="text-3xl font-bold mb-4 leading-tight">AI-Consulting Offerings</h3>
                  <p className="text-white/80 leading-relaxed mb-6 italic text-sm">
                    Credibly innovate granular internal or organic sources whereas high standards in web-readiness.
                  </p>
                  <div className="flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                    <div className="w-2 h-2 rounded-full bg-white/30" />
                  </div>
               </div>
             </motion.div>

             {/* Dynamic Services Grid */}
             <div className="grid gap-8">
                {services.slice(0, 2).map((service, idx) => (
                  <motion.div
                    key={service.title}
                    whileHover={{ y: -5 }}
                    className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex gap-6"
                  >
                    <div className={`${service.color} shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-blue mb-1">{service.title}</h4>
                      <p className="text-xs text-brand-grey leading-relaxed">{service.description}</p>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* More Services Row */}
          <div className="lg:col-span-12 grid md:grid-cols-3 gap-8 mt-8">
             {services.slice(2, 5).map((service, idx) => (
               <motion.div
                 key={service.title}
                 whileHover={{ y: -5 }}
                 className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-100 flex gap-6"
               >
                  <div className={`${service.color} shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-white`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-blue mb-1">{service.title}</h4>
                    <p className="text-xs text-brand-grey leading-relaxed">{service.description}</p>
                  </div>
               </motion.div>
             ))}
          </div>

          {/* Bottom Banner Card */}
          <div className="lg:col-span-12 flex flex-col md:flex-row items-center bg-white p-10 rounded-[3rem] shadow-sm border border-slate-100 gap-10 mt-8">
             <div className="shrink-0 w-24 h-24 bg-brand-blue text-white rounded-[2.5rem] flex items-center justify-center">
                <Laptop className="w-10 h-10" />
             </div>
             <div className="flex-1 text-center md:text-left">
                <h4 className="text-2xl font-bold text-brand-blue mb-4 uppercase tracking-wide">Knowledge Centralization Solutions</h4>
                <p className="text-brand-grey leading-relaxed">
                  We empower businesses to thrive in the digital age by bridging the gap between complexity and success. Innovate granular internal or organic sources.
                </p>
             </div>
             <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-brand-orange text-white px-10 py-5 rounded-full font-bold shadow-xl"
             >
                LEARN MORE
             </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}

