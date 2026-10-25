export interface MentorConfig {
  enabled: boolean; // 是否开放导师咨询
  name: string; // 导师姓名
  title: string; // 导师头衔
  bio: string; // 简短真实背景介绍
  avatarUrl?: string; // 头像链接（若无则展示典雅印章字样）
  whatsappNumber: string; // WhatsApp 号码（国际格式，如 +8613800000000 或留空）
  notice: string; // 提示文案
}
