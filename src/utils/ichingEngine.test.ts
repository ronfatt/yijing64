import { describe, it, expect } from 'vitest';
import { calculateDivination, yaoValueToPolarity, getChangedPolarity } from './ichingEngine';
import { HEXAGRAMS_BY_BINARY } from '../data/hexagrams';

describe('易经起卦与卦象推导引擎测试', () => {
  it('应准确映射八卦与全64卦二进制编码', () => {
    expect(Object.keys(HEXAGRAMS_BY_BINARY).length).toBe(64);
  });

  it('验证乾为天：六爻全阳（少阳），无动爻', () => {
    const result = calculateDivination([7, 7, 7, 7, 7, 7], 'career', '关于创业规划');
    expect(result.originalHexagram.name).toBe('乾为天');
    expect(result.originalHexagram.number).toBe(1);
    expect(result.originalHexagram.binary).toBe('111111');
    expect(result.hasChangingLines).toBe(false);
    expect(result.changingLines.length).toBe(0);
    expect(result.changedHexagram).toBeNull();
  });

  it('验证坤为地：六爻全阴（少阴），无动爻', () => {
    const result = calculateDivination([8, 8, 8, 8, 8, 8], 'growth', '关于个人修养');
    expect(result.originalHexagram.name).toBe('坤为地');
    expect(result.originalHexagram.number).toBe(2);
    expect(result.originalHexagram.binary).toBe('000000');
    expect(result.hasChangingLines).toBe(false);
  });

  it('验证山水蒙：下坎上艮', () => {
    // 下坎(水): 0, 1, 0 (少阴, 少阳, 少阴: 8, 7, 8)
    // 上艮(山): 0, 0, 1 (少阴, 少阴, 少阳: 8, 8, 7)
    // 从下到上: [8, 7, 8, 8, 8, 7]
    const result = calculateDivination([8, 7, 8, 8, 8, 7], 'finance', '这次合作该如何判断');
    expect(result.originalHexagram.name).toBe('山水蒙');
    expect(result.originalHexagram.shortName).toBe('蒙');
    expect(result.originalHexagram.number).toBe(4);
    expect(result.originalHexagram.binary).toBe('010001');
    expect(result.originalHexagram.lowerTrigram).toBe('坎');
    expect(result.originalHexagram.upperTrigram).toBe('艮');
  });

  it('验证题目关键要求：蒙卦仅上爻变化，应得到地水师', () => {
    // 蒙卦原始: 0, 1, 0, 0, 0, 1
    // 仅上爻变化: 上爻为 9 (老阳，阳动变阴)
    // 其余五爻不变: 8(阴), 7(阳), 8(阴), 8(阴), 8(阴)
    const rawValues = [8, 7, 8, 8, 8, 9] as const;
    const result = calculateDivination([...rawValues], 'career', '面对新机会我该留意什么');

    // 1. 验证本卦是山水蒙
    expect(result.originalHexagram.name).toBe('山水蒙');

    // 2. 验证仅有1个动爻，且为上爻上九
    expect(result.hasChangingLines).toBe(true);
    expect(result.changingLines.length).toBe(1);
    expect(result.changingLines[0].position).toBe(5);
    expect(result.changingLines[0].positionName).toBe('上爻');
    expect(result.changingLines[0].yaoName).toBe('上九');
    expect(result.changingLines[0].fromPolarity).toBe(1);
    expect(result.changingLines[0].toPolarity).toBe(0);

    // 3. 验证变卦为地水师
    expect(result.changedHexagram).not.toBeNull();
    expect(result.changedHexagram?.name).toBe('地水师');
    expect(result.changedHexagram?.number).toBe(7);
    expect(result.changedHexagram?.binary).toBe('010000');
    expect(result.changedHexagram?.lowerTrigram).toBe('坎');
    expect(result.changedHexagram?.upperTrigram).toBe('坤');
  });

  it('验证多动爻处理：初爻与五爻同时动', () => {
    // 乾为天 6爻老阳与少阳混杂
    // 初爻 9 (阳动变阴), 二爻 7 (阳不变), 三爻 7 (阳不变), 四爻 7 (阳不变), 五爻 9 (阳动变阴), 上爻 7 (阳不变)
    // 原始: [9, 7, 7, 7, 9, 7] -> 本卦全阳 (111111 = 乾为天)
    // 变化后: 初爻变成0，五爻变成0 -> [0, 1, 1, 1, 0, 1]
    // 下卦: 0, 1, 1 = 巽 (风)
    // 上卦: 1, 0, 1 = 离 (火)
    // 火风鼎 (50)
    const result = calculateDivination([9, 7, 7, 7, 9, 7], 'growth', '怎样破局');
    expect(result.originalHexagram.name).toBe('乾为天');
    expect(result.changingLines.length).toBe(2);
    expect(result.changingLines[0].position).toBe(0);
    expect(result.changingLines[0].yaoName).toBe('初九');
    expect(result.changingLines[1].position).toBe(4);
    expect(result.changingLines[1].yaoName).toBe('九五');
    expect(result.changedHexagram?.name).toBe('火风鼎');
  });

  it('单爻极性与动爻转换正确性', () => {
    expect(yaoValueToPolarity(6)).toBe(0);
    expect(yaoValueToPolarity(7)).toBe(1);
    expect(yaoValueToPolarity(8)).toBe(0);
    expect(yaoValueToPolarity(9)).toBe(1);

    expect(getChangedPolarity(6)).toBe(1);
    expect(getChangedPolarity(7)).toBe(1);
    expect(getChangedPolarity(8)).toBe(0);
    expect(getChangedPolarity(9)).toBe(0);
  });
});
