/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Mic, Plus } from 'lucide-react';
import { askGemini } from '../services/geminiService';

export default function GeminiAIAgent() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showResponse, setShowResponse] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setShowResponse(true);
    setResponse('');
    
    const systemPrompt = `You are the ELMI Tech Space AI assistant. 
    ELMI Tech Space is an IT company specializing in Web Development, AI Consulting, Cyber Security, Social Media Management, Network Engineering, and Digital Rebranding.
    Key people:
    - Mr. Sewankambo Elvis (Founder & CEO): BSc IT from Uganda Christian University. Visionary leader.
    - Malik Abel: Software Engineer (IUIU Germany), Owner of WEA Fashions. Head of Digital Expertise.
    - Ainomugisha Jessy: AI Specialist (IUIU Germany). Head of AI Expertise.
    Company facts:
    - Located in Mukono and online, serving Kampala and worldwide.
    - Expertise: AI development, network engineering, help globalizing businesses, IT mentorship, remote IT support.
    - Contact: sewa.elvis@gmail.com, WhatsApp: 0708020670.
    User asks: ${input}`;
    
    const res = await askGemini(systemPrompt);
    setResponse(res);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-2xl mx-auto px-4" id="gemini-search-agent">
      <div className="relative group">
        <form 
          onSubmit={handleAsk}
          className="relative glass rounded-full p-2 flex items-center gap-2 border border-white/20 shadow-2xl group-focus-within:border-brand-orange transition-all duration-500"
        >
          <div className="w-10 h-10 bg-brand-orange text-white rounded-full flex items-center justify-center shrink-0">
             <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
          </div>
          <input 
            type="text" 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask anything..."
            className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-400 px-2 font-medium"
          />
          <div className="flex items-center gap-3 pr-4">
             <Mic className="w-5 h-5 text-slate-400 hover:text-white cursor-pointer transition-colors" />
             <div className="w-px h-6 bg-white/10" />
             <button 
              type="submit"
              disabled={isLoading}
              className="text-brand-orange hover:scale-110 transition-transform"
             >
                <Sparkles className={`w-6 h-6 ${isLoading ? 'animate-spin' : ''}`} />
             </button>
          </div>
        </form>

        <AnimatePresence>
          {showResponse && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="absolute top-full left-0 w-full mt-4 glass rounded-3xl p-6 border border-white/10 shadow-3xl text-slate-200 text-sm leading-relaxed overflow-y-auto max-h-[300px]"
            >
               <button 
                onClick={() => setShowResponse(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white"
               >
                  Close
               </button>
               {isLoading ? (
                 <div className="flex items-center gap-3 py-4">
                    <div className="animate-bounce w-2 h-2 bg-brand-orange rounded-full" />
                    <div className="animate-bounce w-2 h-2 bg-brand-orange rounded-full [animation-delay:0.2s]" />
                    <div className="animate-bounce w-2 h-2 bg-brand-orange rounded-full [animation-delay:0.4s]" />
                    <span className="italic opacity-50">Gemini is exploring...</span>
                 </div>
               ) : (
                 <div className="whitespace-pre-wrap">{response}</div>
               )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
