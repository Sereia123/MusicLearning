'use client';
import { useState } from 'react';
import GridContainer from './components/GridContainer';
import PianoKeys from './components/PianoKeys';
import {correctPositions} from './components/question/question1';


export default function Home() {
  const [isPlaying, setIsPlaying] = useState(false); // 再生状態
  const [startCol, setStartCol] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const rows = 24;
  const cols = 12;
  const [noteStates, setNoteStates] = useState<boolean[][]>(
      () => Array.from({ length: rows }, () => Array(cols).fill(false))
    );
  const [judgeResult, setJudgeResult] = useState<string | null>(null);



  const handleStart = () => {
    setCurrentCol(startCol);
    setIsPlaying(true);
  };

  const handleJudge = () => {
    const isCorrect = correctPositions.every(({ row, col }) => noteStates[row][col]);

    setJudgeResult(isCorrect ? '正解！' : '不正解');
  };

  return (
    <>
      

      

      <div className='w-[1000px] h-[600px] mx-auto mt-10'>
        <div className='flex gap-0'>
          <div className='w-[110px] bg-gray-300  text-center'>
            小節
          </div>
          <div className="grid w-[890px]" style={{ gridTemplateColumns: `repeat(${cols/4}, minmax(0, 1fr))` }}>
            {Array.from({ length: cols/4 }).map((_, col) => (
              <div
                key={`start-col-${col}`}
                className="
                  h-[24px] flex items-center justify-center text-sm font-bold bg-gray-300 border-l-[2px]"
              >
                {col + 1}
              </div>
            ))}
              

          </div>

        </div>


        <div className='flex gap-0'>
          <div className='w-[110px] bg-gray-200  text-center'>
            拍子
          </div>
          <div className="grid w-[890px]" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
            {Array.from({ length: cols }).map((_, col) => (
              <div
                key={`start-col-${col}`}
                onClick={() => setStartCol(col)}
                className={`
                  h-[24px] cursor-pointer flex items-center justify-center text-sm font-bold border-l-[2px] border-gray-300
                  ${startCol === col ? 'bg-yellow-200' : 'bg-gray-200 hover:bg-gray-300'}
                `}
              >
                {col + 1}
              </div>
            ))}
          </div>

        </div>
        
        {/* ピアノとノーツグリッド */}
          
        <div className="box-border border border-black flex mx-auto mt-0 ">
          <div className="flex-1">
            <PianoKeys />
          </div>
          <div className="flex-1">
            <GridContainer 
              isPlaying={isPlaying} setIsPlaying={setIsPlaying} 
              currentCol={currentCol} setCurrentCol={setCurrentCol}
              noteStates={noteStates} setNoteStates={setNoteStates}
              cols={cols}
              rows={rows}
            />
          </div>
        </div>
      </div>
      

      {/* 再生・停止ボタン */}
      <div className="flex justify-center mt-[70px] space-x-4 h-10">
        <button
          className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
          onClick={() => handleStart()}
        >
          ▶ 再生
        </button>
        <button
          className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600"
          onClick={() => setIsPlaying(false)}
        >
          ■ 停止
        </button>
        <button
          onClick={() => {
            setNoteStates(Array.from({ length: rows }, () => Array(cols).fill(false)));
          }}
          className="bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500"
        >
          🔄 リセット
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600"
          onClick={() => handleJudge()}
        >
          判定
        </button>
      </div>
      
      {judgeResult && (
        <div className="mt-2 text-center font-bold">
          {judgeResult}
        </div>
      )}
    </>
  );
}