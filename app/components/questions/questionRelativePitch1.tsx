export type Position = { row: number; col: number };


export type QuestionData = {
  question: string;
  correctPositions: Position[];
  recordedPositions: Position[];
  clickableRows: number[];
};

export const questions: QuestionData[] = [
  {
    question: 'ドレミを鳴らしてね',
    correctPositions: [{ row: 10, col: 0 }, { row: 9, col: 1 }, { row: 8, col: 2 }, { row: 7, col: 3 }],
    clickableRows: [7, 8, 9, 10],
    recordedPositions: [{ row: 10, col: 0 }, { row: 9, col: 1 }, { row: 8, col: 2 }, { row: 7, col: 3 }
    ] 
  }
]