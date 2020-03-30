import { cleanup, render } from '@testing-library/svelte'
import RemainingLives from './RemainingLives.svelte'

describe('RemainingLives', () => {

  afterEach(cleanup)

  it('should render', () => {
    const props = { remainingLives: 99 }
    const { getByText } = render(RemainingLives, props)
    expect(getByText('Remaining lives: 99'))
  })
})
