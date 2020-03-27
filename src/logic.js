import * as C from './constants'

export const hideUnfoundLetters = (word, goodGuesses) =>
  Array.from(word)
    .map(letter => goodGuesses.has(letter) ? letter : '-')
    .join('')

export const getLetterMode = (letter, goodGuesses, badGuesses) => {
  if (goodGuesses.has(letter)) return C.LETTER_MODES.CORRECT
  if (badGuesses.has(letter)) return C.LETTER_MODES.INCORRECT
  return C.LETTER_MODES.AVAILABLE
}

const addValueToSet = (set, value) =>
  new Set([...set, value])

export const nextState = letter => state => {
  if (state.gameState === C.GAME_STATES.GAME_OVER) {
    return state
  }
  if (state.word.includes(letter)) {
    const newGoodGuesses = addValueToSet(state.goodGuesses, letter)
    const wordAsSet = new Set(Array.from(state.word))
    if (wordAsSet.size === newGoodGuesses.size) {
      return {
        ...state,
        goodGuesses: newGoodGuesses,
        gameState: C.GAME_STATES.GAME_OVER,
        outcome: C.OUTCOMES.WON
      }
    }
    return {
      ...state,
      goodGuesses: newGoodGuesses
    }
  } else {
    const newRemainingLives = state.remainingLives - 1
    if (newRemainingLives <= 0) {
      return {
        ...state,
        remainingLives: 0,
        gameState: C.GAME_STATES.GAME_OVER,
        outcome: C.OUTCOMES.LOST
      }
    }
    return {
      ...state,
      badGuesses: addValueToSet(state.badGuesses, letter),
      remainingLives: newRemainingLives
    }
  }
}
