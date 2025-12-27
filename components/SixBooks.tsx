
import React from 'react';
import { SIX_BOOKS } from '../constants';

const SixBooks: React.FC = () => {
  return (
    <section className="py-16 bg-surface-dark relative overflow-hidden border-t border-surface-border">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 blur-3xl rounded-full pointer-events-none"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center gap-2 mb-8">
          <span className="material-symbols-outlined text-primary">auto_stories</span>
          <h2 className="text-2xl font-bold text-white">الكتب الستة</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {SIX_BOOKS.map((book, idx) => (
            <a key={idx} className="flex flex-col items-center group perspective-1000" href="#">
              <div className="w-full aspect-[3/4] rounded-lg bg-background-dark border border-surface-border group-hover:border-primary/50 transition-all duration-500 shadow-xl flex items-center justify-center mb-4 relative overflow-hidden group-hover:rotate-y-12">
                <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent"></div>
                <div className="absolute top-0 right-0 bottom-0 w-1 bg-white/10"></div>
                <div className="w-[85%] h-[85%] border border-white/10 rounded-sm flex items-center justify-center text-center p-4">
                  <span className="font-hadith text-xl text-white/90 leading-loose">{book.title}</span>
                </div>
              </div>
              <span className="text-sm font-medium text-text-secondary group-hover:text-white transition-colors">{book.author}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixBooks;
