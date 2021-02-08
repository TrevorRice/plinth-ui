import { defineComponent, h, inject } from 'vue'
import { DisclosureContext } from './disclosure'

export default defineComponent({
  name: 'DisclosureButton',
  props: {
    as: {
      type: String,
      default: 'button',
    },
  },
  setup(props, { slots }) {
    const context = inject(DisclosureContext)

    return () =>
      h(
        props.as,
        {
          type: 'button',
          'aria-controls': context?.id.value,
          'aria-expanded': context?.open.value,
          onClick: () => context?.updateOpen(!context?.open.value),
        },
        slots.default?.()
      )
  },
})
