import React from 'react';
import { BookOpen, Music, SkipBack, Play, SkipForward, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { SURAHS } from '../constants';

interface QuranProps {
  onBack: () => void;
}

export default function Quran({ onBack }: QuranProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12 pb-20"
    >
      {/* Back Button */}
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-secondary hover:text-primary transition-colors arabic-serif"
      >
        <ArrowRight size={20} />
        رجوع
      </button>

      {/* Hero Branding */}
      <section className="text-center space-y-2">
        <h2 className="text-4xl md:text-5xl font-serif text-primary arabic-serif">القرآن الكريم</h2>
        <p className="text-sm tracking-widest text-outline uppercase opacity-70">The Holy Quran</p>
      </section>

      {/* Surahs List */}
      <div className="grid grid-cols-1 gap-6">
        {SURAHS.map((surah) => (
          <div 
            key={surah.id}
            className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10 relative overflow-hidden group"
          >
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="flex justify-between items-center mb-8 relative z-10">
              <span className="text-primary font-bold tracking-widest">{surah.number.toString().padStart(3, '0')}</span>
              <h3 className="text-3xl font-bold text-on-surface arabic-serif">{surah.name}</h3>
              <BookOpen size={20} className="text-primary-container" />
            </div>

            <div className="text-2xl md:text-3xl text-center text-on-surface-variant arabic-serif leading-loose relative z-10">
              {surah.text}
            </div>
          </div>
        ))}
      </div>

      {/* Audio Player */}
      <div className="fixed bottom-24 left-0 right-0 z-40 px-6">
        <div className="max-w-lg mx-auto glass rounded-2xl p-4 shadow-xl shadow-primary/5">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white shrink-0">
              <Music size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-bold text-sm text-on-surface truncate arabic-serif">سورة الفاتحة</h4>
              <p className="text-[10px] text-secondary tracking-widest uppercase">Mishary Rashid Alafasy</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 text-secondary hover:text-primary transition-colors">
                <SkipBack size={20} />
              </button>
              <button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                <Play size={20} fill="currentColor" />
              </button>
              <button className="p-2 text-secondary hover:text-primary transition-colors">
                <SkipForward size={20} />
              </button>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-4 space-y-1">
            <div className="h-1 w-full bg-surface-container-high rounded-full overflow-hidden">
              <div className="h-full w-1/3 bg-gradient-to-r from-primary to-primary-container rounded-full" />
            </div>
            <div className="flex justify-between text-[9px] text-secondary font-medium">
              <span>0:45</span>
              <span>2:15</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
