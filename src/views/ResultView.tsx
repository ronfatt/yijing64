import React, { useState } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Sun,
  Feather,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import { DivinationResult, YaoPolarity } from '../types/iching';
import { HexagramVisual } from '../components/HexagramVisual';
import { HexagramArt } from '../components/HexagramArt';
import { TOPICS } from '../data/themes';

interface ResultViewProps {
  result: DivinationResult;
  isFavorite: boolean;
  onToggleFavorite: () => void;
  onOpenShareCard: () => void;
  onOpenMentor: () => void;
  onNewQuestion: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  result,
  isFavorite,
  onToggleFavorite,
  onOpenShareCard,
  onOpenMentor,
  onNewQuestion,
}) => {
  const [expandChanges, setExpandChanges] = useState<boolean>(false);

  const topicInfo = TOPICS[result.topicId];
  const origHex = result.originalHexagram;
  const changedHex = result.changedHexagram;

  const originalPolarities: YaoPolarity[] = origHex.binary
    .split('')
    .map((c) => (c === '1' ? 1 : 0));
  const changedPolarities: YaoPolarity[] = changedHex
    ? changedHex.binary.split('').map((c) => (c === '1' ? 1 : 0))
    : originalPolarities;

  const changingPositions = result.changingLines.map((l) => l.position);

  return (
    <div className="min-h-screen bg-[#F7F3EB] text-mose pb-28">
      {/* 顶部工具栏 */}
      <div className="sticky top-0 z-30 bg-[#F7F3EB]/95 backdrop-blur-md border-b border-[#E3DCD1]/60 px-5 sm:px-6 h-14 flex items-center justify-between max-w-4xl mx-auto">
        <button
          onClick={onNewQuestion}
          className="p-2 -ml-2 text-mose-muted hover:text-mose transition-colors flex items-center gap-1 text-xs"
          aria-label="返回提问"
        >
          <ArrowLeft size={18} />
          <span className="hidden sm:inline">提新问题</span>
        </button>

        <span className="font-serif text-sm font-semibold tracking-wider text-mose">
          卦象解读
        </span>

        <button
          onClick={onOpenShareCard}
          className="text-xs text-zhusha hover:text-zhusha-hover font-serif font-medium"
        >
          分享
        </button>
      </div>

      <div className="max-w-4xl mx-auto px-5 sm:px-6 pt-5 space-y-6">
        {/* 桌面端双栏 / 手机端纵向卡片流 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* 左侧：首张 4:5 艺术主卡 (lg:col-span-5) */}
          <div className="lg:col-span-5 lg:sticky lg:top-20">
            <div className="relative w-full rounded-master overflow-hidden bg-[#FFFCF6] border border-[#E3DCD1] shadow-card aspect-[4/5] flex flex-col justify-between p-6">
              {/* 背景艺术插画（带渐变蒙层，确保文字清晰可读） */}
              <div className="absolute inset-0 z-0">
                <HexagramArt
                  hexagramNumber={origHex.number}
                  className="w-full h-full opacity-65"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FFFCF6] via-[#FFFCF6]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#FFFCF6]/80 via-transparent to-transparent" />
              </div>

              {/* 卡片顶部：左上卦序，中上/左上准确的六爻卦象图形 */}
              <div className="relative z-10 flex items-start justify-between">
                <div>
                  <span className="text-xs font-serif text-mose-muted tracking-wider block mb-2">
                    第{origHex.number}卦
                  </span>
                  {/* 精致微缩六爻符号 */}
                  <div className="bg-[#FFFCF6]/80 backdrop-blur-sm p-2 rounded-xl border border-[#E3DCD1]/60 inline-block shadow-subtle">
                    <HexagramVisual
                      polarities={originalPolarities}
                      changingPositions={changingPositions}
                      size="sm"
                    />
                  </div>
                </div>

                {/* 朱砂闲章 */}
                <div className="w-8 h-8 rounded-md border border-zhusha/40 text-zhusha flex items-center justify-center font-serif text-xs font-bold shadow-subtle bg-white/70">
                  {origHex.shortName}
                </div>
              </div>

              {/* 卡片下部：卦名 + 一句核心启发 + 关键词 */}
              <div className="relative z-10 space-y-2.5 pt-4">
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-mose tracking-tight">
                  {origHex.name}
                </h2>
                <p className="font-serif text-lg sm:text-xl text-zhusha font-medium leading-snug">
                  {origHex.coreInsight}
                </p>
                <div className="pt-1">
                  <span className="text-xs font-serif text-mose-muted tracking-widest">
                    {origHex.keywords.join('  ·  ')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：结构化解读深度内容流 (lg:col-span-7) */}
          <div className="lg:col-span-7 space-y-5">
            {/* A. 你正在问的事（低调引用样式） */}
            <div className="bg-[#FFFCF6]/90 border-l-2 border-zhusha/60 rounded-r-card p-4 text-xs sm:text-sm text-mose-light leading-relaxed font-sans shadow-subtle">
              <span className="text-mose-muted text-xs block mb-1 font-serif">
                关于【{topicInfo.title}】：
              </span>
              “{result.question}”
            </div>

            {/* B. 换个角度看（两三段清楚反思解读，不重复套外框） */}
            <div className="bg-[#FFFCF6] border border-[#E3DCD1] rounded-card p-5 sm:p-6 shadow-subtle space-y-3.5">
              <div className="flex items-center gap-2">
                <Feather size={16} className="text-zhusha" />
                <h3 className="font-serif text-base font-semibold text-mose">
                  换个角度看
                </h3>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-mose-light leading-relaxed font-sans">
                {origHex.modernReflection.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>
            </div>

            {/* C. 先问自己（三条具体反思问题，精致序号） */}
            <div className="bg-[#FFFCF6] border border-[#E3DCD1] rounded-card p-5 sm:p-6 shadow-subtle space-y-3.5">
              <div className="flex items-center gap-2">
                <Sparkles size={16} className="text-yajin" />
                <h3 className="font-serif text-base font-semibold text-mose">
                  先问自己
                </h3>
              </div>

              <div className="space-y-2.5">
                {topicInfo.reflectionQuestions.map((q, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-xuan-100/60 border border-[#E3DCD1]/50 text-xs sm:text-sm text-mose leading-relaxed"
                  >
                    <span className="w-5 h-5 rounded-full bg-zhusha/10 text-zhusha font-serif font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="flex-1">{q}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* D. 今天，先做这一件事（淡朱砂背景重点卡） */}
            <div className="bg-zhusha-light border border-zhusha-border rounded-card p-5 sm:p-6 shadow-subtle space-y-2 relative overflow-hidden">
              <div className="flex items-center gap-2 text-zhusha">
                <Sun size={17} strokeWidth={2} />
                <h3 className="font-serif text-base font-semibold">
                  今天，先做这一件事
                </h3>
              </div>
              <p className="font-serif text-base text-mose font-medium leading-relaxed">
                {topicInfo.microActionTip}
              </p>
              <p className="text-xs text-mose-muted leading-relaxed font-sans pt-1">
                把模糊的想法具体化为最小一步，能帮助你看见真正的方向。
              </p>
            </div>

            {/* E. 卦象如何变化（折叠手风琴模块） */}
            <div className="bg-[#FFFCF6] border border-[#E3DCD1] rounded-card overflow-hidden shadow-subtle">
              <button
                type="button"
                onClick={() => setExpandChanges(!expandChanges)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm font-serif font-medium text-mose hover:bg-xuan-100/50 transition-colors"
              >
                <span>卦象如何变化</span>
                {expandChanges ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {expandChanges && (
                <div className="p-5 pt-0 border-t border-[#E3DCD1]/60 text-xs sm:text-sm space-y-4">
                  {!result.hasChangingLines || !changedHex ? (
                    <div className="p-3.5 rounded-xl bg-xuan-100/70 border border-[#E3DCD1] text-xs text-mose-muted">
                      本次起卦六爻皆为少阳或少阴，<strong>无动爻</strong>。事物当下处于守常稳定期，无须强设变数。
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <p className="text-xs text-mose-muted">
                        共有 {result.changingLines.length} 处动爻：
                      </p>
                      <div className="space-y-1.5">
                        {result.changingLines.map((line) => (
                          <div
                            key={line.position}
                            className="p-2.5 rounded-lg bg-zhusha-light/50 border border-zhusha/20 text-xs flex justify-between items-center"
                          >
                            <span className="font-serif font-bold text-zhusha">
                              {line.yaoName}（{line.positionName}）
                            </span>
                            <span className="text-mose-light">{line.actionGuidance}</span>
                          </div>
                        ))}
                      </div>

                      {/* 本卦与变卦对比 */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-xl bg-xuan-100 text-center flex flex-col items-center">
                          <span className="text-[11px] text-mose-muted font-serif block mb-1">
                            本卦
                          </span>
                          <HexagramVisual polarities={originalPolarities} size="sm" />
                          <span className="font-serif font-semibold text-sm mt-1">
                            {origHex.name}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-xuan-100 text-center flex flex-col items-center">
                          <span className="text-[11px] text-zhusha font-serif block mb-1">
                            变卦
                          </span>
                          <HexagramVisual polarities={changedPolarities} size="sm" />
                          <span className="font-serif font-semibold text-sm text-zhusha mt-1">
                            {changedHex.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* 导师轻量咨询入口 */}
            <div className="pt-2 text-center">
              <button
                type="button"
                onClick={onOpenMentor}
                className="inline-flex items-center gap-1.5 text-xs text-mose-muted hover:text-zhusha transition-colors py-2 px-3 rounded-full hover:bg-white"
              >
                <MessageSquare size={14} />
                <span>带着困惑与导师进一步梳理 →</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 底部固定操作栏（留足空间，不遮挡正文） */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#F7F3EB]/95 backdrop-blur-lg border-t border-[#E3DCD1] py-3 px-5 sm:px-6">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          {/* 左侧：收藏图标按钮（白底卡片） */}
          <button
            type="button"
            onClick={onToggleFavorite}
            className={`w-[52px] h-[52px] rounded-2xl border flex items-center justify-center transition-all active:scale-95 flex-shrink-0 ${
              isFavorite
                ? 'bg-zhusha-light border-zhusha text-zhusha shadow-subtle'
                : 'bg-[#FFFCF6] border-[#E3DCD1] text-mose-muted hover:text-mose hover:border-xuan-400'
            }`}
            title={isFavorite ? '已收藏' : '收藏此解读'}
            aria-label="收藏"
          >
            <Bookmark size={20} className={isFavorite ? 'fill-zhusha' : ''} />
          </button>

          {/* 右侧：生成我的签卡朱砂红大按钮 */}
          <button
            type="button"
            onClick={onOpenShareCard}
            className="flex-1 h-[52px] rounded-2xl bg-zhusha hover:bg-zhusha-hover active:scale-[0.99] text-[#FFFCF6] font-serif text-base tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <span>生成我的签卡</span>
          </button>
        </div>
      </div>
    </div>
  );
};
