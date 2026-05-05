/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, Bot, X, Send, Sparkles } from 'lucide-react';
import { askGemini } from '../services/geminiService';

export default function FloatingActions() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    setResponse('');
    
    const systemPrompt = `You are the ELMI Tech Space AI assistant. 
    ELMI Tech Space is an IT company specializing in Web Development (developing, redesigning, maintaining), AI Consulting, Cyber Security, Social Media Management, Network Engineering, and Digital Rebranding.
    Founder: Mr. Sewankambo Elvis (BSc IT UCU).
    Experts: Malik Abel (Software programmer, IUIU Germany), Ainomugisha Jessy (AI Specialist, IUIU Germany).
    Location: Mukono/Uganda and online.
    Contact: sewa.elvis@gmail.com, WhatsApp: 0708020670.
    User asks: ${input}`;
    
    try {
      const res = await askGemini(systemPrompt);
      setResponse(res);
    } catch (err) {
      setResponse('Sorry, I encountered an error. Please try again or contact us directly.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-4 items-end">
      
      {/* AI Assistant Dialog */}
      <AnimatePresence>
        {isAssistantOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-[320px] md:w-[400px] bg-white rounded-3xl shadow-3xl border border-slate-100 overflow-hidden mb-4"
          >
            <div className="bg-brand-blue p-5 text-white flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="bg-brand-orange p-1.5 rounded-lg">
                   <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                   <h4 className="font-bold text-sm leading-none">ELMI AI Assistant</h4>
                   <p className="text-[10px] text-white/60 tracking-wider uppercase mt-1">24/7 Support Ready</p>
                </div>
              </div>
              <button 
                onClick={() => setIsAssistantOpen(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-80 overflow-y-auto p-6 bg-slate-50/50">
              {response || isLoading ? (
                <div className="flex flex-col gap-4">
                   <div className="bg-brand-blue/5 p-4 rounded-2xl border border-brand-blue/5">
                      <p className="text-xs font-bold text-brand-orange mb-2 uppercase tracking-widest">Question:</p>
                      <p className="text-brand-blue text-sm">{input}</p>
                   </div>
                   <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                      <p className="text-xs font-bold text-brand-blue mb-2 uppercase tracking-widest">AI Response:</p>
                      {isLoading ? (
                        <div className="flex gap-1 py-2">
                           <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-bounce" />
                           <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-bounce [animation-delay:0.2s]" />
                           <div className="w-1.5 h-1.5 bg-brand-orange rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      ) : (
                        <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-wrap">{response}</p>
                      )}
                   </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center px-4">
                   <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                      <Bot className="w-8 h-8 text-slate-300" />
                   </div>
                   <h5 className="font-bold text-brand-blue mb-2">How can I help you today?</h5>
                   <p className="text-xs text-brand-grey leading-relaxed">
                      Ask about our services, team, or get an instant quote from our AI core.
                   </p>
                </div>
              )}
            </div>

            <form onSubmit={handleAsk} className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-slate-50 border-none rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-orange/20"
              />
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-brand-orange text-white p-3 rounded-xl hover:scale-105 transition-transform disabled:opacity-50"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-col gap-3">
        {/* Assistant Bubble */}
        <motion.button
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsAssistantOpen(!isAssistantOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${isAssistantOpen ? 'bg-brand-blue text-white rotate-90' : 'bg-white text-brand-blue border border-slate-100'}`}
        >
          {isAssistantOpen ? <X className="w-6 h-6" /> : <Bot className="w-6 h-6" />}
        </motion.button>

        {/* WhatsApp Bubble */}
        <motion.a
          href="https://wa.me/256708020670"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, x: -4 }}
          whileTap={{ scale: 0.9 }}
          className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl"
        >
          <MessageCircle className="w-6 h-6" />
        </motion.a>
      </div>
    </div>
  );
}
