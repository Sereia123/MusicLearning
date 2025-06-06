'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import GridContainer from './GridContainer';
import PianoKeys from './PianoKeys';
import { whiteKeys, blackKeys, rowToNote, blackRow } from './noteConfig';

export type Position = { row: number; col: number };

export type QuestionData = {
  question: string;
  correctPositions: Position[];
  clickableRows: number[];
};

export default function Origin({
  cols,
  questions,
  timeSignature
}:{
  cols:number; 
  questions:QuestionData[];
  timeSignature:number;
}) {
  const [currentIndex, setCurrentIndex] = useState(0); // 今の問題番号
  const currentQuestion = questions?.[currentIndex];     // 今の問題データ
  const [isPlaying, setIsPlaying] = useState(false); // 再生状態
  const [startCol, setStartCol] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const rows = 36;
  const [noteStates, setNoteStates] = useState<boolean[][]>(
      () => Array.from({ length: rows }, () => Array(cols).fill(false))
    );
  const [judgeResult, setJudgeResult] = useState<string | null>(null);
  const [isJudged, setIsJudged] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [isFinished, setIsFinished] = useState(false);



  const handleStart = () => {
    setCurrentCol(startCol);
    setIsPlaying(true);
  };

  const handleJudge = () => {
    const result = currentQuestion.correctPositions.every(({ row, col }) => noteStates[row][col]);
    setIsCorrect(result);
    setIsJudged(true);
  };

  useEffect(() => {
    if (isJudged) {
      setJudgeResult(isCorrect ? 'せいか～い(･ω･ﾉﾉ' : 'やりなおし～( ´︵` )');
    }
  }, [isJudged, isCorrect]);

  //小節計算
  function generateBarBeatsByCols(cols: number, timeSignature: number): number[] {
    const fullBars = Math.floor(cols / timeSignature);
    const remainder = cols % timeSignature;

    const beats = Array.from({ length: fullBars }, () => timeSignature);
    if (remainder > 0) beats.push(remainder);

    return beats;
  }

  const beats:number[] = generateBarBeatsByCols(cols, timeSignature);




  const handleReturn = () => {
    setJudgeResult(null);
    setIsJudged(false);

  }

  const handleNext = () => {
    setCurrentIndex(currentIndex + 1);
    setNoteStates(Array.from({ length: rows }, () => Array(cols).fill(false)));
    setIsJudged(false);
    setJudgeResult(null);
    setIsCorrect(false);

    if (currentIndex + 3 > questions.length) {
      setIsFinished(true); 
    }
  };

  return (
    <div className='w-[1000px] h-[600px] mx-auto my-auto mt-3 flex gap-8'>     

      {/* 再生・停止ボタン */}
      <div className="flex flex-col gap-10 mt-[100px] h-10 ml-auto">
        <button
          className={`
            w-[150px]  bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 font-bold text-xl
            ${isJudged ? 'opacity-50 pointer-events-none' : ''}
          `}
          onClick={() => handleStart()}
        >
          ▶ 再生
        </button>
        <button
          className={`
            w-[150px] bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 font-bold text-xl
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
            w-[150px] bg-yellow-400 text-white px-4 py-1 rounded hover:bg-yellow-500 font-bold text-xl
            ${isJudged ? 'opacity-50 pointer-events-none' : ''}
          `}
        >
          🔄 リセット
        </button>
        <button
          className={`
            w-[150px] bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 font-bold text-xl
            ${isJudged ? 'opacity-50 pointer-events-none' : ''}
          `}
          onClick={() => handleJudge()}
        >
          判定
        </button>
        <button
          className={`
            w-[150px] bg-purple-500 text-white px-4 py-1 rounded hover:bg-purple-600 font-bold text-xl
            ${!isJudged ? 'opacity-50 pointer-events-none' : ''}
          `}
          onClick={() => handleReturn()}
        >
          もう一度
        </button>
      </div> 

      <div className='relative w-[816px] right-0'>
        
        <p className='h-[50px] text-white text-3xl text-center font-bold'>{currentQuestion.question}</p>

        <div className='flex gap-0'>
          <div className='w-[110px] bg-gray-300 text-center'>
            小節
          </div>

          <div className="flex w-[689px] bg-gray-300" >
            {beats.map((beatCount, index) => {
              const width = (689 / cols) * beatCount; // px 単位の幅

              return (
                <div
                  key={index}
                  style={{ width: `${width}px` }}
                  className="h-[24px] cursor-pointer flex items-center justify-center text-sm font-bold border-l-[2px] border-gray-200"
                >
                  {index + 1}
                </div>
              );
            })}           
          </div>

        </div>


        <div className='flex gap-0'>
          <div className='w-[110px] bg-gray-200  text-center'>
            拍子
          </div>
          <div className="grid w-[690px]" style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}>
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

        <div className="absolute right-[-16px] top-0 h-full w-[16px] rounded" /> {/*バーを外に出す*/}
          
        <div className="flex mx-auto mt-0 h-[500px] overflow-y-auto overflow-x-hidden">
          <div className="">
            <PianoKeys 
              whiteKeys={whiteKeys}
              blackKeys={blackKeys}
            />
          </div>
          <div className="relative">
            <GridContainer 
              isPlaying={isPlaying} setIsPlaying={setIsPlaying} 
              currentCol={currentCol} setCurrentCol={setCurrentCol}
              noteStates={noteStates} setNoteStates={setNoteStates}
              cols={cols}
              rows={rows}
              disabled={isJudged}
              rowToNote={rowToNote}
              blackRow={blackRow}
              clickableRows={currentQuestion.clickableRows}
            />
          </div>

          {judgeResult && (
            <div className='absolute flex flex-col ml-[110px] mt-[200px] gap-4'>
              <div className="bg-white p-4 rounded  text-center text-red-500 text-5xl font-bold w-[690px]">
                {judgeResult}
              </div>

              {isCorrect && !isFinished && (
                <button
                  className="
                    bg-orange-500/80 text-white text-3xl px-4 py-5 rounded hover:bg-orange-500 w-[300px] ml-[200px]
                  "
                  onClick={handleNext}
                >
                  次の問題へ {`>>`}
                </button>
              )}

              {isFinished && (
                <Link href="/pages/select">
                  <button
                    className="
                      bg-orange-500/80 text-white text-3xl px-4 py-5 rounded hover:bg-orange-500 w-[300px] ml-[200px]
                    "
                  >
                    ホームへ {`>>`}
                  </button>
                </Link>
              )}
            </div>
            
          )}
        </div>
      </div>      
      
    </div>
  );
}