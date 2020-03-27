<script>
  import { getLetterMode } from './logic'
  import * as C from './constants'
  import Letter from './Letter.svelte'
  export let goodGuesses
  export let badGuesses
  export let onChooseLetter
</script>

<div>
{#each C.LETTERS as letter}
  <Letter
    {letter}
    mode={getLetterMode(letter, goodGuesses, badGuesses)}
    {onChooseLetter}
  />
{/each}
</div>
