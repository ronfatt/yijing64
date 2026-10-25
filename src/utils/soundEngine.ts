/**
 * 东方雅磬 / 钟鸣声音合成引擎
 * 采用 Web Audio API 原生振荡器合成，无任何外部音频文件依赖，轻盈高雅。
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * 播放清脆柔和的磬音（用于起卦、爻成、转场提示）
 * 频率模拟传统铜磬音高：主频 528Hz (修护心绪)、泛音 1056Hz, 1584Hz
 */
export function playChimeSound(type: 'subtle' | 'bell' | 'deep' = 'subtle') {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const baseFreq = type === 'deep' ? 264 : type === 'bell' ? 440 : 528;

    // 建立主音与双泛音振荡器，构成清澈空灵的金属磬鸣
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain1 = ctx.createGain();
    const gain2 = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(baseFreq, now);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(baseFreq * 2.01, now); // 微弱自然音偏差产生泛音光泽

    const duration = type === 'deep' ? 2.5 : type === 'bell' ? 2.0 : 1.2;

    gain1.gain.setValueAtTime(0.001, now);
    gain1.gain.exponentialRampToValueAtTime(0.2, now + 0.03);
    gain1.gain.exponentialRampToValueAtTime(0.0001, now + duration);

    gain2.gain.setValueAtTime(0.001, now);
    gain2.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
    gain2.gain.exponentialRampToValueAtTime(0.0001, now + duration * 0.7);

    osc1.connect(gain1);
    osc2.connect(gain2);

    gain1.connect(ctx.destination);
    gain2.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);

    osc1.stop(now + duration);
    osc2.stop(now + duration);
  } catch (e) {
    console.warn('Audio playback error (silently handled):', e);
  }
}
