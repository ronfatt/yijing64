import React, { useState, useRef, useEffect, useCallback } from 'react';
import { playChimeSound } from '../utils/soundEngine';

interface CompassDialProps {
  onSpinEnd?: () => void;
  isSpinning?: boolean;
  interactive?: boolean;
  currentYaoIndex?: number; // 0..5
}

// 先天八卦符号与名称
const TRIGRAM_RINGS = [
  { name: '乾', symbol: '☰', nature: '天', angle: 0 },
  { name: '兑', symbol: '☱', nature: '泽', angle: 45 },
  { name: '离', symbol: '☲', nature: '火', angle: 90 },
  { name: '震', symbol: '☳', nature: '雷', angle: 135 },
  { name: '巽', symbol: '☴', nature: '风', angle: 180 },
  { name: '坎', symbol: '☵', nature: '水', angle: 225 },
  { name: '艮', symbol: '☶', nature: '山', angle: 270 },
  { name: '坤', symbol: '☷', nature: '地', angle: 315 },
];

// 二十四向星盘刻度细标
const CELESTIAL_STEMS = [
  '甲', '卯', '乙', '辰', '巽', '巳', '丙', '午', '丁', '未', '坤', '申',
  '庚', '酉', '辛', '戌', '乾', '亥', '壬', '子', '癸', '丑', '艮', '寅'
];

/**
 * 东方浑天八卦玄机天盘 (Oriental Celestial BaGua Compass)
 * 支持：
 * 1. 手指触控/鼠标拖拽自由拨盘（带阻尼惯性）；
 * 2. 拨动时发出极轻微的金属玉石微鸣；
 * 3. 自动旋转推演光轨动效；
 * 4. 内外双盘逆向差速旋转，呈现浑天仪般精妙的东方机械与哲学仪式感。
 */
