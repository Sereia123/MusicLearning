export type Position = { row: number; col: number };


export type QuestionData = {
  question: string;
  correctPositions: Position[];
  clickableRows: number[];
};

export const questions: QuestionData[] = [
  {
    question: "Q1: Cメジャースケールの2和音を打ち込んでみよう",
    correctPositions: [{ row: 23, col: 0 }, { row: 16, col: 0 }, { row: 21, col: 1 }, { row: 14, col: 1 }, { row: 19, col: 2 }, { row: 12, col: 2 }, { row: 18, col: 3 }, { row: 11, col: 3 }, { row: 16, col: 4 }, { row: 9, col: 4 }, { row: 14, col: 5 }, { row: 7, col: 5 }, { row: 12, col: 6 }, { row: 6, col: 6 }],
    clickableRows: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    
  },
  {
    question: "Q2: Dメジャースケールの2和音を打ち込んでみよう",
    correctPositions: [{ row: 21, col: 0 }, { row: 14, col: 0 }, { row: 19, col: 1 }, { row: 12, col: 1 }, { row: 17, col: 2 }, { row: 10, col: 2 }, { row: 16, col: 3 }, { row: 9, col: 3 }, { row: 14, col: 4 }, { row: 7, col: 4 }, { row: 12, col: 5 }, { row: 5, col: 5 }, { row: 10, col: 6 }, { row: 4, col: 6 }],
    clickableRows: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23],
  },
  {
    question: "Q3: Eメジャースケールの2和音を打ち込んでみよう",
    correctPositions: [{ row: 19, col: 0 }, { row: 12, col: 0 }, { row: 17, col: 1 }, { row: 10, col: 1 }, { row: 15, col: 2 }, { row: 8, col: 2 }, { row: 14, col: 3 }, { row: 7, col: 3 }, { row: 12, col: 4 }, { row: 5, col: 4 }, { row: 10, col: 5 }, { row: 3, col: 5 }, { row: 8, col: 6 }, { row: 2, col: 6 }],
    clickableRows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
  },
  {
    question: "Q4: Fメジャースケールの2和音を打ち込んでみよう",
    correctPositions: [{ row: 18, col: 0 }, { row: 11, col: 0 }, { row: 16, col: 1 }, { row: 9, col: 1 }, { row: 14, col: 2 }, { row: 7, col: 2 }, { row: 13, col: 3 }, { row: 6, col: 3 }, { row: 11, col: 4 }, { row: 4, col: 4 }, { row: 9, col: 5 }, { row: 2, col: 5 }, { row: 7, col: 6 }, { row: 1, col: 6 }],
    clickableRows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  },
  {
    question: "Q5: Gメジャースケールの2和音を打ち込んでみよう保留",
    correctPositions: [{ row: 28, col: 0 }, { row: 21, col: 0 }, { row: 26, col: 1 }, { row: 19, col: 1 }, { row: 24, col: 2 }, { row: 17, col: 2 }, { row: 23, col: 3 }, { row: 16, col: 3 }, { row: 21, col: 4 }, { row: 14, col: 4 }, { row: 19, col: 5 }, { row: 12, col: 5 }, { row: 17, col: 6 }, { row: 11, col: 6 }],
    clickableRows: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  },
  {
    question: "Q6: Aメジャースケールの2和音を打ち込んでみよう",
    correctPositions: [{ row: 26, col: 0 }, { row: 19, col: 0 }, { row: 24, col: 1 }, { row: 17, col: 1 }, { row: 22, col: 2 }, { row: 15, col: 2 }, { row: 21, col: 3 }, { row: 14, col: 3 }, { row: 19, col: 4 }, { row: 12, col: 4 }, { row: 17, col: 5 }, { row: 10, col: 5 }, { row:15, col: 6 }, { row:9, col: 6 }],
    clickableRows: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
  },
  {
    question: "Q7: Bメジャースケールの2和音を打ち込んでみよう",
    correctPositions: [{ row: 24, col: 0 }, { row: 17, col: 0 }, { row: 22, col: 1 }, { row: 15, col: 1 }, { row: 20, col: 2 }, { row: 13, col: 2 }, { row: 19, col: 3 }, { row: 12, col: 3 }, { row: 17, col: 4 }, { row: 10, col: 4 }, { row: 15, col: 5 }, { row: 8, col: 5 }, { row: 13, col: 6 }, { row: 7, col: 6 }],
    clickableRows: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
  },
];
