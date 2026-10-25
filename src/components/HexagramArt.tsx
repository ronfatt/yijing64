import React, { useState } from 'react';

interface HexagramArtProps {
  hexagramNumber: number;
  className?: string;
  variant?: 'card' | 'thumb' | 'hero';
}

/**
 * 映射不同卦象至最贴切的中国水墨山水画作
 */
function getLandscapeImagePath(num: number, variant?: 'card' | 'thumb' | 'hero'): string {
  if (variant === 'hero') {
    return '/images/hero-landscape.png';
  }
  // 水系、云雾、幽谷类卦象使用烟雨山峦（蒙、需、师、比、坎、蹇、解、豫、涣等）
  const mistyHexagrams = [3, 4, 5, 6, 7, 8, 16, 29, 39, 40, 48, 59, 63, 64];
  if (mistyHexagrams.includes(num)) {
    return '/images/landscape-mist.png';
  }
  // 乾坤高山、大地、泰、益等使用重峦旭日大写意
  return '/images/landscape-master.png';
}

export const HexagramArt: React.FC<HexagramArtProps> = ({
  hexagramNumber,
  className = '',
  variant = 'card',
}) => {
  const [imgError, setImgError] = useState(false);
  const imageSrc = getLandscapeImagePath(hexagramNumber, variant);

  return (
    <div className={`relative overflow-hidden w-full h-full select-none ${className}`}>
      {!imgError ? (
        <div className="relative w-full h-full">
          <img
            src={imageSrc}
            alt="东方水墨山水"
            onError={() => setImgError(true)}
            className="w-full h-full object-cover object-center transition-transform duration-500"
            loading="lazy"
          />
          {/* 仅在主签卡有文字叠加时施加适度渐变，缩略图和首屏保持画卷清晰生动 */}
          {variant === 'card' && (
            <>
              <div className="absolute inset-0 bg-gradient-to-t from-[#FFFCF6] via-[#FFFCF6]/50 to-transparent opacity-85" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#FFFCF6]/80 via-transparent to-transparent opacity-70" />
            </>
          )}
          {variant === 'hero' && (
            <div className="absolute inset-0 bg-gradient-to-t from-[#F7F3EB] via-transparent to-transparent opacity-60" />
          )}
        </div>
      ) : (
        // 优雅备用纯矢量水墨（当图片离线或加载中时安全兜底）
        <svg
          viewBox="0 0 400 320"
          className="w-full h-full object-cover"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="fallbackSky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F8F4EC" />
              <stop offset="60%" stopColor="#ECE3D3" />
              <stop offset="100%" stopColor="#DFD3BF" />
            </linearGradient>
          </defs>
          <rect width="400" height="320" fill="url(#fallbackSky)" />
          <circle cx="280" cy="95" r="42" fill="#A9322D" opacity="0.8" />
          <path d="M120,320 L210,135 L280,210 L360,150 L400,195 L400,320 Z" fill="#8F8778" opacity="0.5" />
          <path d="M0,320 L50,225 L130,190 L230,265 L310,215 L390,320 Z" fill="#3A362F" opacity="0.8" />
          <path d="M0,285 C80,270 180,300 270,280 T400,275 L400,320 L0,320 Z" fill="#F7F3EB" opacity="0.75" />
        </svg>
      )}
    </div>
  );
};
