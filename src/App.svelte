<script>
  import axios from 'axios'
  import Version from './Version.svelte'
  import RemainingLives from './RemainingLives.svelte'
  import Word from './Word.svelte'
  import Letters from './Letters.svelte'
  import Outcome from './Outcome.svelte'
  import NewGame from './NewGame.svelte'
  import { store, INITIAL_STATE } from './store'
  import { nextState } from './logic'
  import * as C from './constants'
  $: word = $store.word
  $: goodGuesses = $store.goodGuesses
  $: badGuesses = $store.badGuesses
  $: remainingLives = $store.remainingLives
  $: gameState = $store.gameState
  $: outcome = $store.outcome
  $: revealWord = outcome === C.OUTCOMES.LOST

  const onChooseLetter = letter => store.update(nextState(letter))

  const onNewGame = async () => {
    store.update(() => ({ ...INITIAL_STATE, gameState: C.GAME_STATES.CHOOSING_WORD }))
    const { data: { word } } = await axios.get('/api/chooseWord')
    store.update(() => ({ ...INITIAL_STATE, word }))
  }
</script>

<svelte:body on:keypress={e => onChooseLetter(e.key.toUpperCase())} />

<main>
  <Version />
  <RemainingLives {remainingLives} />
  {#if gameState === C.GAME_STATES.CHOOSING_WORD}
    <div>choosing word...</div>
  {:else}
    <Word {word} {revealWord} {goodGuesses} />
  {/if}
  {#if gameState === C.GAME_STATES.IN_PROGRESS}
    <Letters {goodGuesses} {badGuesses} {onChooseLetter} />
  {:else}
    <Outcome {outcome} />
    <NewGame {onNewGame} />
  {/if}
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
