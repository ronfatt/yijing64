import React from 'react';
import { YaoPolarity, YaoValue } from '../types/iching';

interface HexagramVisualProps {
  polarities: YaoPolarity[]; // 长度 6，从下到上 [0, 1, 2, 3, 4, 5]
  rawValues?: YaoValue[]; // 原始值 6, 7, 8, 9
  changingPositions?: number[]; // 动爻所在索引 [0..5]
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
  visibleCount?: number; // 逐爻升起动画显示到的爻数（0-6）
  showLabels?: boolean; // 是否展示爻位标注（初、二...上），默认在小签卡中隐藏以保持极简
}

export const HexagramVisual: React.FC<HexagramVisualProps> = ({
  polarities,
  changingPositions = [],
  size = 'md',
  theme = 'light',
  visibleCount = 6,
  showLabels = false,
}) => {
  const isDark = theme === 'dark';

  // 尺寸配置
  const dims = {
    sm: { width: 52, height: 4.5, gap: 4, splitGap: 8 },
    md: { width: 110, height: 7, gap: 8, splitGap: 14 },
    lg: { width: 160, height: 10, gap: 11, splitGap: 20 },
  }[size];

  const posNames = ['初', '二', '三', '四', '五', '上'];
  const rows = [5, 4, 3, 2, 1, 0];

  return (
    <div className="flex flex-col items-center justify-center select-none py-1" role="img" aria-label="易经六爻卦象">
      <div className="flex flex-col" style={{ gap: `${dims.gap}px` }}>
        {rows.map((pos) => {
          const isVisible = pos < visibleCount;
          const polarity = polarities[pos];
          const isChanging = changingPositions.includes(pos);

          let barBg = isDark ? 'bg-amber-100/90' : 'bg-[#292722]';
          if (isChanging) {
            barBg = isDark ? 'bg-rose-400' : 'bg-zhusha';
          }

          return (
            <div
              key={pos}
              className={`flex items-center justify-center transition-all duration-300 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'
              }`}
            >
              {/* 爻位文字标注（仅在需要时开启） */}
              {showLabels && (
                <span
                  className={`w-5 text-right pr-1 font-serif text-[10px] ${
                    isChanging
                      ? isDark
                        ? 'text-rose-300 font-medium'
                        : 'text-zhusha font-medium'
                      : isDark
                      ? 'text-yajin/60'
                      : 'text-mose-muted/60'
                  }`}
                >
                  {posNames[pos]}
                </span>
              )}

              {/* 爻主体 */}
              <div
                className="flex items-center justify-between relative"
                style={{ width: `${dims.width}px`, height: `${dims.height}px` }}
              >
                {polarity === 1 ? (
                  // 阳爻（一条实线）
                  <div
                    className={`w-full h-full rounded-[2px] transition-colors duration-200 ${barBg}`}
                  />
                ) : (
                  // 阴爻（中间断开）
                  <div className="w-full h-full flex justify-between">
                    <div
                      className={`h-full rounded-[2px] transition-colors duration-200 ${barBg}`}
                      style={{ width: `calc(50% - ${dims.splitGap / 2}px)` }}
                    />
                    <div
                      className={`h-full rounded-[2px] transition-colors duration-200 ${barBg}`}
                      style={{ width: `calc(50% - ${dims.splitGap / 2}px)` }}
                    />
                  </div>
                )}

                {/* 动爻指示点 */}
                {isChanging && (
                  <div
                    className="absolute -right-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: isDark ? '#F87171' : '#A9322D' }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
