import React from 'react';

interface HexagramArtProps {
  hexagramNumber: number;
  className?: string;
  variant?: 'card' | 'thumb' | 'hero';
}

/**
 * 东方山水艺术插画体系（解耦设计，纯矢量与水墨渐变合成，零破图风险）
 * 包含：
 * 1. 乾为天：高空、层云、金光旭日，开阔而有力量
 * 2. 坤为地：大地、平原、柔和地层，沉稳宽厚
 * 3. 山水蒙：薄雾、远山、山脚流水、青松，含蓄清透
 * 4. 水天需：云气、水面、远处微光，呈现等待与空间
 * 5. 地天泰：天地舒展、开阔山谷、平衡构图
 * 6. 风雷益：风的流动线条、雨后山林、向上挺拔的生机植物
 * 7. 通用山水：同一审美规范下的东方水墨山水画卷
 */
export const HexagramArt: React.FC<HexagramArtProps> = ({
  hexagramNumber,
  className = '',
}) => {
  // 根据卦序选取艺术插画主题
  switch (hexagramNumber) {
    case 1:
      // 乾为天：高空、层云、日光、崇山之巅
      return (
        <div className={`relative overflow-hidden w-full h-full ${className}`}>
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="qianSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F9F4EB" />
                <stop offset="60%" stopColor="#F0E5D3" />
                <stop offset="100%" stopColor="#E2D4BF" />
              </linearGradient>
              <radialGradient id="qianSun" cx="70%" cy="30%" r="40%">
                <stop offset="0%" stopColor="#E2584D" stopOpacity="0.85" />
                <stop offset="40%" stopColor="#A9322D" stopOpacity="0.9" />
                <stop offset="85%" stopColor="#8A241F" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="qianMountain" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4A453E" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#292722" stopOpacity="0.95" />
              </linearGradient>
            </defs>

            {/* 天空 */}
            <rect width="400" height="320" fill="url(#qianSky)" />

            {/* 金辉日轮 */}
            <circle cx="280" cy="100" r="48" fill="url(#qianSun)" />

            {/* 高空流动层云 */}
            <path
              d="M20,70 Q90,40 180,65 T340,55"
              fill="none"
              stroke="#B59A64"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              opacity="0.4"
            />
            <path
              d="M0,110 C80,95 160,120 240,105 C310,90 360,115 400,100 L400,150 L0,150 Z"
              fill="#FFFFFF"
              opacity="0.35"
            />

            {/* 极远崇山 */}
            <path
              d="M120,320 L220,130 L290,200 L360,150 L400,190 L400,320 Z"
              fill="#9C9486"
              opacity="0.5"
            />

            {/* 主山峻峰 */}
            <path
              d="M0,320 L70,220 L160,280 L250,170 L340,320 Z"
              fill="url(#qianMountain)"
              opacity="0.85"
            />

            {/* 云海漫卷 */}
            <path
              d="M0,280 C60,265 140,290 220,270 C300,250 360,275 400,260 L400,320 L0,320 Z"
              fill="#F7F3EB"
              opacity="0.85"
            />
          </svg>
        </div>
      );

    case 2:
      // 坤为地：广阔大地、平原、柔和地层、沉稳宽厚
      return (
        <div className={`relative overflow-hidden w-full h-full ${className}`}>
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="kunSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F6F1E7" />
                <stop offset="70%" stopColor="#ECE3D4" />
                <stop offset="100%" stopColor="#DFD2BF" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" fill="url(#kunSky)" />

            {/* 暖调夕阳微光 */}
            <circle cx="120" cy="110" r="44" fill="#A9322D" opacity="0.65" />

            {/* 柔和平缓地层与平原山峦 */}
            <path
              d="M0,160 Q120,135 240,155 T400,145 L400,320 L0,320 Z"
              fill="#C2B8A7"
              opacity="0.45"
            />
            <path
              d="M0,200 C80,185 180,215 280,195 C340,185 380,205 400,195 L400,320 L0,320 Z"
              fill="#8F8678"
              opacity="0.6"
            />
            <path
              d="M0,240 Q140,215 270,235 T400,225 L400,320 L0,320 Z"
              fill="#565147"
              opacity="0.85"
            />

            {/* 大地脉络与层层沃野微纹 */}
            <path
              d="M30,275 Q160,255 370,270"
              fill="none"
              stroke="#B59A64"
              strokeWidth="1.2"
              opacity="0.5"
            />
            <path
              d="M0,295 Q180,280 400,290"
              fill="none"
              stroke="#A9322D"
              strokeWidth="0.8"
              opacity="0.3"
            />
          </svg>
        </div>
      );

    case 4:
      // 山水蒙：薄雾、远山、山脚流水、青松，含蓄清透
      return (
        <div className={`relative overflow-hidden w-full h-full ${className}`}>
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="mengSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F7F3EB" />
                <stop offset="60%" stopColor="#EAE1D1" />
                <stop offset="100%" stopColor="#DDD0BC" />
              </linearGradient>
              <linearGradient id="mengWater" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D5CBBF" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#9C9486" stopOpacity="0.7" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" fill="url(#mengSky)" />

            {/* 朱砂朝阳半掩于雾霭之中 */}
            <circle cx="260" cy="115" r="42" fill="#A9322D" opacity="0.8" />

            {/* 远山峰峦 */}
            <path
              d="M140,320 L220,140 L280,210 L350,160 L400,200 L400,320 Z"
              fill="#8A8274"
              opacity="0.55"
            />

            {/* 前景青峦山势 */}
            <path
              d="M0,320 L40,240 L110,210 L190,270 L250,230 L320,320 Z"
              fill="#3A362F"
              opacity="0.8"
            />

            {/* 苍松写意轮廓 */}
            <path
              d="M50,250 C45,230 65,220 80,225 C95,215 115,225 110,245 Z"
              fill="#292722"
              opacity="0.85"
            />
            <line x1="80" y1="230" x2="80" y2="280" stroke="#292722" strokeWidth="2.5" />

            {/* 山下曲折泉水细波 */}
            <path
              d="M0,285 C80,275 160,295 240,285 C320,275 370,290 400,280 L400,320 L0,320 Z"
              fill="url(#mengWater)"
            />
            <path
              d="M20,298 Q140,288 280,298 T400,295"
              fill="none"
              stroke="#F7F3EB"
              strokeWidth="1.2"
              opacity="0.6"
            />
          </svg>
        </div>
      );

    case 5:
      // 水天需：云气、无垠水面、远处微光，呈现沉静等待与宽广空间
      return (
        <div className={`relative overflow-hidden w-full h-full ${className}`}>
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="xuGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F9F6EE" />
                <stop offset="45%" stopColor="#ECE3D3" />
                <stop offset="70%" stopColor="#D5C7B2" />
                <stop offset="100%" stopColor="#B3A38C" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" fill="url(#xuGrad)" />

            {/* 远处宁谧光轮（象征等待之中的希望） */}
            <circle cx="200" cy="130" r="38" fill="#B59A64" opacity="0.6" />
            <circle cx="200" cy="130" r="50" fill="none" stroke="#B59A64" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />

            {/* 层叠水气烟云 */}
            <path
              d="M0,150 Q100,130 200,145 T400,135 L400,170 L0,170 Z"
              fill="#FFFFFF"
              opacity="0.3"
            />

            {/* 远岸孤线 */}
            <path
              d="M0,185 Q140,175 280,185 T400,180"
              fill="none"
              stroke="#5D574D"
              strokeWidth="2"
              opacity="0.5"
            />

            {/* 广袤平湖微澜 */}
            <path
              d="M0,210 Q120,205 240,212 T400,208"
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M0,240 Q160,232 300,242 T400,236"
              fill="none"
              stroke="#B59A64"
              strokeWidth="1"
              opacity="0.4"
            />
            <path
              d="M0,270 Q140,262 270,272 T400,266"
              fill="none"
              stroke="#F7F3EB"
              strokeWidth="2"
              opacity="0.6"
            />
          </svg>
        </div>
      );

    case 11:
      // 地天泰：天地舒展、开阔山谷、天地交泰的平衡构图
      return (
        <div className={`relative overflow-hidden w-full h-full ${className}`}>
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="taiSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F8F4EC" />
                <stop offset="50%" stopColor="#ECE4D5" />
                <stop offset="100%" stopColor="#DFD3BF" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" fill="url(#taiSky)" />

            {/* 居中泰和红日 */}
            <circle cx="200" cy="110" r="46" fill="#A9322D" opacity="0.8" />

            {/* 左右对峙而开敞的山谷两侧，呈现天地相通之意 */}
            <path
              d="M0,320 L0,170 Q80,220 140,270 L180,320 Z"
              fill="#524C43"
              opacity="0.85"
            />
            <path
              d="M400,320 L400,165 Q320,215 260,268 L220,320 Z"
              fill="#6E675B"
              opacity="0.75"
            />

            {/* 中间开敞大平原与流云 */}
            <path
              d="M80,285 Q200,250 320,285 L400,320 L0,320 Z"
              fill="#C0B6A3"
              opacity="0.5"
            />
            <path
              d="M60,195 Q200,170 340,195"
              fill="none"
              stroke="#B59A64"
              strokeWidth="1.2"
              strokeDasharray="5 4"
              opacity="0.5"
            />
          </svg>
        </div>
      );

    case 42:
      // 风雷益：风的流动线条、雨后山林、向上生长的竹木生机
      return (
        <div className={`relative overflow-hidden w-full h-full ${className}`}>
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="yiSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F5F5ED" />
                <stop offset="60%" stopColor="#E5E6D6" />
                <stop offset="100%" stopColor="#D2D6C0" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" fill="url(#yiSky)" />

            {/* 晨光破云 */}
            <circle cx="290" cy="95" r="40" fill="#A9322D" opacity="0.75" />

            {/* 向上拔节的修竹与枝叶写意线条 */}
            <g opacity="0.75" stroke="#3A4033" strokeWidth="2" strokeLinecap="round">
              {/* 竹竿 */}
              <line x1="80" y1="320" x2="95" y2="120" />
              <line x1="105" y1="320" x2="115" y2="150" />
              <line x1="140" y1="320" x2="145" y2="170" />
              {/* 向上斜飞的竹叶 */}
              <path d="M92,150 Q115,135 130,130" fill="none" strokeWidth="2.5" />
              <path d="M90,180 Q65,165 50,165" fill="none" strokeWidth="2" />
              <path d="M112,170 Q135,155 155,160" fill="none" strokeWidth="2" />
              <path d="M94,130 Q105,105 120,95" fill="none" strokeWidth="2.5" />
            </g>

            {/* 拂面而过的风之韵律曲线 */}
            <path
              d="M0,130 C100,105 200,150 300,115 T400,100"
              fill="none"
              stroke="#B59A64"
              strokeWidth="1.5"
              opacity="0.45"
            />
            <path
              d="M0,170 C120,150 220,185 340,155 T400,145"
              fill="none"
              stroke="#B59A64"
              strokeWidth="1"
              opacity="0.35"
            />

            {/* 雨后青润峦峰 */}
            <path
              d="M120,320 L230,200 L310,260 L400,210 L400,320 Z"
              fill="#434B3D"
              opacity="0.7"
            />
          </svg>
        </div>
      );

    default:
      // 通用高精度东方水墨山水画卷（用于其余 58 卦）
      return (
        <div className={`relative overflow-hidden w-full h-full ${className}`}>
          <svg
            viewBox="0 0 400 320"
            className="w-full h-full object-cover"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="genSky" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F8F4EC" />
                <stop offset="55%" stopColor="#ECE3D3" />
                <stop offset="100%" stopColor="#DFD3BF" />
              </linearGradient>
            </defs>
            <rect width="400" height="320" fill="url(#genSky)" />

            {/* 朱砂圆日 */}
            <circle cx="260" cy="110" r="44" fill="#A9322D" opacity="0.8" />

            {/* 远山淡影 */}
            <path
              d="M100,320 L180,160 L240,220 L320,170 L400,215 L400,320 Z"
              fill="#8F8778"
              opacity="0.5"
            />

            {/* 主峰墨色 */}
            <path
              d="M0,320 L50,235 L130,195 L220,265 L300,225 L380,320 Z"
              fill="#3A362F"
              opacity="0.8"
            />

            {/* 苍劲松针林廓 */}
            <path
              d="M30,260 C25,245 45,235 60,240 C75,230 90,240 85,255 Z"
              fill="#292722"
              opacity="0.8"
            />
            <line x1="60" y1="245" x2="60" y2="285" stroke="#292722" strokeWidth="2" />

            {/* 云烟流水 */}
            <path
              d="M0,285 C80,270 180,300 270,280 T400,275 L400,320 L0,320 Z"
              fill="#F7F3EB"
              opacity="0.75"
            />
            <path
              d="M20,295 Q180,280 380,295"
              fill="none"
              stroke="#B59A64"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </div>
      );
  }
};
