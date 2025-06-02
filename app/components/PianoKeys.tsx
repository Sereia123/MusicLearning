'use client';

import { playNote } from './audioUtils';
import React from 'react';

export default function VerticalSynthPiano({whiteKeys, blackKeys}:{whiteKeys:string[], blackKeys:string[]}) {

  return (
    <div className=''>
      <div className="relative flex flex-col h-[900px] w-[110px]  bg-white border-r-2 border-gray-500 ">
        {/* 白鍵 */}
        {whiteKeys.map((key) => (
          <div
            key={key}
            onClick={() => playNote(key, 0.5)} // 音の長さを調整 (例: 0.5秒)
            className="flex-1 border-t border-gray-400 flex items-center justify-start pl-2 relative cursor-pointer hover:bg-gray-100 font-bold"
          >
            <p className='ml-[70%] font-bold'>{key}</p>
          </div>
        ))}

        {/* 黒鍵 */}
        {blackKeys.map((key, index) =>
          key ? (
            <div
              key={key}
              onClick={() => playNote(key, 0.5)} // 音の長さを調整 (例: 0.5秒)
              className="absolute left-0 w-14 h-[3%] bg-black z-10 cursor-pointer flex items-center justify-center text-white font-bold"
              style={{
                top: `${index * (100 / 21) + 3.3}%`,
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