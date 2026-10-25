import React, { useState, useEffect } from 'react';
import { X, Send, CheckSquare, Square, ShieldCheck, Clock } from 'lucide-react';
import { MentorConfig } from '../types/mentor';
import { DivinationResult } from '../types/iching';

interface MentorModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: MentorConfig;
  currentResult?: DivinationResult | null;
}

export const MentorModal: React.FC<MentorModalProps> = ({
  isOpen,
  onClose,
  config,
  currentResult,
}) => {
  // 是否附加问题与卦象，由用户主动勾选（默认不附带个人问题，保护隐私）
  const [includeQuestion, setIncludeQuestion] = useState<boolean>(false);
  const [includeHexagram, setIncludeHexagram] = useState<boolean>(true);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // 检查是否配置了真实可用的 WhatsApp 号码
  const isAvailable = config.enabled && Boolean(config.whatsappNumber && config.whatsappNumber.trim());

  // 构建预填给导师的草稿文本
  const composeMessageText = (): string => {
    let msg = `您好，我在【问境 WENJING】体验了易经哲思与自我反思，想与导师预约一次深度梳理与交流。`;

    if (includeHexagram && currentResult) {
      msg += `\n\n【所得卦象】：第${currentResult.originalHexagram.number}卦 · ${currentResult.originalHexagram.name}`;
      if (currentResult.hasChangingLines && currentResult.changedHexagram) {
        msg += `（动爻变为：${currentResult.changedHexagram.name}）`;
      }
      msg += `\n【核心启发】：“${currentResult.originalHexagram.coreInsight}”`;
    }

    if (includeQuestion && currentResult?.question) {
      msg += `\n\n【我的困惑】：${currentResult.question}`;
    }

    msg += `\n\n期待您的回复，感谢。`;
    return msg;
  };

  const previewText = composeMessageText();

  const handleGoToWhatsApp = () => {
    if (!isAvailable) return;
    const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
    const encodedText = encodeURIComponent(previewText);
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodedText}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mose/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="导师咨询"
      onClick={onClose}
    >
      <div
        className="relative bg-xuan-100 border border-xuan-300 rounded-2xl shadow-float max-w-lg w-full max-h-[90vh] flex flex-col overflow-hidden text-mose"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 顶部标题栏 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-xuan-300 bg-xuan-50/70">
          <div>
            <h3 className="font-serif text-lg font-semibold text-mose">导师深度咨询</h3>
            <p className="text-xs text-mose-muted">有些问题，值得慢慢谈</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-mose-muted hover:text-mose hover:bg-xuan-200 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* 内容区 */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {/* 导师信息卡片 */}
          <div className="p-4 rounded-xl bg-white border border-xuan-300 shadow-subtle flex gap-4 items-start">
            {/* 头像或雅致印章 */}
            <div className="w-14 h-14 rounded-full bg-xuan-200 border border-yajin/40 flex items-center justify-center flex-shrink-0 text-zhusha font-serif font-semibold text-lg">
              {config.avatarUrl ? (
                <img
                  src={config.avatarUrl}
                  alt={config.name}
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                '师'
              )}
            </div>

            <div className="flex-1">
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-base font-semibold text-mose">{config.name}</span>
                <span className="text-xs text-yajin font-medium">{config.title}</span>
              </div>
              <p className="text-xs text-mose-muted mt-1 leading-relaxed">{config.bio}</p>
            </div>
          </div>

          {/* 未配置 WhatsApp 时的真实展示 */}
          {!isAvailable ? (
            <div className="p-5 rounded-xl bg-amber-500/10 border border-yajin/30 text-center space-y-2">
              <div className="inline-flex p-2 rounded-full bg-yajin/20 text-yajin-dark mb-1">
                <Clock size={20} />
              </div>
              <h4 className="font-serif text-base font-semibold text-mose">导师咨询即将开放</h4>
              <p className="text-xs text-mose-muted max-w-sm mx-auto leading-relaxed">
                当前版本为单机体验版，真实的导师咨询服务通道正在进行合规配置中。我们坚持诚信原则，不展示虚构的预约成功或假人客服。
              </p>
            </div>
          ) : (
            <>
              {/* 隐私与附加内容勾选 */}
              <div className="space-y-2 bg-xuan-200/50 p-3.5 rounded-xl border border-xuan-300">
                <div className="flex items-center gap-1.5 text-xs font-serif font-semibold text-mose mb-1">
                  <ShieldCheck size={14} className="text-zhusha" />
                  <span>隐私与附加信息选择（由你自主决定）</span>
                </div>

                <label className="flex items-center gap-2 text-xs text-mose cursor-pointer select-none">
                  <button
                    type="button"
                    onClick={() => setIncludeHexagram(!includeHexagram)}
                    className="text-zhusha focus:outline-none"
                  >
                    {includeHexagram ? <CheckSquare size={16} /> : <Square size={16} />}
                  </button>
                  <span>附加本次卦象与核心启发（有助于导师理解当下情境）</span>
                </label>

                <label className="flex items-center gap-2 text-xs text-mose cursor-pointer select-none">
                  <button
                    type="button"
                    onClick={() => setIncludeQuestion(!includeQuestion)}
                    className="text-zhusha focus:outline-none"
                  >
                    {includeQuestion ? <CheckSquare size={16} /> : <Square size={16} />}
                  </button>
                  <span>附加我所提的具体问题（默认不勾选，保护隐私）</span>
                </label>
              </div>

              {/* 消息发送预览 */}
              <div>
                <label className="block text-xs font-serif font-medium text-mose mb-1.5">
                  发送内容预览（跳转 WhatsApp 后由你亲自点击发送）：
                </label>
                <div className="p-3 bg-white rounded-lg border border-xuan-300 text-xs text-mose-muted font-sans whitespace-pre-wrap max-h-36 overflow-y-auto leading-relaxed">
                  {previewText}
                </div>
              </div>

              <div className="text-[11px] text-mose-muted/80 leading-normal">
                说明：点击后将为您唤起 WhatsApp 客户端并填入上述文本，不会后台静默发送任何信息。
              </div>
            </>
          )}
        </div>

        {/* 底部按钮栏 */}
        <div className="px-6 py-4 border-t border-xuan-300 bg-xuan-50 flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-medium text-mose-muted hover:text-mose hover:bg-xuan-200 transition-colors"
          >
            {isAvailable ? '取消' : '我知道了'}
          </button>

          {isAvailable && (
            <button
              type="button"
              onClick={handleGoToWhatsApp}
              className="flex items-center gap-2 px-5 py-2 rounded-lg text-xs font-medium bg-[#25D366] text-white hover:bg-[#1EBE5D] active:scale-95 transition-all shadow-sm font-sans"
            >
              <Send size={14} />
              <span>前往 WhatsApp</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
