'use client';

import React from 'react';

const whiteKeys1 = ['E5', 'D5', 'C5', 'B4', 'A4', 'G4', 'F4'];
const whiteKeys2 = ['E4', 'D4', 'C4', 'B3', 'A3', 'G3', 'F3'];
const blackKeys1 = ['D#5', 'C#5', '', 'A#4', 'G#4', 'F#4', ''];
const blackKeys2 = ['D#4', 'C#4', '', 'A#3', 'G#3', 'F#3', ''];

// 各キーに対応する周波数（1オクターブ）
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

export default function VerticalSynthPiano() {
  const playNote = (note: string) => {
    const audioCtx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'sine'; // 他に "square", "triangle", "sawtooth" 
    oscillator.frequency.setValueAtTime(noteFrequencies[note], audioCtx.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
    oscillator.stop(audioCtx.currentTime + 1);
  };

  return (
    <div className=''>
      <div className="relative flex flex-col h-[300px] w-[110px]  bg-white border-r-2 border-gray-500 ">
        {/* 白鍵 */}
        {whiteKeys1.map((key) => (
          <div
            key={key}
            onClick={() => playNote(key)}
            className="flex-1 border-t border-gray-400 flex items-center justify-start pl-2 relative cursor-pointer hover:bg-gray-100 font-bold"
          >
            <p className='ml-[70%] font-bold'>{key}</p>
          </div>
        ))}

        {/* 黒鍵 */}
        {blackKeys1.map((key, index) =>
          key ? (
            <div
              key={key}
              onClick={() => playNote(key)}
              className="absolute left-0 w-14 h-[9%] bg-black z-10 cursor-pointer flex items-center justify-center text-white font-bold"
              style={{
                top: `${index * (100 / 7) + 10}%`,
              }}
            >
              {key}
            </div>
          ) : null
        )}
      </div>

      <div className="relative flex flex-col h-[300px] w-[110px] bg-white border-r-2 border-gray-500">
        {/* 白鍵 */}
        {whiteKeys2.map((key) => (
          <div
            key={key}
            onClick={() => playNote(key)}
            className="flex-1 border-t border-gray-400 flex items-center justify-start pl-2 relative cursor-pointer hover:bg-gray-100 "
          >
            <p className='ml-[70%] font-bold'>{key}</p>
          </div>
        ))}

        {/* 黒鍵 */}
        {blackKeys2.map((key, index) =>
          key ? (
            <div
              key={key}
              onClick={() => playNote(key)}
              className="absolute left-0 w-14 h-[9%] bg-black z-10 cursor-pointer flex items-center justify-center text-white font-bold"
              style={{
                top: `${index * (100 / 7) + 10}%`,
              }}
            >
              {key}
            </div>
          ) : null
        )}
      </div>
      
    </div>
    
  );
}