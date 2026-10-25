import { HexagramData } from '../types/iching';

export const HEXAGRAMS: HexagramData[] = [
  {
    number: 1,
    name: "乾为天",
    shortName: "乾",
    symbol: "䷀",
    upperTrigram: "乾",
    lowerTrigram: "乾",
    upperNature: "天",
    lowerNature: "天",
    binary: "111111",
    coreInsight: "行稳致远，刚健自持。",
    summary: "此时充满势能与主动性，但越是有力的时候，越要保持内在清醒与谦逊克制。",
    keywords: ["自强", "笃定", "戒骄"],
    modernReflection: [
      "乾卦象征纯粹的生机与开拓力。你当下所面临的事，具有很大的空间与主导权，关键在于自己能否守住核心初衷。",
      "有力量并不意味着可以莽撞前行。越是处于主动地位，越容易因急于求成而忽略周围细节。适时收敛锋芒，更能行之长远。",
      "把目光放在真正值得投入的长期目标上，用持续稳定的步调代替短期的用力过猛。"
    ]
  },
  {
    number: 2,
    name: "坤为地",
    shortName: "坤",
    symbol: "䷁",
    upperTrigram: "坤",
    lowerTrigram: "坤",
    upperNature: "地",
    lowerNature: "地",
    binary: "000000",
    coreInsight: "包容承载，顺势而为。",
    summary: "当下宜守不宜强攻。给予事情生长的空间与时间，善于倾听和配合往往比强出头更有力量。",
    keywords: ["包容", "厚实", "沉潜"],
    modernReflection: [
      "坤卦代表大地的宽广厚德与蓄纳之力。很多时候，不是每一件事都要立刻由自己主导或强求结果。",
      "学会在合适的位置做支持者与观察者，看清各方需求与环境脉络，接纳过程中的不完美与曲折。",
      "慢一点，把地基打稳。给他人多一些信任，也给自己一段安心沉潜的时光。"
    ]
  },
  {
    number: 3,
    name: "水雷屯",
    shortName: "屯",
    symbol: "䷂",
    upperTrigram: "坎",
    lowerTrigram: "震",
    upperNature: "水",
    lowerNature: "雷",
    binary: "100010",
    coreInsight: "萌芽之初，莫急破土。",
    summary: "一切才刚刚开始，混沌与迷茫是新生的常态。先理顺秩序、积累资源，不急于全面铺开。",
    keywords: ["初生", "蓄势", "理顺"],
    modernReflection: [
      "屯卦如同一粒草木种子在泥土深处破土前的状态。你感到阻力与繁琐，不是因为方向错了，而是万事起头难。",
      "在这个阶段，建立最基本的规矩与节奏，比追求宏大的成就重要得多。不要被初期的混乱扰乱心绪。",
      "寻找能够指点迷津的伙伴或前辈，一点一点把阻滞理清，静待春雷后蓬勃生长。"
    ]
  },
  {
    number: 4,
    name: "山水蒙",
    shortName: "蒙",
    symbol: "䷃",
    upperTrigram: "艮",
    lowerTrigram: "坎",
    upperNature: "山",
    lowerNature: "水",
    binary: "010001",
    coreInsight: "先看清，再决定。",
    summary: "面对还不熟悉的处境，先求理解，再谈推进。承认认知边界是获得明朗的第一步。",
    keywords: ["启蒙", "求真", "慎行"],
    modernReflection: [
      "蒙卦象征山下出泉、前路雾气未散。当下最大的挑战不是客观条件的艰难，而是信息与理解的盲区。",
      "不要在没有核实事实之前凭直觉贸然下注。带着初学者的虚心去提问、去查证、去请教懂行之人。",
      "承认自己‘暂时不知道’并不是软弱，而是为真正的明晰与智慧腾出入口。"
    ]
  },
  {
    number: 5,
    name: "水天需",
    shortName: "需",
    symbol: "䷄",
    upperTrigram: "坎",
    lowerTrigram: "乾",
    upperNature: "水",
    lowerNature: "天",
    binary: "111010",
    coreInsight: "静候时机，从容自养。",
    summary: "等待不是消极放弃，而是在险阻面前保持耐力，充实内在能量，待风浪平息再渡江。",
    keywords: ["蓄力", "守候", "从容"],
    modernReflection: [
      "需卦提示我们：时机未到时强行推进，往往事倍功半甚至招致波折。眼前的停顿正是必要的准备期。",
      "在等待的过程中，过好当下的每一餐、每一天，调整作息与心态，把生活的基本秩序打理妥当。",
      "当外部条件成熟时，蓄满力量的你自能水到渠成、轻舟过万重山。"
    ]
  },
  {
    number: 6,
    name: "天水讼",
    shortName: "讼",
    symbol: "䷅",
    upperTrigram: "乾",
    lowerTrigram: "坎",
    upperNature: "天",
    lowerNature: "水",
    binary: "010111",
    coreInsight: "息争止步，反求诸己。",
    summary: "分歧与争辩往往带来消耗。即便有理，也不必咄咄逼人，尽早寻找共识与体面的台阶。",
    keywords: ["化解", "止争", "共识"],
    modernReflection: [
      "讼卦描绘了天行向西、水流向东，方向背离产生的内在摩擦。坚持争个胜负往往会演变成资源与情绪的双重透支。",
      "试着站在对方的立场看一看争执的根源，区分哪些是事实问题，哪些是立场与自尊心在作祟。",
      "退一步并不等于认输，主动建立建设性对话，常常能避免更大的风险与对立。"
    ]
  },
  {
    number: 7,
    name: "地水师",
    shortName: "师",
    symbol: "䷆",
    upperTrigram: "坤",
    lowerTrigram: "坎",
    upperNature: "地",
    lowerNature: "水",
    binary: "010000",
    coreInsight: "纪律严明，众志成城。",
    summary: "面对复杂的群体行动或重要项目，清晰的规则、责任分工与主心骨是取胜的核心关键。",
    keywords: ["统筹", "秩序", "严谨"],
    modernReflection: [
      "师卦象征水藏地中、蕴蓄兵力。当前的事情需要高度的组织力与纪律性，不能仅靠随性的热情驱动。",
      "明确每个环节谁来负责、何时交付、标准为何。建立清晰的共识防线，方能应对突发挑战。",
      "领头者需秉持正义公允之心，用明确的规则保护所有人，减少内耗。"
    ]
  },
  {
    number: 8,
    name: "水地比",
    shortName: "比",
    symbol: "䷇",
    upperTrigram: "坎",
    lowerTrigram: "坤",
    upperNature: "水",
    lowerNature: "地",
    binary: "000010",
    coreInsight: "亲和互信，择善而从。",
    summary: "水润大地，亲密融合。寻找真正志同道合的伙伴，真诚坦率地沟通，彼此成就。",
    keywords: ["互信", "结盟", "坦诚"],
    modernReflection: [
      "比卦表达的是一种自然的依附与合作之美。孤军奋战往往吃力，找到值得信赖的人同行至关重要。",
      "建立亲密与信任的前提是真诚无欺，不抱算计心态。先给予别人可靠感，自会吸引良善力量围绕。",
      "及时回应同伴的关切，不要因犹豫不决而错失携手共进的最佳时机。"
    ]
  },
  {
    number: 9,
    name: "风天小畜",
    shortName: "小畜",
    symbol: "䷈",
    upperTrigram: "巽",
    lowerTrigram: "乾",
    upperNature: "风",
    lowerNature: "天",
    binary: "111011",
    coreInsight: "微风细雨，积小成大。",
    summary: "密云不雨，尚在蓄势。做好一件件琐碎细致的小事，用点滴积累换取未来的质变突破。",
    keywords: ["微调", "细致", "渐进"],
    modernReflection: [
      "小畜卦如风行天上，虽有积蓄但力道尚显有限。此时不适宜大开大合的剧烈变革，应注重细节雕琢。",
      "把大目标拆解为当下触手可及的微小行动，把一份文档、一次谈话、一个细节打磨透彻。",
      "耐心对待暂时的平淡，涓涓细流终能汇聚成奔腾的江河。"
    ]
  },
  {
    number: 10,
    name: "天泽履",
    shortName: "履",
    symbol: "䷉",
    upperTrigram: "乾",
    lowerTrigram: "兑",
    upperNature: "天",
    lowerNature: "泽",
    binary: "110111",
    coreInsight: "步步为营，知礼慎行。",
    summary: "履险如夷。行事遵守规矩、尊重边界与常识，即便面对威严长上或复杂局势也能化险为夷。",
    keywords: ["审慎", "分寸", "礼敬"],
    modernReflection: [
      "履卦寓意履虎尾而不咥人，说明虽身处敏感或高要求的处境，只要分寸得当、举止端正，便能安然度过。",
      "注意言语与行动的界限，不要因一时的侥幸而逾越规则或得罪关键人物。敬畏风险，方得保全。",
      "用柔和的心态应对刚强的事物，保持谦和礼貌，路自然越走越宽。"
    ]
  },
  {
    number: 11,
    name: "地天泰",
    shortName: "泰",
    symbol: "䷊",
    upperTrigram: "坤",
    lowerTrigram: "乾",
    upperNature: "地",
    lowerNature: "天",
    binary: "111000",
    coreInsight: "通达融洽，顺天应人。",
    summary: "天地交泰，阴阳相通。内外通畅，正处于良性发展期，宜把握良机，巩固基础并防患未然。",
    keywords: ["通达", "融洽", "居安思危"],
    modernReflection: [
      "泰卦象征天地之气互相交感，沟通顺畅，各项事物正在向好的方向聚合流动。",
      "在顺风顺水之时，尤其要对身边支持你的人心存感恩，主动分享收益，凝聚人心。",
      "记住万物消长之理，处于顺境时不忘修补漏洞，为将来的波动打下坚实储备。"
    ]
  },
  {
    number: 12,
    name: "天地否",
    shortName: "否",
    symbol: "䷋",
    upperTrigram: "乾",
    lowerTrigram: "坤",
    upperNature: "天",
    lowerNature: "地",
    binary: "000111",
    coreInsight: "守正自保，静待转机。",
    summary: "闭塞不通，沟通受阻。不必强行辩解或盲目投入，守住内心的底线与元气，等待低谷过去。",
    keywords: ["沉潜", "守心", "转念"],
    modernReflection: [
      "否卦意味着天地不交、万物不通，外部反馈可能迟滞甚至充满误解与阻隔。",
      "面对阻滞，勉强硬碰往往两败俱伤。收拢资源，减少不必要的对外消耗，转向内在的修炼与反思。",
      "低谷是所有伟大转变的孕育场。守住自己的道义与准则，待乌云散去，朗日自现。"
    ]
  },
  {
    number: 13,
    name: "天火同人",
    shortName: "同人",
    symbol: "䷌",
    upperTrigram: "乾",
    lowerTrigram: "离",
    upperNature: "天",
    lowerNature: "火",
    binary: "101111",
    coreInsight: "坦诚开朗，求同存异。",
    summary: "走出小圈子，在大格局中寻找共鸣。公开透明的合作理念能够赢得更广泛的支持与信任。",
    keywords: ["大同", "透明", "开阔"],
    modernReflection: [
      "同人卦如光明照耀广阔天空，象征破除门户之见、以天下为公的胸怀去广纳善意与贤才。",
      "放下个人的狭隘偏见与小算盘，把注意力聚焦在大家的共同愿景上，让沟通在阳光下发生。",
      "主动跨界交流，与不同背景的人建立真诚联结，将为你打开全新的眼界与格局。"
    ]
  },
  {
    number: 14,
    name: "火天大有",
    shortName: "大有",
    symbol: "䷍",
    upperTrigram: "离",
    lowerTrigram: "乾",
    upperNature: "火",
    lowerNature: "天",
    binary: "111101",
    coreInsight: "富而好礼，兼善天下。",
    summary: "日正当中，丰硕广有。收获之时切忌骄狂奢靡，用智慧与德行善待所拥有的财富与影响力。",
    keywords: ["丰盛", "德行", "回馈"],
    modernReflection: [
      "大有卦呈现出红日高悬天宇的盛大景象。你所问的事情当下具有充沛的资源支持与较好基础。",
      "拥有得越多，责任与考验也就越大。真正的富足不在于占有，而在于能否明智且善意地运用它们。",
      "抑恶扬善，以温和而坚定的态度对待周遭，把丰盛的成果转化为长久的福泽。"
    ]
  },
  {
    number: 15,
    name: "地山谦",
    shortName: "谦",
    symbol: "䷎",
    upperTrigram: "坤",
    lowerTrigram: "艮",
    upperNature: "地",
    lowerNature: "山",
    binary: "001000",
    coreInsight: "高山藏地，谦逊受益。",
    summary: "真正的崇高往往深藏于平实之中。低调做人、踏实做事，不与人争高下，福泽反而自来。",
    keywords: ["谦逊", "低调", "稳重"],
    modernReflection: [
      "谦卦是易经六十四卦中唯一六爻皆吉之卦，高山甘愿处身于平地之下，展示了至深的大智慧。",
      "越有才华与成绩，越要收敛虚浮的骄气。虚怀若谷才能吸纳新知，平和待人方能聚拢人和。",
      "不抢风头，不争口舌短长，将功劳与赞誉分享给他人，你的前路自然畅行无阻。"
    ]
  },
  {
    number: 16,
    name: "雷地豫",
    shortName: "豫",
    symbol: "䷏",
    upperTrigram: "震",
    lowerTrigram: "坤",
    upperNature: "雷",
    lowerNature: "地",
    binary: "000100",
    coreInsight: "顺势而乐，防怠防怠。",
    summary: "雷出地奋，愉悦振奋。享受进展与欢乐的同时，需保持清醒戒备，切勿沉湎安乐而荒废正事。",
    keywords: ["欢悦", "振奋", "防沉溺"],
    modernReflection: [
      "豫卦代表春雷响彻大地、万物欢欣舒展。事情正在出现令人鼓舞的生机与热情。",
      "保持适度的愉悦与团队士气能极大地提升效率，但欢愉不可演变为盲目乐观或纪律松懈。",
      "制定明确的目标计划，在欢乐的氛围中稳步推进关键事务，方得始终。"
    ]
  },
  {
    number: 17,
    name: "泽雷随",
    shortName: "随",
    symbol: "䷐",
    upperTrigram: "兑",
    lowerTrigram: "震",
    upperNature: "泽",
    lowerNature: "雷",
    binary: "100110",
    coreInsight: "随方就圆，顺时应变。",
    summary: "不执拗己见，顺应潮流与大势。放下固步自封的固执，随时势而调整策略与步调。",
    keywords: ["顺应", "变通", "适时"],
    modernReflection: [
      "随卦象征泽中有雷，顺时而动。当前处境需要你具备极高的柔韧度与适应力，不可死板教条。",
      "倾听环境的声音与他人的合理建议，适时修正自己的固化想法。顺应规律并不是盲从，而是顺应客观真实。",
      "在变动中保持核心价值观不变，形式与手段则可灵活万千。"
    ]
  },
  {
    number: 18,
    name: "山风蛊",
    shortName: "蛊",
    symbol: "䷑",
    upperTrigram: "艮",
    lowerTrigram: "巽",
    upperNature: "山",
    lowerNature: "风",
    binary: "011001",
    coreInsight: "革除积弊，重振新机。",
    summary: "器物久置易生虫，事情积压易生腐。勇敢面对历史遗留问题，深层次清理积弊，迎来新生。",
    keywords: ["除弊", "整肃", "新生"],
    modernReflection: [
      "蛊卦警示我们：旧有的习惯、隐瞒的问题或模糊不清的协议，正在成为拖累发展的隐患。",
      "逃避问题只会让成本不断推高。现在正是下定决心排查根源、快刀斩乱麻的最佳窗口期。",
      "清理旧秩序往往伴随暂时的阵痛，但唯有敢于直面，才能为清新的活水腾出空间。"
    ]
  },
  {
    number: 19,
    name: "地泽临",
    shortName: "临",
    symbol: "䷒",
    upperTrigram: "坤",
    lowerTrigram: "兑",
    upperNature: "地",
    lowerNature: "泽",
    binary: "110000",
    coreInsight: "春意渐盛，亲临督导。",
    summary: "阳气升发，好运降临。此时宜亲力亲为、靠前指挥，同时深谋远虑，防备后续周期的转折。",
    keywords: ["临场", "主导", "未雨绸缪"],
    modernReflection: [
      "临卦如春风渐暖，万物欣欣向荣。你的处境正迎来有利的发展窗口，应当积极主动投入。",
      "走到现场去，深入一线了解真实情况，用亲和与严谨并存的态度指导推进，能收到显著成效。",
      "记住‘至于八月有凶’的古训：好景正长时，就要提前储备应对严冬的资粮。"
    ]
  },
  {
    number: 20,
    name: "风地观",
    shortName: "观",
    symbol: "䷓",
    upperTrigram: "巽",
    lowerTrigram: "坤",
    upperNature: "风",
    lowerNature: "地",
    binary: "000011",
    coreInsight: "静观默会，端正身心。",
    summary: "风吹拂于大地之上。此时更适合作为观察者去洞察全局，以自身的端正与专业树立榜样。",
    keywords: ["观察", "洞察", "示范"],
    modernReflection: [
      "观卦强调观察与被观察的双重智慧。与其盲目插手细节，不如退后半步看清大势所趋。",
      "人们不仅在听你说什么，更在看你怎样做。用你的稳定、自律与专业度去无声地影响他人。",
      "通过深邃的静观，许多原先看不清的纠葛与脉络会自然浮出水面。"
    ]
  },
  {
    number: 21,
    name: "火雷噬嗑",
    shortName: "噬嗑",
    symbol: "䷔",
    upperTrigram: "离",
    lowerTrigram: "震",
    upperNature: "火",
    lowerNature: "雷",
    binary: "100101",
    coreInsight: "咬定关键，明断是非。",
    summary: "遇到阻隔如骨鲠在喉，必须明察事实、果断决断，排除障碍方能让流通恢复通畅。",
    keywords: ["决断", "排除", "严明"],
    modernReflection: [
      "噬嗑卦如同上下颚咬合穿透硬物，象征消除梗阻的决心与手段。当断不断，反受其乱。",
      "面对拖延已久的矛盾或不公现象，必须拿出明确的态度与事实依据，予以彻底解决。",
      "明法察情，惩戒或决断不是为了泄愤，而是为了重建公平与顺畅的秩序。"
    ]
  },
  {
    number: 22,
    name: "山火贲",
    shortName: "贲",
    symbol: "䷕",
    upperTrigram: "艮",
    lowerTrigram: "离",
    upperNature: "山",
    lowerNature: "火",
    binary: "101001",
    coreInsight: "返璞归真，质胜于文。",
    summary: "适度的修饰能增添光彩，但过度粉饰则失其本真。重视内在价值与真诚，莫流于表面浮华。",
    keywords: ["质朴", "修养", "真诚"],
    modernReflection: [
      "贲卦讲究文饰之美，如同落日余晖映照青峦。文雅与得体是重要的沟通载体，但核心依然是实在的内容。",
      "审查你的计划或表达，是否为了追求好看的形式而削弱了本质的承载？",
      "在充分展示美感之后，最终要回归到质朴的本质，唯有真诚与实效能打动人心。"
    ]
  },
  {
    number: 23,
    name: "山地剥",
    shortName: "剥",
    symbol: "䷖",
    upperTrigram: "艮",
    lowerTrigram: "坤",
    upperNature: "山",
    lowerNature: "地",
    binary: "000001",
    coreInsight: "顺时止息，护存根本。",
    summary: "落叶归根，大势不利于盲目进取。此时宜保存实力、守住根基与底线，不可强求逆势翻盘。",
    keywords: ["守根", "止损", "沉着"],
    modernReflection: [
      "剥卦如群阴剥阳，只余一阳硕果仅存。外部环境可能处于收缩或挑战期，不宜激进冒险。",
      "承认现实的局限，做好防守与精简，砍掉冗余的枝节，把核心精力和资源紧紧收拢。",
      "秋去冬来是自然的规律，保护好那颗最核心的种子，待来年春暖自会重新发芽。"
    ]
  },
  {
    number: 24,
    name: "地雷复",
    shortName: "复",
    symbol: "䷗",
    upperTrigram: "坤",
    lowerTrigram: "震",
    upperNature: "地",
    lowerNature: "雷",
    binary: "100000",
    coreInsight: "冬至阳生，回归初衷。",
    summary: "一阳初动，转机已现。此时宜循序渐进，不可操之过急，重新校准本心，稳健迈出第一步。",
    keywords: ["复苏", "初动", "初心"],
    modernReflection: [
      "复卦象征冬至地底一阳来复，最微弱却最生机勃勃的希望正在萌发。黑暗已过，晨光微露。",
      "不要急于立刻求得大成果，刚抬头的幼苗最需要悉心呵护。慢慢找回属于你的节奏与信心。",
      "回想最初为何出发，纠正过去偏离的轨迹，用纯粹而笃定的姿态重新启程。"
    ]
  },
  {
    number: 25,
    name: "天雷无妄",
    shortName: "无妄",
    symbol: "䷘",
    upperTrigram: "乾",
    lowerTrigram: "震",
    upperNature: "天",
    lowerNature: "雷",
    binary: "100111",
    coreInsight: "顺应本真，莫存妄念。",
    summary: "依理而行，坦荡磊落。不要抱侥幸心理或非分之想，脚踏实地做对的事，结果自然随顺。",
    keywords: ["坦荡", "真诚", "戒侥幸"],
    modernReflection: [
      "无妄卦提示我们：天下雷行，万物自然而动。所有的设计与巧思，都抵不过一颗真诚本分的心。",
      "问问自己：是否因为焦虑而产生了想要抄捷径、赌一把的冲动？那些看似便宜的捷径往往是陷阱。",
      "保持内心的纯粹，做符合客观常理的判断，即便偶遇无端挫折，也能心安理得、安然化解。"
    ]
  },
  {
    number: 26,
    name: "山天大畜",
    shortName: "大畜",
    symbol: "䷙",
    upperTrigram: "艮",
    lowerTrigram: "乾",
    upperNature: "山",
    lowerNature: "天",
    binary: "111001",
    coreInsight: "大涵大蓄，厚积薄发。",
    summary: "山中蕴藏无尽乾坤。现在是深入学习、广纳贤德与资源的大好时机，底蕴越厚，未来越宽广。",
    keywords: ["深厚", "蓄纳", "自强"],
    modernReflection: [
      "大畜卦展现了巨大的蓄水池与底蕴积累。不要急着把有限的存量变现，而要进一步充实自我。",
      "阅读经典、钻研核心技术、向高人求教，全方位提升自己的知识体系与心性涵养。",
      "当你的容器足够宽广、水滴积蓄足够丰盈，任何难关都将化为你一跃而过的跳板。"
    ]
  },
  {
    number: 27,
    name: "山雷颐",
    shortName: "颐",
    symbol: "䷚",
    upperTrigram: "艮",
    lowerTrigram: "震",
    upperNature: "山",
    lowerNature: "雷",
    binary: "100001",
    coreInsight: "谨言慎食，善自调养。",
    summary: "颐养身心之道，在于把控入口与出口。注意自己的言行举止与信息摄入，自求口实。",
    keywords: ["节制", "涵养", "修身"],
    modernReflection: [
      "颐卦如同上下唇齿张合，关于汲取与表达。病从口入，祸从口出，人生的质感取决于你摄入与产出了什么。",
      "留意你每天消耗在无意义碎片信息上的精力，节制多余的欲望与浮躁的言论，静下心来滋养灵魂。",
      "以健康的饮食、规律的作息和真挚的情感充实自己，身心调和，万事方得安康。"
    ]
  },
  {
    number: 28,
    name: "泽风大过",
    shortName: "大过",
    symbol: "䷛",
    upperTrigram: "兑",
    lowerTrigram: "巽",
    upperNature: "泽",
    lowerNature: "风",
    binary: "011110",
    coreInsight: "栋桡非常，敢于担纲。",
    summary: "栋梁受压弯曲，处于非常之期。面对超常规的压力与挑战，需要非凡的勇气与坚韧去破局。",
    keywords: ["担纲", "魄力", "抗压"],
    modernReflection: [
      "大过卦象征四根实木承重过巨，处于关键极限状态。你所面临的任务可能超越了平时的常规规模。",
      "此时不能再按部就班，需要展现非同凡响的担当与魄力，果断采取支持与分流措施，防止结构坍塌。",
      "即便独立难支，只要初心光明、坦然无惧，往往能在极限之中创造奇迹。"
    ]
  },
  {
    number: 29,
    name: "坎为水",
    shortName: "坎",
    symbol: "䷜",
    upperTrigram: "坎",
    lowerTrigram: "坎",
    upperNature: "水",
    lowerNature: "水",
    binary: "010010",
    coreInsight: "水滴石穿，常德坚毅。",
    summary: "重重险阻如同重重波涛。效法水德，无论落入何种低洼陷阱，都不失奔赴大海的坚韧与真性。",
    keywords: ["坚韧", "随顺", "穿透"],
    modernReflection: [
      "坎卦象征重重险阻。身处考验之中，恐慌不仅无益，反而容易失去平衡。",
      "水是最柔弱的，却能穿山破石，因为水顺应重力、百折不回。保持内心的平静与诚信，顺势而为。",
      "将当前的困难视为淬炼心性与韧性的熔炉，一步一个脚印扎实走过，险难终将化为坦途。"
    ]
  },
  {
    number: 30,
    name: "离为火",
    shortName: "离",
    symbol: "䷝",
    upperTrigram: "离",
    lowerTrigram: "离",
    upperNature: "火",
    lowerNature: "火",
    binary: "101101",
    coreInsight: "光明依附，守持中正。",
    summary: "薪尽火传，明察秋毫。火需要依附于干燥的木材才能持久发光；人也需要依附于正道与良善平台。",
    keywords: ["明亮", "依附", "明察"],
    modernReflection: [
      "离卦代表火焰与光明，同时也代表依附。再聪颖的人，如果失去了正确的立足点与价值观，才华也会化为虚妄。",
      "认清你当前所依附的平台、伙伴与理念是否足够稳固正直。看清长远，不为表面的璀璨所迷。",
      "柔顺守中，用清明的眼光审视环境，用温暖而持久的光亮照耀身边之人。"
    ]
  },
  {
    number: 31,
    name: "泽山咸",
    shortName: "咸",
    symbol: "䷞",
    upperTrigram: "兑",
    lowerTrigram: "艮",
    upperNature: "泽",
    lowerNature: "山",
    binary: "001110",
    coreInsight: "感人心者，莫先乎情。",
    summary: "山上有泽，柔上而刚下。以真挚无私的心去感应他人，自然的共鸣远胜一切技巧与说服。",
    keywords: ["感应", "真诚", "共鸣"],
    modernReflection: [
      "咸卦强调‘无心之感’，即不带功利算计的天然共鸣。人与人之间的深度联结，始于彼此的真诚与尊重。",
      "放下紧绷的防御姿态，用心去倾听对方未曾说出口的诉求与感受。懂得换位，便是最好的沟通钥匙。",
      "保持心灵的虚怀若谷，如同静水照山，自能引动万物善意的回应。"
    ]
  },
  {
    number: 32,
    name: "雷风恒",
    shortName: "恒",
    symbol: "䷟",
    upperTrigram: "震",
    lowerTrigram: "巽",
    upperNature: "雷",
    lowerNature: "风",
    binary: "011100",
    coreInsight: "持之以恒，贵在如常。",
    summary: "风雷激荡而天地常新。真正的恒久不是一成不变的僵死，而是在岁月变迁中守住核心准则。",
    keywords: ["坚持", "常态", "守恒"],
    modernReflection: [
      "恒卦提示我们：人生的大多数成就不是爆发式完成的，而是靠每天重复那些正确而平凡的事。",
      "审视你的日常生活与习惯，是否因为暂时的厌倦而频频变换跑道？唯有专注与耐得住寂寞，才能走得深远。",
      "在变动不居的世界中，建立属于自己的锚定点，保持稳定的心态与步调。"
    ]
  },
  {
    number: 33,
    name: "天山遁",
    shortName: "遁",
    symbol: "䷠",
    upperTrigram: "乾",
    lowerTrigram: "艮",
    upperNature: "天",
    lowerNature: "山",
    binary: "001111",
    coreInsight: "退避保全，远见卓识。",
    summary: "适时退让不是懦弱，而是极具战略眼光的保全。避开锋芒，远离是非小人，为未来保存火种。",
    keywords: ["退避", "超脱", "远见"],
    modernReflection: [
      "遁卦如天下有山，天宇辽阔高远而山川静默止步。当外部环境小人得势或风向不利时，强争毫无益处。",
      "学会体面而优雅地抽身，不卷入无谓的内耗与纷争中。君子远小人，不恶而严。",
      "退一步并不意味着放弃理想，而是为了在更广阔的空间中重新积蓄力量。"
    ]
  },
  {
    number: 34,
    name: "雷天大壮",
    shortName: "大壮",
    symbol: "䷡",
    upperTrigram: "震",
    lowerTrigram: "乾",
    upperNature: "雷",
    lowerNature: "天",
    binary: "111100",
    coreInsight: "壮勿妄动，止于中正。",
    summary: "声势浩大，刚强正盛。此时切忌恃强凌弱或盲目蛮干，谨防‘羝羊触藩，羸其角’的尴尬困境。",
    keywords: ["克制", "非礼弗履", "稳慎"],
    modernReflection: [
      "大壮卦象征雷鸣高天、刚气旺盛。你当前可能拥有很强的信心与优势，但这也是最容易犯错的关口。",
      "越是力量充沛，越要强调守规矩、明礼义。不要依仗一时优势去逼迫他人就范，过刚易折。",
      "将强盛的能量化为建设性的保护力与推进力，而不是破坏性的冲突。"
    ]
  },
  {
    number: 35,
    name: "火地晋",
    shortName: "晋",
    symbol: "䷢",
    upperTrigram: "离",
    lowerTrigram: "坤",
    upperNature: "火",
    lowerNature: "地",
    binary: "000101",
    coreInsight: "日出东方，步步光明。",
    summary: "旭日东升，照耀大地。正处于上升与受赏识的阶段，以宽仁品德与积极姿态拥抱晋升与拓展。",
    keywords: ["上升", "光明", "晋升"],
    modernReflection: [
      "晋卦描绘了大地之上红日升腾、万物沐浴光芒的明亮景象。你的才能与努力正在迎来被看见的良机。",
      "珍惜受到的信任与赋能，以更高的标准要求自己，用积极开朗的心态感染身边的每个人。",
      "光明正大地展示实力，多做有利于众人之事，你的声誉与收获自然与日俱增。"
    ]
  },
  {
    number: 36,
    name: "地火明夷",
    shortName: "明夷",
    symbol: "䷣",
    upperTrigram: "坤",
    lowerTrigram: "离",
    upperNature: "地",
    lowerNature: "火",
    binary: "101000",
    coreInsight: "韬光养晦，内明外顺。",
    summary: "光明潜入地中，暗夜难明。此时宜收敛光芒，表面随顺环境以避祸端，内心深处坚守原则光明。",
    keywords: ["韬光", "沉毅", "隐忍"],
    modernReflection: [
      "明夷卦是面对逆境与昏昧时最深沉的智慧。当身处不公或被误解的环境时，锋芒毕露往往只会引来伤害。",
      "学会在暗中沉潜，在外表上保持低调柔和，不在人前夸耀才智，默默蓄养真知灼见。",
      "无论外在黑夜多么漫长，只要心中那一盏明灯不灭，终能迎来黎明。"
    ]
  },
  {
    number: 37,
    name: "风火家人",
    shortName: "家人",
    symbol: "䷤",
    upperTrigram: "巽",
    lowerTrigram: "离",
    upperNature: "风",
    lowerNature: "火",
    binary: "101011",
    coreInsight: "齐家立规，笃厚温情。",
    summary: "风自火出，治家有道。端正核心团队或家庭内部的秩序，各司其职、互敬互爱，方能家道兴隆。",
    keywords: ["内部", "秩序", "温情"],
    modernReflection: [
      "家人卦提示我们将目光转回最亲密的核心圈子。外部的成就再多，若后院起火、基础动摇，终难长久。",
      "明确彼此的边界与责任，建立清晰温暖的规则，用真挚的言语与关爱化解家庭或小团队内部的龃龉。",
      "先修身齐家，把自己身边的微环境打理得安定祥和，再去谋求天下之事。"
    ]
  },
  {
    number: 38,
    name: "火泽睽",
    shortName: "睽",
    symbol: "䷥",
    upperTrigram: "离",
    lowerTrigram: "兑",
    upperNature: "火",
    lowerNature: "泽",
    binary: "110101",
    coreInsight: "求同存异，化解背离。",
    summary: "水火不容，背道而驰。面对价值观与立场的冲突，不必强行同化，在小事上建立互信与共识。",
    keywords: ["包容差异", "求同", "缓冲"],
    modernReflection: [
      "睽卦展现了火向上烧、泽向下润的相悖态势。人与人之间出现误会与偏见是常态，硬掰只会激发对抗。",
      "尊重每个人独特的背景与立场，求大同、存大异。在能合作的小事上先破冰，逐步消除戒心。",
      "不要让情绪支配判断，放下‘谁必须完全服从谁’的执念，给彼此留出缓冲空间。"
    ]
  },
  {
    number: 39,
    name: "水山蹇",
    shortName: "蹇",
    symbol: "䷦",
    upperTrigram: "坎",
    lowerTrigram: "艮",
    upperNature: "水",
    lowerNature: "山",
    binary: "001010",
    coreInsight: "见险而止，反求诸己。",
    summary: "前有险水，后有高山，步履蹒跚。此时硬冲必遭折损，宜驻足反思，向智者寻求指引。",
    keywords: ["驻足", "自省", "问询"],
    modernReflection: [
      "蹇卦如雪地跋涉，前路充满泥泞与陷阱。停下来不是放弃，而是极具智慧的危险防范。",
      "问问自己：为什么会陷入当前的僵局？是不是前期的评估出现了偏差？反思自身弱点，胜过盲目埋怨环境。",
      "主动寻求贵人与可靠盟友的指引，抱团取暖，待道路清晰后再启程。"
    ]
  },
  {
    number: 40,
    name: "雷水解",
    shortName: "解",
    symbol: "䷧",
    upperTrigram: "震",
    lowerTrigram: "坎",
    upperNature: "雷",
    lowerNature: "水",
    binary: "010100",
    coreInsight: "春雷化雨，冰雪消融。",
    summary: "险难化解，宽恕容众。困境既已缓解，宜快刀斩乱麻恢复常态，不必纠缠过去的恩怨纠葛。",
    keywords: ["释放", "化解", "宽宥"],
    modernReflection: [
      "解卦象征春雨润物、坚冰初释。长久以来的紧绷感正在松弛，新的转机已经全面到来。",
      "如果尚有悬而未决的事务，趁现在果断处理完毕；如果大局已定，就不要再画蛇添足，让万物休养生息。",
      "宽宥曾经的摩擦与过错，以轻松宽广的心胸迎接下一段崭新的旅程。"
    ]
  },
  {
    number: 41,
    name: "山泽损",
    shortName: "损",
    symbol: "䷨",
    upperTrigram: "艮",
    lowerTrigram: "兑",
    upperNature: "山",
    lowerNature: "泽",
    binary: "110001",
    coreInsight: "损下益上，减法智慧。",
    summary: "舍得之道，有舍方有得。克制浮躁的贪念与私欲，以适度的舍弃换取核心长远价值的稳固。",
    keywords: ["断舍离", "舍得", "纯粹"],
    modernReflection: [
      "损卦并非简单的受损，而是关于聚焦与净化的智慧。减去多余的杂物与欲望，山川更显清奇。",
      "审视你当下的负担，是否抓了太多抓不住的目标？勇敢做减法，砍掉那些消耗大于产出的事务。",
      "真诚与节制是最高贵的品质，带着纯粹简单的初心，两条微薄的薄礼也能感动天地。"
    ]
  },
  {
    number: 42,
    name: "风雷益",
    shortName: "益",
    symbol: "䷩",
    upperTrigram: "巽",
    lowerTrigram: "震",
    upperNature: "风",
    lowerNature: "雷",
    binary: "100011",
    coreInsight: "见善则迁，有过则改。",
    summary: "风雷激荡，生机大增。利于开疆拓土与自我精进，把所得资源反哺大众，形成良性循环。",
    keywords: ["精进", "改过", "反哺"],
    modernReflection: [
      "益卦与损卦相辅相成，风雷交加使万物受到滋润。你当下具备极好的外部赋能与增益条件。",
      "看见别人优秀的地方就立即虚心学习，发现自己的过错就毫不犹豫地改正，这是最好的增益。",
      "不要独享成果，多关照同行伙伴与下属，把蛋糕做大，你的发展空间才会无限延伸。"
    ]
  },
  {
    number: 43,
    name: "泽天夬",
    shortName: "夬",
    symbol: "䷪",
    upperTrigram: "兑",
    lowerTrigram: "乾",
    upperNature: "泽",
    lowerNature: "天",
    binary: "111110",
    coreInsight: "决断是非，防骄防躁。",
    summary: "决堤之水，势不可挡。彻底割舍不良关系或积习时，要光明磊落，以和为贵，切忌孤注一掷与暴烈手段。",
    keywords: ["决断", "公道", "慎终"],
    modernReflection: [
      "夬卦象征决断与告别。五阳逼近一阴，正义与明朗占据绝对优势，到了做最后了结的时刻。",
      "决断务必公开透明，不要使用阴谋诡计或情绪化的报复，否则易落人口实。",
      "胜利在望时更要防范狗急跳墙的风险，做好周密的风险兜底，善始善终。"
    ]
  },
  {
    number: 44,
    name: "天风姤",
    shortName: "姤",
    symbol: "䷫",
    upperTrigram: "乾",
    lowerTrigram: "巽",
    upperNature: "天",
    lowerNature: "风",
    binary: "011111",
    coreInsight: "邂逅之遇，谨防诱惑。",
    summary: "天下有风，不期而遇。面对看似诱人却暗藏隐患的突发机缘，需保持高度警惕与原则底线。",
    keywords: ["警觉", "慎遇", "防微杜渐"],
    modernReflection: [
      "姤卦象征一阴悄然潜入于五阳之下，往往代表意料之外的相遇、合作或欲望诱惑。",
      "不要被初期的甜蜜与轻易到手的利益蒙蔽双眼，深入调查背后的动机与潜在风险。",
      "防微杜渐，在问题刚露出苗头时就确立清晰的边界，切莫放任自流。"
    ]
  },
  {
    number: 45,
    name: "泽地萃",
    shortName: "萃",
    symbol: "䷬",
    upperTrigram: "兑",
    lowerTrigram: "坤",
    upperNature: "泽",
    lowerNature: "地",
    binary: "000110",
    coreInsight: "群贤毕至，固守防备。",
    summary: "水聚于地，人才与资源汇聚。聚合之时需端正规约、强化防患机制，以防人浮于事或散沙之态。",
    keywords: ["聚合", "凝聚", "规约"],
    modernReflection: [
      "萃卦代表聚集之盛况，各方资源与关注正在向你聚拢，带来庞大的协同潜能。",
      "人群与财富汇聚之时，最怕秩序混乱与人心涣散。必须有共同的信念与公信力作为压舱石。",
      "修缮防御工事，提前做好应急预案，在繁盛之中保持居安思危的清醒。"
    ]
  },
  {
    number: 46,
    name: "地风升",
    shortName: "升",
    symbol: "䷭",
    upperTrigram: "坤",
    lowerTrigram: "巽",
    upperNature: "地",
    lowerNature: "风",
    binary: "011000",
    coreInsight: "顺时上升，脚踏实地。",
    summary: "木生于地，步步高升。如同树木扎根泥土慢慢参天，坚持不懈、踏实稳进，定能通达高位。",
    keywords: ["稳步", "上升", "扎根"],
    modernReflection: [
      "升卦展现了树木在大地之中顺势而上、舒展枝叶的过程。当下的进展是健康且可持续的。",
      "不要追求一夜暴富或连级跳式的虚浮快感，专注于把根基扎得更深、枝干修得更直。",
      "主动寻求品德高尚的良师益友支持，你的成长将获得坚强有力的依托。"
    ]
  },
  {
    number: 47,
    name: "泽水困",
    shortName: "困",
    symbol: "䷮",
    upperTrigram: "兑",
    lowerTrigram: "坎",
    upperNature: "泽",
    lowerNature: "水",
    binary: "010110",
    coreInsight: "处困自修，言多无益。",
    summary: "水漏泽底，身处困局。此时多言辩解毫无用处，唯有坚守节操、默默承受，用行动穿越至暗时刻。",
    keywords: ["磨砺", "慎言", "坚守"],
    modernReflection: [
      "困卦是考验君子志节的至高炼金石。资源匮乏、外部误解、举步维艰，这是每个人都会经历的严寒。",
      "在困境中不要到处诉苦或抱怨，那只会消耗仅存的尊严与气力。保持沉默与自尊，专注于手头力所能及的小事。",
      "坚信‘困而能通’的古训，最艰难的时刻往往就是转折点的前夜。"
    ]
  },
  {
    number: 48,
    name: "水风井",
    shortName: "井",
    symbol: "䷯",
    upperTrigram: "坎",
    lowerTrigram: "巽",
    upperNature: "水",
    lowerNature: "风",
    binary: "011010",
    coreInsight: "泉涌不息，自养养人。",
    summary: "井水滋养万民而常清。深挖自己的核心专业与品德甘泉，持之以恒地为他人提供不可替代的价值。",
    keywords: ["深挖", "赋能", "底蕴"],
    modernReflection: [
      "井卦代表无论村邑如何变迁、井水始终甘洌长存。你的核心价值究竟是什么？这是井卦对你的灵魂发问。",
      "不要被外界形式的浮夸风气带偏，花精力深耕自己的核心专长，把水井掏深、掏净。",
      "打水的吊桶要编得结实，不要在最后一刻功亏一篑。用专业与可靠赢得长久的信赖。"
    ]
  },
  {
    number: 49,
    name: "泽火革",
    shortName: "革",
    symbol: "䷰",
    upperTrigram: "兑",
    lowerTrigram: "离",
    upperNature: "泽",
    lowerNature: "火",
    binary: "101110",
    coreInsight: "顺天应人，果敢变革。",
    summary: "水火交战，革故鼎新。旧模式已无法适应新现实，顺应时代潮流、果断推进脱胎换骨的变革。",
    keywords: ["变革", "破旧", "立新"],
    modernReflection: [
      "革卦象征豹变与蜕皮。修修补补已经解决不了根本问题，唯有彻底打碎旧有的路径依赖。",
      "变革必须师出有名、获得最广泛的理解与支持，不可凭一时任性而蛮干。等到时机成熟再全力推行。",
      "摒弃对舒适区的眷恋，勇敢拥抱重生的痛苦与欣喜。"
    ]
  },
  {
    number: 50,
    name: "火风鼎",
    shortName: "鼎",
    symbol: "䷱",
    upperTrigram: "离",
    lowerTrigram: "巽",
    upperNature: "火",
    lowerNature: "风",
    binary: "011101",
    coreInsight: "鼎革相通，稳重铸造。",
    summary: "鼎盛之器，铸造新质。在破除旧格局之后，悉心调和各方养分，建立起端庄尊贵的新秩序。",
    keywords: ["稳重", "烹饪", "赋能"],
    modernReflection: [
      "鼎卦象征稳重、端正与调和鼎鼐。如果说革是破坏，鼎就是精细的重构与滋养。",
      "以端庄公正的姿态对待每一项规则与资源，善于调和不同人才的特长，使每个人发挥极致价值。",
      "把基础打牢，建立令人敬仰的文化与制度，基业方得长治久安。"
    ]
  },
  {
    number: 51,
    name: "震为雷",
    shortName: "震",
    symbol: "䷲",
    upperTrigram: "震",
    lowerTrigram: "震",
    upperNature: "雷",
    lowerNature: "雷",
    binary: "100100",
    coreInsight: "震动惊骇，谈笑自若。",
    summary: "雷霆万钧，令人心悸。面对突如其来的变故与外部震荡，保持内心的笃定修养，自能化惊为安。",
    keywords: ["笃定", "自若", "警醒"],
    modernReflection: [
      "震卦代表突如其来的冲击、意外事件或激烈的市场震荡。恐慌常常比事件本身造成更大危害。",
      "所谓‘震惊百里，不丧匕鬯’，越是雷声滚滚，越要握稳手中的仪仗，从容应对每一步骤。",
      "将外部的震荡视为自我检查的警钟，反思脆弱点，借雷霆之力扫荡陈腐。"
    ]
  },
  {
    number: 52,
    name: "艮为山",
    shortName: "艮",
    symbol: "䷳",
    upperTrigram: "艮",
    lowerTrigram: "艮",
    upperNature: "山",
    lowerNature: "山",
    binary: "001001",
    coreInsight: "动静有常，知止不殆。",
    summary: "重重大山，巍然止息。当止则止，当行则行，止于当止之处，平息内心妄动的杂念与浮躁。",
    keywords: ["知止", "止语", "安定"],
    modernReflection: [
      "艮卦是关于‘止’的大智慧。现代人最大的困扰往往不是走得不够快，而是停不下来。",
      "止息对结果的过度患得患失，把狂乱奔腾的心思拉回此时此刻。让呼吸平稳，让心境如山岳般沉稳。",
      "有所为有所不为，明确自己的边界，守住属于自己的平静。"
    ]
  },
  {
    number: 53,
    name: "风山渐",
    shortName: "渐",
    symbol: "䷴",
    upperTrigram: "巽",
    lowerTrigram: "艮",
    upperNature: "风",
    lowerNature: "山",
    binary: "001011",
    coreInsight: "鸿渐于陆，循序渐进。",
    summary: "山上有木，渐长参天。如同鸿雁迁徙按部就班，遵循事物自然发展的规律，不可揠苗助长。",
    keywords: ["循序", "踏实", "耐性"],
    modernReflection: [
      "渐卦强调按部就班的秩序之美。无论是职业进阶、感情培育还是项目推进，都有一套不可跳过的生理周期。",
      "不要试图用急躁的催促来代替水到渠成的沉淀。走好每一步路，过程稳妥，结果才会自然坚实。",
      "给彼此留出熟悉与适应的时间，耐心等待花开的季节。"
    ]
  },
  {
    number: 54,
    name: "雷泽归妹",
    shortName: "归妹",
    symbol: "䷵",
    upperTrigram: "震",
    lowerTrigram: "兑",
    upperNature: "雷",
    lowerNature: "泽",
    binary: "110100",
    coreInsight: "名分不正，慎入泥潭。",
    summary: "因一时冲动或权宜之计而缔结的关系往往难得善终。看清长远地位与边界，莫因急躁而委屈求全。",
    keywords: ["审视", "正名", "克制"],
    modernReflection: [
      "归妹卦提醒我们警惕那些动机不纯、秩序倒错的盲目结合。无论是合作、投资还是感情，名不正言不顺必有后患。",
      "问问自己：是否因为害怕错过而放低了自己的原则底线？将就而来的关系往往会付出更高的代价。",
      "守住尊严与清醒，宁可慢一步，也不要在模糊不清的前提下盲目入局。"
    ]
  },
  {
    number: 55,
    name: "雷火丰",
    shortName: "丰",
    symbol: "䷶",
    upperTrigram: "震",
    lowerTrigram: "离",
    upperNature: "雷",
    lowerNature: "火",
    binary: "101100",
    coreInsight: "盛大丰沛，居安思危。",
    summary: "如日中天，雷电齐发。达到盛极之顶峰时，需清醒洞察盛极必衰之势，及早做出长治久安的部署。",
    keywords: ["盛大", "决断", "保全"],
    modernReflection: [
      "丰卦呈现出极其宏大丰盈的能量爆发期。你的视野、声望与掌控力正处于高光时刻。",
      "日中则昃，月盈则食。高光之下必有阴影，警惕繁华掩盖下的暗涌与松懈。",
      "利用当前最强大的决断力与影响力，迅速解决深层历史隐患，不要让繁华成为转瞬即逝的烟火。"
    ]
  },
  {
    number: 56,
    name: "火山旅",
    shortName: "旅",
    symbol: "䷷",
    upperTrigram: "离",
    lowerTrigram: "艮",
    upperNature: "火",
    lowerNature: "山",
    binary: "001101",
    coreInsight: "羁旅异乡，随遇而安。",
    summary: "火行山间，居无定所。身处异地或转型过渡期，宜保持谦卑礼貌、谨言慎行，莫与当地势力起争端。",
    keywords: ["行旅", "低调", "自适"],
    modernReflection: [
      "旅卦代表漂泊、过渡与流动状态。你可能正在探索全新的领域或转换跑道，尚未完全扎稳脚跟。",
      "在外作客或在新环境中，切忌以原有习惯自居自大。主动入乡随俗，谦逊求教，结下善缘。",
      "把行囊精简，把心态放宽，将旅途中的每一次不便都视为见识广袤世界的功课。"
    ]
  },
  {
    number: 57,
    name: "巽为风",
    shortName: "巽",
    symbol: "䷸",
    upperTrigram: "巽",
    lowerTrigram: "巽",
    upperNature: "风",
    lowerNature: "风",
    binary: "011011",
    coreInsight: "顺随深入，润物无声。",
    summary: "微风吹拂，无孔不入。依靠持久的柔和渗透与清晰的申命沟通，化解坚硬的壁垒。",
    keywords: ["渗透", "柔和", "细致"],
    modernReflection: [
      "巽卦象征风的力量，看不见摸不着，却能跨越山河。强攻不可得之处，以柔克刚往往迎刃而解。",
      "多次、清晰、温和地重申你的观点与意图，用耐心的解释消除误会，不要试图用蛮力迫使对方就范。",
      "关注细节的变化，如同微风拂动草木，敏锐捕捉环境细微的心理转折。"
    ]
  },
  {
    number: 58,
    name: "兑为泽",
    shortName: "兑",
    symbol: "䷹",
    upperTrigram: "兑",
    lowerTrigram: "兑",
    upperNature: "泽",
    lowerNature: "泽",
    binary: "110110",
    coreInsight: "欢欣和悦，朋友讲习。",
    summary: "两泽相连，润泽无尽。与志趣相投的挚友深入研讨、互相启发，以和颜悦色的沟通赢得人心。",
    keywords: ["和悦", "交流", "启迪"],
    modernReflection: [
      "兑卦代表发自肺腑的喜悦与分享。独学而无友，则孤陋而寡闻，与同频者探讨能碰撞出璀璨灵光。",
      "沟通时多用温和鼓舞的话语代替苛刻的批评，和颜悦色不是伪善，而是对他人尊严的珍视。",
      "保持真诚的乐观主义，喜悦的气场自能吸引更多优质资源与美好机缘向你汇合。"
    ]
  },
  {
    number: 59,
    name: "风水涣",
    shortName: "涣",
    symbol: "䷺",
    upperTrigram: "巽",
    lowerTrigram: "坎",
    upperNature: "风",
    lowerNature: "水",
    binary: "010011",
    coreInsight: "风行水上，涣散消融。",
    summary: "春风吹拂冰融水解。主动打破壁垒与隔阂，用宏大包容的格局凝聚涣散的人心与力量。",
    keywords: ["化解", "消融", "凝聚"],
    modernReflection: [
      "涣卦代表涣散与消融，既是隔阂被吹散的良机，也是防范人心散漫的时刻。",
      "面对团队内部分歧或个人情绪低落，用真诚的大愿景去感召大家，跨越过去的恩怨藩篱。",
      "渡过大江大河需要依靠合力，放下小我执念，与众人携手同舟共济。"
    ]
  },
  {
    number: 60,
    name: "水泽节",
    shortName: "节",
    symbol: "䷻",
    upperTrigram: "坎",
    lowerTrigram: "兑",
    upperNature: "水",
    lowerNature: "泽",
    binary: "110010",
    coreInsight: "适度节制，乐在其中。",
    summary: "水入泽池，有容乃节。凡事皆有度，过度的放纵与极端的苦行皆非正道，唯有恰到好处的自律方能长久。",
    keywords: ["节制", "分寸", "平衡"],
    modernReflection: [
      "节卦强调制度与自律的边界美学。水流有了河堤的规约才能成为清泉，人有了边界才能获得真正的自由。",
      "审视你的开支、时间分配与承诺，是否有过度透支的迹象？给生活做合理的切片与计划。",
      "节制不可演变成苛刻自虐，让自律成为一种优雅舒适的生活方式，而非痛苦的重负。"
    ]
  },
  {
    number: 61,
    name: "风泽中孚",
    shortName: "中孚",
    symbol: "䷼",
    upperTrigram: "巽",
    lowerTrigram: "兑",
    upperNature: "风",
    lowerNature: "泽",
    binary: "110011",
    coreInsight: "诚信立身，心有灵犀。",
    summary: "风吹水泽，心怀至诚。诚信是最坚实的通行证，至诚不仅能感动众人，甚至能感通豚鱼与天地。",
    keywords: ["至诚", "信用", "感通"],
    modernReflection: [
      "中孚卦核心为一个‘孚’字，意为诚信与孵化。没有任何计谋能比得上日复一日兑现的诺言。",
      "在谈判或合作中，以无可置疑的透明与信誉作为底牌，对方纵然多疑，也会被你无可辩驳的诚意所打动。",
      "守住内心的空灵与正直，言行如一，信任是你最宝贵的无形资产。"
    ]
  },
  {
    number: 62,
    name: "雷山小过",
    shortName: "小过",
    symbol: "䷽",
    upperTrigram: "震",
    lowerTrigram: "艮",
    upperNature: "雷",
    lowerNature: "山",
    binary: "001100",
    coreInsight: "小事谨慎，行止有节。",
    summary: "飞鸟遗音，宜下不宜上。当下适合处理微小、细碎之事，不宜盲目争抢宏大高位，防微杜渐。",
    keywords: ["审慎", "低姿态", "细谨"],
    modernReflection: [
      "小过卦提醒我们：处于稍微过度的敏感时期，宜采取保守与谦逊的低姿态。",
      "在花销上稍微节俭一点，在行礼上稍微谦恭一点，在言语上稍微温和一点，宁可谨慎过头，也莫轻慢失策。",
      "飞鸟向下落才能筑巢自安，向上逆飞则会遭遇风暴。做好力所能及的小事，便是莫大功德。"
    ]
  },
  {
    number: 63,
    name: "水火既济",
    shortName: "既济",
    symbol: "䷾",
    upperTrigram: "坎",
    lowerTrigram: "离",
    upperNature: "水",
    lowerNature: "火",
    binary: "101010",
    coreInsight: "万事俱备，慎防初乱。",
    summary: "水在火上，各得其所，初得亨通。大功告成之际，正是隐患潜伏之时，务必深谋远虑以守成。",
    keywords: ["守成", "圆满", "防懈怠"],
    modernReflection: [
      "既济卦呈现出最工整的阴阳相配态势，象征阶段性目标的大获全胜或秩序初成。",
      "然而‘初吉终乱’，当一切都看起来井井有条时，人们往往容易放松警惕，忽视微小的渗漏。",
      "把检查与维护当成日常功课，防患于未然，才能让圆满的局面尽可能持久延展。"
    ]
  },
  {
    number: 64,
    name: "火水未济",
    shortName: "未济",
    symbol: "䷿",
    upperTrigram: "离",
    lowerTrigram: "坎",
    upperNature: "火",
    lowerNature: "水",
    binary: "010101",
    coreInsight: "道无止境，生生不息。",
    summary: "火在水上，尚未渡济。终点亦是起点，保持探求的敬畏与勇气，以未完之姿拥抱无限生机。",
    keywords: ["新生", "进取", "无限可能"],
    modernReflection: [
      "未济是易经六十四卦的最后一卦，它告诉我们：宇宙与生命从来没有真正的‘终局’，永远在流动与重生。",
      "面对未完成的课题，不必感到挫败与焦虑。正是这一份‘未完’，赋予了你继续探索与精进的无垠空间。",
      "整顿行装，提振精神，带着过往历练积攒的智慧，自信地迈向下一个全新的周期。"
    ]
  }
];

// 建立从 6-bit 二进制（从下到上）到 HexagramData 的字典映射
export const HEXAGRAMS_BY_BINARY: Record<string, HexagramData> = {};
HEXAGRAMS.forEach((h) => {
  HEXAGRAMS_BY_BINARY[h.binary] = h;
});

// 按卦序 1-64 索引
export const HEXAGRAMS_BY_NUMBER: Record<number, HexagramData> = {};
HEXAGRAMS.forEach((h) => {
  HEXAGRAMS_BY_NUMBER[h.number] = h;
});
