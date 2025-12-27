
import React from 'react';
import { CATEGORIES } from '../constants';

const CategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-white">الأقسام الرئيسية</h2>
          <a className="text-sm font-medium text-primary hover:text-primary-hover flex items-center gap-1 group" href="#">
            عرض الكل
            <span className="material-symbols-outlined text-sm rtl:rotate-180 group-hover:translate-x-[-4px] transition-transform">arrow_forward</span>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat) => (
            <a 
              key={cat.id}
              className="group relative flex flex-col justify-end overflow-hidden rounded-2xl bg-surface-dark p-6 h-72 hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-primary/10" 
              href="#"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10 transition-opacity group-hover:opacity-90"></div>
              <img 
                alt={cat.title} 
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-50" 
                src={cat.imageUrl} 
              />
              <div className="relative z-20">
                <div className={`mb-3 inline-flex rounded-lg ${cat.color} p-3 text-white backdrop-blur-md shadow-inner transition-transform group-hover:scale-110`}>
                  <span className="material-symbols-outlined">{cat.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{cat.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
