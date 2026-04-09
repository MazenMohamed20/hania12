import React from 'react';
import { Calendar, Settings, Sparkles, BookOpen, Heart, User } from 'lucide-react';
import { Screen } from '../types';
import { motion } from 'motion/react';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onScreenChange: (screen: Screen) => void;
}

export default function Layout({ children, currentScreen, onScreenChange }: LayoutProps) {
  return (
    <div className="min-h-screen bg-surface selection:bg-primary-container selection:text-on-primary-container">
      {/* Main Content */}
      <main className="pt-8 pb-32 light-ray min-h-screen">
        <div className="max-w-2xl mx-auto px-6">
          {children}
        </div>
      </main>
    </div>
  );
}

interface NavButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  isPrimary?: boolean;
}

function NavButton({ active, onClick, icon, isPrimary }: NavButtonProps) {
  if (isPrimary) {
    return (
      <button 
        onClick={onClick}
        className={`p-3 rounded-full transition-all duration-300 ${
          active 
            ? 'bg-gradient-to-br from-primary to-primary-container text-white shadow-lg shadow-primary/20 scale-110' 
            : 'text-secondary hover:bg-surface-container-low'
        }`}
      >
        {icon}
      </button>
    );
  }

  return (
    <button 
      onClick={onClick}
      className={`p-3 rounded-full transition-all duration-300 ${
        active 
          ? 'text-primary scale-110' 
          : 'text-secondary hover:bg-surface-container-low'
      }`}
    >
      {icon}
    </button>
  );
}
