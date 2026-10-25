import { Trigram } from '../types/iching';

export const TRIGRAMS: Record<string, Trigram> = {
  "111": {
    id: "qian",
    name: "乾",
    symbol: "☰",
    nature: "天",
    lines: [1, 1, 1],
    attribute: "健",
  },
  "000": {
    id: "kun",
    name: "坤",
    symbol: "☷",
    nature: "地",
    lines: [0, 0, 0],
    attribute: "顺",
  },
  "100": {
    id: "zhen",
    name: "震",
    symbol: "☳",
    nature: "雷",
    lines: [1, 0, 0],
    attribute: "动",
  },
  "011": {
    id: "xun",
    name: "巽",
    symbol: "☴",
    nature: "风",
    lines: [0, 1, 1],
    attribute: "入",
  },
  "010": {
    id: "kan",
    name: "坎",
    symbol: "☵",
    nature: "水",
    lines: [0, 1, 0],
    attribute: "陷",
  },
  "101": {
    id: "li",
    name: "离",
    symbol: "☲",
    nature: "火",
    lines: [1, 0, 1],
    attribute: "丽",
  },
  "001": {
    id: "gen",
    name: "艮",
    symbol: "☶",
    nature: "山",
    lines: [0, 0, 1],
    attribute: "止",
  },
  "110": {
    id: "dui",
    name: "兑",
    symbol: "☱",
    nature: "泽",
    lines: [1, 1, 0],
    attribute: "悦",
  },
};

export const TRIGRAM_NAMES_MAP: Record<string, Trigram> = {
  "乾": TRIGRAMS["111"],
  "坤": TRIGRAMS["000"],
  "震": TRIGRAMS["100"],
  "巽": TRIGRAMS["011"],
  "坎": TRIGRAMS["010"],
  "离": TRIGRAMS["101"],
  "艮": TRIGRAMS["001"],
  "兑": TRIGRAMS["110"],
};
