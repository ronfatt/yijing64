import { TopicId, TopicInfo } from '../types/iching';

export const TOPICS: Record<TopicId, TopicInfo> = {
  career: {
    id: 'career',
    title: '事业与方向',
    subtitle: '在选择与进退之间，辨清真正的立足点',
    iconName: 'Compass',
    exampleQuestions: [
      '想换一个方向，却一直不敢下决心。',
      '面对当前的晋升与调动，我该如何选择？',
      '工作陷入瓶颈，是该继续深耕还是另寻出路？',
      '我目前最该聚焦的核心能力究竟是什么？',
    ],
    reflectionQuestions: [
      '如果放下对“立即见效”的执念，这项选择在三年后是否依然有价值？',
      '我现在感受到的阻力，究竟是能力不足的信号，还是时机尚未成熟的提醒？',
      '在当前环境中，哪些事情是我真正能控制的，哪些是我该学会放手的？',
    ],
    microActionTip: '列出你当下最犹豫的 2 个选项，各写出一条本周内即可验证的小步低成本测试。',
  },
  finance: {
    id: 'finance',
    title: '合作与财务',
    subtitle: '在信任与利益之间，建立清晰坚韧的边界',
    iconName: 'Scale',
    exampleQuestions: [
      '这次合作，我该如何判断对方的诚意与风险？',
      '面对一笔新的投入，现在是合适的节点吗？',
      '合作伙伴之间出现意见分歧，该怎样平衡推进？',
      '如何应对眼前暂时的资金与资源紧绷感？',
    ],
    reflectionQuestions: [
      '双方对于“最坏结果”的承受底线，是否已经坦诚且书面化地对齐？',
      '我是否因为渴望快速收益，而忽视了合同与执行细节中的模糊地带？',
      '如果剔除人情与情绪面，仅看事实与数字，这项合作的健康度如何？',
    ],
    microActionTip: '列出三个目前尚未完全确认的合作/财务信息，在明天中午前向相关方书面核实。',
  },
  relationship: {
    id: 'relationship',
    title: '感情与关系',
    subtitle: '在亲密与独立之间，照见彼此真实的内心',
    iconName: 'HeartHandshake',
    exampleQuestions: [
      '这段关系，我该怎样面对与维系？',
      '彼此之间的冷淡与隔阂，该从何处破局？',
      '在付出与被消耗之间，我是否迷失了自我？',
      '是否到了该坦诚沟通核心诉求的关键时刻？',
    ],
    reflectionQuestions: [
      '在争执或冷战中，我是在捍卫自己的尊严，还是在真正表达被理解的渴望？',
      '对方身上让我困扰的特质，是否也映射出我内心深处的某种恐惧或投射？',
      '如果我先给彼此一个安全的空间，放下防御，最想对对方说的一句心里话是什么？',
    ],
    microActionTip: '今天内暂不做任何对抗性反驳，用一句真诚的肯定或感谢开启一次轻松的非事务性交流。',
  },
  growth: {
    id: 'growth',
    title: '学习与成长',
    subtitle: '在浮躁与深耕之间，找回专注自省的力量',
    iconName: 'Sparkles',
    exampleQuestions: [
      '最近有些迷茫，应该先从什么做起？',
      '面对海量知识与信息，怎样摆脱焦虑深入学习？',
      '怎样打破日复一日的倦怠感，重拾生命热情？',
      '我的核心优势该如何系统化地沉淀与输出？',
    ],
    reflectionQuestions: [
      '我是在真正积累底层实力，还是用表面的忙碌来掩盖深层的思考懒惰？',
      '如果要为自己的生活做一次彻底的“断舍离”，哪三项消耗应该立即剔除？',
      '哪个领域哪怕没有掌声与回报，我依然愿意投入心力去研磨探索？',
    ],
    microActionTip: '关掉所有干扰通知 25 分钟，专注完成一件延宕已久却对长期极重要的小任务。',
  },
  life: {
    id: 'life',
    title: '生活与心境',
    subtitle: '在喧嚣与独处之间，安放平和舒展的身心',
    iconName: 'CloudSun',
    exampleQuestions: [
      '这段时间总觉得心绪不宁，该如何平复？',
      '面对突如其来的生活变故，怎样找回主心骨？',
      '如何调和紧绷的生活节奏与疲惫的身体？',
      '在当下这个阶段，我该怎样与自己和解？',
    ],
    reflectionQuestions: [
      '身体最近通过疲惫或酸痛，在向我传递什么长期被忽略的警示？',
      '我是否把太多他人的期待与评价，当成了自己必须背负的责任？',
      '此时此刻，能让我感到片刻安心与踏实的微小事物是什么？',
    ],
    microActionTip: '今晚睡前安排 10 分钟独处时光，不看手机，温水洗漱后写下三件令你心存感激的微小时刻。',
  },
};

export const TOPIC_LIST: TopicInfo[] = [
  TOPICS.career,
  TOPICS.finance,
  TOPICS.relationship,
  TOPICS.growth,
  TOPICS.life,
];
