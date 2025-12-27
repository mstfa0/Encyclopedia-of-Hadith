
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HadithCard from './components/HadithCard';
import CategoryGrid from './components/CategoryGrid';
import SixBooks from './components/SixBooks';
import Footer from './components/Footer';
import SearchResults from './components/SearchResults';
import { INITIAL_HADITH } from './constants';
import { SearchResult } from './types';
import { searchHadith } from './services/geminiService';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) return;
    setSearchQuery(query);
    setIsSearching(true);
    try {
      const results = await searchHadith(query);
      setSearchResults(results);
    } catch (error) {
      console.error("Search failed:", error);
    } finally {
      setIsSearching(false);
    }
  };

  const resetSearch = () => {
    setSearchQuery('');
    setSearchResults(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background-dark selection:bg-primary/30">
      <Header onHomeClick={resetSearch} />
      
      <main className="flex-1">
        {!searchResults ? (
          <>
            <Hero onSearch={handleSearch} isSearching={isSearching} />
            
            <section className="py-12 bg-surface-dark border-y border-surface-border">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-2 mb-8">
                  <span className="material-symbols-outlined text-primary">wb_sunny</span>
                  <h2 className="text-2xl font-bold text-white">حديث اليوم</h2>
                </div>
                <HadithCard hadith={INITIAL_HADITH} />
              </div>
            </section>

            <CategoryGrid />
            <SixBooks />
          </>
        ) : (
          <SearchResults 
            query={searchQuery} 
            results={searchResults} 
            onBack={resetSearch}
          />
        )}

        {/* Newsletter Section */}
        <section className="py-16 bg-background-dark border-t border-surface-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">خدمة حديثية يومية</h2>
                <p className="text-text-secondary mb-6 text-lg">اشترك في قائمتنا البريدية لتصلك أحاديث مختارة، وفوائد حديثية، وجديد الأبحاث العلمية.</p>
                <form className="flex gap-2 max-w-md" onSubmit={(e) => e.preventDefault()}>
                  <input 
                    className="flex-1 rounded-lg border border-surface-border bg-surface-dark px-4 py-3 text-white placeholder:text-text-secondary focus:border-primary focus:ring-primary focus:outline-none transition-all" 
                    placeholder="بريدك الإلكتروني" 
                    type="email" 
                  />
                  <button className="rounded-lg bg-primary px-6 py-3 font-bold text-[#111813] hover:bg-primary-hover transition-colors whitespace-nowrap">
                    اشتراك
                  </button>
                </form>
              </div>
              <div className="bg-surface-dark rounded-2xl p-8 border border-surface-border relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                    <h3 className="text-xl font-bold text-white">منهجنا في التوثيق</h3>
                  </div>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    يلتزم موقعنا بأعلى معايير الدقة العلمية في نقل الحديث النبوي، معتمداً على أحكام المتقدمين من أئمة الشأن، مع الاستفادة من التقنيات الحديثة.
                  </p>
                  <a href="#" className="text-primary hover:text-primary-hover text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                    اقرأ المزيد عن منهجنا
                    <span className="material-symbols-outlined text-sm rtl:rotate-180">arrow_forward</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
