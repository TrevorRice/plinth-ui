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
          'aria-controls': context?.id.value,
          'aria-open': context?.open.value,
          onClick: () => context?.updateOpen(!context?.open.value),
        },
        slots.default!({ open: context?.open.value })
      )
  },
})
