import React from 'react';
import { Compass, BookMarked, User } from 'lucide-react';

interface NavigationProps {
  currentTab: 'home' | 'records' | 'about';
  onSelectTab: (tab: 'home' | 'records' | 'about') => void;
  isDarkTheme?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentTab,
  onSelectTab,
  isDarkTheme = false,
}) => {
  return (
    <nav
      className={`md:hidden fixed bottom-0 left-0 right-0 z-30 border-t backdrop-blur-lg transition-colors duration-300 pb-[env(safe-area-inset-bottom,12px)] ${
        isDarkTheme
          ? 'bg-jiuhong-dark/95 border-amber-900/40 text-amber-200'
          : 'bg-[#F7F3EB]/95 border-[#E3DCD1]/80 text-mose'
      }`}
    >
      <div className="grid grid-cols-3 h-14 max-w-sm mx-auto">
        <button
          onClick={() => onSelectTab('home')}
          className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-95 ${
            currentTab === 'home'
              ? isDarkTheme
                ? 'text-amber-200 font-medium'
                : 'text-zhusha font-medium'
              : isDarkTheme
              ? 'text-amber-200/40'
              : 'text-mose-muted hover:text-mose'
          }`}
        >
          <Compass size={19} strokeWidth={currentTab === 'home' ? 2 : 1.5} />
          <span className="text-[11px] font-sans">问境</span>
        </button>

        <button
          onClick={() => onSelectTab('records')}
          className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-95 ${
            currentTab === 'records'
              ? isDarkTheme
                ? 'text-amber-200 font-medium'
                : 'text-zhusha font-medium'
              : isDarkTheme
              ? 'text-amber-200/40'
              : 'text-mose-muted hover:text-mose'
          }`}
        >
          <BookMarked size={19} strokeWidth={currentTab === 'records' ? 2 : 1.5} />
          <span className="text-[11px] font-sans">记录</span>
        </button>

        <button
          onClick={() => onSelectTab('about')}
          className={`flex flex-col items-center justify-center gap-1 transition-all active:scale-95 ${
            currentTab === 'about'
              ? isDarkTheme
                ? 'text-amber-200 font-medium'
                : 'text-zhusha font-medium'
              : isDarkTheme
              ? 'text-amber-200/40'
              : 'text-mose-muted hover:text-mose'
          }`}
        >
          <User size={19} strokeWidth={currentTab === 'about' ? 2 : 1.5} />
          <span className="text-[11px] font-sans">关于</span>
        </button>
      </div>
    </nav>
  );
};
