<script>
	// import {version} from '../package.json'
	const version = '0.0.1'
  import { store } from './store'
	import RemainingLives from './RemainingLives.svelte'
	import Word from './Word.svelte'
	import Letters from './Letters.svelte'
	$: word = $store.word
	$: goodGuesses = $store.goodGuesses
	$: badGuesses = $store.badGuesses
	$: remainingLives = $store.remainingLives

  const chooseLetterHandler = letter => {
		if (word.includes(letter)) {
			store.update(oldState => {
				return {
					...oldState,
					goodGuesses: oldState.goodGuesses.add(letter)
				}
			})
		} else {
			store.update(oldState => {
				return {
					...oldState,
					badGuesses: oldState.badGuesses.add(letter),
					remainingLives: oldState.remainingLives - 1
				}
			})
		}
  }
</script>

<main>
	<div class='version'>version: {version}</div>
	<RemainingLives {remainingLives} />
	<Word {word} {goodGuesses} />
	<Letters {goodGuesses} {badGuesses} onChooseLetter={chooseLetterHandler} />
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

	.version {
		position: absolute;
		top: 20px;
		right: 20px;
		font-style: italic;
		font-size: small;
	}
</style>
