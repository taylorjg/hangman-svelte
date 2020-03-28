<script>
  import { hideUnfoundLetters } from './logic'
  export let word
  export let revealWord
  export let goodGuesses
  $: maskedWord = hideUnfoundLetters(word, goodGuesses)
</script>

{#if revealWord}
  <div class='word'>{word}</div>
{:else}
  <div class='word'>{maskedWord}</div>
{/if}

<style>
  .word {
    margin: 2em 0;
    font-family: monospace;
    font-size: 24px;
  }
</style>
