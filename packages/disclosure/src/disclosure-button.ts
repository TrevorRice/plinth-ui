import { defineComponent, h, inject } from 'vue'
import { DisclosureStates, DisclosureContext } from './disclosure'

export default defineComponent({
  name: 'DisclosureButton',
  setup(props, { slots }) {
    const context = inject(DisclosureContext)

    return () =>
      h(
        'button',
        {
          'aria-controls': context?.id.value,
          'aria-open': context?.open.value,
          'data-plinth-disclosure-button': '',
          'data-plinth-disclosure-button-state': context?.open.value
            ? DisclosureStates.Open
            : DisclosureStates.Collapsed,
          onClick: () => context?.updateOpen(!context?.open.value),
        },
        slots.default!()
      )
  },
})
