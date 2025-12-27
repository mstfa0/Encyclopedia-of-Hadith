
import React from 'react';

interface HeaderProps {
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onHomeClick }) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-background-dark/95 backdrop-blur supports-[backdrop-filter]:bg-background-dark/60">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <button onClick={onHomeClick} className="group flex items-center gap-4 text-right">
          <div className="relative flex size-14 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl transition-opacity duration-500 group-hover:opacity-100 opacity-50"></div>
            <svg className="h-full w-full text-primary drop-shadow-lg transition-transform duration-700 ease-in-out group-hover:rotate-45" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect className="fill-surface-dark stroke-current" height="60" rx="4" stroke-width="2" width="60" x="20" y="20"></rect>
              <rect className="fill-surface-dark/50 stroke-current" height="60" rx="4" stroke-width="2" transform="rotate(45 50 50)" width="60" x="20" y="20"></rect>
              <circle className="fill-current" cx="50" cy="50" r="5"></circle>
            </svg>
            <span className="material-symbols-outlined absolute text-xl font-bold text-white drop-shadow-md">auto_stories</span>
          </div>
          <div className="hidden flex-col items-start sm:flex">
            <h1 className="font-hadith text-3xl font-bold leading-none tracking-wide text-white transition-all group-hover:text-primary">
              موسوعة الحديث
            </h1>
            <div className="mt-1 flex items-center gap-1">
              <span className="h-0.5 w-12 bg-primary/40 rounded-full"></span>
              <span className="size-1 bg-primary/80 rounded-full"></span>
            </div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-8">
          <button onClick={onHomeClick} className="text-sm font-medium text-white hover:text-primary transition-colors">الرئيسية</button>
          <a className="text-sm font-medium text-text-secondary hover:text-white transition-colors" href="#">كتب الحديث</a>
          <a className="text-sm font-medium text-text-secondary hover:text-white transition-colors" href="#">علماء الحديث</a>
          <a className="text-sm font-medium text-text-secondary hover:text-white transition-colors" href="#">قاعدة البيانات</a>
          <a className="text-sm font-medium text-text-secondary hover:text-white transition-colors" href="#">من نحن</a>
        </nav>

        <div className="flex items-center gap-4">
          <button className="rounded-lg p-2 text-text-secondary hover:bg-surface-border hover:text-white md:hidden">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <button className="hidden sm:flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-bold text-[#111813] transition-all hover:bg-primary-hover hover:scale-105 active:scale-95">
            تسجيل الدخول
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
