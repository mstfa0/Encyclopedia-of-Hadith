
import React, { useState } from 'react';

interface HeroProps {
  onSearch: (query: string) => void;
  isSearching: boolean;
}

const Hero: React.FC<HeroProps> = ({ onSearch, isSearching }) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(inputValue);
  };

  return (
    <section className="relative overflow-hidden bg-background-dark py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 islamic-pattern opacity-100"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background-dark/50 via-background-dark/80 to-background-dark"></div>
      
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="mx-auto max-w-4xl font-display text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 leading-tight">
          ميراث النبوة <span className="text-primary drop-shadow-[0_0_15px_rgba(17,212,82,0.3)]">بين يديك</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-text-secondary mb-10 leading-relaxed">
          منصة رقمية شاملة تجمع صحيح السنة النبوية وتراجم الرواة وعلوم الحديث في واجهة عصرية سهلة الاستخدام للباحثين وطلبة العلم.
        </p>
        
        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSubmit} className="relative flex flex-col sm:flex-row items-center gap-2 rounded-xl bg-surface-dark p-2 ring-1 ring-surface-border shadow-2xl focus-within:ring-primary transition-all">
            <div className="relative flex-1 w-full">
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <span className="material-symbols-outlined text-text-secondary">search</span>
              </div>
              <input 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="block w-full rounded-lg border-0 bg-transparent py-3 pr-10 pl-4 text-white placeholder:text-text-secondary focus:ring-0 sm:text-sm sm:leading-6" 
                placeholder="ابحث عن حديث، راوٍ، أو كتاب..." 
                type="text"
              />
            </div>
            <div className="flex w-full sm:w-auto gap-2">
              <select className="h-11 w-full sm:w-auto rounded-lg border-0 bg-surface-border py-0 pl-8 pr-3 text-sm text-white focus:ring-2 focus:ring-primary">
                <option>المتون</option>
                <option>الأسانيد</option>
                <option>الرواة</option>
              </select>
              <button 
                type="submit"
                disabled={isSearching}
                className="h-11 w-full sm:w-auto px-8 rounded-lg bg-primary font-bold text-[#111813] hover:bg-primary-hover transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSearching ? (
                  <span className="size-4 border-2 border-[#111813]/30 border-t-[#111813] rounded-full animate-spin"></span>
                ) : null}
                بحث
              </button>
            </div>
          </form>
          
          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm text-text-secondary">
            <span>الأكثر بحثاً:</span>
            <button onClick={() => onSearch('صحيح البخاري')} className="hover:text-primary underline decoration-primary/30 underline-offset-4 transition-colors">صحيح البخاري</button>
            <span className="text-surface-border">•</span>
            <button onClick={() => onSearch('رياض الصالحين')} className="hover:text-primary underline decoration-primary/30 underline-offset-4 transition-colors">رياض الصالحين</button>
            <span className="text-surface-border">•</span>
            <button onClick={() => onSearch('أذكار الصباح')} className="hover:text-primary underline decoration-primary/30 underline-offset-4 transition-colors">أذكار الصباح</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
