import { MentorConfig } from '../types/mentor';

/**
 * 导师咨询统一配置文件
 *
 * 当 enabled 为 false 或 whatsappNumber 为空时：
 * 系统会真实显示“导师咨询即将开放”，绝不虚构履历或假装已连接。
 *
 * 当配置了真实资料后：
 * 用户在点击时会预览沟通内容，并自主勾选是否附带当前卦象与问题，
 * 点击“前往 WhatsApp”跳转，由用户自行发送。
 */
export const defaultMentorConfig: MentorConfig = {
  enabled: false, // 设为 true 并填写真实号码即可启用
  name: "林清玄（字隐舟）",
  title: "传统易学研修者 · 心理学反思顾问",
  bio: "研习传统易理十二载，致力于将经典东方哲思转化为现代人的清晰决策与心理调适路径。",
  avatarUrl: "", // 可放置真实照片路径，留空则展示东方儒雅印章风格
  whatsappNumber: "", // 例如: "+85298765432"，留空表示尚未接入真实联络
  notice: "每次对话均为一对一深度交流，适合面临关键决策、反复权衡或重大转折期的朋友。",
};
