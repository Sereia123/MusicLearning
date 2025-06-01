'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import GridContainer from '../../components/GridContainer';
import PianoKeys from '../../components/PianoKeys';
import {correctPositions, question} from '../../components/question/question1';


export default function Page1() {
  const [isPlaying, setIsPlaying] = useState(false); // 再生状態
  const [startCol, setStartCol] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const rows = 24;
  const cols = 7;
  const [noteStates, setNoteStates] = useState<boolean[][]>(
      () => Array.from({ length: rows }, () => Array(cols).fill(false))
    );
  const [judgeResult, setJudgeResult] = useState<string | null>(null);
  const [isJudged, setIsJudged] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);



  const handleStart = () => {
    setCurrentCol(startCol);
    setIsPlaying(true);
  };

  const handleJudge = () => {
    const result = correctPositions.every(({ row, col }) => noteStates[row][col]);
    setIsCorrect(result);
    setIsJudged(true);
  };

  useEffect(() => {
    if (isJudged) {
      setJudgeResult(isCorrect ? 'せいか～い(･ω･ﾉﾉ' : 'やりなおし～ლ(◉◞౪◟◉ )ლ');
    }
  }, [isJudged, isCorrect]);

  const handleReturn = () => {
    setJudgeResult(null);
    setIsJudged(false);

  }

  return (
    <>
      
      
      

      <div className='w-[1000px] h-[670px] mx-auto mt-10'>
        
        <p className='h-[50px] text-white text-3xl text-center font-bold'>{question}</p>
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
          
        <div className="flex mx-auto mt-0 ">
          <div className="flex-1">
            <PianoKeys />
          </div>
          <div className="relative flex-1">
            <GridContainer 
              isPlaying={isPlaying} setIsPlaying={setIsPlaying} 
              currentCol={currentCol} setCurrentCol={setCurrentCol}
              noteStates={noteStates} setNoteStates={setNoteStates}
              cols={cols}
              rows={rows}
              disabled={isJudged}
            />
          </div>

          {judgeResult && (
            <div className='absolute flex ml-[200px] mt-[250px] gap-10'>
              <div className="bg-white/60 p-4 rounded  text-center text-5xl font-bold">
                {judgeResult}
              </div>

              {isCorrect && (
                <Link href="/pages/page2">
                  <button
                    className="
                      bg-orange-500/80 text-white text-3xl px-4 py-5 mt-2 rounded hover:bg-orange-500
                    "
                  >
                    次の問題へ {`>>`}
                  </button>
                </Link>
              )}
            </div>
            
          )}
        </div>
      </div>
      

      {/* 再生・停止ボタン */}
      <div className="flex justify-center mt-[70px] space-x-4 h-10">
        <button
          className={`
            bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600
            ${isJudged ? 'opacity-50 pointer-events-none' : ''}
          `}
          onClick={() => handleStart()}
        >
          ▶ 再生
        </button>
        <button
          className={`
            bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600
            ${isJudged ? 'opacity-50 pointer-events-none' : ''}
          `}
          onClick={() => setIsPlaying(false)}
        >
          ■ 停止
        </button>
        <button
          onClick={() => {
            setNoteStates(Array.from({ length: rows }, () => Array(cols).fill(false)));
          }}
          className={`
            bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500
            ${isJudged ? 'opacity-50 pointer-events-none' : ''}
          `}
        >
          🔄 リセット
        </button>
        <button
          className={`
            bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600
            ${isJudged ? 'opacity-50 pointer-events-none' : ''}
          `}
          onClick={() => handleJudge()}
        >
          判定
        </button>
        <button
          className={`
            bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600
            ${!isJudged ? 'opacity-50 pointer-events-none' : ''}
          `}
          onClick={() => handleReturn()}
        >
          もう一度
        </button>
      </div>
      
      
    </>
  );
}