'use client';

// 各キーに対応する周波数
export const noteFrequencies: Record<string, number> = {
  'F3': 174.614,
  'F#3': 184.997,
  'G3':	195.998,
  'G#3': 207.652,
  'A3': 220.000,
  'A#3': 233.082,
  'B3': 246.942,
  'C4': 261.626,
  'C#4': 277.183,
  'D4': 293.665,
  'D#4': 311.127,
  'E4': 329.628,
  'F4': 349.228,
  'F#4': 369.994,
  'G4': 391.995,
  'G#4': 415.305,
  'A4': 440.000,
  'A#4': 466.164,
  'B4': 493.883,
  'C5': 523.251,
  'C#5': 554.365,
  'D5': 587.330,
  'D#5': 622.254,
  'E5': 659.255,
};

let audioCtx: AudioContext | null = null;

export const getAudioContext = (): AudioContext => {
  if (typeof window !== 'undefined' && !audioCtx) {
    audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  }
  return audioCtx as AudioContext; // null チェックは利用側で行うか、初期化を保証する
};

export const playNoteWithContext = (audioContext: AudioContext, note: string, durationSeconds: number = 0.5) => {
  const frequency = noteFrequencies[note];

  // 周波数が存在しない、または数値でない、または有限数でない場合は警告して早期リターン
  if (frequency === undefined || typeof frequency !== 'number' || !isFinite(frequency)) {
    console.warn(`Frequency not found or invalid for note: "${note}". Retrieved frequency value:`, frequency);
    return;
  }
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();

  oscillator.type = 'triangle'; // "sine",  "square", "triangle", "sawtooth"
  oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);

  oscillator.start();
  // 音の減衰を少し短く調整 (例: 0.5秒)
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + durationSeconds);
  oscillator.stop(audioContext.currentTime + durationSeconds);
};

export const playNote = async(note: string, durationSeconds: number = 0.5) => {
  const ctx = getAudioContext();
  if (ctx) {
    await ctx.resume();
    playNoteWithContext(ctx, note, durationSeconds);
  }
};

export async function playNotes(notes: string[], durationSeconds: number = 0.5) {
  const ctx = getAudioContext();
  if (ctx) {
    await ctx.resume();
    notes.forEach((note) => {
      playNoteWithContext(ctx, note, durationSeconds);
    });
  }
}