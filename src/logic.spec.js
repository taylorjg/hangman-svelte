import * as L from './logic'
import * as C from './constants'

describe('logic', () => {

  describe('maskWord', () => {
    it('should mask letters that have not been found yet', () => {
      const actual = L.maskWord('SVELTE', new Set(['E']))
      expect(actual).toBe('--E--E')
    })
  })

  describe('getLetterMode', () => {

    it('should correctly identify an available letter', () => {
      const actual = L.getLetterMode('A', new Set(), new Set())
      expect(actual).toBe(C.LETTER_MODES.AVAILABLE)
    })

    it('should correctly identify a correct letter', () => {
      const actual = L.getLetterMode('A', new Set(['A']), new Set())
      expect(actual).toBe(C.LETTER_MODES.CORRECT)
    })

    it('should correctly identify an incorrect letter', () => {
      const actual = L.getLetterMode('A', new Set(), new Set(['A']))
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
      const actual = L.nextState('A')(state)
      expect(actual).toEqual(state)
    })

    it('should do nothing on re-entry of a previous good guess', () => {
      const state = {
        word: 'SVELTE',
        goodGuesses: new Set(['E']),
        badGuesses: new Set(),
        remainingLives: C.MAX_LIVES,
        gameState: C.GAME_STATES.IN_PROGRESS,
        outcome: C.OUTCOMES.NONE
      }
      const actual = L.nextState('E')(state)
      expect(actual).toEqual(state)
    })

    it('should do nothing on re-entry of a previous bad guess', () => {
      const state = {
        word: 'SVELTE',
        goodGuesses: new Set(),
        badGuesses: new Set(['A']),
        remainingLives: C.MAX_LIVES - 1,
        gameState: C.GAME_STATES.IN_PROGRESS,
        outcome: C.OUTCOMES.NONE
      }
      const actual = L.nextState('A')(state)
      expect(actual).toEqual(state)
    })
  })

  // TODO: add more tests:
  // - choosing a correct letter
  // - choosing final correct letter
  // - choosing an incorrect letter
  // - choosing final incorrect letter
})
