import { writable } from 'svelte/store'
import * as C from './constants'

export const INITIAL_STATE = {
  word: '',
  goodGuesses: new Set(),
  badGuesses: new Set(),
  remainingLives: C.MAX_LIVES,
  gameState: C.GAME_STATES.CHOOSING_WORD,
  outcome: C.OUTCOMES.NONE
}

export const store = writable(INITIAL_STATE)
