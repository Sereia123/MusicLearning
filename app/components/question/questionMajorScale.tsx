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
  {
    question: "Q3: Eメジャースケールを打ち込んでみよう",
    correctPositions: [{ row: 19, col: 0 }, { row: 17, col: 1 }, { row: 15, col: 2 }, { row: 14, col: 3 }, { row: 12, col: 4 }, { row: 10, col: 5 }, { row: 8, col: 6 }],
    clickableRows: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
  },
  {
    question: "Q4: Fメジャースケールを打ち込んでみよう",
    correctPositions: [{ row: 18, col: 0 }, { row: 16, col: 1 }, { row: 14, col: 2 }, { row: 13, col: 3 }, { row: 11, col: 4 }, { row: 9, col: 5 }, { row: 7, col: 6 }],
    clickableRows: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
  },
  {
    question: "Q5: Gメジャースケールを打ち込んでみよう",
    correctPositions: [{ row: 16, col: 0 }, { row: 14, col: 1 }, { row: 12, col: 2 }, { row: 11, col: 3 }, { row: 9, col: 4 }, { row: 7, col: 5 }, { row: 5, col: 6 }],
    clickableRows: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17],
  },
  {
    question: "Q6: Aメジャースケールを打ち込んでみよう",
    correctPositions: [{ row: 26, col: 0 }, { row: 24, col: 1 }, { row: 22, col: 2 }, { row: 21, col: 3 }, { row: 19, col: 4 }, { row: 17, col: 5 }, { row: 15, col: 6 }],
    clickableRows: [12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29],
  },
  {
    question: "Q7: Bメジャースケールを打ち込んでみよう",
    correctPositions: [{ row: 24, col: 0 }, { row: 22, col: 1 }, { row: 20, col: 2 }, { row: 19, col: 3 }, { row: 17, col: 4 }, { row: 15, col: 5 }, { row: 13, col: 6 }],
    clickableRows: [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
  },
];
