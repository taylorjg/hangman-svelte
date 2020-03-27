<script>
  import Version from './Version.svelte'
  import RemainingLives from './RemainingLives.svelte'
  import Word from './Word.svelte'
  import Letters from './Letters.svelte'
  import { store } from './store'
  import { nextState } from './logic'
  $: word = $store.word
  $: goodGuesses = $store.goodGuesses
  $: badGuesses = $store.badGuesses
  $: remainingLives = $store.remainingLives
  $: gameState = $store.gameState
  $: outcome = $store.outcome

  const onChooseLetter = letter => store.update(nextState(letter))
</script>

<main>
  <Version />
  <RemainingLives {remainingLives} />
  <Word {word} {goodGuesses} />
  <Letters {goodGuesses} {badGuesses} {onChooseLetter} />
</main>

<style>
  main {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
