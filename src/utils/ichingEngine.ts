import {
  YaoValue,
  YaoPolarity,
  ChangingYao,
  HexagramData,
  DivinationResult,
  TopicId,
} from '../types/iching';
import { HEXAGRAMS_BY_BINARY } from '../data/hexagrams';

const POSITION_NAMES = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];

/**
 * 模拟抛掷单枚铜钱：2（背）或 3（字）
 */
export function tossCoin(): 2 | 3 {
  return Math.random() < 0.5 ? 2 : 3;
}

/**
 * 模拟一次掷三枚铜钱，得到一爻的数值（6, 7, 8, 9）
 * 6: 老阴 (2+2+2)
 * 7: 少阳 (2+2+3, 2+3+2, 3+2+2)
 * 8: 少阴 (2+3+3, 3+2+3, 3+3+2)
 * 9: 老阳 (3+3+3)
 */
export function generateSingleYao(): YaoValue {
  const c1 = tossCoin();
  const c2 = tossCoin();
  const c3 = tossCoin();
  return (c1 + c2 + c3) as YaoValue;
}

/**
 * 将数值转为本卦的阴阳极性：
 * 7, 9 为阳 (1)
 * 6, 8 为阴 (0)
 */
export function yaoValueToPolarity(val: YaoValue): YaoPolarity {
  return val === 7 || val === 9 ? 1 : 0;
}

/**
 * 动爻判定与变极性：
 * 6（老阴）变为阳 (1)
 * 9（老阳）变为阴 (0)
 * 7, 8 不变
 */
export function getChangedPolarity(val: YaoValue): YaoPolarity {
  if (val === 6) return 1;
  if (val === 9) return 0;
  return yaoValueToPolarity(val);
}

/**
 * 获取爻的标准称谓（如：初九、六二、上六等）
 */
export function getYaoName(position: number, polarity: YaoPolarity): string {
  const isYang = polarity === 1;
  const tag = isYang ? '九' : '六';
  if (position === 0) return `初${tag}`;
  if (position === 5) return `上${tag}`;
  const posChinese = ['初', '二', '三', '四', '五', '上'][position];
  return `${tag}${posChinese}`;
}

/**
 * 为不同动爻位置提供易理反思指引
 */
export function getYaoActionGuidance(position: number, fromValue: 6 | 9): string {
  const isYangMoving = fromValue === 9;
  switch (position) {
    case 0:
      return isYangMoving
        ? '初爻阳动：起步势头旺盛，切忌急于显山露水，潜心积累胜过贸然出击。'
        : '初爻阴动：底层基础初现转机，从微小习惯与日常细节着手，稳扎稳打。';
    case 1:
      return isYangMoving
        ? '二爻阳动：渐入佳境，处在关键执行位，以谦和包容的心态凝聚身旁支持者。'
        : '二爻阴动：柔顺守中，多倾听一线与合作者的声音，切勿被情绪牵引。';
    case 2:
      return isYangMoving
        ? '三爻阳动：下卦顶端，进退之间阻力与摩擦较多，时刻反求诸己，不可刚愎自用。'
        : '三爻阴动：处于转型交界，切莫因左右摇摆而心生畏难，明确底线方得保全。';
    case 3:
      return isYangMoving
        ? '四爻阳动：近君之位，责任与关注度激增，恪尽职守、光明磊落方能无咎。'
        : '四爻阴动：柔顺承上启下，发挥良好沟通协调纽带作用，莫争一时虚荣。';
    case 4:
      return isYangMoving
        ? '五爻阳动：主导核心，大展宏图之际，务必秉持公道大义，广聚众智而非独断。'
        : '五爻阴动：柔德居尊，以虚怀若谷的包容力赢得众人信赖，善用能人。';
    case 5:
      return isYangMoving
        ? '上爻阳动：极亢之境，慎防过犹不及、高处不胜寒，适时退让收敛方保圆满。'
        : '上爻阴动：穷极求变，旧的周期正在落幕，放下过往执念，从容拥抱新生。';
    default:
      return '审视所处位置的变化，顺势而为，不固执于一时得失。';
  }
}

/**
 * 核心纯函数：从 6 个爻值（从下到上 0 到 5）准确推导本卦、动爻和变卦
 */
export function calculateDivination(
  rawValues: YaoValue[],
  topicId: TopicId,
  question: string,
  customId?: string,
  customDate?: string
): DivinationResult {
  if (rawValues.length !== 6) {
    throw new Error('起卦必须提供完整的六爻数值（从下到上共6个）');
  }

  // 1. 本卦 6 位二进制（从下到上）
  const originalPolarities: YaoPolarity[] = rawValues.map(yaoValueToPolarity);
  const originalBinary = originalPolarities.join('');
  const originalHexagram: HexagramData | undefined = HEXAGRAMS_BY_BINARY[originalBinary];

  if (!originalHexagram) {
    throw new Error(`无法找到本卦数据，二进制编码为: ${originalBinary}`);
  }

  // 2. 动爻检测
  const changingLines: ChangingYao[] = [];
  rawValues.forEach((val, idx) => {
    if (val === 6 || val === 9) {
      const fromPolarity = yaoValueToPolarity(val);
      const toPolarity = getChangedPolarity(val);
      changingLines.push({
        position: idx,
        positionName: POSITION_NAMES[idx],
        yaoName: getYaoName(idx, fromPolarity),
        fromValue: val,
        fromPolarity,
        toPolarity,
        actionGuidance: getYaoActionGuidance(idx, val),
      });
    }
  });

  const hasChangingLines = changingLines.length > 0;

  // 3. 变卦推导
  let changedHexagram: HexagramData | null = null;
  if (hasChangingLines) {
    const changedPolarities: YaoPolarity[] = rawValues.map(getChangedPolarity);
    const changedBinary = changedPolarities.join('');
    changedHexagram = HEXAGRAMS_BY_BINARY[changedBinary] || null;
    if (!changedHexagram) {
      throw new Error(`无法找到变卦数据，二进制编码为: ${changedBinary}`);
    }
  }

  const id = customId || `wenjing_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
  const createdAt = customDate || new Date().toISOString();

  return {
    id,
    createdAt,
    topicId,
    question,
    rawValues,
    originalHexagram,
    changingLines,
    changedHexagram,
    hasChangingLines,
  };
}

/**
 * 完整模拟起卦全流程：
 * 生成 6 爻（从下到上），并计算结果
 */
export function generateDivination(topicId: TopicId, question: string): DivinationResult {
  const rawValues: YaoValue[] = [
    generateSingleYao(),
    generateSingleYao(),
    generateSingleYao(),
    generateSingleYao(),
    generateSingleYao(),
    generateSingleYao(),
  ];

  return calculateDivination(rawValues, topicId, question);
}
