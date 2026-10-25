import React, { useState, useEffect } from 'react';
import { X, Save, Edit3 } from 'lucide-react';

interface NoteEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialNotes?: string;
  onSave: (notes: string) => void;
  hexagramName: string;
}

export const NoteEditorModal: React.FC<NoteEditorModalProps> = ({
  isOpen,
  onClose,
  initialNotes = '',
  onSave,
  hexagramName,
}) => {
  const [notes, setNotes] = useState(initialNotes);

  useEffect(() => {
    setNotes(initialNotes);
  }, [initialNotes, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(notes);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-mose/60 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative bg-xuan-100 border border-xuan-300 rounded-2xl shadow-float max-w-md w-full overflow-hidden text-mose"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-xuan-300 bg-xuan-50/70">
          <div className="flex items-center gap-2">
            <Edit3 size={16} className="text-zhusha" />
            <h3 className="font-serif text-base font-semibold text-mose">
              后续反思笔记 · {hexagramName}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-mose-muted hover:text-mose hover:bg-xuan-200 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-serif font-medium text-mose mb-2">
              后来发生了什么？我做了什么行动？
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="记录下你做出决定后的实际行动、心境变化或后续发展，让反思沉淀为真实的人生经验..."
              rows={5}
              maxLength={500}
              className="w-full p-3.5 rounded-xl border border-xuan-300 bg-white text-sm text-mose placeholder:text-mose-muted/50 focus:outline-none focus:border-zhusha focus:ring-1 focus:ring-zhusha/30 leading-relaxed resize-none"
            />
            <div className="text-right text-[11px] text-mose-muted mt-1">
              {notes.length} / 500 字
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-mose-muted hover:text-mose hover:bg-xuan-200 transition-colors"
            >
              取消
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 px-5 py-2 rounded-lg text-xs font-medium bg-zhusha text-white hover:bg-zhusha-hover active:scale-95 transition-all shadow-sm"
            >
              <Save size={14} />
              <span>保存反思笔记</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
