import React, { useState } from 'react';
import {
  Bookmark,
  Filter,
  PlusCircle,
  FolderOpen,
  Trash2,
  AlertTriangle,
} from 'lucide-react';
import { DivinationResult } from '../types/iching';
import { TOPIC_LIST } from '../data/themes';
import { HexagramArt } from '../components/HexagramArt';
import { HexagramVisual } from '../components/HexagramVisual';
import { NoteEditorModal } from '../components/NoteEditorModal';

interface RecordsViewProps {
  records: DivinationResult[];
  onViewRecordDetail: (record: DivinationResult) => void;
  onToggleFavorite: (id: string) => void;
  onUpdateNotes: (id: string, notes: string) => void;
  onDeleteRecord: (id: string) => void;
  onClearAllRecords: () => void;
  onGoHome: () => void;
}

export const RecordsView: React.FC<RecordsViewProps> = ({
  records,
  onViewRecordDetail,
  onToggleFavorite,
  onUpdateNotes,
  onDeleteRecord,
  onClearAllRecords,
  onGoHome,
}) => {
  const [tab, setTab] = useState<'all' | 'favorite'>('all');
  const [filterTopic, setFilterTopic] = useState<string>('all');
  const [editingRecord, setEditingRecord] = useState<DivinationResult | null>(null);
  const [showClearConfirm, setShowClearConfirm] = useState<boolean>(false);

  // 过滤记录
  const filteredRecords = records.filter((rec) => {
    if (tab === 'favorite' && !rec.isFavorite) return false;
    if (filterTopic !== 'all' && rec.topicId !== filterTopic) return false;
    return true;
  });

  const formatDate = (iso: string) => {
    try {
      const d = new Date(iso);
      return `${d.getFullYear()}.${(d.getMonth() + 1).toString().padStart(2, '0')}.${d
        .getDate()
        .toString()
        .padStart(2, '0')}`;
    } catch {
      return iso;
    }
  };

  return (
    <div className="min-h-[calc(100vh-3.5rem)] md:min-h-[calc(100vh-4rem)] bg-[#F7F3EB] text-mose px-5 sm:px-6 md:px-8 max-w-5xl mx-auto pt-6 pb-24 md:pb-12 space-y-6">
      {/* 标题 */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div className="space-y-1">
          <h1 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-mose">
            每一次提问，<br />
            都留下成长。
          </h1>
          <p className="text-xs text-mose-muted font-sans pt-1">
            个人签卡收藏册 · 记录沉淀在当前浏览器
          </p>
        </div>

        {records.length > 0 && (
          <button
            onClick={() => setShowClearConfirm(true)}
            className="flex items-center gap-1 text-xs text-mose-muted hover:text-zhusha transition-colors self-start sm:self-auto py-1 px-2.5 rounded-lg border border-[#E3DCD1]"
          >
            <Trash2 size={13} />
            <span>清空记录</span>
          </button>
        )}
      </div>

      {/* 分段控制器：全部 / 收藏 ＋ 主题筛选 */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        {/* 全部 / 收藏 药丸切换 */}
        <div className="flex p-1 rounded-full bg-[#EFE8DC] border border-[#E3DCD1]/60">
          <button
            type="button"
            onClick={() => setTab('all')}
            className={`px-5 py-1 rounded-full text-xs font-serif transition-all ${
              tab === 'all'
                ? 'bg-white text-mose shadow-sm font-semibold'
                : 'text-mose-muted hover:text-mose'
            }`}
          >
            全部 ({records.length})
          </button>
          <button
            type="button"
            onClick={() => setTab('favorite')}
            className={`flex items-center gap-1 px-5 py-1 rounded-full text-xs font-serif transition-all ${
              tab === 'favorite'
                ? 'bg-white text-zhusha shadow-sm font-semibold'
                : 'text-mose-muted hover:text-mose'
            }`}
          >
            <Bookmark size={12} className={tab === 'favorite' ? 'fill-zhusha' : ''} />
            <span>收藏 ({records.filter((r) => r.isFavorite).length})</span>
          </button>
        </div>

        {/* 主题筛选下拉 */}
        <div className="flex items-center gap-1.5 text-xs">
          <Filter size={13} className="text-mose-muted" />
          <select
            value={filterTopic}
            onChange={(e) => setFilterTopic(e.target.value)}
            className="bg-white border border-[#E3DCD1] rounded-lg px-2.5 py-1 text-xs text-mose focus:outline-none focus:border-zhusha cursor-pointer"
          >
            <option value="all">全部分类</option>
            {TOPIC_LIST.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* 签卡内容区 */}
      {filteredRecords.length === 0 ? (
        // 空状态
        <div className="p-12 text-center rounded-card bg-[#FFFCF6] border border-dashed border-[#E3DCD1] my-6 space-y-3">
          <div className="w-12 h-12 rounded-full bg-xuan-200 text-mose-muted mx-auto flex items-center justify-center">
            <FolderOpen size={22} strokeWidth={1.5} />
          </div>
          <h3 className="font-serif text-base font-medium text-mose">
            这里，会留下你每一次认真思考的痕迹
          </h3>
          <p className="text-xs text-mose-muted max-w-sm mx-auto">
            从一个具体的问题开始，静心起卦，沉淀为你的专属人生哲思签卡。
          </p>
          <button
            onClick={onGoHome}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-zhusha text-white text-xs font-serif hover:bg-zhusha-hover transition-colors"
          >
            <span>现在去问一事</span>
          </button>
        </div>
      ) : (
        // 双列小签卡（Grid 2列，如设计图 04）
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {filteredRecords.map((item) => {
            const hex = item.originalHexagram;
            const polarities = hex.binary.split('').map((c) => (c === '1' ? 1 : 0));

            return (
              <div
                key={item.id}
                className="group relative rounded-card overflow-hidden bg-[#FFFCF6] border border-[#E3DCD1] shadow-subtle hover:shadow-card hover:border-[#D5CBBF] transition-all flex flex-col justify-between cursor-pointer"
                onClick={() => onViewRecordDetail(item)}
              >
                {/* 卡片上半部：艺术意境插画 */}
                <div className="relative w-full h-28 sm:h-32 overflow-hidden bg-xuan-200">
                  <HexagramArt
                    hexagramNumber={hex.number}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                    variant="thumb"
                  />
                  {/* 收藏小角标与删除 */}
                  <div className="absolute top-2 right-2 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDeleteRecord(item.id);
                      }}
                      className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-mose-muted hover:text-rose-600 transition-colors opacity-0 group-hover:opacity-100"
                      title="删除单条"
                    >
                      <Trash2 size={12} />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onToggleFavorite(item.id);
                      }}
                      className="p-1.5 rounded-full bg-white/80 backdrop-blur-sm text-mose-muted hover:text-zhusha transition-colors"
                      title={item.isFavorite ? '取消收藏' : '加入收藏'}
                    >
                      <Bookmark size={13} className={item.isFavorite ? 'fill-zhusha text-zhusha' : ''} />
                    </button>
                  </div>
                </div>

                {/* 卡片下半部：六爻微缩图 + 卦名 + 日期 + 朱砂闲章 */}
                <div className="p-3 sm:p-3.5 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="flex items-start justify-between gap-1">
                    <div className="flex items-center gap-2">
                      {/* 微缩六爻卦符 */}
                      <div className="scale-75 origin-left">
                        <HexagramVisual polarities={polarities} size="sm" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-serif text-xs sm:text-sm font-semibold text-mose group-hover:text-zhusha transition-colors">
                          {hex.name}
                        </span>
                        <span className="text-[10px] text-mose-muted font-mono">
                          {formatDate(item.createdAt)}
                        </span>
                      </div>
                    </div>

                    {/* 朱砂小印章 */}
                    <div className="w-5 h-5 rounded border border-zhusha/40 text-zhusha flex items-center justify-center font-serif text-[10px] font-bold flex-shrink-0">
                      {hex.shortName}
                    </div>
                  </div>

                  {/* 后续笔记提示或添加笔记入口 */}
                  <div className="pt-1.5 border-t border-[#E3DCD1]/50 flex items-center justify-between text-[11px] text-mose-muted">
                    {item.userNotes ? (
                      <span className="text-yajin-dark font-serif truncate">
                        有后续笔记
                      </span>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setEditingRecord(item);
                        }}
                        className="text-[10px] text-mose-muted hover:text-zhusha flex items-center gap-0.5 truncate"
                      >
                        <PlusCircle size={11} />
                        <span>后来，有新想法吗？</span>
                      </button>
                    )}

                    <span className="text-[10px] text-zhusha font-serif font-medium ml-auto">
                      查看 →
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* 笔记编辑弹窗 */}
      {editingRecord && (
        <NoteEditorModal
          isOpen={Boolean(editingRecord)}
          onClose={() => setEditingRecord(null)}
          initialNotes={editingRecord.userNotes || ''}
          hexagramName={editingRecord.originalHexagram.name}
          onSave={(notes) => onUpdateNotes(editingRecord.id, notes)}
        />
      )}

      {/* 清空所有记录确认弹窗 */}
      {showClearConfirm && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mose/60 backdrop-blur-sm animate-fade-in"
          onClick={() => setShowClearConfirm(false)}
        >
          <div
            className="bg-[#FFFCF6] rounded-card border border-[#E3DCD1] p-6 max-w-sm w-full space-y-4 shadow-float text-mose"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-2 text-zhusha font-serif font-semibold text-base">
              <AlertTriangle size={18} />
              <span>确认清空所有历史签卡？</span>
            </div>
            <p className="text-xs text-mose-muted leading-relaxed">
              此操作将清除保存在当前浏览器本地的全部起卦记录和反思笔记，且无法撤销。
            </p>
            <div className="flex justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowClearConfirm(false)}
                className="px-4 py-1.5 rounded-lg text-xs text-mose-muted hover:bg-xuan-200 transition-colors"
              >
                取消
              </button>
              <button
                type="button"
                onClick={() => {
                  onClearAllRecords();
                  setShowClearConfirm(false);
                }}
                className="px-4 py-1.5 rounded-lg text-xs bg-zhusha text-white hover:bg-zhusha-hover transition-colors font-medium"
              >
                确认清空
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
