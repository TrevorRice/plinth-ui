import { defineComponent, h, inject } from 'vue'
import { DisclosureStates, DisclosureContext } from './disclosure'

export default defineComponent({
  name: 'DisclosurePanel',
  setup(props, { slots }) {
    const context = inject(DisclosureContext)

    return () =>
      h(
        'div',
        {
          id: context?.id.value,
          tabindex: -1,
          'data-plinth-disclosure-panel': '',
          'data-plinth-disclosure-panel-state': context?.open.value
            ? DisclosureStates.Open
            : DisclosureStates.Collapsed,
          style: [{ display: context?.open.value ? 'block' : 'none' }],
        },
        slots.default!()
      )
  },
})
