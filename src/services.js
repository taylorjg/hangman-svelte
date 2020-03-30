import axios from 'axios'
import { chooseFallbackWord } from './fallbackWords'

export const chooseWord = async () => {
  try {
    const response = await axios.get('/api/chooseWord')
    return response.data.word
  } catch (error) {
    return chooseFallbackWord()
  }
}
