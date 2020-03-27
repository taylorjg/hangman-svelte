import { writable } from 'svelte/store'
import * as C from './constants'

export const INITIAL_STATE = {
  word: 'SVELTE',
  goodGuesses: new Set(),
  badGuesses: new Set(),
  remainingLives: C.MAX_LIVES,
  gameState: C.GAME_STATES.IN_PROGRESS,
  outcome: C.OUTCOMES.IN_PROGRESS
}

export const store = writable(INITIAL_STATE)
