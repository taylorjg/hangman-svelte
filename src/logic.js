import * as C from './constants'

export const hideUnfoundLetters = (word, goodGuesses) =>
  Array.from(word)
    .map(letter => goodGuesses.has(letter) ? letter : '-')
    .join('')

export const getLetterMode = (letter, goodGuesses, badGuesses) => {
  if (goodGuesses.has(letter)) return C.LETTER_MODE_CORRECT
  if (badGuesses.has(letter)) return C.LETTER_MODE_INCORRECT
  return C.LETTER_MODE_AVAILABLE
}
