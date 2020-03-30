<script>
  import * as C from './constants'
  export let letter
  export let mode
  export let onChooseLetter
</script>

<button
  class:available={mode === C.LETTER_MODES.AVAILABLE}
  class:correct={mode === C.LETTER_MODES.CORRECT}
  class:incorrect={mode === C.LETTER_MODES.INCORRECT}
  disabled={mode !== C.LETTER_MODES.AVAILABLE}
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
