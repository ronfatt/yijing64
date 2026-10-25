import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Volume2, VolumeX, FastForward, Disc, Coins, Sparkles, RefreshCw } from 'lucide-react';
import { DivinationResult, TopicId, YaoValue } from '../types/iching';
import { generateDivination } from '../utils/ichingEngine';
import { playChimeSound } from '../utils/soundEngine';
import { HexagramVisual } from '../components/HexagramVisual';
import { CompassDial } from '../components/CompassDial';
import { CoinTossView } from '../components/CoinTossView';

interface DivinationViewProps {
  topicId: TopicId;
  question: string;
  soundEnabled: boolean;
  onToggleSound: () => void;
  onBack: () => void;
  onComplete: (result: DivinationResult) => void;
  existingResult?: DivinationResult | null;
}

type DivinationMode = 'dial' | 'coins';

export const DivinationView: React.FC<DivinationViewProps> = ({
  topicId,
  question,
  soundEnabled,
  onToggleSound,
  onBack,
  onComplete,
  existingResult,
}) => {
  // 起卦模式：'dial' (浑天八卦罗盘) | 'coins' (古钱掷爻)
  const initialMode: DivinationMode = typeof window !== 'undefined' && window.location.hash.includes('coins') ? 'coins' : 'dial';
  const [mode, setMode] = useState<DivinationMode>(initialMode);

  // 阶段状态：'breathe' (静心探索) | 'casting' (动效推演中) | 'done' (完成转场)
  const [stage, setStage] = useState<'breathe' | 'casting' | 'done'>('breathe');
  const [visibleYaoCount, setVisibleYaoCount] = useState<number>(0);
  const [isDialSpinning, setIsDialSpinning] = useState<boolean>(false);
  const [coinStep, setCoinStep] = useState<number>(0);

  // 保证结果在进入时即唯一生成并锁定，杜绝任何二次重抽
  const lockedResultRef = useRef<DivinationResult | null>(existingResult || null);
  if (!lockedResultRef.current) {
    lockedResultRef.current = generateDivination(topicId, question);
  }
  const result = lockedResultRef.current;

  const castingTimerRef = useRef<NodeJS.Timeout | null>(null);

  // 罗盘自动旋转定卦
  const handleStartDialSpin = () => {
    if (isDialSpinning || stage === 'casting') return;
    setIsDialSpinning(true);
    setStage('casting');
    setVisibleYaoCount(0);

    if (soundEnabled) {
      playChimeSound('subtle');
    }

    // 六爻逐爻点亮
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
          setIsDialSpinning(false);
          setStage('done');
          onComplete(result);
        }, 800);
      }
    }, 650);

    castingTimerRef.current = interval;
  };

  // 掷铜钱单爻完成触发
  const handleCoinTossComplete = (step: number, _val: YaoValue) => {
    const nextCount = step + 1;
    setVisibleYaoCount(nextCount);
    if (nextCount < 6) {
      setCoinStep(nextCount);
    } else {
      setTimeout(() => {
        setStage('done');
        onComplete(result);
      }, 900);
    }
  };

  // 跳过引导直接看结果
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
    <div className="fixed inset-0 z-50 bg-[#461F24] text-amber-100 flex flex-col justify-between overflow-y-auto select-none px-4 sm:px-6 py-3">
      {/* 沉浸式夜景水墨与湖光星宿背景 */}
      <div className="absolute inset-0 pointer-events-none opacity-40 -z-10">
        <svg
          viewBox="0 0 600 800"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <radialGradient id="lakeGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#A9322D" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#2E0E12" stopOpacity="0.95" />
          </radialGradient>
          <rect width="600" height="800" fill="url(#lakeGlow)" />
          {/* 星罗棋布微光 */}
          <circle cx="120" cy="180" r="1.5" fill="#E8D2A8" opacity="0.6" />
          <circle cx="280" cy="140" r="2" fill="#E8D2A8" opacity="0.8" />
          <circle cx="480" cy="220" r="1.5" fill="#E8D2A8" opacity="0.5" />
          <circle cx="380" cy="90" r="1" fill="#E8D2A8" opacity="0.4" />
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

        {/* 顶部模式切换药丸（八卦天盘 / 掷铜钱） */}
        <div className="flex p-0.5 rounded-full bg-black/40 border border-amber-200/20">
          <button
            type="button"
            onClick={() => {
              setMode('dial');
              if (soundEnabled) playChimeSound('subtle');
            }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif transition-all ${
              mode === 'dial'
                ? 'bg-amber-400/20 text-amber-100 font-semibold border border-amber-300/30'
                : 'text-amber-200/50 hover:text-amber-100'
            }`}
          >
            <Disc size={13} />
            <span>八卦天盘</span>
          </button>
          <button
            type="button"
            onClick={() => {
              setMode('coins');
              if (soundEnabled) playChimeSound('subtle');
            }}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-serif transition-all ${
              mode === 'coins'
                ? 'bg-amber-400/20 text-amber-100 font-semibold border border-amber-300/30'
                : 'text-amber-200/50 hover:text-amber-100'
            }`}
          >
            <Coins size={13} />
            <span>古钱代蓍</span>
          </button>
        </div>

        {/* 声音开关 */}
        <button
          onClick={onToggleSound}
          className="p-2 -mr-2 text-amber-200/70 hover:text-amber-100 transition-colors"
          title={soundEnabled ? '音效已开启' : '音效已关闭'}
        >
          {soundEnabled ? (
            <Volume2 size={18} strokeWidth={1.5} className="animate-pulse" />
          ) : (
            <VolumeX size={18} strokeWidth={1.5} />
          )}
        </button>
      </header>

      {/* 中央主互动区 */}
      <main className="max-w-lg w-full mx-auto my-auto flex flex-col items-center justify-center text-center py-2 z-10">
        {/* 文案 */}
        <div className="space-y-1 mb-4">
          <h2 className="font-serif text-2xl sm:text-3xl text-amber-50 font-normal tracking-wider leading-relaxed">
            静下来，<br />
            听见自己的问题。
          </h2>
          <p className="font-sans text-xs text-amber-200/60 tracking-wide">
            {mode === 'dial' ? '触摸或拖拽可自由拨动天盘 · 点击下方即可定卦' : '轻触铜钱掷出，由下自上推演六爻'}
          </p>
        </div>

        {/* 核心互动装置 */}
        <div className="relative my-2 flex flex-col items-center">
          {mode === 'dial' ? (
            // 模式 1：东方浑天八卦玄机天盘（支持手指/鼠标拖拽拨动、旋转动效）
            <CompassDial
              isSpinning={isDialSpinning}
              currentYaoIndex={visibleYaoCount}
              interactive={stage === 'breathe'}
              onSpinEnd={() => {
                // 旋转平息后完成
              }}
            />
          ) : (
            // 模式 2：古法三枚古铜钱翻转落盘
            <CoinTossView
              currentStep={coinStep}
              onTossComplete={handleCoinTossComplete}
              isAutoRunning={stage === 'casting'}
            />
          )}

          {/* 悬浮六爻进度（已凝结的爻位实时显示在右侧） */}
          {visibleYaoCount > 0 && (
            <div className="absolute -right-4 sm:-right-8 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur-md p-2 rounded-xl border border-amber-300/30 shadow-jade animate-fade-in">
              <span className="text-[10px] font-serif text-amber-200/80 block mb-1">
                爻成进度
              </span>
              <HexagramVisual
                polarities={originalPolarities}
                changingPositions={changingPositions}
                theme="dark"
                size="sm"
                visibleCount={visibleYaoCount}
              />
            </div>
          )}
        </div>

        {/* 底部主按钮 */}
        {mode === 'dial' && (
          <div className="w-full max-w-xs mt-4">
            <button
              type="button"
              onClick={handleStartDialSpin}
              disabled={isDialSpinning}
              className="w-full h-[52px] rounded-2xl border border-yajin/70 bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 text-amber-100 hover:text-white hover:border-amber-200 active:scale-95 font-serif text-base tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
            >
              {isDialSpinning ? (
                <>
                  <RefreshCw size={17} className="animate-spin text-amber-200" />
                  <span>天盘流转凝卦中...</span>
                </>
              ) : (
                <>
                  <Sparkles size={17} className="text-yajin" />
                  <span>旋转天盘 · 开始起卦</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* 跳过引导 */}
        <div className="mt-3 flex items-center justify-center gap-4">
          <button
            onClick={handleSkip}
            className="text-xs text-amber-200/50 hover:text-amber-200 tracking-wider transition-colors py-1 px-3 flex items-center gap-1"
          >
            <span>直接看结果</span>
            <FastForward size={13} />
          </button>
        </div>
      </main>

      {/* 底部微小留白 */}
      <footer className="w-full max-w-xl mx-auto text-center pb-2 text-[11px] text-amber-200/40">
        一念之间 · 看见方向
      </footer>
    </div>
  );
};
