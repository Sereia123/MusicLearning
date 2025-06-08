'use client';

import Link from 'next/link';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { useState } from 'react';
import DroppableArea from './DroppableArea';


export default function MajorScaleLogic({
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  question,
  correctAnswers,
  url,
}:{
  A:string;
  B:string;
  C:string;
  D:string;
  E:string;
  F:string;
  G:string;
  question:string;
  correctAnswers:Record<string, string[]>;
  url:string;
}){
  type AreaId = 'unplaced' | 'dropRed' | 'dropGreen' | 'dropYellow' | 'dropBlue' | 'dropOrange' | 'dropPurple' | 'dropPink';

  type Item = {
    id: string;     
    label: string;  
  };

  const [areaItems, setAreaItems] = useState<Record<AreaId, Item[]>>({
    'unplaced': [
      { id: 'A', label: A },
      { id: 'B', label: B },
      { id: 'C', label: C },
      { id: 'D', label: D },
      { id: 'E', label: E },
      { id: 'F', label: F },
      { id: 'G', label: G },
    ],  //カードの元場所・未配置 最初はここに生成
    'dropRed': [],  //赤枠
    'dropGreen': [],  //緑枠
    'dropYellow': [],  //黄色枠
    'dropBlue': [],  //青枠
    'dropOrange': [],  //オレンジ枠
    'dropPurple': [],  //紫枠
    'dropPink': [],  //ピンク枠
  });

  const [isDraggable, setIsDraggable] = useState(true);  //ドラッグアンドドロップ
  const [isNext, setIsNext] = useState(false);  

  const isClick = () =>{
    setIsDraggable(!isDraggable);
    let isCorrect:boolean = true;

    for (const key of Object.keys(correctAnswers) as AreaId[]) {
      if (key === 'unplaced') continue;

      const correct = correctAnswers[key];
      const actual = areaItems[key]?.[0];

      if (!actual || !correct.includes(actual.label.trim())) {
        isCorrect = false;
        break;
      }
    }
    if(isCorrect){
      setIsNext(true); // 正解なら「つぎへ」ボタンを表示
    }

  };

  return(
    <DndContext  //useDraggable useDroppableが使用可能
      collisionDetection={closestCenter}  //ドロップ領域の重なりを検知
      onDragEnd={({ active, over }) => {
        if (over) {  //どこに重なっていたかをcollisionDetectionから
          const to = over.id as AreaId;
          const itemId = String(active.id);  //重なりアイテム取得

           // 現在の全エリアから item を探す
          const draggedItem = Object.values(areaItems)
            .flat()
            .find((item) => item.id === itemId);
          if (!draggedItem) return;

          // item をすべてのエリアから削除
          const newArea: Record<AreaId, Item[]> = {} as any;
          for (const key in areaItems) {
            newArea[key as AreaId] = areaItems[key as AreaId].filter((v) => v.id !== itemId);
          }

          const isSingleItemArea = to !== 'unplaced'; // ← unplaced は複数配置可能

          if (isSingleItemArea && newArea[to].length > 0) return;
          //何かおいてたら何もしない

          // item を新しいドロップ先に追加
          newArea[to] = isSingleItemArea ? [draggedItem] : [...newArea[to], draggedItem]; //unplace以外だと記憶しているものにアイテム追加

          setAreaItems(newArea);  //useStateに状態を更新
          }
      }}>

      <div className='relative flex flex-col justify-center items-center gap-[20px] mt-[100px]'>
        <h2 className='font-bold text-5xl text-center text-white'>
          {question}
        </h2>

        <div className='flex gap-[50px] mt-10'>
          <div className='bg-white text-blue-400 rounded-md w-[150px] h-[50px] text-center text-2xl font-bold py-2'>
            ルート音
          </div>
          <div className='bg-white text-blue-400 rounded-md w-[100px] h-[50px] text-center text-2xl font-bold py-2'>
            音２
          </div>
          <div className='bg-white text-blue-400 rounded-md w-[100px] h-[50px] text-center text-2xl font-bold py-2'>
            音３
          </div>
          <div className='bg-white text-blue-400 rounded-md w-[100px] h-[50px] text-center text-2xl font-bold py-2'>
            音４
          </div>
          <div className='bg-white text-blue-400 rounded-md w-[100px] h-[50px] text-center text-2xl font-bold py-2'>
            音５
          </div>
          <div className='bg-white text-blue-400 rounded-md w-[100px] h-[50px] text-center text-2xl font-bold py-2'>
            音６
          </div>
          <div className='bg-white text-blue-400 rounded-md w-[100px] h-[50px] text-center text-2xl font-bold py-2'>
            音７
          </div>
          <div className='bg-white text-blue-400 rounded-md w-[150px] h-[50px] text-center text-2xl font-bold py-2'>
            ルート音(上)
          </div>
        </div>

        <div className='flex text-5xl font-bold text-white'>
          <div className='flex mx-4 gap-5'>
            <div >
              ↘
            </div>
            <div >
              ↗
            </div>
          </div>
          <div className='flex mx-4 gap-5'>
            <div >
              ↘
            </div>
            <div >
              ↗
            </div>
          </div>
          <div className='flex mx-4 gap-5'>
            <div >
              ↘
            </div>
            <div >
              ↗
            </div>
          </div>
          <div className='flex mx-4 gap-5'>
            <div >
              ↘
            </div>
            <div >
              ↗
            </div>
          </div>
          <div className='flex mx-4 gap-5'>
            <div >
              ↘
            </div>
            <div >
              ↗
            </div>
          </div>
          <div className='flex mx-4 gap-5'>
            <div >
              ↘
            </div>
            <div >
              ↗
            </div>
          </div>
          <div className='flex mx-4 gap-5'>
            <div >
              ↘
            </div>
            <div >
              ↗
            </div>
          </div>
        </div>

        <div className='flex gap-[50px]'>
          <DroppableArea id="dropRed" color="red" items={areaItems['dropRed']} isDraggable={isDraggable}/>
          <DroppableArea id="dropGreen" color="green" items={areaItems['dropGreen']} isDraggable={isDraggable}/>
          <DroppableArea id="dropYellow" color="yellow" items={areaItems['dropYellow']} isDraggable={isDraggable}/>
          <DroppableArea id="dropBlue" color="blue" items={areaItems['dropBlue']} isDraggable={isDraggable}/>
          <DroppableArea id="dropOrange" color="orange" items={areaItems['dropOrange']} isDraggable={isDraggable}/>
          <DroppableArea id="dropPurple" color="purple" items={areaItems['dropPurple']} isDraggable={isDraggable}/>
          <DroppableArea id="dropPink" color="pink" items={areaItems['dropPink']} isDraggable={isDraggable}/>
        </div>

        <div className='mt-[30px]'>
          <DroppableArea
            id="unplaced"
            color="gray"
            items={areaItems['unplaced']}
            isDraggable={isDraggable}
          />
        </div>
        
        <button 
          onClick={isClick}
          className='w-[150px] h-[50px] rounded-md text-blue-400 font-bold text-2xl shadow-md bg-white'>
          判定
        </button>

      </div>   

      {!isDraggable &&(
        <div className='absolute bg-white/50 w-[500px] h-[300px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center flex-col gap-[30px]'>
          {!isNext && (
            <>
              <p className='text-5xl font-bold'>ちゃいますよ？</p>
              <button 
                onClick={() => setIsDraggable(true)}
                className='bg-purple-500 w-[150px] h-[50px] rounded-md text-white text-xl font-bold'>
                もう一回！
              </button>
            </>
          )}
          {isNext && (
            <>
              <p className='text-5xl font-bold'>正解！</p>
              <Link href={url}>
                <button className='bg-orange-500 w-[150px] h-[50px] rounded-md text-white text-xl font-bold'>
                  次へ！
                </button>
              </Link>
              
            </>
          )}
        </div>  
      )}
      

    </DndContext>
  )
}