import { defineComponent, h, inject, toRefs } from 'vue'
import { DisclosureStates, DisclosureContext } from './disclosure'

export default defineComponent({
  name: 'DisclosureButton',
  setup(props, { slots }) {
    const context = inject<DisclosureContext>('disclosureContext')
    // Figure out reactivity
    // const { id, open, updateOpen } = toRefs(context)

    return () =>
      h(
        'button',
        {
          'aria-controls': context.id,
          'aria-open': context.open,
          'data-plinth-disclosure-button': '',
          'data-plinth-disclosure-button-state': context.open
            ? DisclosureStates.Open
            : DisclosureStates.Collapsed,
          onClick: () => context.updateOpen(!context.open),
        },
        slots.default()
      )
  },
})
