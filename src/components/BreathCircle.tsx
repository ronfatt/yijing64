import React, { useState, useEffect } from 'react';

interface BreathCircleProps {
  onComplete: () => void;
  onSkip: () => void;
}

export const BreathCircle: React.FC<BreathCircleProps> = ({ onComplete, onSkip }) => {
  const [phase, setPhase] = useState<'inhale' | 'exhale' | 'ready'>('inhale');

  useEffect(() => {
    // 呼吸节奏：前 2 秒吸气，后 2 秒呼气，4 秒后就绪
    let seconds = 4;
    const timer = setInterval(() => {
      seconds -= 1;
      if (seconds <= 0) {
        clearInterval(timer);
        setPhase('ready');
        onComplete();
      } else if (seconds === 2) {
        setPhase('exhale');
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center py-6 text-center select-none">
      {/* 呼吸引导文字 */}
      <div className="h-8 mb-6 flex items-center justify-center">
        <span className="font-serif text-lg tracking-widest text-amber-100/90 transition-opacity duration-700">
          {phase === 'inhale' && '缓缓吸气 · 澄澈心神'}
          {phase === 'exhale' && '缓缓呼气 · 放下杂念'}
          {phase === 'ready' && '心已安宁 · 始见明朗'}
        </span>
      </div>

      {/* 呼吸光圈容器 */}
      <div className="relative w-48 h-48 flex items-center justify-center my-4">
        {/* 外层柔光扩散晕 */}
        <div
          className={`absolute inset-0 rounded-full bg-amber-400/10 blur-xl transition-all duration-[2000ms] ease-in-out ${
            phase === 'inhale' ? 'scale-125 opacity-70' : 'scale-90 opacity-20'
          }`}
        />

        {/* 动态脉动外圈 */}
        <div
          className={`absolute inset-2 rounded-full border border-yajin/30 transition-all duration-[2000ms] ease-in-out ${
            phase === 'inhale' ? 'scale-110 opacity-80 rotate-45' : 'scale-95 opacity-30 rotate-0'
          }`}
        />

        {/* 呼吸核心圆环 */}
        <div
          className={`w-32 h-32 rounded-full border-2 border-amber-200/40 bg-gradient-to-br from-amber-200/10 via-transparent to-rose-900/30 flex items-center justify-center shadow-lg transition-all duration-[2000ms] ease-in-out ${
            phase === 'inhale' ? 'scale-110 border-amber-200/70 shadow-amber-500/20' : 'scale-90 border-amber-200/20'
          }`}
        >
          {/* 中心微光 */}
          <div className="w-10 h-10 rounded-full bg-amber-200/30 blur-sm animate-pulse" />
        </div>
      </div>

      {/* 跳过按钮 */}
      <button
        onClick={onSkip}
        className="mt-6 text-xs text-amber-200/60 hover:text-amber-100 transition-colors tracking-wider px-3 py-1.5 rounded-full hover:bg-white/5 active:scale-95"
      >
        跳过静心，直接起卦 →
      </button>
    </div>
  );
};
