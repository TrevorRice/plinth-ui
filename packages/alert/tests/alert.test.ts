import Alert from '../src/alert'
import { render } from '@testing-library/vue'
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

describe('Alert', () => {
  it('should not have basic accessibility issues', async () => {
    const { container } = render(Alert, {
      slots: { default: 'My content!' },
    })
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
})
