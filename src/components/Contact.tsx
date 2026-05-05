/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <section className="section-padding bg-white" id="contact">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-grey-dark mb-6">
              Ready to <span className="text-brand-blue">Unlock Your Potential?</span>
            </h2>
            <p className="text-lg text-brand-grey mb-12">
              Unlock your business's potential with ELMI Tech Space! Based in Mukono/Kampala and serving clients worldwide.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-grey-dark mb-1">Email Us</h4>
                  <a href="mailto:sewa.elvis@gmail.com" className="text-brand-grey hover:text-brand-blue transition-colors">sewa.elvis@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-grey-dark mb-1">WhatsApp</h4>
                  <a href="https://wa.me/256708020670" className="text-brand-grey hover:text-brand-blue transition-colors">0708020670</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-grey-dark mb-1">Location</h4>
                  <p className="text-brand-grey">Mukono & Kampala, Uganda | Serving Worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-brand-grey-light p-8 lg:p-12 rounded-[2.5rem] shadow-sm border border-brand-grey-light"
          >
            <form className="space-y-6" id="contact-form">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-brand-grey-dark mb-2">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full bg-white border-transparent focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 rounded-xl px-4 py-3 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-brand-grey-dark mb-2">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com" 
                    className="w-full bg-white border-transparent focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 rounded-xl px-4 py-3 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-grey-dark mb-2">Service Needed</label>
                <select className="w-full bg-white border-transparent focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 rounded-xl px-4 py-3 outline-none transition-all">
                  <option>Web Development</option>
                  <option>AI Solutions</option>
                  <option>Cyber Security</option>
                  <option>Digital Rebranding</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-brand-grey-dark mb-2">Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you?" 
                  className="w-full bg-white border-transparent focus:border-brand-blue focus:ring-4 focus:ring-brand-blue/10 rounded-xl px-4 py-3 outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-brand-blue text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-blue/20 hover:bg-brand-blue-dark transition-all flex items-center justify-center gap-2"
                onClick={(e) => e.preventDefault()}
              >
                Send Message <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
