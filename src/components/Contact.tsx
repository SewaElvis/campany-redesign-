/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';

const API_KEY = process.env.GOOGLE_MAPS_PLATFORM_KEY || '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export default function Contact() {
  const position = { lat: 0.3549, lng: 32.7486 }; // Mukono, Uganda

  return (
    <section className="pt-40 pb-24 bg-white min-h-screen" id="contact">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl lg:text-5xl font-display font-bold text-brand-blue mb-6 heading-underline" id="contact-heading">
              Ready to Unlock <br/>
              <span className="text-brand-blue/80">Your Potential?</span>
            </h2>
            <p className="text-lg text-brand-grey mb-12">
              Unlock your business's potential with ELMI Tech Space! Based in Mukono/Kampala and serving clients worldwide. 
              <span className="block mt-4 font-bold text-brand-orange italic">"Assured quality of services for all our clients."</span>
            </p>

            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue mb-1">Email Us</h4>
                  <a href="mailto:sewa.elvis@gmail.com" className="text-brand-grey hover:text-brand-orange transition-colors">sewa.elvis@gmail.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue mb-1">WhatsApp</h4>
                  <a href="https://wa.me/256708020670" className="text-brand-grey hover:text-brand-orange transition-colors">0708020670</a>
                </div>
              </div>
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center shrink-0 group-hover:bg-brand-orange group-hover:text-white transition-all">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-blue mb-1">Location</h4>
                  <p className="text-brand-grey">Mukono christian university main gate opposite kfc | Uganda</p>
                </div>
              </div>
            </div>

            {/* Functional Google Map */}
            <div className="rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-2xl h-80 relative group">
              {!hasValidKey ? (
                <div className="w-full h-full bg-slate-50 flex items-center justify-center p-8 text-center">
                   <div className="max-w-xs">
                      <MapPin className="w-10 h-10 text-slate-300 mx-auto mb-4" />
                      <h4 className="text-brand-blue font-bold mb-2">Google Map Key Required</h4>
                      <p className="text-[10px] text-slate-400 leading-relaxed uppercase tracking-widest">
                         Please add your GOOGLE_MAPS_PLATFORM_KEY to AI Studio Secrets to enable the live map.
                      </p>
                   </div>
                </div>
              ) : (
                <APIProvider apiKey={API_KEY} version="weekly">
                  <Map
                    defaultCenter={position}
                    defaultZoom={15}
                    mapId="ELMI_TECH_MAP"
                    internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                    style={{ width: '100%', height: '100%' }}
                    gestureHandling={'greedy'}
                    disableDefaultUI={false}
                  >
                    <AdvancedMarker position={position} title="ELMI Tech Space">
                       <Pin background="#F59E0B" borderColor="#B45309" glyphColor="#FFF" />
                    </AdvancedMarker>
                  </Map>
                </APIProvider>
              )}
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
                className="btn-orange w-full flex items-center justify-center gap-2"
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

