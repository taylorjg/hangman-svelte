import FALLBACK_WORDS from './fallbackWords.json'

export const chooseFallbackWord = () => {
  const numWords = FALLBACK_WORDS.length
  const randomIndex = Math.floor(Math.random() * numWords)
  return FALLBACK_WORDS[randomIndex].toUpperCase()
}
