import React from 'react';
import { Sparkles, Heart, Share2, Edit3, Droplets, Cloud, Wind, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { DUAS } from '../constants';

interface DuasProps {
  onBack: () => void;
}

export default function Duas({ onBack }: DuasProps) {
  const featuredDua = DUAS.find(d => d.isFeatured);
  const otherDuas = DUAS.filter(d => !d.isFeatured);

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

      {/* Hero Section */}
      <section className="text-center space-y-4">
        <div className="relative inline-block">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-primary-container/10 blur-2xl rounded-full" />
          <h2 className="text-4xl md:text-5xl font-serif text-primary arabic-serif font-bold relative">أدعية للمتوفاة</h2>
        </div>
        <p className="text-on-surface-variant/80 text-lg leading-relaxed arabic-serif">هنيّة (Haneia) — كلمات من القلب تغشى روحها بالسكينة</p>
      </section>

      {/* Featured Reflection Card */}
      {featuredDua && (
        <section className="p-8 rounded-3xl bg-surface-container-low relative overflow-hidden group border border-outline-variant/10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110" />
          <div className="relative z-10 space-y-6">
            <Sparkles size={24} className="text-primary" />
            <p className="arabic-serif text-2xl text-primary-fixed-variant leading-loose italic">
              "{featuredDua.text}"
            </p>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-outline-variant/30" />
              <span className="text-sm tracking-widest text-secondary uppercase">آمين</span>
            </div>
          </div>
        </section>
      )}

      {/* List Section */}
      <section className="space-y-6">
        {otherDuas.map((dua, index) => (
          <div 
            key={dua.id}
            className="p-6 rounded-2xl bg-surface-container-lowest shadow-sm border border-outline-variant/5 transition-all duration-300 hover:bg-surface-container-low"
          >
            <div className="flex items-start gap-5">
              <div className="w-10 h-10 flex-shrink-0 rounded-full bg-secondary-container/30 flex items-center justify-center text-secondary">
                {getIconForIndex(index)}
              </div>
              <div className="flex-1 space-y-2">
                <p className="arabic-serif text-xl leading-relaxed text-on-surface">{dua.text}</p>
                {dua.description && (
                  <p className="text-sm text-on-surface-variant/60 arabic-serif">{dua.description}</p>
                )}
              </div>
              <button className="text-outline-variant hover:text-primary transition-colors">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* Create Custom CTA */}
      <section className="pt-8">
        <button className="w-full py-5 px-8 rounded-full bg-gradient-to-br from-primary to-primary-container text-white font-semibold text-lg flex items-center justify-center gap-3 transition-transform active:scale-[0.98] shadow-xl shadow-primary/15">
          <Edit3 size={20} />
          <span className="arabic-serif">اكتب دعاءً خاصاً</span>
        </button>
      </section>
    </motion.div>
  );
}

function getIconForIndex(index: number) {
  const icons = [
    <Heart size={20} />,
    <Wind size={20} />,
    <Droplets size={20} />,
    <Cloud size={20} />
  ];
  return icons[index % icons.length];
}
