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
    clickableRows: [11, 12, 14, 16, 18, 19, 21, 23],
  },
  {
    question: "P: C#メジャースケールでメロディーを作ろう！",
    select: "C#メジャー",
    clickableRows: [10, 11, 13, 15, 17, 18, 20, 22],
  },
  {
    question: "P: Dメジャースケールでメロディーを作ろう！",
    select: "Dメジャー",
    clickableRows: [9, 10, 12, 14, 16, 17, 19, 21],
  },
  {
    question: "P: D#メジャースケールでメロディーを作ろう！",
    select: "D#メジャー",
    clickableRows: [8, 9, 11, 13, 15, 16, 18, 20],
  },
  {
    question: "P: Eメジャースケールでメロディーを作ろう！",
    select: "Eメジャー",
    clickableRows: [7, 8, 10, 12, 14, 15, 17, 19],
  },
  {
    question: "P: Fメジャースケールでメロディーを作ろう！",
    select: "Fメジャー",
    clickableRows: [6, 7, 9, 11, 13, 14, 16, 18],
  },
  {
    question: "P: F#メジャースケールでメロディーを作ろう！",
    select: "F#メジャー",
    clickableRows: [5, 6, 8, 10, 12, 13, 15, 17],
  },
  {
    question: "P: Gメジャースケールでメロディーを作ろう！",
    select: "Gメジャー",
    clickableRows: [4, 5, 7, 9, 11, 12, 14, 16],
  },
  {
    question: "P: G#メジャースケールでメロディーを作ろう！",
    select: "G#メジャー",
    clickableRows: [3, 4, 6, 8, 10, 11, 13, 15],
  },
  {
    question: "P: Aメジャースケールでメロディーを作ろう！",
    select: "Aメジャー",
    clickableRows: [2, 3, 5, 7, 9, 10, 12, 14],
  },
  {
    question: "P: A#メジャースケールでメロディーを作ろう！",
    select: "A#メジャー",
    clickableRows: [1, 2, 4, 6, 8, 9, 11, 13],
  },
  {
    question: "P: Bメジャースケールでメロディーを作ろう！",
    select: "Bメジャー",
    clickableRows: [0, 1, 3, 5, 7, 8, 10, 12],
  },
]