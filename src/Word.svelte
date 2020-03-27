<script>
  import { hideUnfoundLetters } from './logic'
  export let word
  export let goodGuesses
  $: maskedWord = hideUnfoundLetters(word, goodGuesses)
</script>

<div class='word'>{maskedWord}</div>

<style>
  .word {
    margin: 2em 0;
    font-family: monospace;
    font-size: 24px;
  }
</style>
