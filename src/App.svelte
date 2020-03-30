<script>
  import axios from 'axios'
  import { onMount } from 'svelte'
  import Version from './Version.svelte'
  import RemainingLives from './RemainingLives.svelte'
  import Word from './Word.svelte'
  import Letters from './Letters.svelte'
  import Outcome from './Outcome.svelte'
  import NewGame from './NewGame.svelte'
  import { store, INITIAL_STATE } from './store'
  import * as L from './logic'
  import * as S from './services'
  import * as C from './constants'
  $: word = $store.word
  $: goodGuesses = $store.goodGuesses
  $: badGuesses = $store.badGuesses
  $: remainingLives = $store.remainingLives
  $: gameState = $store.gameState
  $: outcome = $store.outcome
  $: revealWord = outcome === C.OUTCOMES.LOST

  const chooseWord = async () => {
    store.update(() => INITIAL_STATE)
    const word = await S.chooseWord()
    const gameState = C.GAME_STATES.IN_PROGRESS
    store.update(() => ({ ...INITIAL_STATE, word, gameState }))
  }

  const onChooseLetter = letter => store.update(L.nextState(letter))
  const onNewGame = chooseWord
  onMount(chooseWord)
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
