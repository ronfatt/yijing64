import { HexagramData, YaoPolarity } from '../types/iching';

export type CardRatio = '4:5' | '9:16';
export type CardTheme = 'xuan' | 'zhusha';

export interface ShareCardOptions {
  hexagram: HexagramData;
  ratio: CardRatio;
  theme: CardTheme;
  dateStr?: string;
}

/**
 * 绘制雅致的朱砂闲章印戳（篆书感边角）
 */
function drawSeal(ctx: CanvasRenderingContext2D, x: number, y: number, text: string, theme: CardTheme) {
  ctx.save();
  const sealWidth = 36;
  const sealHeight = 36;
  
  if (theme === 'xuan') {
    ctx.strokeStyle = '#A9322D';
    ctx.fillStyle = '#A9322D';
  } else {
    ctx.strokeStyle = '#B59A64';
    ctx.fillStyle = '#B59A64';
  }
  
  ctx.lineWidth = 2;
  // 绘制圆角印框
  const r = 4;
  ctx.beginPath();
  ctx.moveTo(x - sealWidth / 2 + r, y - sealHeight / 2);
  ctx.lineTo(x + sealWidth / 2 - r, y - sealHeight / 2);
  ctx.arcTo(x + sealWidth / 2, y - sealHeight / 2, x + sealWidth / 2, y - sealHeight / 2 + r, r);
  ctx.lineTo(x + sealWidth / 2, y + sealHeight / 2 - r);
  ctx.arcTo(x + sealWidth / 2, y + sealHeight / 2, x + sealWidth / 2 - r, y + sealHeight / 2, r);
  ctx.lineTo(x - sealWidth / 2 + r, y + sealHeight / 2);
  ctx.arcTo(x - sealWidth / 2, y + sealHeight / 2, x - sealWidth / 2, y + sealHeight / 2 - r, r);
  ctx.lineTo(x - sealWidth / 2, y - sealHeight / 2 + r);
  ctx.arcTo(x - sealWidth / 2, y - sealHeight / 2, x - sealWidth / 2 + r, y - sealHeight / 2, r);
  ctx.stroke();

  // 绘制印章字样
  ctx.font = 'bold 16px "Songti SC", "Noto Serif SC", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, x, y);
  ctx.restore();
}

/**
 * 绘制水墨写意山峦（用贝塞尔曲线营造东方远山近景）
 */
function drawMountains(ctx: CanvasRenderingContext2D, width: number, height: number, theme: CardTheme) {
  ctx.save();
  const isXuan = theme === 'xuan';

  // 远山
  ctx.fillStyle = isXuan ? 'rgba(213, 203, 191, 0.45)' : 'rgba(181, 154, 100, 0.12)';
  ctx.beginPath();
  ctx.moveTo(0, height * 0.72);
  ctx.bezierCurveTo(width * 0.25, height * 0.64, width * 0.45, height * 0.69, width * 0.65, height * 0.63);
  ctx.bezierCurveTo(width * 0.8, height * 0.59, width * 0.9, height * 0.65, width, height * 0.67);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fill();

  // 近山
  ctx.fillStyle = isXuan ? 'rgba(128, 121, 110, 0.18)' : 'rgba(235, 200, 140, 0.18)';
  ctx.beginPath();
  ctx.moveTo(0, height * 0.82);
  ctx.bezierCurveTo(width * 0.2, height * 0.76, width * 0.4, height * 0.84, width * 0.6, height * 0.77);
  ctx.bezierCurveTo(width * 0.75, height * 0.72, width * 0.88, height * 0.79, width, height * 0.76);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fill();

  ctx.restore();
}

/**
 * 绘制雅致的六爻卦象
 * 注意：六爻从下到上为 0 到 5，但在屏幕上，上爻 (5) 在最上方，初爻 (0) 在最下方
 */
