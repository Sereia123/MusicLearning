'use client';

import { playNote } from './audioUtils';
import React from 'react';

const whiteKeys1 = ['E5', 'D5', 'C5', 'B4', 'A4', 'G4', 'F4'];
const whiteKeys2 = ['E4', 'D4', 'C4', 'B3', 'A3', 'G3', 'F3'];
const blackKeys1 = ['D#5', 'C#5', '', 'A#4', 'G#4', 'F#4', ''];
const blackKeys2 = ['D#4', 'C#4', '', 'A#3', 'G#3', 'F#3', ''];


export default function VerticalSynthPiano() {

  return (
    <div className=''>
      <div className="relative flex flex-col h-[300px] w-[110px]  bg-white border-r-2 border-gray-500 ">
        {/* 白鍵 */}
        {whiteKeys1.map((key) => (
          <div
            key={key}
            onClick={() => playNote(key, 0.5)} // 音の長さを調整 (例: 0.5秒)
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
              onClick={() => playNote(key, 0.5)} // 音の長さを調整 (例: 0.5秒)
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
            onClick={() => playNote(key, 0.5)} // 音の長さを調整 (例: 0.5秒)
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