import { Disclosure, DisclosureButton, DisclosurePanel } from '../src'
import { ref } from 'vue'
import { render, fireEvent } from '@testing-library/vue'
import { axe, toHaveNoViolations } from 'jest-axe'
import '@testing-library/jest-dom'

expect.extend(toHaveNoViolations)

const renderComponent = (template: string) => {
  return render({
    components: { Disclosure, DisclosureButton, DisclosurePanel },
    template,
  })
}

describe('Disclosure', () => {
  describe('Rendering', () => {
    it('does not display panel by default', () => {
      const { queryByText } = renderComponent(`
        <disclosure>
          <disclosure-button>The disclosure button</disclosure-button>
          <disclosure-panel>The disclosure panel</disclosure-panel>
        </disclosure>
      `)
      expect(queryByText('The disclosure panel')).not.toBeInTheDocument()
    })

    it('does not display panel when "v-model" is "false"', () => {
      const { queryByText } = render({
        components: { Disclosure, DisclosureButton, DisclosurePanel },
        setup: () => ({ open: ref(false) }),
        template: `
          <disclosure v-model="open">
            <disclosure-button>The disclosure button</disclosure-button>
            <disclosure-panel>The disclosure panel</disclosure-panel>
          </disclosure>
        `,
      })
      expect(queryByText('The disclosure panel')).not.toBeInTheDocument()
    })

    it('displays panel when "v-model" is "true"', () => {
      const { getByText } = render({
        components: { Disclosure, DisclosureButton, DisclosurePanel },
        setup: () => ({ open: ref(true) }),
        template: `
          <disclosure v-model="open">
            <disclosure-button>The disclosure button</disclosure-button>
            <disclosure-panel>The disclosure panel</disclosure-panel>
          </disclosure>
        `,
      })
      expect(getByText('The disclosure panel')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should not have basic accessibility issues', async () => {
      const { getByRole, container } = renderComponent(`
        <disclosure>
          <disclosure-button>The disclosure button</disclosure-button>
          <disclosure-panel>The disclosure panel</disclosure-panel>
        </disclosure>
      `)
      const results = await axe(container)
      expect(results).toHaveNoViolations()

      // Reveal panel
      fireEvent.click(getByRole('button'))
      const newResults = await axe(container)
      expect(newResults).toHaveNoViolations()
    })

    it('sets the correct aria attributes when collapsed', () => {
      const { getByText } = renderComponent(`
        <disclosure>
          <disclosure-button>The disclosure button</disclosure-button>
          <disclosure-panel>The disclosure panel</disclosure-panel>
        </disclosure>
      `)
      const button = getByText('The disclosure button')
      expect(button).toHaveAttribute('aria-expanded', 'false')
    })

    it('sets the correct aria attributes when open', () => {
      const { getByText } = render({
        components: { Disclosure, DisclosureButton, DisclosurePanel },
        setup: () => ({ open: ref(true) }),
        template: `
          <disclosure v-model="open">
            <disclosure-button>The disclosure button</disclosure-button>
            <disclosure-panel>The disclosure panel</disclosure-panel>
          </disclosure>
        `,
      })
      const button = getByText('The disclosure button')
      expect(button).toHaveAttribute('aria-expanded', 'true')
    })

    it('accepts a custom id', () => {
      const { getByText } = render({
        components: { Disclosure, DisclosureButton, DisclosurePanel },
        setup: () => ({ open: ref(true) }),
        template: `
          <disclosure v-model="open" id="my-id">
            <disclosure-button>The disclosure button</disclosure-button>
            <disclosure-panel>The disclosure panel</disclosure-panel>
          </disclosure>
        `,
      })
      expect(getByText('The disclosure panel')).toHaveAttribute('id', 'my-id')
    })
  })
})
