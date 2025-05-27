'use client';

import { useState } from 'react';

export default function DoubleClickArea({isBlack}: {isBlack: boolean}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleDoubleClick = () => {
    setIsVisible(prev => !prev); // ダブルクリックで切り替え
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className={`w-full h-full border border-gray-400 flex items-center justify-center ${
        isBlack ? 'bg-gray-200' : 'bg-white'
      } hover:bg-red-200`}
    >
      {isVisible && 
        <div className="bg-red-300 h-full w-full"></div>
      }
    </div>
  );
}