export const CompassDial: React.FC<CompassDialProps> = ({
  onSpinEnd,
  isSpinning = false,
  interactive = true,
  currentYaoIndex = 0,
}) => {
  const [outerAngle, setOuterAngle] = useState<number>(0);
  const [innerAngle, setInnerAngle] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const dragStartRef = useRef<{ x: number; y: number; startAngle: number } | null>(null);
  const dialRef = useRef<HTMLDivElement | null>(null);
  const autoSpinTimerRef = useRef<number | null>(null);

  // 自动旋转起卦动效
  useEffect(() => {
    if (isSpinning) {
      let speed = 24; // 起始高转速
      let currentOuter = outerAngle;
      let currentInner = innerAngle;
      let frame = 0;

      const spinLoop = () => {
        frame += 1;
        // 外盘顺时针，内盘逆时针差速交错
        currentOuter += speed;
        currentInner -= speed * 0.7;

        setOuterAngle(currentOuter);
        setInnerAngle(currentInner);

        // 逐渐衰减转速
        if (frame > 60) {
          speed *= 0.96;
        }

        if (speed > 0.4) {
          autoSpinTimerRef.current = requestAnimationFrame(spinLoop);
        } else {
          if (onSpinEnd) onSpinEnd();
        }
      };

      autoSpinTimerRef.current = requestAnimationFrame(spinLoop);

      return () => {
        if (autoSpinTimerRef.current) {
          cancelAnimationFrame(autoSpinTimerRef.current);
        }
      };
    }
  }, [isSpinning, onSpinEnd]);

  // 计算触摸/鼠标点相对于圆心的角度
  const getAngleFromEvent = useCallback((clientX: number, clientY: number) => {
    if (!dialRef.current) return 0;
    const rect = dialRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const dx = clientX - centerX;
    const dy = clientY - centerY;
    return (Math.atan2(dy, dx) * 180) / Math.PI;
  }, []);

  // 鼠标/触控按下开始拖拽拨盘
  const handlePointerDown = (clientX: number, clientY: number) => {
    if (!interactive || isSpinning) return;
    setIsDragging(true);
    const angle = getAngleFromEvent(clientX, clientY);
    dragStartRef.current = {
      x: clientX,
      y: clientY,
      startAngle: angle - outerAngle,
    };
    playChimeSound('subtle');
  };

  const handlePointerMove = (clientX: number, clientY: number) => {
    if (!isDragging || !dragStartRef.current) return;
    const currentTouchAngle = getAngleFromEvent(clientX, clientY);
    const newOuter = currentTouchAngle - dragStartRef.current.startAngle;
    setOuterAngle(newOuter);
    // 内盘带轻微联动反转
    setInnerAngle(-newOuter * 0.6);
  };

  const handlePointerUp = () => {
    if (isDragging) {
      setIsDragging(false);
      dragStartRef.current = null;
    }
  };

  return (
    <div
      ref={dialRef}
      className="relative w-72 h-72 sm:w-80 sm:h-80 select-none flex items-center justify-center cursor-grab active:cursor-grabbing touch-none"
      onMouseDown={(e) => handlePointerDown(e.clientX, e.clientY)}
      onMouseMove={(e) => handlePointerMove(e.clientX, e.clientY)}
      onMouseUp={handlePointerUp}
      onMouseLeave={handlePointerUp}
      onTouchStart={(e) => handlePointerDown(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchMove={(e) => handlePointerMove(e.touches[0].clientX, e.touches[0].clientY)}
      onTouchEnd={handlePointerUp}
    >
      {/* 1. 外层玄光光晕 */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-500/10 via-rose-500/15 to-amber-200/20 blur-xl pointer-events-none animate-pulse" />

      {/* 2. 最外圈铜金日晷刻度环 (Outer Dial Ring) */}
      <div
        className="absolute inset-0 rounded-full border-2 border-yajin/40 shadow-jade flex items-center justify-center transition-transform ease-out"
        style={{
          transform: `rotate(${outerAngle}deg)`,
          transitionDuration: isDragging ? '0ms' : '150ms',
        }}
      >
        {/* 二十四节气与干支刻度 */}
        {CELESTIAL_STEMS.map((stem, i) => {
          const deg = (360 / CELESTIAL_STEMS.length) * i;
          return (
            <div
              key={i}
              className="absolute text-[9px] font-serif text-yajin/60 pointer-events-none"
              style={{
                transform: `rotate(${deg}deg) translateY(-132px)`,
              }}
            >
              {stem}
            </div>
          );
        })}

        {/* 细密刻度线 */}
        <svg viewBox="0 0 320 320" className="w-full h-full pointer-events-none opacity-40">
          <circle cx="160" cy="160" r="150" fill="none" stroke="#B59A64" strokeWidth="1" strokeDasharray="2 6" />
          <circle cx="160" cy="160" r="140" fill="none" stroke="#B59A64" strokeWidth="0.8" />
          <circle cx="160" cy="160" r="115" fill="none" stroke="#B59A64" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      </div>

      {/* 3. 中圈：先天八卦星盘 (Trigram Ring - 逆向转动) */}
      <div
        className="absolute inset-8 rounded-full border border-amber-200/30 bg-[#35161A]/80 backdrop-blur-sm flex items-center justify-center transition-transform ease-out shadow-inner"
        style={{
          transform: `rotate(${innerAngle}deg)`,
          transitionDuration: isDragging ? '0ms' : '150ms',
        }}
      >
        {/* 八卦符号与自然象名 */}
        {TRIGRAM_RINGS.map((tri, i) => {
          return (
            <div
              key={i}
              className="absolute flex flex-col items-center justify-center pointer-events-none transition-transform"
              style={{
                transform: `rotate(${tri.angle}deg) translateY(-85px)`,
              }}
            >
              {/* 八卦符号符文 */}
              <span className="font-serif text-amber-200 text-sm font-bold tracking-widest drop-shadow-sm">
                {tri.symbol}
              </span>
              <span className="text-[10px] font-serif text-yajin/80 mt-0.5">
                {tri.name}·{tri.nature}
              </span>
            </div>
          );
        })}

        {/* 金线同心圆环 */}
        <div className="absolute inset-5 rounded-full border border-yajin/30 pointer-events-none" />
      </div>

      {/* 4. 内圈核心：温润翡玉太极中心圆盘 (Jade Core Hub) */}
      <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-2 border-amber-200/50 bg-gradient-to-br from-[#EAE0CA]/30 via-[#D2C09C]/20 to-[#6E3038]/40 backdrop-blur-md flex flex-col items-center justify-center shadow-jade z-10">
        {/* 中心阴阳气旋微光 */}
        <div className="absolute inset-2 rounded-full border border-amber-300/20 animate-spin" style={{ animationDuration: '20s' }} />

        {/* 提示文案或当前推演爻位 */}
        <div className="flex flex-col items-center justify-center text-center pointer-events-none">
          {isSpinning ? (
            <>
              <span className="text-[11px] font-serif text-rose-300 animate-pulse font-medium">
                天盘转动
              </span>
              <span className="text-[9px] font-mono text-amber-200/70 tracking-widest mt-0.5">
                第 {currentYaoIndex + 1} 爻凝成
              </span>
            </>
          ) : (
            <>
              <span className="font-serif text-lg text-amber-100 font-semibold tracking-widest drop-shadow-sm">
                拨盘
              </span>
              <span className="text-[9px] tracking-[0.2em] font-sans text-yajin/80 uppercase">
                SPIN DIAL
              </span>
            </>
          )}
        </div>
      </div>

      {/* 5. 四象方位标示线 */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-amber-300/25 to-transparent" />
        <div className="h-full w-[1px] bg-gradient-to-b from-transparent via-amber-300/25 to-transparent absolute" />
      </div>
    </div>
  );
};
