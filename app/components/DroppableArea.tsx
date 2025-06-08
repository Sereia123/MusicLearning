'use client';

import { useDroppable } from '@dnd-kit/core';
import DraggableItem from './DraggableItem';

type Item = {
  id: string;     
  label: string;  
};

type Props = {
  id: string;
  color: 'red' | 'green' | 'yellow' | 'blue' | 'purple' | 'pink' | 'orange' | 'gray';
  items: Item[];
  isDraggable: boolean;

};



export default function DroppableArea({ id, color, items,  isDraggable}: Props) {
  const { setNodeRef, } = useDroppable({ id });  //ドロップエリアの定義


  const baseBorder = "border-dashed border-[2px] rounded-xl flex items-center justify-center gap-3 p-2";

  const borderColorClass = {
    red: 'border-red-400, bg-red-200/30',
    green: 'border-green-400, bg-green-200/30',
    yellow: 'border-yellow-400, bg-yellow-200/30',
    blue: 'border-blue-400, bg-blue-200/30',
    purple: 'border-purple-400, bg-purple-200/30',
    pink: 'border-pink-400, bg-pink-200/30',
    orange: 'border-orange-400, bg-orange-200/30',
    gray: 'border-white, bg-white/30',
  }[color as string];

  const sizeClass =
    id === 'unplaced'
      ? 'w-[600px] h-[100px]' 
      : 'w-[100px] h-[70px]';

  return (
    <div ref={setNodeRef} className={`${baseBorder} ${borderColorClass} ${sizeClass} text-center text-sm `}>
      {items.map((item) => (  //エリア描画
        <DraggableItem 
          key={item.id}
          id={item.id}
          label={item.label} 
          disabled={!isDraggable}/>
      ))}
    </div>
  );
}
