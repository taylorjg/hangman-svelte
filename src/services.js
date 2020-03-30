import axios from 'axios'
import { chooseFallbackWord } from './fallbackWords'

export const chooseWord = async () => {
  try {
    const response = await axios.get('/api/chooseWord')
    return {
      word: response.data.word,
      isFallback: false
    }
  } catch (error) {
    return {
      word: chooseFallbackWord(),
      isFallback: true
    }
  }
}
