export type Position = { row: number; col: number };


export type QuestionData = {
  question: string;
  clickableRows: number[];
  select: string;
};

export const questions: QuestionData[] = [
  {
    question: "Q1: Cマイナースケールでメロディーを作ろう！",
    select: "Cマイナー",
    clickableRows: [9, 11, 12, 14, 16, 18, 19, 21, 23],
  },
]