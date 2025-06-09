export type Position = { row: number; col: number };


export type QuestionData = {
  question: string;
  select: string;
  clickableRows: number[];
};

export const questions: QuestionData[] = [
  {
    question: "P: Cマイナースケールでメロディーを作ろう！",
    select: "Cマイナー",
    clickableRows: [11, 13, 15, 16, 18, 20, 21, 23],
  },
  {
    question: "P: C#マイナースケールでメロディーを作ろう！",
    select: "C#マイナー",
    clickableRows: [10, 12, 14, 15, 17, 19, 20, 22],
  },
  {
    question: "P: Dマイナースケールでメロディーを作ろう！",
    select: "Dマイナー",
    clickableRows: [9, 11, 13, 14, 16, 18, 19, 21],
  },
  {
    question: "P: D#マイナースケールでメロディーを作ろう！",
    select: "D#マイナー",
    clickableRows: [8, 10, 12, 13, 15, 17, 18, 20],
  },
  {
    question: "P: Eマイナースケールでメロディーを作ろう！",
    select: "Eマイナー",
    clickableRows: [7, 9, 11, 12, 14, 16, 17, 19],
  },
  {
    question: "P: Fマイナースケールでメロディーを作ろう！",
    select: "Fマイナー",
    clickableRows: [6, 8, 10, 11, 13, 15, 16, 18],
  },
  {
    question: "P: F#マイナースケールでメロディーを作ろう！",
    select: "F#マイナー",
    clickableRows: [5, 7, 9, 10, 12, 14, 15, 17],
  },
  {
    question: "P: Gマイナースケールでメロディーを作ろう！",
    select: "Gマイナー",
    clickableRows: [4, 6, 8, 9, 11, 13, 14, 16],
  },
  {
    question: "P: G#マイナースケールでメロディーを作ろう！",
    select: "G#マイナー",
    clickableRows: [3, 5, 7, 8, 10, 12, 13, 15],
  },
  {
    question: "P: Aマイナースケールでメロディーを作ろう！",
    select: "Aマイナー",
    clickableRows: [2, 4, 6, 7, 9, 11, 12, 14],
  },
  {
    question: "P: A#マイナースケールでメロディーを作ろう！",
    select: "A#マイナー",
    clickableRows: [1, 3, 5, 6, 8, 10, 11, 13],
  },
  {
    question: "P: Bマイナースケールでメロディーを作ろう！",
    select: "Bマイナー",
    clickableRows: [0, 2, 4, 5, 7, 9, 10, 12],
  },
]