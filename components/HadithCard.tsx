
import React from 'react';
import { Hadith } from '../types';

interface HadithCardProps {
  hadith: Hadith;
}

const HadithCard: React.FC<HadithCardProps> = ({ hadith }) => {
  return (
    <div className="rounded-2xl bg-background-dark p-8 border border-surface-border relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
      <div className="flex flex-col lg:flex-row gap-8 items-start relative z-10">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
              hadith.grade === 'صحيح' ? 'bg-primary/10 text-primary border-primary/20' : 
              hadith.grade === 'حسن' ? 'bg-blue-500/10 text-blue-400 border-blue-500/20' : 
              'bg-red-500/10 text-red-400 border-red-500/20'
            }`}>
              {hadith.grade}
            </span>
            <span className="text-text-secondary text-sm">{hadith.source}</span>
          </div>
          <blockquote className="mb-6">
            <p className="font-hadith text-2xl sm:text-3xl leading-relaxed text-white text-right" dir="rtl">
              {hadith.text}
            </p>
          </blockquote>
          
          <div className="flex flex-wrap gap-4 pt-6 border-t border-surface-border/50">
            <button className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg">share</span>
              مشاركة
            </button>
            <button 
              onClick={() => navigator.clipboard.writeText(hadith.text)}
              className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-lg">content_copy</span>
              نسخ النص
            </button>
            <button className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-white transition-colors">
              <span className="material-symbols-outlined text-lg">library_books</span>
              التخريج الكامل
            </button>
          </div>
        </div>
        <div className="hidden lg:block w-48 h-48 opacity-80 shrink-0">
          <img 
            alt="Islamic decoration" 
            className="w-full h-full object-cover rounded-lg mix-blend-overlay opacity-60 grayscale group-hover:grayscale-0 transition-all duration-700 hover:scale-105" 
            src="https://picsum.photos/seed/islamic/200/200" 
          />
        </div>
      </div>
    </div>
  );
};

export default HadithCard;
