<script>
  import { hideUnfoundLetters } from './logic'
  export let word
  export let goodGuesses
  $: maskedWord = hideUnfoundLetters(word, goodGuesses)
</script>

<pre>{maskedWord}</pre>
