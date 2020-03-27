<script>
  import { LETTER_MODES } from './constants'
  export let letter
  export let mode
  export let onChooseLetter
</script>

<button
  class:available={mode === LETTER_MODES.AVAILABLE}
  class:correct={mode === LETTER_MODES.CORRECT}
  class:incorrect={mode === LETTER_MODES.INCORRECT}
  disabled={mode !== LETTER_MODES.AVAILABLE}
  on:click={() => onChooseLetter(letter)}
>
  {letter}
</button>

<style>
  button {
    margin: 2px;
    font-family: monospace;
    font-size: 18px;
  }
  .available {
    color: blue;
    cursor: pointer;
  }
  .correct {
    color: green;
    opacity: 0.5;
  }
  .incorrect {
    color: red;
    opacity: 0.5;
  }
</style>
