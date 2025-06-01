'use client';

import { playNote, playNotes, getAudioContext } from './audioUtils'; // audioUtils からインポート
import { useEffect } from 'react';

const intervalMs = 500;

const blackRow: number[] = [2, 4, 7, 9, 11, 14, 16, 19, 21, 23];
const rowToNote: Record<number, string> = {
  1: 'E5',
  2: 'D#5',
  3: 'D5',
  4: 'C#5',
  5: 'C5',
  6: 'B4',
  7: 'A#4',
  8: 'A4',
  9: 'G#4',
  10: 'G4',
  11: 'F#4',
  12: 'F4',
  13: 'E4',
  14: 'D#4',
  15: 'D4',
  16: 'C#4',
  17: 'C4',
  18: 'B3',
  19: 'A#3',
  20: 'A3',
  21: 'G#3',
  22: 'G3',
  23: 'F#3',
  24: 'F3',
};



export default function GridContainer({ 
  isPlaying, 
  setIsPlaying, 
  currentCol, 
  setCurrentCol,
  cols, 
  rows,
  noteStates,
  setNoteStates,
}: { 
  isPlaying: boolean; 
  setIsPlaying: (isPlaying: boolean) => void; 
  currentCol: number;
  setCurrentCol: React.Dispatch<React.SetStateAction<number>>;
  cols: number;
  rows: number;
  noteStates: boolean[][];
  setNoteStates: React.Dispatch<React.SetStateAction<boolean[][]>>;
}) {
  
  useEffect(() => {
    const ctx = getAudioContext();
    if (!ctx) return;

    ctx.resume().then(() => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, ctx.currentTime); // 無音
      osc.connect(gain).connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.01); // 10msで終了
    });
  }, []);

  useEffect(() => {
  if (!isPlaying) return;

  if (currentCol >= cols) {
    setIsPlaying(false);
    return;
  }

  // 音を鳴らす処理
  const notesToPlay: string[] = [];
  for (let row = 0; row < rows; row++) {
    if (noteStates[row][currentCol]) {
      const note = rowToNote[row + 1];
      if (note) notesToPlay.push(note);
    }
  }
  if (notesToPlay.length > 0) {
    setTimeout(() => {
      playNotes(notesToPlay, intervalMs / 1000);
    }, intervalMs*1.2); // ← 100ms 遅らせる（任意の値）
  }

  const timer = setTimeout(() => {
    setCurrentCol((prev) => prev + 1);
  }, intervalMs);

  return () => clearTimeout(timer);
}, [isPlaying, currentCol, noteStates]);

  

  
  const handleCellClick = (row: number, col: number) => {
    setNoteStates((prev) => {
      const newStates = prev.map((r, rowIndex) =>
        rowIndex === row ? r.map((c, colIndex) => (colIndex === col ? !c : c)) : r
      );
      const noteIsActive = newStates[row][col];

      if (noteIsActive) { // ノートがアクティブになった場合に音を鳴らす
        const note = rowToNote[row + 1]; // 1始まりにする
        if (note) playNote(note);
      }
      return newStates;
    });
  };

  return (
    <div className="relative w-[890px] h-[600px] grid" style={{
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
    }}>
      {/* 再生バー */}
      {isPlaying && <div
        className="absolute top-0 bottom-0 w-1 h-full bg-gray-400 opacity-50 z-20 transition-transform pointer-events-none ease-linear"
        style={{
          transform: `translateX(${(890 / cols) * currentCol}px)`,
          transitionDuration: `${intervalMs}ms`,
          
        }}
      />
      }

      {Array.from({ length: rows * cols }).map((_, index) => {
        const row = Math.floor(index / cols);
        const col = index % cols;
        const isActive = noteStates[row][col];
        const isBlack = blackRow.includes(row + 1);

        return (
          <div
            key={index}
            // onDoubleClick={() => handleCellClick(row, col)} // ダブルクリックでノートを置く場合
            onClick={() => handleCellClick(row, col)} // シングルクリックでノートを置く
            className={`
              border border-gray-300 cursor-pointer z-10 transition-colors duration-100 ease-in-out
              ${isActive 
                ? 'bg-blue-400 hover:bg-blue-500' // アクティブなノートの色
                : isBlack 
                  ? 'bg-gray-200 hover:bg-gray-300' // 黒鍵の背景色
                  : 'bg-white hover:bg-gray-100' // 白鍵の背景色
              }`}
           ></div>
        );
      })}
    </div>
  );
}