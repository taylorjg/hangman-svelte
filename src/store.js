import { writable } from 'svelte/store'
import * as C from './constants'

export const store = writable({
  word: 'SVELTE',
  goodGuesses: new Set(['E']),
  badGuesses: new Set(['Z', 'U']),
  remainingLives: C.MAX_LIVES
})
