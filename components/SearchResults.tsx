
import React from 'react';
import { SearchResult } from '../types';
import HadithCard from './HadithCard';

interface SearchResultsProps {
  query: string;
  results: SearchResult;
  onBack: () => void;
}

const SearchResults: React.FC<SearchResultsProps> = ({ query, results, onBack }) => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center gap-2 text-primary hover:text-primary-hover font-bold transition-all group"
      >
        <span className="material-symbols-outlined rtl:rotate-180 group-hover:translate-x-1 transition-transform">arrow_back</span>
        العودة للرئيسية
      </button>

      <div className="mb-12">
        <h2 className="text-3xl font-black text-white mb-4">
          نتائج البحث عن: <span className="text-primary">"{query}"</span>
        </h2>
        <div className="bg-surface-dark border border-surface-border rounded-2xl p-6 text-text-secondary leading-relaxed shadow-lg">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <span className="material-symbols-outlined">auto_awesome</span>
            <span className="font-bold">تحليل الذكاء الاصطناعي</span>
          </div>
          <p className="text-lg text-gray-200">
            {results.explanation}
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="material-symbols-outlined text-primary">list_alt</span>
          <h3 className="text-xl font-bold text-white">الأحاديث ذات الصلة</h3>
        </div>
        {results.hadiths.length > 0 ? (
          results.hadiths.map((h, idx) => (
            <HadithCard key={idx} hadith={h} />
          ))
        ) : (
          <div className="text-center py-20 bg-surface-dark rounded-2xl border border-dashed border-surface-border">
            <span className="material-symbols-outlined text-6xl text-text-secondary/20 mb-4">search_off</span>
            <p className="text-text-secondary text-lg">لم يتم العثور على أحاديث مطابقة بشكل دقيق.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
