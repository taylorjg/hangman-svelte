const FALLBACK_WORDS = [
  'react',
  'redux',
  'angular',
  'ember',
  'jasmine',
  'mocha',
  'enzyme',
  'javascript',
  'ecmascript',
  'haskell',
  'pascal',
  'scala',
  'clojure',
  'scheme',
  'typescript',
  'fortran'
]

export const chooseFallbackWord = () => {
  const numWords = FALLBACK_WORDS.length
  const randomIndex = Math.floor(Math.random() * numWords)
  return FALLBACK_WORDS[randomIndex].toUpperCase()
}