function drawHexagramLines(
  ctx: CanvasRenderingContext2D,
  centerX: number,
  startY: number,
  width: number,
  polarities: YaoPolarity[],
  theme: CardTheme
) {
  ctx.save();
  const lineHeight = 8;
  const lineGap = 16;
  const gapBetweenYin = 28;
  const isXuan = theme === 'xuan';

  const strokeColor = isXuan ? '#292722' : '#E8D2A8';

  // 从顶端往下绘制，所以行索引从 5 (上爻) 遍历到 0 (初爻)
  for (let pos = 5; pos >= 0; pos--) {
    const polarity = polarities[pos];
    const rowIdx = 5 - pos;
    const currentY = startY + rowIdx * (lineHeight + lineGap);

    ctx.fillStyle = strokeColor;

    if (polarity === 1) {
      // 阳爻：完整一条线
      ctx.beginPath();
      ctx.roundRect(centerX - width / 2, currentY, width, lineHeight, 4);
      ctx.fill();
    } else {
      // 阴爻：中间断开
      const halfWidth = (width - gapBetweenYin) / 2;
      // 左段
      ctx.beginPath();
      ctx.roundRect(centerX - width / 2, currentY, halfWidth, lineHeight, 4);
      ctx.fill();
      // 右段
      ctx.beginPath();
      ctx.roundRect(centerX + gapBetweenYin / 2, currentY, halfWidth, lineHeight, 4);
      ctx.fill();
    }
  }

  ctx.restore();
}

/**
 * 核心渲染函数：在 Canvas 上渲染出高分辨率东方分享卡
 */
