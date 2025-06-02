'use client';

import { playNote, playNotes, getAudioContext } from './audioUtils'; 
import { useEffect } from 'react';

const intervalMs = 500;

export default function GridContainer({ 
  isPlaying, 
  setIsPlaying, 
  currentCol, 
  setCurrentCol,
  cols, 
  rows,
  noteStates,
  setNoteStates,
  disabled,
  rowToNote,
  blackRow,
  clickableRows
}: { 
  isPlaying: boolean; 
  setIsPlaying: (isPlaying: boolean) => void; 
  currentCol: number;
  setCurrentCol: React.Dispatch<React.SetStateAction<number>>;
  cols: number;
  rows: number;
  noteStates: boolean[][];
  setNoteStates: React.Dispatch<React.SetStateAction<boolean[][]>>;
  disabled: boolean;
  rowToNote: Record<number, string>;
  blackRow: number[];
  clickableRows: number[];
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

    if (currentCol > cols) {
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
      }, intervalMs/2); // ← 100ms 遅らせる（任意の値）
    }

    const timer = setTimeout(() => {
      setCurrentCol((prev) => prev + 1);
    }, intervalMs);

    return () => clearTimeout(timer);
  }, [isPlaying, currentCol, noteStates]);

  
  const isRowClickable = (row: number) =>
    clickableRows.length === 0 || clickableRows.includes(row);
  
  const handleCellClick = (row: number, col: number) => {
    if (disabled) return;

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
    <div 
      className={`
        relative w-[690px] h-[900px] grid
        ${disabled ? 'opacity-80 pointer-events-none' : ''}
      `}
      style={{
      gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
      gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
    }}>
      {/* 再生バー */}
      {isPlaying && <div
        className="absolute top-0 bottom-0 w-1 h-full bg-gray-400 opacity-50 z-20 transition-transform pointer-events-none ease-linear"
        style={{
          transform: `translateX(${(690 / cols) * currentCol}px)`,
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
            onClick={() => {
              if (disabled || !isRowClickable(row)) return;
              handleCellClick(row, col)}}
            className={`
              border border-gray-300 cursor-pointer z-10 transition-colors duration-100 ease-in-out
              ${!isRowClickable(row) ? 'pointer-events-none opacity-60' : 'cursor-pointer'}
              ${isActive 
                ? 'bg-blue-400 hover:bg-blue-500' // アクティブなノートの色
                : isBlack 
                  ? 'bg-gray-200 hover:bg-gray-300' // 黒鍵の背景色
                  : 'bg-white hover:bg-gray-200' // 白鍵の背景色
              }`}
           ></div>
        );
      })}
    </div>
  );
}