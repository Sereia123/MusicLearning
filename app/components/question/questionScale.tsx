export type Position = { row: number; col: number };


export type QuestionData = {
  question: string;
  correctPositions: Position[];
  clickableRows: number[];
};

export const questions: QuestionData[] = [
  {
    question: "Q1: Cメジャースケールを打ち込んでみよう",
    correctPositions: [{ row: 23, col: 0 }, { row: 21, col: 1 }, { row: 19, col: 2 }, { row: 18, col: 3 }, { row: 16, col: 4 }, { row: 14, col: 5 }, { row: 12, col: 6 }],
    clickableRows: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    
  },
  {
    question: "Q2: Dメジャースケールを打ち込んでみよう",
    correctPositions: [{ row: 21, col: 0 }, { row: 19, col: 1 }, { row: 17, col: 2 }, { row: 16, col: 3 }, { row: 14, col: 4 }, { row: 12, col: 5 }, { row: 10, col: 6 }],
    clickableRows: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  },
];
