import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Volume2, VolumeX, FastForward } from 'lucide-react';
import { DivinationResult, TopicId } from '../types/iching';
import { generateDivination } from '../utils/ichingEngine';
import { playChimeSound } from '../utils/soundEngine';
import { HexagramVisual } from '../components/HexagramVisual';

interface DivinationViewProps {
  topicId: TopicId;
  question: string;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onBack: () => void;
  onComplete: (result: DivinationResult) => void;
  existingResult?: DivinationResult | null;
}

export const DivinationView: React.FC<DivinationViewProps> = ({
  topicId,
  question,
  soundEnabled,
  onToggleSound,
  onBack,
  onComplete,
  existingResult,
}) => {
  // 阶段状态：'breathe' (静心呼吸引导) | 'casting' (六爻从下到上生成动画) | 'done' (完成转场)
  const [stage, setStage] = useState<'breathe' | 'casting' | 'done'>('breathe');
  const [visibleYaoCount, setVisibleYaoCount] = useState<number>(0);
  const [breathPhase, setBreathPhase] = useState<'inhale' | 'exhale'>('inhale');

  // 关键纯函数：进入时即唯一生成并冻结结果，确保跳过或重渲染完全一致
  const lockedResultRef = useRef<DivinationResult | null>(existingResult || null);
  if (!lockedResultRef.current) {
    lockedResultRef.current = generateDivination(topicId, question);
  }
  const result = lockedResultRef.current;

  const castingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 4秒温润呼吸动画循环
  useEffect(() => {
    const breathTimer = setInterval(() => {
      setBreathPhase((prev) => (prev === 'inhale' ? 'exhale' : 'inhale'));
    }, 2000);
    return () => clearInterval(breathTimer);
  }, []);

  // 开始起卦动画（六爻自下而上依次升起，总时长控制在 4.5 秒内）
  const handleStartCasting = () => {
    if (stage === 'casting') return;
    setStage('casting');
    setVisibleYaoCount(0);

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setVisibleYaoCount(count);
      if (soundEnabled) {
        playChimeSound(count === 6 ? 'bell' : 'subtle');
      }

      if (count >= 6) {
        clearInterval(interval);
        setTimeout(() => {
          setStage('done');
          onComplete(result);
        }, 700);
      }
    }, 650);

    castingTimerRef.current = interval;
  };

  // 跳过引导与动画直接呈现结果
  const handleSkip = () => {
    if (castingTimerRef.current) {
      clearInterval(castingTimerRef.current);
    }
    setVisibleYaoCount(6);
    setStage('done');
    if (soundEnabled) {
      playChimeSound('bell');
    }
    onComplete(result);
  };

  useEffect(() => {
    return () => {
      if (castingTimerRef.current) {
        clearInterval(castingTimerRef.current);
      }
    };
  }, []);

  const changingPositions = result.changingLines.map((l) => l.position);
  const originalPolarities = result.rawValues.map((v) => (v === 7 || v === 9 ? 1 : 0));

  return (
    <div className="fixed inset-0 z-50 bg-[#461F24] text-amber-100 flex flex-col justify-between overflow-y-auto select-none px-5 sm:px-6 py-4">
      {/* 沉浸式夜景水墨与湖光倒影背景层 */}
      <div className="absolute inset-0 pointer-events-none opacity-40 -z-10">
        <svg
          viewBox="0 0 600 800"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <radialGradient id="lakeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A9322D" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#35161A" stopOpacity="0.95" />
          </radialGradient>
          <rect width="600" height="800" fill="url(#lakeGlow)" />
          {/* 远山暗影 */}
          <path
            d="M0,580 L120,440 L240,510 L380,420 L500,490 L600,450 L600,800 L0,800 Z"
            fill="#230E12"
            opacity="0.85"
          />
          {/* 水面微光反光线 */}
          <path d="M50,620 Q300,610 550,620" stroke="#B59A64" strokeWidth="1" opacity="0.25" fill="none" />
          <path d="M120,660 Q300,650 480,660" stroke="#B59A64" strokeWidth="0.8" opacity="0.2" fill="none" />
        </svg>
      </div>

      {/* 顶部控制栏 */}
      <header className="w-full max-w-xl mx-auto flex items-center justify-between z-10 pt-1">
        <button
          onClick={onBack}
          className="p-2 -ml-2 text-amber-200/70 hover:text-amber-100 transition-colors"
          aria-label="返回提问"
        >
          <ArrowLeft size={19} />
        </button>

        <span className="font-serif text-xs tracking-widest text-amber-200/80 font-medium">
          静心 · 起卦
        </span>

        <button
          onClick={onToggleSound}
          className="p-2 -mr-2 text-amber-200/70 hover:text-amber-100 transition-colors"
          title={soundEnabled ? '音效已开启' : '音效已关闭'}
          aria-label="声音开关"
        >
          {soundEnabled ? (
            <Volume2 size={18} strokeWidth={1.5} className="animate-pulse" />
          ) : (
            <VolumeX size={18} strokeWidth={1.5} />
          )}
        </button>
      </header>

      {/* 中央主仪式交互区 */}
      <main className="max-w-md w-full mx-auto my-auto flex flex-col items-center justify-center text-center py-4 z-10">
        {/* 文案：静下来，听见自己的问题 */}
        <div className="space-y-2 mb-6">
          <h2 className="font-serif text-2xl sm:text-3xl text-amber-50 font-normal tracking-wider leading-relaxed">
            静下来，<br />
            听见自己的问题。
          </h2>
          <p className="font-sans text-xs text-amber-200/60 tracking-wide">
            {stage === 'breathe' ? '一呼一吸，让思绪慢下来。' : '正在模拟古铜钱抛掷，由下至上成卦...'}
          </p>
        </div>

        {/* 中央玉石光泽圆形图形（温润玉璧） */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center my-2">
          {/* 呼吸外环细金线 */}
          <div
            className={`absolute inset-0 rounded-full border border-yajin/40 transition-all duration-[2000ms] ease-in-out ${
              breathPhase === 'inhale' ? 'scale-105 opacity-80' : 'scale-95 opacity-30'
            }`}
          />

          {/* 外层玉晕微光 */}
          <div
            className={`absolute inset-3 rounded-full bg-gradient-to-tr from-amber-200/15 via-rose-300/10 to-amber-100/20 blur-md transition-all duration-[2000ms] ease-in-out ${
              breathPhase === 'inhale' ? 'scale-105 opacity-80' : 'scale-95 opacity-40'
            }`}
          />

          {/* 温润玉璧主体（翡玉渐变与高贵通透感） */}
          <div
            className={`relative w-48 h-48 sm:w-52 sm:h-52 rounded-full border-2 border-amber-200/40 bg-gradient-to-b from-[#EFE3C8]/25 via-[#D8C7A5]/15 to-[#8A463B]/25 backdrop-blur-sm flex items-center justify-center shadow-jade transition-transform duration-[2000ms] ease-in-out ${
              breathPhase === 'inhale' ? 'scale-100' : 'scale-98'
            }`}
          >
            {/* 玉璧内圈细金边 */}
            <div className="absolute inset-3 rounded-full border border-yajin/30 pointer-events-none" />

            {/* 当处于起卦动画或完成阶段时：玉璧中央显现六爻卦象 */}
            {stage === 'casting' || stage === 'done' ? (
              <div className="z-10 animate-fade-in scale-90 sm:scale-100">
                <HexagramVisual
                  polarities={originalPolarities}
                  rawValues={result.rawValues}
                  changingPositions={changingPositions}
                  theme="dark"
                  size="md"
                  visibleCount={visibleYaoCount}
                />
              </div>
            ) : (
              // 静心呼吸阶段：玉壁中心柔和微光
              <div className="flex flex-col items-center justify-center text-yajin/70 space-y-1">
                <span className="font-serif text-2xl font-light tracking-widest text-amber-100/90">
                  问
                </span>
                <span className="text-[10px] tracking-[0.25em] font-sans text-yajin/50">
                  WENJING
                </span>
              </div>
            )}
          </div>
        </div>

        {/* 开始起卦按钮（高度至少 52px，金色细线圆角大按钮） */}
        {stage === 'breathe' ? (
          <div className="w-full max-w-xs mt-6">
            <button
              type="button"
              onClick={handleStartCasting}
              className="w-full h-[52px] rounded-2xl border border-yajin/70 bg-gradient-to-r from-amber-500/15 via-amber-400/25 to-amber-500/15 text-amber-100 hover:text-white hover:border-amber-200 active:scale-95 font-serif text-base tracking-widest transition-all shadow-md"
            >
              开始起卦
            </button>
          </div>
        ) : (
          <div className="w-full max-w-xs mt-6 flex justify-center">
            <button
              onClick={handleSkip}
              className="flex items-center gap-1.5 text-xs text-amber-200/70 hover:text-amber-100 bg-white/10 px-4 py-2 rounded-full hover:bg-white/15 transition-all"
            >
              <span>跳过动画</span>
              <FastForward size={14} />
            </button>
          </div>
        )}

        {/* 底部跳过引导链接 */}
        {stage === 'breathe' && (
          <button
            onClick={handleSkip}
            className="mt-4 text-xs text-amber-200/50 hover:text-amber-200 tracking-wider transition-colors py-1 px-3"
          >
            跳过引导
          </button>
        )}
      </main>

      {/* 底部微小留白 */}
      <footer className="w-full max-w-xl mx-auto text-center pb-2 text-[11px] text-amber-200/40">
        一念之间 · 看见方向
      </footer>
    </div>
  );
};
