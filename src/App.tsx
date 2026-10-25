import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomeView } from './views/HomeView';
import { DivinationView } from './views/DivinationView';
import { ResultView } from './views/ResultView';
import { RecordsView } from './views/RecordsView';
import { AboutView } from './views/AboutView';
import { ShareCardModal } from './components/ShareCardModal';
import { MentorModal } from './components/MentorModal';
import { DivinationResult, TopicId } from './types/iching';
import { defaultMentorConfig } from './data/mentorConfig';
import {
  getSavedRecords,
  saveRecord,
  toggleFavoriteRecord,
  updateRecordNotes,
  deleteRecord,
  clearAllRecords,
  getSoundPreference,
  setSoundPreference,
} from './utils/storage';

export const App: React.FC = () => {
  // 当前主导航 Tab
  const [currentTab, setCurrentTab] = useState<'home' | 'records' | 'about'>('home');

  // 是否处于沉浸式静心起卦场景
  const [isDivining, setIsDivining] = useState<boolean>(false);
  const [divinationParams, setDivinationParams] = useState<{
    topicId: TopicId;
    question: string;
  } | null>(null);

  // 当前正在查看的起卦结果（在 ResultView 展示）
  const [activeResult, setActiveResult] = useState<DivinationResult | null>(null);

  // 声音开关偏好
  const [soundEnabled, setSoundEnabled] = useState<boolean>(getSoundPreference());

  // 历史记录列表
  const [records, setRecords] = useState<DivinationResult[]>([]);

  // 弹窗状态
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isMentorModalOpen, setIsMentorModalOpen] = useState<boolean>(false);

  // 初始化加载本地历史记录与支持 URL Hash 快速导航
  useEffect(() => {
    let saved = getSavedRecords();

    // 如果首次访问且本地记录为空，预置几条雅致的历史签卡（乾为天、坤为地、山水蒙、水天需），完美呈现设计图 04 的签卡册体验
    if (saved.length === 0) {
      const demoRecords: DivinationResult[] = [
        {
          id: 'demo_1',
          createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
          topicId: 'career',
          question: '想换一个方向，却一直不敢下决心。',
          rawValues: [8, 7, 8, 8, 8, 9], // 蒙卦上爻动
          originalHexagram: {
            number: 4,
            name: '山水蒙',
            shortName: '蒙',
            symbol: '䷃',
            upperTrigram: '艮',
            lowerTrigram: '坎',
            upperNature: '山',
            lowerNature: '水',
            binary: '010001',
            coreInsight: '先看清，再决定。',
            summary: '面对还不熟悉的处境，先求理解，再谈推进。',
            keywords: ['学习', '求教', '厘清'],
            modernReflection: [
              '蒙卦象征山下出泉、前路雾气未散。当下最大的挑战不是客观条件的艰难，而是信息与理解的盲区。',
              '不要在没有核实事实之前凭直觉贸然下注。带着初学者的虚心去提问、去查证、去请教懂行之人。',
              '承认自己“暂时不知道”并不是软弱，而是为真正的明晰与智慧腾出入口。'
            ]
          },
          changingLines: [
            {
              position: 5,
              positionName: '上爻',
              yaoName: '上九',
              fromValue: 9,
              fromPolarity: 1,
              toPolarity: 0,
              actionGuidance: '上爻阳动：极亢之境，适度收敛求稳方得始终。'
            }
          ],
          changedHexagram: {
            number: 7,
            name: '地水师',
            shortName: '师',
            symbol: '䷆',
            upperTrigram: '坤',
            lowerTrigram: '坎',
            upperNature: '地',
            lowerNature: '水',
            binary: '010000',
            coreInsight: '纪律严明，众志成城。',
            summary: '面对复杂挑战，清晰的秩序与分工是破局关键。',
            keywords: ['统筹', '秩序', '严谨'],
            modernReflection: ['师卦象征水藏地中，蕴蓄兵力。需要高度的组织力与纪律性。']
          },
          hasChangingLines: true,
          isFavorite: true,
          userNotes: '写下了三个尚未确认的信息并向合作方核实，心态笃定了许多。'
        },
        {
          id: 'demo_2',
          createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
          topicId: 'finance',
          question: '这次合作我该如何判断对方的诚意与边界？',
          rawValues: [7, 7, 7, 7, 7, 7],
          originalHexagram: {
            number: 1,
            name: '乾为天',
            shortName: '乾',
            symbol: '䷀',
            upperTrigram: '乾',
            lowerTrigram: '乾',
            upperNature: '天',
            lowerNature: '天',
            binary: '111111',
            coreInsight: '行稳致远，刚健自持。',
            summary: '此时充满势能与主动性，越是有力之时越要保持清醒谦逊。',
            keywords: ['自强', '笃定', '戒骄'],
            modernReflection: ['乾卦象征纯粹的开拓力，守住核心初衷方能长久。']
          },
          changingLines: [],
          changedHexagram: null,
          hasChangingLines: false,
          isFavorite: true,
        },
        {
          id: 'demo_3',
          createdAt: new Date(Date.now() - 86400000 * 12).toISOString(),
          topicId: 'growth',
          question: '怎样打破日复一日的倦怠感，重拾生命热情？',
          rawValues: [8, 8, 8, 8, 8, 8],
          originalHexagram: {
            number: 2,
            name: '坤为地',
            shortName: '坤',
            symbol: '䷁',
            upperTrigram: '坤',
            lowerTrigram: '坤',
            upperNature: '地',
            lowerNature: '地',
            binary: '000000',
            coreInsight: '包容承载，顺势而为。',
            summary: '当下宜守不宜强攻。给予事情生长的空间与时间。',
            keywords: ['包容', '厚实', '沉潜'],
            modernReflection: ['坤卦代表大地的宽广厚德，安心沉潜也是一种力量。']
          },
          changingLines: [],
          changedHexagram: null,
          hasChangingLines: false,
          isFavorite: false,
        },
        {
          id: 'demo_4',
          createdAt: new Date(Date.now() - 86400000 * 20).toISOString(),
          topicId: 'life',
          question: '面对眼前暂时的紧绷感，现在是合适的节点吗？',
          rawValues: [7, 7, 7, 8, 7, 8],
          originalHexagram: {
            number: 5,
            name: '水天需',
            shortName: '需',
            symbol: '䷄',
            upperTrigram: '坎',
            lowerTrigram: '乾',
            upperNature: '水',
            lowerNature: '天',
            binary: '111010',
            coreInsight: '静候时机，从容自养。',
            summary: '等待不是消极放弃，而是在险阻面前保持耐力，充实内在能量。',
            keywords: ['蓄力', '守候', '从容'],
            modernReflection: ['需卦提示时机未到强行推进往往事倍功半，静待风浪平息。']
          },
          changingLines: [],
          changedHexagram: null,
          hasChangingLines: false,
          isFavorite: true,
        }
      ];
      demoRecords.forEach(saveRecord);
      saved = demoRecords;
    }
    setRecords(saved);

    // 解析 Hash 路由
    const hash = window.location.hash.toLowerCase();
    if (hash === '#divination' || hash === '#coins') {
      setDivinationParams({ topicId: 'career', question: '想换一个方向，却一直不敢下决心。' });
      setIsDivining(true);
    } else if (hash === '#result') {
      setActiveResult(saved[0] || null);
      setCurrentTab('home');
    } else if (hash === '#records') {
      setCurrentTab('records');
    } else if (hash === '#about') {
      setCurrentTab('about');
    }
  }, []);

  const handleToggleSound = () => {
    const nextVal = !soundEnabled;
    setSoundEnabled(nextVal);
    setSoundPreference(nextVal);
  };

  // 用户在首页点击“静心问一事”
  const handleStartDivination = (topicId: TopicId, question: string) => {
    setDivinationParams({ topicId, question });
    setIsDivining(true);
    setActiveResult(null);
  };

  // 起卦完成，转入结果页并自动持久化记录
  const handleDivinationComplete = (result: DivinationResult) => {
    setIsDivining(false);
    setActiveResult(result);
    // 保存至本地存储
    saveRecord(result);
    setRecords(getSavedRecords());
  };

  // 收藏/取消收藏
  const handleToggleFavorite = (id: string) => {
    const updated = toggleFavoriteRecord(id);
    setRecords(updated);
    if (activeResult && activeResult.id === id) {
      setActiveResult({ ...activeResult, isFavorite: !activeResult.isFavorite });
    }
  };

  // 更新反思笔记
  const handleUpdateNotes = (id: string, notes: string) => {
    const updated = updateRecordNotes(id, notes);
    setRecords(updated);
    if (activeResult && activeResult.id === id) {
      setActiveResult({ ...activeResult, userNotes: notes });
    }
  };

  // 删除单条记录
  const handleDeleteRecord = (id: string) => {
    const updated = deleteRecord(id);
    setRecords(updated);
    if (activeResult && activeResult.id === id) {
      setActiveResult(null);
      setCurrentTab('records');
    }
  };

  // 清空所有记录
  const handleClearAllRecords = () => {
    clearAllRecords();
    setRecords([]);
    if (activeResult) {
      setActiveResult(null);
    }
  };

  // 从历史记录中查看某条完整历史解读快照（原样展示，绝不二次随机生成）
  const handleViewHistoricalDetail = (record: DivinationResult) => {
    setActiveResult(record);
    setCurrentTab('home');
  };

  // 开启新问题
  const handleNewQuestion = () => {
    setActiveResult(null);
    setIsDivining(false);
    setDivinationParams(null);
    setCurrentTab('home');
  };

  // 切换导航 Tab
  const handleSelectTab = (tab: 'home' | 'records' | 'about') => {
    if (isDivining) {
      setIsDivining(false);
    }
    setCurrentTab(tab);
    if (tab !== 'home') {
      setActiveResult(null);
    }
  };

  const isCurrentFavorite = activeResult
    ? Boolean(records.find((r) => r.id === activeResult.id)?.isFavorite)
    : false;

  return (
    <div className="min-h-screen flex flex-col bg-xuan-100 font-sans text-mose antialiased">
      {/* 沉浸式起卦全屏场景 */}
      {isDivining && divinationParams && (
        <DivinationView
          topicId={divinationParams.topicId}
          question={divinationParams.question}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
          onBack={() => setIsDivining(false)}
          onComplete={handleDivinationComplete}
        />
      )}

      {/* 顶部主导航栏（仅在非起卦且非详情结果页展示，结果页拥有独立的返回工具栏） */}
      {!isDivining && !activeResult && (
        <Header
          currentTab={currentTab}
          onSelectTab={handleSelectTab}
          soundEnabled={soundEnabled}
          onToggleSound={handleToggleSound}
        />
      )}

      {/* 主体视口内容 */}
      {!isDivining && (
        <main className="flex-1">
          {currentTab === 'home' && (
            <>
              {activeResult ? (
                <ResultView
                  result={activeResult}
                  isFavorite={isCurrentFavorite}
                  onToggleFavorite={() => handleToggleFavorite(activeResult.id)}
                  onOpenShareCard={() => setIsShareModalOpen(true)}
                  onOpenMentor={() => setIsMentorModalOpen(true)}
                  onNewQuestion={handleNewQuestion}
                />
              ) : (
                <HomeView onStartDivination={handleStartDivination} />
              )}
            </>
          )}

          {currentTab === 'records' && (
            <RecordsView
              records={records}
              onViewRecordDetail={handleViewHistoricalDetail}
              onToggleFavorite={handleToggleFavorite}
              onUpdateNotes={handleUpdateNotes}
              onDeleteRecord={handleDeleteRecord}
              onClearAllRecords={handleClearAllRecords}
              onGoHome={() => handleSelectTab('home')}
            />
          )}

          {currentTab === 'about' && <AboutView />}
        </main>
      )}

      {/* 移动端底部导航栏（在起卦场景与结果签卡页隐藏，让位给专属操作） */}
      {!isDivining && !activeResult && (
        <Navigation
          currentTab={currentTab}
          onSelectTab={handleSelectTab}
        />
      )}

      {/* 分享卡生成弹窗 */}
      {isShareModalOpen && activeResult && (
        <ShareCardModal
          isOpen={isShareModalOpen}
          onClose={() => setIsShareModalOpen(false)}
          hexagram={activeResult.originalHexagram}
        />
      )}

      {/* 导师咨询弹窗 */}
      {isMentorModalOpen && (
        <MentorModal
          isOpen={isMentorModalOpen}
          onClose={() => setIsMentorModalOpen(false)}
          config={defaultMentorConfig}
          currentResult={activeResult}
        />
      )}
    </div>
  );
};
