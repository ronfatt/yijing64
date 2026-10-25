import React, { useState, useEffect, useRef } from 'react';
import { X, Download, Check } from 'lucide-react';
import { HexagramData } from '../types/iching';
import { CardRatio, CardTheme, renderShareCardToCanvas, downloadOrShareCard } from '../utils/shareCardCanvas';

interface ShareCardModalProps {
  isOpen: boolean;
  onClose: () => void;
  hexagram: HexagramData;
}

export const ShareCardModal: React.FC<ShareCardModalProps> = ({
  isOpen,
  onClose,
  hexagram,
}) => {
  const [ratio, setRatio] = useState<CardRatio>('4:5');
  const [theme, setTheme] = useState<CardTheme>('xuan');
  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [exportNotice, setExportNotice] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // 当尺寸或主题改变时，立即更新绘制 Canvas 预览
  useEffect(() => {
    if (!isOpen) return;
    const canvas = canvasRef.current;
    if (canvas) {
      renderShareCardToCanvas(canvas, {
        hexagram,
        ratio,
        theme,
      });
    }
  }, [isOpen, hexagram, ratio, theme]);

  if (!isOpen) return null;

  const handleDownload = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsExporting(true);
    setExportNotice(null);

    const filename = `问境_${hexagram.name}_${theme === 'xuan' ? '宣纸山水' : '朱砂夜色'}_${ratio.replace(':', 'x')}.png`;
    const res = await downloadOrShareCard(canvas, filename);

    setIsExporting(false);
    if (res.success) {
      setExportNotice(res.shared ? '已调起系统分享' : '签卡图片已成功保存');
      setTimeout(() => setExportNotice(null), 3000);
    } else {
      setExportNotice(res.error || '导出失败，请重试');
      setTimeout(() => setExportNotice(null), 4000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mose/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-label="生成我的签卡"
      onClick={onClose}
    >
      <div
        className="relative bg-[#FFFCF6] border border-[#E3DCD1] rounded-master shadow-float max-w-xl w-full max-h-[92vh] flex flex-col overflow-hidden text-mose"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 顶部标题栏 */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E3DCD1]/80">
          <div>
            <h3 className="font-serif text-lg font-semibold text-mose">生成我的签卡</h3>
            <span className="text-[11px] text-mose-muted">纯净东方意境 · 不含私人提问</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-mose-muted hover:text-mose hover:bg-xuan-200 transition-colors"
            aria-label="关闭"
          >
            <X size={18} />
          </button>
        </div>

        {/* 预览与设置 */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5">
          {/* 实时画布渲染预览 */}
          <div className="flex flex-col items-center justify-center bg-xuan-100 rounded-card p-3 border border-[#E3DCD1]/60">
            <canvas
              ref={canvasRef}
              className={`rounded-xl shadow-card border border-black/5 max-h-[46vh] object-contain transition-all ${
                ratio === '4:5' ? 'aspect-[4/5]' : 'aspect-[9/16]'
              }`}
            />
          </div>

          {/* 尺寸与风格选择 */}
          <div className="grid grid-cols-2 gap-4">
            {/* 比例 */}
            <div className="space-y-1.5">
              <span className="text-xs font-serif text-mose font-medium block">
                选择画面比例
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setRatio('4:5')}
                  className={`py-2 px-2.5 rounded-xl text-xs font-serif border text-center transition-all ${
                    ratio === '4:5'
                      ? 'border-zhusha bg-zhusha-light text-zhusha font-semibold'
                      : 'border-[#E3DCD1] bg-white text-mose hover:border-xuan-400'
                  }`}
                >
                  <span className="block font-semibold">4 : 5</span>
                  <span className="text-[10px] text-mose-muted">社交帖子</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRatio('9:16')}
                  className={`py-2 px-2.5 rounded-xl text-xs font-serif border text-center transition-all ${
                    ratio === '9:16'
                      ? 'border-zhusha bg-zhusha-light text-zhusha font-semibold'
                      : 'border-[#E3DCD1] bg-white text-mose hover:border-xuan-400'
                  }`}
                >
                  <span className="block font-semibold">9 : 16</span>
                  <span className="text-[10px] text-mose-muted">手机壁纸</span>
                </button>
              </div>
            </div>

            {/* 视觉风格 */}
            <div className="space-y-1.5">
              <span className="text-xs font-serif text-mose font-medium block">
                选择色彩意境
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setTheme('xuan')}
                  className={`py-2 px-2.5 rounded-xl text-xs font-serif border text-center transition-all ${
                    theme === 'xuan'
                      ? 'border-zhusha bg-zhusha-light text-zhusha font-semibold'
                      : 'border-[#E3DCD1] bg-[#F7F3EB] text-mose hover:border-xuan-400'
                  }`}
                >
                  <span className="block font-semibold">宣纸山水</span>
                  <span className="text-[10px] text-mose-muted">素雅空灵</span>
                </button>
                <button
                  type="button"
                  onClick={() => setTheme('zhusha')}
                  className={`py-2 px-2.5 rounded-xl text-xs font-serif border text-center transition-all ${
                    theme === 'zhusha'
                      ? 'border-zhusha bg-[#461F24] text-amber-100 font-semibold shadow-sm'
                      : 'border-[#E3DCD1] bg-[#461F24]/90 text-amber-100/80 hover:opacity-100'
                  }`}
                >
                  <span className="block font-semibold">朱砂夜色</span>
                  <span className="text-[10px] text-amber-200/60">深红金线</span>
                </button>
              </div>
            </div>
          </div>

          {exportNotice && (
            <div className="flex items-center gap-2 text-xs text-zhusha bg-zhusha-light p-2.5 rounded-xl animate-fade-in font-medium">
              <Check size={14} />
              <span>{exportNotice}</span>
            </div>
          )}
        </div>

        {/* 底部按钮栏 */}
        <div className="px-6 py-4 border-t border-[#E3DCD1] bg-[#F7F3EB] flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-xs font-serif text-mose-muted hover:text-mose hover:bg-xuan-200 transition-colors"
          >
            返回
          </button>
          <button
            type="button"
            onClick={handleDownload}
            disabled={isExporting}
            className="h-11 px-6 rounded-xl bg-zhusha text-white hover:bg-zhusha-hover active:scale-95 font-serif text-xs font-medium tracking-wider flex items-center gap-2 shadow-sm transition-all disabled:opacity-50"
          >
            <Download size={14} />
            <span>{isExporting ? '正在生成签卡...' : '保存高清签卡'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
