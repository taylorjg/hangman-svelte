import { hideUnfoundLetters, getLetterMode, nextState } from './logic'
import * as C from './constants'

describe('logic', () => {

  describe('hideUnfoundLetters', () => {
    it('should hide letters that have not been found yet', () => {
      const actual = hideUnfoundLetters('SVELTE', new Set(['E']))
      expect(actual).toBe('--E--E')
    })
  })

  describe('getLetterMode', () => {

    it('should correctly identify an available letter', () => {
      const actual = getLetterMode('A', new Set(), new Set())
      expect(actual).toBe(C.LETTER_MODES.AVAILABLE)
    })

    it('should correctly identify a correct letter', () => {
      const actual = getLetterMode('A', new Set(['A']), new Set())
      expect(actual).toBe(C.LETTER_MODES.CORRECT)
    })

    it('should correctly identify an incorrect letter', () => {
      const actual = getLetterMode('A', new Set(), new Set(['A']))
      expect(actual).toBe(C.LETTER_MODES.INCORRECT)
    })
  })

  describe('nextState', () => {
    it('should do nothing when game is over', () => {
      const state = {
        word: 'SVELTE',
        goodGuesses: new Set(Array.from('SVELTE')),
        badGuesses: new Set(),
        remainingLives: C.MAX_LIVES,
        gameState: C.GAME_STATES.GAME_OVER,
        outcome: C.OUTCOMES.WON
      }
      const actual = nextState('A')(state)
      expect(actual).toEqual(state)
    })
  })

  // TODO: add more tests:
  // - choosing a correct letter
  // - choosing final correct letter
  // - choosing an incorrect letter
  // - choosing final incorrect letter
})
