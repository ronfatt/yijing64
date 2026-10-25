import React from 'react';
import { Compass, Shield, Heart, Feather, BookOpen } from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto pb-24 md:pb-12 text-mose space-y-8">
      {/* 头部品牌主张 */}
      <div className="text-center space-y-3 pb-6 border-b border-xuan-300">
        <div className="inline-flex p-3 rounded-2xl bg-zhusha text-white shadow-subtle mb-1">
          <Compass size={28} />
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold tracking-tight">
          问境 WENJING
        </h1>
        <p className="font-serif text-lg text-zhusha tracking-widest font-medium">
          一念之间，看见方向。
        </p>
        <p className="text-sm text-mose-muted max-w-lg mx-auto leading-relaxed font-sans">
          融合东方美学、易经文化与自我反思的互动体验。
        </p>
      </div>

      {/* 核心价值观板块 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-white border border-xuan-300 shadow-subtle space-y-3">
          <div className="flex items-center gap-2 text-zhusha">
            <Feather size={20} />
            <h3 className="font-serif text-lg font-semibold">东方美学与现代设计</h3>
          </div>
          <p className="text-xs sm:text-sm text-mose-light leading-relaxed font-sans">
            问境取意宣纸、朱砂、哑金与淡水墨的东方色调。摒弃廉价霓虹与后台模板感，以适度的留白与极简线条，创造静谧、庄重且富有呼吸感的思考场域。
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-xuan-300 shadow-subtle space-y-3">
          <div className="flex items-center gap-2 text-zhusha">
            <BookOpen size={20} />
            <h3 className="font-serif text-lg font-semibold">严谨六爻与现代反思</h3>
          </div>
          <p className="text-xs sm:text-sm text-mose-light leading-relaxed font-sans">
            起卦逻辑基于三枚铜钱独立抛掷的少阳、老阳、少阴、老阴法则，准确对应六十四卦本卦与动变。解读剔除晦涩宿命辞句，转化为指向生活与行动的清醒反思。
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-xuan-300 shadow-subtle space-y-3">
          <div className="flex items-center gap-2 text-zhusha">
            <Shield size={20} />
            <h3 className="font-serif text-lg font-semibold">数据主权与隐私尊重</h3>
          </div>
          <p className="text-xs sm:text-sm text-mose-light leading-relaxed font-sans">
            所有记录仅保存在您的浏览器本地，不收集手机号、不依赖远程数据库、不上传您的私密问题。分享卡导出时亦严格过滤敏感问题，守护内心安全感。
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-xuan-300 shadow-subtle space-y-3">
          <div className="flex items-center gap-2 text-zhusha">
            <Heart size={20} />
            <h3 className="font-serif text-lg font-semibold">拒绝玄学与虚假承诺</h3>
          </div>
          <p className="text-xs sm:text-sm text-mose-light leading-relaxed font-sans">
            我们不包装“洞悉未来”的虚幻幻象，不设置连续打卡或诱导付费的博彩机制。每一卦象，皆是一面折射心智预设与盲区的明镜。
          </p>
        </div>
      </div>

      {/* 伦理边界声明 */}
      <div className="p-6 rounded-2xl bg-xuan-200/60 border border-xuan-300 text-xs text-mose-muted leading-relaxed space-y-2">
        <h4 className="font-serif font-semibold text-mose text-sm">
          使用边界与伦理指引
        </h4>
        <p>
          本系统旨在通过传统易经的结构化动静模型，协助使用者整理当下心智状态与行动优先级。所提供内容不构成医疗、心理诊断、法律纠纷或高风险金融投资建议。当面临重大现实抉择时，请结合客观事实与持牌专业人士意见。
        </p>
      </div>
    </div>
  );
};
