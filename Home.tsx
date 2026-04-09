import React, { useState } from 'react';
import { Heart, BookOpen, RefreshCw, Calendar as CalendarIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Screen } from '../types';
import { DUAS } from '../constants';

interface HomeProps {
  onNavigate: (screen: Screen) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  const featuredDuas = DUAS.filter(d => d.isFeatured);
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const today = new Date();
  const isAnniversary = today.getMonth() === 3 && today.getDate() === 6; // April is month 3 (0-indexed)

  const refreshDua = () => {
    setFeaturedIndex((prev) => (prev + 1) % featuredDuas.length);
  };

  const currentDua = featuredDuas[featuredIndex];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex flex-col items-center text-center space-y-12"
    >
      {/* Identity & Date */}
      <section className="space-y-4">
        <div className="relative inline-block">
          <h2 className="text-7xl font-extrabold text-primary glow-soft arabic-serif">هنيّة</h2>
          <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary-container/10 rounded-full blur-2xl" />
        </div>
        <div className="space-y-2">
          <p className="text-secondary font-medium tracking-widest arabic-serif">12 رمضان 1447 هـ</p>
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold arabic-serif transition-all ${
            isAnniversary 
              ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
              : 'bg-primary/5 text-primary border border-primary/10'
          }`}>
            <CalendarIcon size={14} />
            <span>الذكرى السنوية: 6 أبريل</span>
            {isAnniversary && <span className="ml-1">✨</span>}
          </div>
        </div>
        <div className="mx-auto w-16 h-px bg-outline-variant/30" />
      </section>

      {/* Smart Context Banner */}
      <section className="w-full max-w-md">
        <div className="bg-surface-container-low rounded-lg p-5 flex items-center gap-4 border border-outline-variant/10">
          <div className="w-10 h-10 rounded-full bg-primary-container/20 flex items-center justify-center text-xl">
            🌙
          </div>
          <p className="text-on-surface font-medium arabic-serif">اليوم يوم مبارك، لا تنسَ الدعاء لها</p>
        </div>
      </section>

      {/* Main Dua Display */}
      <section className="relative py-8 px-4 min-h-[200px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentDua.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <span className="absolute -top-12 -right-8 text-8xl text-primary-container/10 font-serif leading-none">“</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-on-surface leading-relaxed arabic-serif px-4">
              {currentDua.text} 🤲
            </h3>
            <span className="absolute -bottom-12 -left-8 text-8xl text-primary-container/10 font-serif leading-none">”</span>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Primary Action Buttons */}
      <section className="w-full max-w-md space-y-4">
        <button 
          onClick={() => onNavigate('duas')}
          className="w-full py-5 rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-bold text-lg shadow-xl shadow-primary/15 hover:opacity-90 transition-all active:scale-[0.98] flex items-center justify-center gap-3"
        >
          <Heart size={20} fill="currentColor" />
          <span className="arabic-serif">ادعي لها</span>
        </button>
        <button 
          onClick={() => onNavigate('quran')}
          className="w-full py-5 rounded-full bg-surface-container-lowest text-primary font-bold text-lg border border-outline-variant/20 shadow-sm hover:bg-surface-container-low transition-all active:scale-[0.98] flex items-center justify-center gap-3"
        >
          <BookOpen size={20} />
          <span className="arabic-serif">اقرأ قرآن</span>
        </button>
      </section>

      {/* Secondary Action */}
      <button 
        onClick={refreshDua}
        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors arabic-serif group"
      >
        <RefreshCw size={18} className="group-active:rotate-180 transition-transform duration-500" />
        دعاء جديد
      </button>
    </motion.div>
  );
}
