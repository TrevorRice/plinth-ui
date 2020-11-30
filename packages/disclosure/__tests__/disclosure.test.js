import Disclosure from '../src/Disclosure.vue'
import '@testing-library/jest-dom'
import { render } from '@testing-library/vue'

describe('Disclosure', () => {
  it('exists', () => {
    const { getByText } = render(Disclosure, {
      slots: {
        default: '<span>something</span><h2>heading</h2>',
      },
    })
    expect(getByText('something')).toBeInTheDocument()
  })
})
