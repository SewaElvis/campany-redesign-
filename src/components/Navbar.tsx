/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Rocket, Search, Facebook, Twitter, Linkedin, Instagram, 
  MapPin, X, Send, Sparkles, User as UserIcon, LogOut 
} from 'lucide-react';
import { askGemini } from '../services/geminiService';
import { useAuth } from '../lib/AuthContext';
import AuthModal from './AuthModal';

export default function Navbar() {
  const location = useLocation();
  const { user, logout } = useAuth();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchResponse, setSearchResponse] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchInput.trim()) return;
    
    setIsSearching(true);
    setSearchResponse('');

    const systemPrompt = `You are the ELMI Tech Space search assistant. Help the user find information about ELMI Tech Space (IT company in Mukono/Uganda, founded by Sewankambo Elvis). 
    Services: Web development, AI, Cyber Security, Digital Rebranding, social media management, network engineering, IT mentorship.
    Team: Elvis (CEO), Malik Abel (Digital), Jessy (AI Specialist).
    Contact: sewa.elvis@gmail.com, 0708020670.
    User query: ${searchInput}
    
    IMPORTANT: You can also answer general tech questions by searching Google datasets or answers conceptually. Provide clear, professional IT advice.`;

    try {
      const res = await askGemini(systemPrompt);
      setSearchResponse(res);
    } catch (err) {
      setSearchResponse('Error connecting to AI. Please try later.');
    } finally {
      setIsSearching(false);
    }
  };

  return (
    <>
    <nav className="fixed w-full z-50 flex justify-center py-4 md:py-6 px-4">
      <div className="bg-white/90 backdrop-blur-xl shadow-2xl shadow-brand-blue/10 rounded-3xl md:rounded-full px-4 md:px-8 py-2 md:py-3 flex items-center justify-between border border-white/40 w-full max-w-7xl transition-all duration-500">
        
        {/* Left: Logo & Socials */}
        <div className="hidden lg:flex items-center gap-6">
           <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-brand-orange p-1.5 rounded-lg shadow-lg group-hover:rotate-12 transition-transform">
                <Rocket className="text-white w-4 h-4" />
              </div>
              <span className="text-brand-blue font-display font-bold text-lg">ELMI<span className="text-brand-orange">Tech</span></span>
           </Link>
           <div className="w-px h-6 bg-slate-200" />
           <div className="flex items-center gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-brand-orange transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
           </div>
        </div>

        {/* Center: Nav links */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar md:mx-4">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.name}
                to={link.href}
                className="relative px-3 md:px-5 py-2 text-xs md:text-sm font-bold transition-all flex items-center gap-2 group whitespace-nowrap"
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-brand-orange/10 rounded-full -z-10"
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className={`${isActive ? 'text-brand-orange' : 'text-brand-blue/60 group-hover:text-brand-blue'}`}>
                  {link.name}
                </span>
              </Link>
            );
          })}
        </div>

        {/* Right: Search, Location & Auth */}
        <div className="flex items-center gap-3">
           <div className="hidden sm:flex items-center gap-2 text-slate-400 mr-2">
              <MapPin className="w-4 h-4 text-brand-orange" />
              <span className="text-[10px] font-bold uppercase tracking-widest hidden lg:inline">Mukono, UG</span>
           </div>
           
           <button 
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-600 hover:bg-brand-orange hover:text-white transition-all shadow-sm"
           >
              <Search className="w-4 h-4" />
           </button>

           <div className="w-px h-6 bg-slate-200 mx-1 hidden sm:block" />

           {user ? (
             <div className="flex items-center gap-3">
               <div className="hidden md:flex flex-col items-end">
                 <span className="text-[10px] font-bold text-brand-blue truncate max-w-[100px]">{user.displayName || user.email}</span>
                 <button onClick={logout} className="text-[9px] text-brand-orange font-bold uppercase tracking-widest hover:underline flex items-center gap-1">
                   Logout <LogOut className="w-2 h-2" />
                 </button>
               </div>
               <div className="w-10 h-10 rounded-full border-2 border-brand-orange p-0.5 overflow-hidden">
                 <img src={user.photoURL || `https://ui-avatars.com/api/?name=${user.email}`} className="w-full h-full rounded-full object-cover" alt="User" />
               </div>
             </div>
           ) : (
             <button 
              onClick={() => setIsAuthOpen(true)}
              className="bg-brand-blue text-white px-5 py-2.5 rounded-full text-xs font-bold shadow-lg shadow-brand-blue/20 hover:scale-105 transition-all flex items-center gap-2"
             >
                <UserIcon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign In</span>
             </button>
           )}
        </div>
      </div>

      {/* Advanced Search Modal (AI Powered) */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-brand-blue/95 backdrop-blur-md z-[60] flex items-center justify-center p-4 lg:p-8"
          >
             <button 
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
             >
                <X className="w-8 h-8" />
             </button>

             <div className="w-full max-w-3xl">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="relative group"
                >
                  <form onSubmit={handleSearch} className="flex items-center bg-white/10 rounded-3xl p-6 border border-white/20 shadow-4xl group-focus-within:border-brand-orange transition-all">
                    <Search className="w-8 h-8 text-white/20 mr-4" />
                    <input 
                      autoFocus
                      type="text" 
                      placeholder="Search services, team, or ask me anything..."
                      className="flex-1 bg-transparent border-none outline-none text-2xl text-white placeholder-white/20"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <button type="submit" className="bg-brand-orange text-white p-3 rounded-2xl hover:scale-105 transition-transform">
                       <Send className="w-5 h-5" />
                    </button>
                  </form>

                  {/* AI Response Display */}
                  {(isSearching || searchResponse) && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 bg-white rounded-3xl p-8 shadow-3xl max-h-[60vh] overflow-y-auto"
                    >
                       <div className="flex items-center gap-3 mb-6">
                          <div className="w-10 h-10 bg-brand-orange/10 rounded-full flex items-center justify-center">
                             <Sparkles className="w-5 h-5 text-brand-orange" />
                          </div>
                          <div>
                             <h4 className="font-bold text-brand-blue">AI Expert Search</h4>
                             <p className="text-[10px] text-slate-400 uppercase tracking-widest">Enhanced with Google Datasets</p>
                          </div>
                       </div>
                       
                       {isSearching ? (
                         <div className="space-y-4">
                            <div className="h-4 bg-slate-100 rounded-full w-full animate-pulse" />
                            <div className="h-4 bg-slate-100 rounded-full w-3/4 animate-pulse" />
                            <div className="h-4 bg-slate-100 rounded-full w-5/6 animate-pulse" />
                         </div>
                       ) : (
                         <p className="text-slate-600 leading-relaxed whitespace-pre-wrap">
                           {searchResponse}
                         </p>
                       )}
                    </motion.div>
                  )}
                </motion.div>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
    </>
  );
}
