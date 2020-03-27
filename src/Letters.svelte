<script>
  import { getLetterMode } from './logic'
  import * as C from './constants'
  import LettersRow from './LettersRow.svelte'
  export let goodGuesses
  export let badGuesses
  export let onChooseLetter
  $: letters = C.LETTERS.map(letter => ({
    letter,
    mode: getLetterMode(letter, goodGuesses, badGuesses)
  }))
  $: row1 = letters.slice(0, 9)
  $: row2 = letters.slice(9, 18)
  $: row3 = letters.slice(18, 26)
</script>

<div class='letter-rows'>
  <LettersRow letters={row1} {onChooseLetter} />
  <LettersRow letters={row2} {onChooseLetter} />
  <LettersRow letters={row3} {onChooseLetter} />
</div>

<style>
  .letter-rows {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
