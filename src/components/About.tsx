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
  { icon: Heart, title: 'Collaboration', desc: 'Skilled professionals passionate about technology.' },
];

const team = [
  {
    name: 'Mr. Sewankambo Elvis',
    role: 'Founder & CEO',
    bio: 'BSc. in Information Technology (Uganda Christian University). With a vision to bridge technology and business success, Elvis founded ELMI Tech Space with passion and innovation. His expertise in technology solutions and business strategy drives our mission to help businesses leverage technology effectively for sustainable growth.',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1974'
  },
  {
    name: 'Malik Abel',
    role: 'Head of Digital Expertise Team',
    bio: 'Software Programmer (IUIU Germany) and owner of WEA Fashions. Leading our digital expertise team with a focus on web development, redesigning, and business digital rebranding for global markets.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1974'
  },
  {
    name: 'Ainomugisha Jessy',
    role: 'Head of A.I. Expertise',
    bio: 'Bachelors in Artificial Intelligence (IUIU Germany). Jessy directs our A.I. and modern intelligence systems, ensuring ELMI Tech Space stays at the cutting edge of technological innovation.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1974'
  }
];

export default function About() {
  return (
    <section className="py-40 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* The curved image container as seen in the image - updated to match About.tsx lines */}
            <div className="relative z-10 rounded-tr-[10rem] rounded-bl-[10rem] overflow-hidden shadow-4xl border-8 border-white skew-y-1">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2070" 
                alt="Collaborative work" 
                className="w-full aspect-[4/5] object-cover transition-transform duration-1000 hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Background floating squares */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-brand-orange/10 rounded-3xl -z-0 animate-pulse" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-bold text-brand-orange uppercase tracking-[0.3em] text-xs mb-4">About Us</h4>
            <h2 className="text-4xl lg:text-6xl font-display font-bold text-brand-blue mb-8 leading-tight">
              Bridging the gap between <br />
              <span className="text-brand-orange">Technology & Success</span>
            </h2>
            <p className="text-brand-grey text-lg mb-8 leading-relaxed">
              ELMI Tech Space is a technology company committed to delivering high-quality services that foster growth and inspire innovation. 
              Founded with the mission to bridge the gap between technology and business success, ELMI Tech Space has been helping organizations of all sizes 
              leverage technology to optimize operations and achieve sustainable growth.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
               <div className="p-6 bg-slate-50 rounded-3xl group hover:bg-brand-blue transition-all duration-300">
                  <h4 className="font-bold text-brand-orange uppercase tracking-widest text-xs mb-2 group-hover:text-white">Our Mission</h4>
                  <p className="text-brand-grey text-sm group-hover:text-white/80">Bridge the gap between technology and success by delivering high-quality services, fostering growth, and inspiring innovation.</p>
               </div>
               <div className="p-6 bg-slate-50 rounded-3xl group hover:bg-brand-blue transition-all duration-300">
                  <h4 className="font-bold text-brand-orange uppercase tracking-widest text-xs mb-2 group-hover:text-white">Our Vision</h4>
                  <p className="text-brand-grey text-sm group-hover:text-white/80">To be the leading tech partner for businesses in our region and worldwide.</p>
               </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-orange"
            >
               GET A QUOTE
            </motion.button>
          </motion.div>
        </div>


        {/* Improved Team Section */}
        <div className="mt-40" id="team">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-display font-bold text-brand-blue mb-4">Our Expertise Team</h3>
            <p className="text-brand-grey">Skilled professionals passionate about technology and business success.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 group"
              >
                <div className="h-[350px] overflow-hidden relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 to-transparent flex flex-col justify-end p-8">
                    <span className="text-brand-orange font-bold uppercase tracking-widest text-[10px] mb-2">{member.role}</span>
                    <h4 className="text-white text-xl font-bold">{member.name}</h4>
                  </div>
                </div>
                <div className="p-8">
                   <p className="text-brand-grey text-sm leading-relaxed">
                     {member.bio}
                   </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
