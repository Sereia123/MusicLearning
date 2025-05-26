'use client';

import { useState } from 'react';

export default function DoubleClickArea() {
  const [isVisible, setIsVisible] = useState(false);

  const handleDoubleClick = () => {
    setIsVisible(prev => !prev); // ダブルクリックで切り替え
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      className="w-full h-full border border-gray-300 flex items-center justify-center bg-white hover:bg-gray-100"
    >
      {isVisible && 
        <div className="bg-red-300 h-full w-full"></div>
      }
    </div>
  );
}