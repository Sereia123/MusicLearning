'use client';
import DoubleClickArea from './DoubleClickArea';

const cols = 8;
const rows = 14;

export default function GridContainer() {
  const grid = Array.from({ length: rows * cols });

  return (
    <div
      className="grid "
      style={{
        gridTemplateColumns: `repeat(${cols}, 1fr)`,
        gridTemplateRows: `repeat(${rows}, 1fr)`,
        width: '890px',
        height: '600px',
      }}
    >
      {grid.map((_, index) => (
        <div key={index} className="border-0 border-gray-200">
          <DoubleClickArea />
        </div>
      ))}
    </div>
  );
}