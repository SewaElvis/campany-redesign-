/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Rocket, Facebook, Twitter, Linkedin, Instagram, MapPin, Mail, MessageSquare } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-blue-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6" id="footer-logo">
              <div className="bg-brand-orange p-2 rounded-lg">
                <Rocket className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-display font-bold tracking-tight">
                ELMI<span className="text-brand-orange">Tech</span>Space
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering organizations to leverage technology for sustainable growth and innovation. Since 2019.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, idx) => (
                <a 
                  key={idx} 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-orange transition-all"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-brand-orange transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#team" className="hover:text-brand-orange transition-colors">Our Team</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">AI & Innovation</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Cyber Security</a></li>
              <li><a href="#services" className="hover:text-brand-orange transition-colors">Career Mentorship</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                 <MapPin className="w-4 h-4 text-brand-orange" />
                 Mukono & Kampala, Uganda
              </li>
              <li className="flex items-center gap-3">
                 <Mail className="w-4 h-4 text-brand-orange" />
                 sewa.elvis@gmail.com
              </li>
              <li className="flex items-center gap-3">
                 <MessageSquare className="w-4 h-4 text-brand-orange" />
                 0708020670
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>© {currentYear} ELMI Tech Space. All rights reserved. Mukono, Uganda.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
