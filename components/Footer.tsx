
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-surface-dark border-t border-surface-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <a className="flex items-center gap-3 mb-4 group" href="#">
              <div className="relative flex size-10 items-center justify-center">
                <svg className="h-full w-full text-primary transition-transform duration-500 group-hover:rotate-45" fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <rect className="fill-surface-dark/50 stroke-current" height="60" rx="4" stroke-width="3" width="60" x="20" y="20"></rect>
                  <rect className="fill-surface-dark/50 stroke-current" height="60" rx="4" stroke-width="3" transform="rotate(45 50 50)" width="60" x="20" y="20"></rect>
                </svg>
                <span className="material-symbols-outlined absolute text-base font-bold text-white">auto_stories</span>
              </div>
              <span className="text-xl font-bold text-white font-hadith">موسوعة الحديث</span>
            </a>
            <p className="text-sm text-text-secondary max-w-xs leading-relaxed">
              مشروع وقفي غير ربحي يهدف لخدمة السنة النبوية المطهرة وتقريبها للناس بأحدث الوسائل التقنية العصرية.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">الأقسام</h3>
            <ul className="space-y-3">
              <li><a className="text-sm leading-6 text-text-secondary hover:text-white transition-colors" href="#">الرئيسية</a></li>
              <li><a className="text-sm leading-6 text-text-secondary hover:text-white transition-colors" href="#">المتون</a></li>
              <li><a className="text-sm leading-6 text-text-secondary hover:text-white transition-colors" href="#">الأسانيد</a></li>
              <li><a className="text-sm leading-6 text-text-secondary hover:text-white transition-colors" href="#">الرواة</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">المساعدة</h3>
            <ul className="space-y-3">
              <li><a className="text-sm leading-6 text-text-secondary hover:text-white transition-colors" href="#">الأسئلة الشائعة</a></li>
              <li><a className="text-sm leading-6 text-text-secondary hover:text-white transition-colors" href="#">طريقة البحث</a></li>
              <li><a className="text-sm leading-6 text-text-secondary hover:text-white transition-colors" href="#">اتصل بنا</a></li>
              <li><a className="text-sm leading-6 text-text-secondary hover:text-white transition-colors" href="#">الإبلاغ عن خطأ</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-white mb-4">تابعنا</h3>
            <div className="flex gap-4">
              <a className="text-text-secondary hover:text-primary transition-all hover:scale-125" href="#">
                <span className="text-xl">𝕏</span>
              </a>
              <a className="text-text-secondary hover:text-primary transition-all hover:scale-125" href="#">
                <span className="text-xl">fb</span>
              </a>
              <a className="text-text-secondary hover:text-primary transition-all hover:scale-125" href="#">
                <span className="text-xl">in</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-surface-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-secondary">
            © {new Date().getFullYear()} موسوعة الحديث النبوي. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-6">
            <a className="text-xs text-text-secondary hover:text-white transition-colors" href="#">سياسة الخصوصية</a>
            <a className="text-xs text-text-secondary hover:text-white transition-colors" href="#">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
