export type Position = { row: number; col: number };

export type QuestionData = {
  question: string;
  correctPositions: Position[];
  recordedPositions: Position[];
  clickableRows: number[];
};

export const questions: QuestionData[] = [
  {
    question: '相対音感レッスンLevel1-1',
    correctPositions: [{ row: 23, col: 0 }, { row: 21, col: 1 }, { row: 19, col: 2 }],
    clickableRows: [23, 22, 21, 20, 19, 18, 17, 16],
    recordedPositions: [{ row: 23, col: 0 }, { row: 21, col: 1 }, { row: 19, col: 2 }
    ] 
  },
  {
    question: '相対音感レッスンLevel1-2',
    correctPositions: [{ row: 23, col: 0 }, { row: 16, col: 1 }, { row: 19, col: 2 }],
    clickableRows: [23, 22, 21, 20, 19, 18, 17, 16],
    recordedPositions: [{ row: 23, col: 0 }, { row: 16, col: 1 }, { row: 19, col: 2 }
    ] 
  },
  {
    question: '相対音感レッスンLevel1-3',
    correctPositions: [{ row: 23, col: 0 }, { row: 21, col: 1 }, { row: 17, col: 2 }],
    clickableRows: [23, 22, 21, 20, 19, 18, 17, 16],
    recordedPositions: [{ row: 23, col: 0 }, { row: 21, col: 1 }, { row: 17, col: 2 }
    ] 
  }, 
]