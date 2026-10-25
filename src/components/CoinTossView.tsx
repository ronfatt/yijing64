import React, { useState } from 'react';
import { playChimeSound } from '../utils/soundEngine';
import { YaoValue } from '../types/iching';

interface CoinTossViewProps {
  currentStep: number; // 0..5 (正在投掷第几爻)
  onTossComplete: (step: number, val: YaoValue) => void;
  isAutoRunning?: boolean;
}

/**
 * 东方互动掷铜钱仪式感组件 (Interactive Coin Toss)
 * 模拟三枚古铜钱在青铜晷盘中的翻转落盘。
 * 乾隆通宝/开元通宝古币质感，正面（字=3），背面（背=2）。
 */
export const CoinTossView: React.FC<CoinTossViewProps> = ({
  currentStep,
  onTossComplete,
  isAutoRunning = false,
}) => {
  const [isFlipping, setIsFlipping] = useState<boolean>(false);
  const [coins, setCoins] = useState<[2 | 3, 2 | 3, 2 | 3]>([3, 3, 2]);
  const [currentYaoResult, setCurrentYaoResult] = useState<YaoValue | null>(null);

  const yaoNames = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];

  const handleToss = () => {
    if (isFlipping) return;
    setIsFlipping(true);
    setCurrentYaoResult(null);

    // 播放起铜钱摇动微鸣
    playChimeSound('subtle');

    // 模拟三枚铜钱翻转随机结果
    setTimeout(() => {
      const c1: 2 | 3 = Math.random() < 0.5 ? 2 : 3;
      const c2: 2 | 3 = Math.random() < 0.5 ? 2 : 3;
      const c3: 2 | 3 = Math.random() < 0.5 ? 2 : 3;
      const sum = (c1 + c2 + c3) as YaoValue;

      setCoins([c1, c2, c3]);
      setCurrentYaoResult(sum);
      setIsFlipping(false);

      // 掷下铜钱清越回响
      playChimeSound(sum === 6 || sum === 9 ? 'bell' : 'subtle');

      onTossComplete(currentStep, sum);
    }, 900);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-5 select-none">
      {/* 步骤提示：正在起第几爻 */}
      <div className="text-center space-y-1">
        <span className="text-xs font-serif text-amber-200/80 tracking-widest">
          第 {currentStep + 1} 爻 · {yaoNames[currentStep]}
        </span>
        <p className="text-[11px] font-sans text-yajin/70">
          轻触铜钱掷出，由下自上推演卦象
        </p>
      </div>

      {/* 三枚古钱盘落台 */}
      <div
        onClick={handleToss}
        className="relative w-64 h-36 rounded-2xl bg-gradient-to-b from-[#2A1115]/90 to-[#1F0A0E] border border-amber-300/30 shadow-jade flex items-center justify-center gap-4 cursor-pointer p-4 group active:scale-95 transition-all overflow-hidden"
      >
        {/* 背景金纹 */}
        <div className="absolute inset-0 bg-radial-vignette opacity-50 pointer-events-none" />

        {/* 三枚铜钱 */}
        {coins.map((val, idx) => {
          const isYang = val === 3; // 字为3 (正面/阳)，背为2 (背面/阴)
          return (
            <div
              key={idx}
              className={`relative w-14 h-14 rounded-full border-2 border-amber-200/70 bg-gradient-to-tr from-[#94763C] via-[#D5BE8A] to-[#F1E4C3] shadow-lg flex items-center justify-center transition-all duration-700 ${
                isFlipping
                  ? 'rotate-[720deg] scale-110 -translate-y-4'
                  : 'rotate-0 scale-100 translate-y-0'
              }`}
              style={{
                transitionDelay: `${idx * 120}ms`,
              }}
            >
              {/* 方孔圆钱中央方孔 */}
              <div className="w-4 h-4 rounded-[1.5px] border border-amber-900/60 bg-[#2A1115] shadow-inner flex items-center justify-center" />

              {/* 铜钱字样标记 */}
              <span className="absolute font-serif text-[10px] text-amber-950 font-bold top-1">
                {isYang ? '乾' : '坤'}
              </span>
              <span className="absolute font-serif text-[9px] text-amber-950/80 bottom-1">
                {isYang ? '字·三' : '背·二'}
              </span>
            </div>
          );
        })}
      </div>

      {/* 投掷结果提示 */}
      <div className="h-6 flex items-center justify-center">
        {currentYaoResult && (
          <div className="text-xs font-serif animate-fade-in text-amber-100 flex items-center gap-2">
            <span>三钱总和：<strong className="text-rose-300 font-mono text-sm">{currentYaoResult}</strong></span>
            <span className="text-yajin">
              {currentYaoResult === 6 && '（老阴 · 变阳 ⚋→⚊）'}
              {currentYaoResult === 7 && '（少阳 · 阳爻不变 ⚊）'}
              {currentYaoResult === 8 && '（少阴 · 阴爻不变 ⚋）'}
              {currentYaoResult === 9 && '（老阳 · 变阴 ⚊→⚋）'}
            </span>
          </div>
        )}
      </div>

      {/* 按钮 */}
      <button
        type="button"
        onClick={handleToss}
        disabled={isFlipping || isAutoRunning}
        className="px-6 py-2.5 rounded-full border border-yajin/60 bg-amber-500/10 text-amber-100 hover:bg-amber-500/20 active:scale-95 text-xs font-serif tracking-widest transition-all disabled:opacity-50"
      >
        {isFlipping ? '铜钱翻转中...' : '掷出这一爻 →'}
      </button>
    </div>
  );
};
