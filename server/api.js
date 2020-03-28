const express = require('express')
const axios = require('axios')

const FALLBACK_WORD_LIST = [
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

const pickWordAtRandom = words => {
  const numWords = words.length
  const randomIndex = Math.floor(Math.random() * numWords)
  return words[randomIndex].toUpperCase()
}

const getWord = async () => {

  const isSuitable = line => /^[A-Za-z]{5,}$/.test(line)

  try {
    const { data } = await axios.get('https://raw.githubusercontent.com/csurfer/gitlang/master/languages.txt')
    const lines = data.split('\n').map(line => line.trim())
    const words = lines.filter(isSuitable)
    return pickWordAtRandom(words)
  } catch (error) {
    console.log(`[chooseWord] ERROR: ${error.message}`)
    return pickWordAtRandom(FALLBACK_WORD_LIST)
  }
}

const chooseWord = async (_req, res) => {
  const word = await getWord()
  const result = { word }
  console.log(`[chooseWord] returning ${JSON.stringify(result)}`)
  res.json(result)
}

const router = express.Router()
router.get('/chooseWord', chooseWord)

module.exports = router
