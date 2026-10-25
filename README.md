# 问境 WENJING

> **一念之间，看见方向。**
> 融合东方美学、易经文化与自我反思的现代互动体验 Web App。

---

## 🎨 东方设计视觉系统

- **宣纸白** (`#F7F3EB`)：主要背景与呼吸留白
- **朱砂红** (`#A9322D`)：主要按钮、动爻标记与关键强调
- **深酒红** (`#461F24`)：沉浸式静心与起卦全屏场景
- **哑金** (`#B59A64`)：卦象印记、边框与细节装饰
- **墨色** (`#292722`)：正文排版与清晰阅读
- **灰褐** (`#80796E`)：辅助说明文字

---

## 🚀 启动与运行

### 1. 开发模式
```bash
npm run dev
```
访问本地地址：`http://localhost:5173/`

### 2. 生产预览
```bash
npm run build
npm run preview
```

### 3. 运行自动化单元测试
```bash
npm test
```
（包含针对八卦二进制、六爻由下至上生成、乾坤本卦、山水蒙变地水师、无动爻与多动爻的全部断言测试）

---

## 📂 项目架构与关键数据文件

```
src/
├── types/
│   ├── iching.ts           # 爻、八卦、64卦、主题、起卦记录类型定义
│   └── mentor.ts           # 导师配置类型
├── data/
│   ├── trigrams.ts         # 八卦（乾坤震巽坎离艮兑）与二进制对应表
│   ├── hexagrams.ts        # 完整 64 卦详实数据（卦序、卦名、上下卦、核心启发、现代反思短文）
│   ├── themes.ts           # 5 大核心主题（事业、财务、感情、成长、生活）的反思问题与微行动
│   └── mentorConfig.ts     # 导师咨询统一配置文件（姓名、简介、WhatsApp 号码等）
├── utils/
│   ├── ichingEngine.ts     # 核心起卦纯函数（三钱代蓍法、六爻由下至上推导、动爻与变卦）
│   ├── ichingEngine.test.ts # 单元测试（乾、坤、蒙变师、多动爻验证）
│   ├── soundEngine.ts      # Web Audio 东方雅磬/钟鸣音频合成器（无需外置音频文件）
│   ├── storage.ts          # localStorage 安全存储与容错
│   └── shareCardCanvas.ts  # Canvas 高清 1080P 分享卡渲染引擎（4:5 与 9:16，双风格，真实导出）
├── components/
│   ├── Header.tsx          # 品牌标识、桌面导航、声音开关
│   ├── Navigation.tsx      # 移动端沉浸式底部导航（带安全区适配）
│   ├── HexagramVisual.tsx  # 矢量六爻渲染组件（支持阳爻、阴爻、动爻朱砂点、升起动画）
│   ├── BreathCircle.tsx    # 4 秒舒缓呼吸引导光圈（吸气/呼气/可随时跳过）
│   ├── ShareCardModal.tsx  # 分享卡生成弹窗（实时画布、两种比例、两种风格、真实 PNG 下载）
│   ├── MentorModal.tsx     # 真实配置驱动的导师咨询弹窗（带隐私勾选与 WhatsApp 唤起）
│   └── NoteEditorModal.tsx # 记录后续行动反思笔记编辑弹窗
├── views/
│   ├── HomeView.tsx        # 页面一：首页与提问（5 主题入口、推荐示例、字数统计）
│   ├── DivinationView.tsx  # 页面二：静心与起卦（深酒红沉浸场景、逐爻升起动画、跳过机制）
│   ├── ResultView.tsx      # 页面三：解读结果（东方艺术卡片、3 个反思问题、1 步小行动、变卦对比）
│   ├── RecordsView.tsx     # 页面五：我的记录（分类筛选、收藏切换、添加后续行动笔记）
│   └── AboutView.tsx       # 页面六：关于问境（品牌主张、文化来源、伦理边界声明）
├── App.tsx
├── main.tsx
└── index.css
```

---

## ⚙️ 导师咨询配置说明

配置文件路径：`src/data/mentorConfig.ts`

- 当 `enabled: false` 或 `whatsappNumber: ""` 时：
  系统真实显示“导师咨询即将开放”，绝不虚构虚假预约或客服机器人。
- 当填写真实 WhatsApp 号码（如 `+85298765432`）并将 `enabled: true` 时：
  用户点击“与导师深度聊聊”会打开预览弹窗，自主勾选是否附带本次卦象和困惑，点击“前往 WhatsApp”在新标签页中唤起用户客户端由其亲自发送。

---

## 🛡️ Demo 限制说明

1. 记录存储于当前浏览器的本地 `localStorage`，清除浏览器数据后将重置，非跨设备云端存储。
2. 解读内容为结构化编纂的现代生活与决策反思，不接入消耗性 AI Token，亦不声称洞悉未来。
3. 声音引擎基于 Web Audio API 振荡器实时合成，符合现代浏览器“用户交互后才发声”的音频安全规范。
