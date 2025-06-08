export type Position = { row: number; col: number };


export type QuestionData = {
  question: string;
  select: string;
  clickableRows: number[];
};

export const questions: QuestionData[] = [
  {
    question: "P: Cメジャースケールでメロディーを作ろう！",
    select: "Cメジャー",
    clickableRows: [9, 11, 12, 14, 16, 18, 19, 21, 23],
  },
  {
    question: "P: Dメジャースケールでメロディーを作ろう！",
    select: "Dメジャー",
    clickableRows: [9, 11, 12, 14, 16, 18, 19, 21, 23],
  },
]