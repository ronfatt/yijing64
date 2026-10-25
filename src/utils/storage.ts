import { DivinationResult } from '../types/iching';

const STORAGE_KEY = 'wenjing_divination_history_v1';
const SOUND_PREF_KEY = 'wenjing_sound_enabled';

/**
 * 安全获取所有保存的卦象记录
 */
export function getSavedRecords(): DivinationResult[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return parsed;
    }
    return [];
  } catch (err) {
    console.error('Failed to parse saved divination records:', err);
    return [];
  }
}

/**
 * 保存或追加一条新记录到最前
 */
export function saveRecord(record: DivinationResult): void {
  try {
    const list = getSavedRecords();
    // 检查是否已经存在
    const existingIndex = list.findIndex((item) => item.id === record.id);
    let updated: DivinationResult[];
    if (existingIndex >= 0) {
      updated = [...list];
      updated[existingIndex] = record;
    } else {
      updated = [record, ...list];
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save record to localStorage:', err);
  }
}

/**
 * 切换收藏状态
 */
export function toggleFavoriteRecord(id: string): DivinationResult[] {
  try {
    const list = getSavedRecords();
    const updated = list.map((item) => {
      if (item.id === id) {
        return { ...item, isFavorite: !item.isFavorite };
      }
      return item;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to toggle favorite:', err);
    return [];
  }
}

/**
 * 更新用户后续反思笔记
 */
export function updateRecordNotes(id: string, notes: string): DivinationResult[] {
  try {
    const list = getSavedRecords();
    const updated = list.map((item) => {
      if (item.id === id) {
        return { ...item, userNotes: notes };
      }
      return item;
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to update notes:', err);
    return [];
  }
}

/**
 * 删除单条记录
 */
export function deleteRecord(id: string): DivinationResult[] {
  try {
    const list = getSavedRecords();
    const updated = list.filter((item) => item.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (err) {
    console.error('Failed to delete record:', err);
    return [];
  }
}

/**
 * 清空所有记录
 */
export function clearAllRecords(): void {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (err) {
    console.error('Failed to clear records:', err);
  }
}

/**
 * 声音偏好设置
 */
export function getSoundPreference(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const raw = localStorage.getItem(SOUND_PREF_KEY);
    return raw === 'true'; // 默认 false（关闭）
  } catch {
    return false;
  }
}

export function setSoundPreference(enabled: boolean): void {
  try {
    localStorage.setItem(SOUND_PREF_KEY, String(enabled));
  } catch {
    // ignore
  }
}
