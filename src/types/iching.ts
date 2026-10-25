// 爻的原始抛币数值：6=老阴, 7=少阳, 8=少阴, 9=老阳
export type YaoValue = 6 | 7 | 8 | 9;

// 爻的极性：1=阳, 0=阴
export type YaoPolarity = 0 | 1;

// 动爻信息
export interface ChangingYao {
  position: number; // 0 (初爻) 到 5 (上爻)
  positionName: string; // 初爻、二爻、三爻、四爻、五爻、上爻
  yaoName: string; // 如：初六、九二、六三、九四、六五、上九
  fromValue: YaoValue; // 6 或 9
  fromPolarity: YaoPolarity;
  toPolarity: YaoPolarity;
  actionGuidance?: string; // 动爻对应的行动反思启发
}

// 单个八卦
export interface Trigram {
  id: string; // qian, kun, etc.
  name: string; // 乾, 坤, 震, 巽, 坎, 离, 艮, 兑
  symbol: string; // ☰, ☷, etc.
  nature: string; // 天, 地, 雷, 风, 水, 火, 山, 泽
  lines: [YaoPolarity, YaoPolarity, YaoPolarity]; // 从下到上三爻
  attribute: string; // 健、顺、动、入、陷、丽、止、悦
}

// 64卦数据
export interface HexagramData {
  number: number; // 卦序 1-64
  name: string; // 卦名，如：山水蒙、乾为天
  shortName: string; // 蒙、乾
  symbol: string; // Unicode 卦象，如 ䷃
  upperTrigram: string; // 上卦名，如 "艮"
  lowerTrigram: string; // 下卦名，如 "坎"
  upperNature: string; // 山
  lowerNature: string; // 水
  binary: string; // 从下到上6位二进制，如 "010001"
  coreInsight: string; // 核心启发，例如 "先看清，再决定。"
  summary: string; // 现代反思短文
  keywords: string[]; // 2-3 个核心反思词，如 ["辨明", "求知", "待机"]
  modernReflection: string[]; // 2-3 段易读的现代反思解读
}

// 起卦完整结果
export interface DivinationResult {
  id: string;
  createdAt: string; // ISO 格式时间
  topicId: TopicId;
  question: string;
  rawValues: YaoValue[]; // 长度为6，从下到上 [初, 二, 三, 四, 五, 上]
  originalHexagram: HexagramData;
  changingLines: ChangingYao[];
  changedHexagram: HexagramData | null; // 无动爻时为 null 或与 original 相同
  hasChangingLines: boolean;
  userNotes?: string;
  isFavorite?: boolean;
}

// 5 大主题
export type TopicId = 'career' | 'finance' | 'relationship' | 'growth' | 'life';

export interface TopicInfo {
  id: TopicId;
  title: string;
  subtitle: string;
  iconName: string;
  exampleQuestions: string[];
  reflectionQuestions: string[]; // 围绕主题的 3 个深度反思问题
  microActionTip: string; // 今日可执行的一步小行动模版
}
