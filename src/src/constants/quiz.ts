// Configuration
import { IQuiz } from '../@types/questions';

export const MODAL_TIMEOUT = 10;
export const QUESTIONS_LIMIT = 2;

export const DEFAULT_QUIZ: IQuiz = {
  questions: [],
  correctAnswers: 0,
  currentQuestion: null,
  isFinished: false,
  questionsAnswered: 0,
  timeElapsed: 0,
};

// Color palette
export const INTRODUCTION_COLOR = '#093459';
export const SUMMARY_COLOR = '#50515C';
export const DEFAULT_HOVER_COLOR = '#dddddd';
export const ERROR_COLOR = '#833333';
export const ERROR_EMOJI = [
  '😡',
  '🤬',
  '😔',
  '☹️',
  '😖',
  '😔',
  '😞',
  '😧',
  '😮',
  '😥',
  '🤨',
];
export const SUCCESS_COLOR = '#338336';
export const SUCCESS_EMOJI = [
  '😏',
  '😁',
  '😌',
  '😊',
  '😉',
  '😉',
  '😃',
  '😎',
  '🤗',
];
