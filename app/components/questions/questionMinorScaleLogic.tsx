export const A = '全音';
export const B = '全音';
export const C = '全音';
export const D = '全音';
export const E = '全音';
export const F = '半音';
export const G = '半音';

export const question = "Q０：マイナースケールの構成を知ろう！！";

type DropArea = 'unplaced' |'dropRed' | 'dropGreen' | 'dropYellow' | 'dropBlue' | 'dropOrange' | 'dropPurple' | 'dropPink';

export const correctAnswers: Record<DropArea, string[]> = {
  'unplaced': [""],
  'dropRed': ["全音"],
  'dropGreen': ["半音"],
  'dropYellow': ["全音"],
  'dropBlue': ["全音"],
  'dropOrange': ["半音"],
  'dropPurple': ["全音"],
  'dropPink': ["全音"],
};