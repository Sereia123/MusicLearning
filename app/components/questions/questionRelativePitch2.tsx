export type Position = { row: number; col: number };

export type QuestionData = {
  question: string;
  correctPositions: Position[];
  recordedPositions: Position[];
  clickableRows: number[];
};

export const questions: QuestionData[] = [
  {
    question: '相対音感レッスンLevel2-1',
    correctPositions: [{ row: 23, col: 0 }, { row: 21, col: 1 }, { row: 19, col: 2 }, { row: 18, col: 3}],
    clickableRows: [23, 22, 21, 20, 19, 18, 17, 16],
    recordedPositions: [{ row: 23, col: 0 }, { row: 21, col: 1 }, { row: 19, col: 2 }, { row: 18, col: 3}
    ] 
  },
  {
    question: '相対音感レッスンLevel2-2',
    correctPositions: [{ row: 23, col: 0 }, { row: 18, col: 1 }, { row: 16, col: 2 }, { row: 21, col: 3}],
    clickableRows: [23, 22, 21, 20, 19, 18, 17, 16],
    recordedPositions: [{ row: 23, col: 0 }, { row: 18, col: 1 }, { row: 16, col: 2 }, { row: 21, col: 3}, 
    ] 
  },
  {
    question: '相対音感レッスンLevel2-3',
    correctPositions: [{ row: 23, col: 0 }, { row: 17, col: 1 }, { row: 21, col: 2 }, { row: 19, col: 3}],
    clickableRows: [23, 22, 21, 20, 19, 18, 17, 16],
    recordedPositions: [{ row: 23, col: 0 }, { row: 17, col: 1 }, { row: 21, col: 2 }, { row: 19, col: 3}, 
    ] 
  }, 
]