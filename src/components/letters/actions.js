import { LETTER_GUESS } from './reducers';

// win or lose consitional should be here

export function guessLetter(guess) {
  return {
    type: LETTER_GUESS,
    payload: guess
  };
}
