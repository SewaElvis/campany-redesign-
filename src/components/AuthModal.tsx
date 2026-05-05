import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Mail, Lock, User, Sparkles, Chrome } from 'lucide-react';
import { useAuth } from '../lib/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { loginWithGoogle } = useAuth();
  const [isLogin, setIsLogin] = React.useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-brand-blue/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white w-full max-w-md rounded-[3rem] shadow-4xl overflow-hidden relative"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-slate-400 hover:text-brand-blue transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-10">
              <div className="text-center mb-10">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-brand-orange" />
                </div>
                <h3 className="text-3xl font-display font-bold text-brand-blue">
                  {isLogin ? 'Welcome Back' : 'Create Account'}
                </h3>
                <p className="text-slate-400 mt-2 text-sm">
                  Join ELMI Tech Space and grow your digital presence.
                </p>
              </div>

              <div className="space-y-4">
                {!isLogin && (
                  <div className="relative">
                    <User className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                    <input 
                      type="text" 
                      placeholder="Full Name" 
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all text-sm"
                    />
                  </div>
                )}
                <div className="relative">
                  <Mail className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  <input 
                    type="email" 
                    placeholder="Email Address" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all text-sm"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
                  <input 
                    type="password" 
                    placeholder="Password" 
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-12 pr-6 outline-none focus:ring-2 focus:ring-brand-orange/20 transition-all text-sm"
                  />
                </div>

                <button className="w-full bg-brand-blue text-white py-4 rounded-2xl font-bold shadow-xl shadow-brand-blue/20 hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 mt-4">
                  {isLogin ? 'Sign In' : 'Sign Up'}
                </button>

                <div className="relative my-8">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-100"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-white px-4 text-slate-400 tracking-widest font-bold">Or continue with</span>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    loginWithGoogle();
                    onClose();
                  }}
                  className="w-full border border-slate-200 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors"
                >
                  <Chrome className="w-5 h-5 text-brand-blue" />
                  Google
                </button>
              </div>

              <p className="text-center mt-8 text-sm text-slate-400">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button 
                  onClick={() => setIsLogin(!isLogin)}
                  className="ml-2 text-brand-orange font-bold hover:underline"
                >
                  {isLogin ? 'Sign Up Free' : 'Sign In'}
                </button>
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
