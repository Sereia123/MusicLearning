'use client';
import DoubleClickArea from './DoubleClickArea';
// import { useEffect, useState } from 'react';

const cols = 8;
const rows = 24;
// const intervalMs = 300;
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
const noteFrequencies: Record<string, number> = {
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

const playNote = (note: string) => {
  const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
  const oscillator = audioCtx.createOscillator();
  const gainNode = audioCtx.createGain();

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(noteFrequencies[note], audioCtx.currentTime);
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  oscillator.start();
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
  oscillator.stop(audioCtx.currentTime + 1);
};

export default function GridContainer() {
  const grid = Array.from({ length: rows * cols });

  return (
    <div
      className={`grid w-[890px] h-[600px]`}
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
    >
      {grid.map((_, index) => {
        const currentRow = Math.floor(index / cols) + 1;
        const isBlack = blackRow.includes(currentRow);

        const handleClick = () => {
        const note = rowToNote[currentRow];
        if (note) playNote(note);
      };

        return (
          <div
            key={index}
            onDoubleClick={handleClick}
            className="border-0 border-gray-200"
          >
          <DoubleClickArea isBlack={isBlack}/>
        </div>
        );
      })}
    </div>
  );
}