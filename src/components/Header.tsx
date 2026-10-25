import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { playChimeSound } from '../utils/soundEngine';

interface HeaderProps {
  currentTab: 'home' | 'records' | 'about';
  onSelectTab: (tab: 'home' | 'records' | 'about') => void;
  soundEnabled: boolean;
  onToggleSound: () => void;
  isDarkTheme?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  soundEnabled,
  onToggleSound,
  isDarkTheme = false,
}) => {
  const handleSoundClick = () => {
    onToggleSound();
    if (!soundEnabled) {
      playChimeSound('subtle');
    }
  };

  return (
    <header
      className={`w-full border-b transition-colors duration-300 ${
        isDarkTheme
          ? 'bg-jiuhong-dark/95 border-amber-900/30 text-amber-100'
          : 'bg-[#F7F3EB]/95 backdrop-blur-md border-[#E3DCD1]/70 text-mose'
      } sticky top-0 z-40`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* 左侧：品牌 Logo + 问境 + 朱砂印章【境】 */}
        <button
          onClick={() => onSelectTab('home')}
          className="flex items-center gap-2.5 group text-left focus:outline-none"
        >
          {/* 朱砂小印章 Logo */}
          <div
            className={`w-8 h-8 rounded-lg flex items-center justify-center font-serif text-xs font-bold transition-transform group-hover:scale-105 shadow-sm ${
              isDarkTheme
                ? 'bg-zhusha border border-amber-300/30 text-amber-50'
                : 'bg-zhusha text-white'
            }`}
          >
            <span className="leading-none">境</span>
          </div>

          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span
                className={`font-serif text-lg tracking-wider font-semibold ${
                  isDarkTheme ? 'text-amber-100' : 'text-mose'
                }`}
              >
                问境
              </span>
              <span
                className={`text-[9px] tracking-[0.2em] uppercase font-sans font-medium ${
                  isDarkTheme ? 'text-yajin/80' : 'text-mose-muted'
                }`}
              >
                WENJING
              </span>
            </div>
          </div>
        </button>

        {/* 桌面端导航项 */}
        <nav className="hidden md:flex items-center gap-1.5">
          <button
            onClick={() => onSelectTab('home')}
            className={`px-4 py-1.5 rounded-full text-xs font-serif transition-all ${
              currentTab === 'home'
                ? isDarkTheme
                  ? 'bg-white/10 text-amber-100 font-semibold'
                  : 'bg-white text-zhusha shadow-sm font-semibold'
                : isDarkTheme
                ? 'text-amber-200/60 hover:text-amber-100'
                : 'text-mose-muted hover:text-mose'
            }`}
          >
            问境
          </button>
          <button
            onClick={() => onSelectTab('records')}
            className={`px-4 py-1.5 rounded-full text-xs font-serif transition-all ${
              currentTab === 'records'
                ? isDarkTheme
                  ? 'bg-white/10 text-amber-100 font-semibold'
                  : 'bg-white text-zhusha shadow-sm font-semibold'
                : isDarkTheme
                ? 'text-amber-200/60 hover:text-amber-100'
                : 'text-mose-muted hover:text-mose'
            }`}
          >
            我的记录
          </button>
          <button
            onClick={() => onSelectTab('about')}
            className={`px-4 py-1.5 rounded-full text-xs font-serif transition-all ${
              currentTab === 'about'
                ? isDarkTheme
                  ? 'bg-white/10 text-amber-100 font-semibold'
                  : 'bg-white text-zhusha shadow-sm font-semibold'
                : isDarkTheme
                ? 'text-amber-200/60 hover:text-amber-100'
                : 'text-mose-muted hover:text-mose'
            }`}
          >
            关于
          </button>
        </nav>

        {/* 右侧：声音控制开关 */}
        <button
          onClick={handleSoundClick}
          className={`p-2 rounded-full border transition-all ${
            soundEnabled
              ? isDarkTheme
                ? 'border-amber-400/40 bg-amber-500/10 text-amber-200'
                : 'border-zhusha/40 bg-zhusha/5 text-zhusha'
              : isDarkTheme
              ? 'border-white/10 text-amber-200/40 hover:text-amber-200'
              : 'border-[#E3DCD1] text-mose-muted hover:text-mose hover:border-xuan-400'
          }`}
          title={soundEnabled ? '音效已开启（轻柔磬音）' : '音效已关闭'}
          aria-label={soundEnabled ? '关闭声音' : '开启声音'}
        >
          {soundEnabled ? (
            <Volume2 size={16} strokeWidth={1.5} className="animate-pulse" />
          ) : (
            <VolumeX size={16} strokeWidth={1.5} />
          )}
        </button>
      </div>
    </header>
  );
};