export function renderShareCardToCanvas(
  canvas: HTMLCanvasElement,
  options: ShareCardOptions
): void {
  const { hexagram, ratio, theme } = options;

  // 采用 2x / 3x 高清视网膜分辨率，保证下载印刷或高刷屏极其清晰
  const width = 1080;
  const height = ratio === '4:5' ? 1350 : 1920;

  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  const isXuan = theme === 'xuan';

  // 1. 背景底色
  if (isXuan) {
    ctx.fillStyle = '#F7F3EB'; // 宣纸白
    ctx.fillRect(0, 0, width, height);

    // 绘制极轻微宣纸纤维光晕
    const grad = ctx.createRadialGradient(width / 2, height * 0.4, 100, width / 2, height * 0.4, width);
    grad.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
    grad.addColorStop(1, 'rgba(239, 233, 223, 0.4)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  } else {
    // 朱砂深酒红夜色
    ctx.fillStyle = '#461F24';
    ctx.fillRect(0, 0, width, height);

    const grad = ctx.createRadialGradient(width / 2, height * 0.35, 80, width / 2, height * 0.4, width * 0.8);
    grad.addColorStop(0, 'rgba(169, 50, 45, 0.28)');
    grad.addColorStop(1, 'rgba(53, 22, 26, 0.8)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  }

  // 2. 边框细线与装饰角
  ctx.save();
  const padding = ratio === '4:5' ? 70 : 80;
  ctx.strokeStyle = isXuan ? 'rgba(181, 154, 100, 0.3)' : 'rgba(181, 154, 100, 0.35)';
  ctx.lineWidth = 1.5;
  ctx.strokeRect(padding, padding, width - padding * 2, height - padding * 2);

  // 内边框微细线
  ctx.strokeStyle = isXuan ? 'rgba(181, 154, 100, 0.15)' : 'rgba(181, 154, 100, 0.2)';
  ctx.lineWidth = 1;
  ctx.strokeRect(padding + 8, padding + 8, width - (padding + 8) * 2, height - (padding + 8) * 2);
  ctx.restore();

  // 3. 远山近水
  drawMountains(ctx, width, height, theme);

  // 4. 顶部品牌与日期
  const topY = ratio === '4:5' ? padding + 60 : padding + 90;

  // 品牌标志 "问境" + 小字 "WENJING"
  ctx.save();
  ctx.fillStyle = isXuan ? '#A9322D' : '#D4A86A';
  ctx.font = 'bold 34px "Songti SC", "Noto Serif SC", serif';
  ctx.textAlign = 'center';
  ctx.fillText('问境', width / 2, topY);

  ctx.font = '500 14px -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif';
  ctx.fillStyle = isXuan ? '#80796E' : '#C9B385';
  ctx.letterSpacing = '6px';
  ctx.fillText('W E N J I N G', width / 2 + 3, topY + 28);
  ctx.restore();

  // 5. 印章装饰
  drawSeal(ctx, width / 2 + 130, topY + 4, '定', theme);

  // 6. 日期
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const dateFormatted = `${year}.${month}.${day}`;

  ctx.save();
  ctx.font = '16px -apple-system, sans-serif';
  ctx.fillStyle = isXuan ? '#A39C91' : 'rgba(201, 179, 133, 0.7)';
  ctx.textAlign = 'center';
  ctx.fillText(dateFormatted, width / 2, topY + 70);
  ctx.restore();

  // 7. 卦象居中绘制
  const polarities: YaoPolarity[] = hexagram.binary.split('').map((c) => (c === '1' ? 1 : 0));
  const hexagramCenterY = ratio === '4:5' ? height * 0.32 : height * 0.33;
  drawHexagramLines(ctx, width / 2, hexagramCenterY, 200, polarities, theme);

  // 8. 卦序与卦名
  const nameY = hexagramCenterY + (6 * (8 + 16)) + 50;

  ctx.save();
  ctx.textAlign = 'center';
  
  // 卦序小字，如：第四卦 · 上艮下坎
  ctx.font = '18px "Songti SC", serif';
  ctx.fillStyle = isXuan ? '#80796E' : '#B59A64';
  ctx.fillText(`第${hexagram.number}卦 · 上${hexagram.upperTrigram}下${hexagram.lowerTrigram}`, width / 2, nameY);

  // 卦名大字，如：山水蒙
  ctx.font = '600 58px "Songti SC", "Noto Serif SC", serif';
  ctx.fillStyle = isXuan ? '#292722' : '#F7F3EB';
  ctx.fillText(hexagram.name, width / 2, nameY + 68);

  // 9. 核心启发（大引号或精致横线包裹）
  const insightY = nameY + 160;

  // 装饰细线
  ctx.strokeStyle = isXuan ? 'rgba(181, 154, 100, 0.4)' : 'rgba(181, 154, 100, 0.5)';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(width / 2 - 60, insightY - 30);
  ctx.lineTo(width / 2 + 60, insightY - 30);
  ctx.stroke();

  // 启发主句
  ctx.font = '600 36px "Songti SC", "Noto Serif SC", serif';
  ctx.fillStyle = isXuan ? '#A9322D' : '#E8D2A8';
  ctx.fillText(`“${hexagram.coreInsight}”`, width / 2, insightY + 18);

  // 启发短文
  ctx.font = '22px -apple-system, "PingFang SC", sans-serif';
  ctx.fillStyle = isXuan ? '#48443D' : '#E0D8CB';
  ctx.fillText(hexagram.summary, width / 2, insightY + 68);

  // 10. 关键词微标签（如：启蒙 · 求真 · 慎行）
  const keywordsY = insightY + 130;
  ctx.font = '500 18px "Songti SC", serif';
  ctx.fillStyle = isXuan ? '#80796E' : '#B59A64';
  const kwText = hexagram.keywords.join('  ·  ');
  ctx.fillText(kwText, width / 2, keywordsY);
  ctx.restore();

  // 11. 底部品牌主张
  const bottomY = height - padding - 45;
  ctx.save();
  ctx.textAlign = 'center';
  ctx.font = '18px "Songti SC", "Noto Serif SC", serif';
  ctx.fillStyle = isXuan ? '#80796E' : 'rgba(235, 225, 210, 0.75)';
  ctx.letterSpacing = '3px';
  ctx.fillText('一念之间，看见方向。', width / 2, bottomY);

  ctx.font = '13px -apple-system, sans-serif';
  ctx.fillStyle = isXuan ? '#B5ABA0' : 'rgba(181, 154, 100, 0.5)';
  ctx.fillText('问境 WENJING · 易经哲思反思卡', width / 2, bottomY + 26);
  ctx.restore();
}

/**
 * 触发真实 PNG 下载或移动端 Web Share
 */
export async function downloadOrShareCard(
  canvas: HTMLCanvasElement,
  filename: string = 'wenjing_card.png'
): Promise<{ success: boolean; shared?: boolean; error?: string }> {
  try {
    return new Promise((resolve) => {
      canvas.toBlob(async (blob) => {
        if (!blob) {
          resolve({ success: false, error: '生成图片数据失败' });
          return;
        }

        // 尝试 Web Share API（如果支持且包含文件分享）
        if (
          navigator.canShare &&
          navigator.canShare({ files: [new File([blob], filename, { type: 'image/png' })] })
        ) {
          try {
            await navigator.share({
              title: '问境 · 一念之间，看见方向',
              text: '一念之间，看见方向。',
              files: [new File([blob], filename, { type: 'image/png' })],
            });
            resolve({ success: true, shared: true });
            return;
          } catch (e: unknown) {
            // 用户取消分享或系统限制，降级走文件下载
            if ((e as Error).name !== 'AbortError') {
              console.warn('Web Share failed, fallback to direct download:', e);
            }
          }
        }

        // 标准客户端 PNG 下载
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(() => URL.revokeObjectURL(url), 1000);
        resolve({ success: true, shared: false });
      }, 'image/png');
    });
  } catch (err: unknown) {
    return { success: false, error: (err as Error).message || '下载出现异常' };
  }
}
