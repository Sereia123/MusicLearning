'use client';
import Link from 'next/link';
import { useState } from 'react';
import GridContainer from './GridContainer';
import PianoKeys from './PianoKeys';
import { whiteKeys, blackKeys, rowToNote, blackRow } from './noteConfig';

export type Position = { row: number; col: number };

export type QuestionData = {
  question: string;
  clickableRows: number[];
  select: string;
};

export default function Practice({
  realCols,
  questions,
  timeSignature
}:{
  realCols:number; 
  questions:QuestionData[];
  timeSignature:number;
}) {
  const [cols, setCols] = useState(realCols);
  const [currentIndex, setCurrentIndex] = useState(0); // 今の問題番号
  const currentQuestion = questions?.[currentIndex];     // 今の問題データ
  const [isPlaying, setIsPlaying] = useState(false); // 再生状態
  const [startCol, setStartCol] = useState(0);
  const [currentCol, setCurrentCol] = useState(0);
  const rows = 36;
  const [noteStates, setNoteStates] = useState<boolean[][]>(
      () => Array.from({ length: rows }, () => Array(cols).fill(false))
    );




  const handleStart = () => {
    setCurrentCol(startCol);
    setIsPlaying(true);
  };

  //小節計算
  function generateBarBeatsByCols(cols: number, timeSignature: number): number[] {
    const fullBars = Math.floor(cols / timeSignature);
    const remainder = cols % timeSignature;

    const beats = Array.from({ length: fullBars }, () => timeSignature);
    if (remainder > 0) beats.push(remainder);

    return beats;
  }

  const beats:number[] = generateBarBeatsByCols(cols, timeSignature);

  return (
    <div className='w-[1000px] h-[600px] mx-auto my-auto mt-3 flex gap-8'>     

      {/* 再生・停止ボタン */}
      <div className="flex flex-col gap-10 mt-[100px] h-10 ml-auto">
        <button
          className={`
            w-[150px]  bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 font-bold text-xl
          `}
          onClick={() => handleStart()}
        >
          ▶ 再生
        </button>
        <button
          className={`
            w-[150px] bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 font-bold text-xl
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
          `}
        >
          🔄 リセット
        </button>
        <Link href='/pages/select'>
            <button
              onClick={() => {
                setNoteStates(Array.from({ length: rows }, () => Array(cols).fill(false)));
              }}
              className={`
                w-[150px] bg-blue-400 text-white px-4 py-1 rounded hover:bg-blue-500 font-bold text-xl
              `}
            >
              ホームへ
            </button>
        </Link>
        <div className="flex flex-col gap-2 text-white">
          <label htmlFor="cols-input" className="font-bold">小節の列数を指定：</label>
          <input
            id="cols-input"
            type="number"
            min={1}
            max={128}
            value={cols}
            onChange={(e) => setCols(Number(e.target.value))}
            className="w-[120px] px-2 py-1 rounded text-black"
          />
        </div>
        <div className="flex flex-col gap-2 text-white">
          <label htmlFor="question-select" className="font-bold">スケール選択：</label>
          <select
            id="question-select"
            value={currentIndex}
            onChange={(e) => {
              const index = Number(e.target.value);
              setCurrentIndex(index);
              setNoteStates(Array.from({ length: rows }, () => Array(cols).fill(false))); 
            }}
            className="w-[150px] px-2 py-1 rounded text-black"
          >
            {questions.map((_, index) => (
              <option key={index} value={index}>
                {questions[index].select}
              </option>
            ))}
          </select>
        </div>
        
        
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
              disabled={false}
              rowToNote={rowToNote}
              blackRow={blackRow}
              clickableRows={currentQuestion.clickableRows}
            />
          </div>
        </div>
      </div>      
      
    </div>
  );
}