import React, { useState } from 'react';
import { Compass, HeartHandshake, Scale, Sparkles, CloudSun, ArrowRight, AlertCircle } from 'lucide-react';
import { TopicId } from '../types/iching';
import { TOPICS } from '../data/themes';

interface HomeViewProps {
  onStartDivination: (topicId: TopicId, question: string) => void;
}

// 5 大主题对应轻巧精炼标题
const THEME_CHIPS: { id: TopicId; label: string; icon: React.FC<{ size?: number; className?: string; strokeWidth?: number }> }[] = [
  { id: 'career', label: '事业', icon: Compass },
  { id: 'relationship', label: '关系', icon: HeartHandshake },
  { id: 'finance', label: '合作', icon: Scale },
  { id: 'growth', label: '成长', icon: Sparkles },
  { id: 'life', label: '心境', icon: CloudSun },
];

export const HomeView: React.FC<HomeViewProps> = ({ onStartDivination }) => {
  const [selectedTopic, setSelectedTopic] = useState<TopicId>('career');
  const [question, setQuestion] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const activeTopicInfo = TOPICS[selectedTopic];
  // 取两条精炼建议
  const twoSuggestions = activeTopicInfo.exampleQuestions.slice(0, 2);

  const handleSelectExample = (eg: string) => {
    setQuestion(eg);
    setErrorMessage(null);
  };

  const handleTopicChange = (topicId: TopicId) => {
    setSelectedTopic(topicId);
    setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = question.trim();
    if (!trimmed) {
      setErrorMessage('请写下你此刻的困惑，开启自我反思与方向梳理。');
      return;
    }
    setErrorMessage(null);
    onStartDivination(selectedTopic, trimmed);
  };

  return (
    <div className="relative min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] flex flex-col justify-between px-5 sm:px-6 md:px-8 max-w-5xl mx-auto pt-4 pb-20 md:pb-8 w-full overflow-x-hidden">
      {/* 桌面端双栏 / 手机端纵向首屏优先 */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center my-auto w-full min-w-0">
        {/* 左侧：标题、副标题与融入背景的淡雅水墨画卷 */}
        <div className="lg:col-span-5 flex flex-col space-y-4 text-left min-w-0 w-full">
          {/* 主标题 */}
          <div className="space-y-1">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[42px] font-normal text-mose leading-[1.25] tracking-tight">
              此刻，<br />
              <span className="font-medium text-mose">你想问什么？</span>
            </h1>
            <p className="font-sans text-sm sm:text-base text-mose-muted leading-relaxed pt-1">
              给自己片刻安静，<br className="sm:hidden" />
              从一个问题开始，看见新的角度。
            </p>
          </div>

          {/* 融入背景的横向水墨插画（朱砂红日、远山、苍松云气） */}
          <div className="relative w-full h-36 sm:h-44 rounded-2xl overflow-hidden pointer-events-none select-none my-1">
            <svg
              viewBox="0 0 500 220"
              className="w-full h-full object-cover"
              preserveAspectRatio="xMidYMid slice"
            >
              <defs>
                <linearGradient id="heroGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#F7F3EB" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#F7F3EB" stopOpacity="0.95" />
                </linearGradient>
              </defs>

              {/* 朱砂圆日徐徐升起 */}
              <circle cx="340" cy="80" r="38" fill="#A9322D" opacity="0.85" />

              {/* 远山重峦叠嶂 */}
              <path
                d="M160,220 L240,90 L300,145 L380,105 L460,150 L500,120 L500,220 Z"
                fill="#8C8576"
                opacity="0.4"
              />

              {/* 中景崇峦 */}
              <path
                d="M0,220 L60,150 L140,120 L220,180 L310,135 L410,220 Z"
                fill="#4D473E"
                opacity="0.75"
              />

              {/* 挺拔苍松 */}
              <g opacity="0.85" stroke="#292722" strokeLinecap="round">
                <line x1="120" y1="130" x2="120" y2="190" strokeWidth="2.5" />
                <path d="M120,140 C100,130 90,145 75,135" fill="none" strokeWidth="2" />
                <path d="M120,155 C140,140 155,150 170,140" fill="none" strokeWidth="2" />
                <circle cx="75" cy="135" r="8" fill="#292722" opacity="0.6" />
                <circle cx="170" cy="140" r="8" fill="#292722" opacity="0.6" />
              </g>

              {/* 雾气与淡入背景渐变 */}
              <path
                d="M0,180 Q140,165 280,185 T500,175 L500,220 L0,220 Z"
                fill="#F7F3EB"
                opacity="0.8"
              />
              <rect width="500" height="220" fill="url(#heroGradient)" />
            </svg>
          </div>
        </div>

        {/* 右侧：交互提问操作卡 */}
        <div className="lg:col-span-7 flex flex-col space-y-4 min-w-0 w-full">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* 1. 五个轻巧的主题胶囊 */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
              {THEME_CHIPS.map((item) => {
                const isSelected = selectedTopic === item.id;
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleTopicChange(item.id)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-serif transition-all active:scale-95 flex-shrink-0 ${
                      isSelected
                        ? 'bg-zhusha-light text-zhusha border border-zhusha font-medium shadow-subtle'
                        : 'bg-white/80 text-mose-muted border border-[#E3DCD1] hover:border-xuan-400 hover:text-mose'
                    }`}
                  >
                    <IconComponent size={14} strokeWidth={1.5} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* 2. 问题输入框卡片（暖白卡片、圆角 20px、细边框） */}
            <div className="bg-[#FFFCF6] border border-[#E3DCD1] rounded-card p-4 sm:p-5 shadow-subtle space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="user-question-input"
                  className="font-serif text-xs text-mose-muted tracking-wide"
                >
                  写下你此刻的困惑
                </label>
                <span className="text-[11px] font-mono text-mose-muted/70">
                  {question.length} / 200 字
                </span>
              </div>

              <textarea
                id="user-question-input"
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                  if (errorMessage) setErrorMessage(null);
                }}
                rows={3}
                maxLength={200}
                placeholder="面对新的机会，我该留意什么？"
                className="w-full bg-transparent text-sm sm:text-base text-mose placeholder:text-mose-muted/40 focus:outline-none leading-relaxed resize-none font-sans"
              />

              {/* 输入框下两条轻量推荐问题 */}
              <div className="pt-2 border-t border-[#E3DCD1]/60 flex flex-wrap gap-2">
                {twoSuggestions.map((sug, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectExample(sug)}
                    className="text-xs text-left px-2.5 py-1 rounded-md bg-xuan-200/50 hover:bg-xuan-200 text-mose-muted hover:text-mose transition-colors truncate max-w-full"
                  >
                    {sug}
                  </button>
                ))}
              </div>
            </div>

            {/* 错误温和提醒 */}
            {errorMessage && (
              <div className="flex items-center gap-2 text-xs text-zhusha bg-zhusha-light px-3 py-2 rounded-xl animate-fade-in font-medium">
                <AlertCircle size={14} />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* 3. 主要按钮：高度至少 52px，朱砂红背景、暖白文字 */}
            <button
              type="submit"
              className="w-full h-[52px] sm:h-[54px] rounded-2xl bg-zhusha hover:bg-zhusha-hover active:scale-[0.99] text-[#FFFCF6] font-serif text-base tracking-wider flex items-center justify-center gap-2 shadow-md transition-all group"
            >
              <span>进入问境</span>
              <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
