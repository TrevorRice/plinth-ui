import { defineComponent, h, inject } from 'vue'
import { DisclosureContext } from './disclosure'

export default defineComponent({
  name: 'DisclosurePanel',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const context = inject(DisclosureContext)

    return () =>
      h(
        props.as,
        {
          id: context?.id.value,
          tabindex: -1,
          style: [{ display: context?.open.value ? 'block' : 'none' }],
        },
        slots.default!({ open: context?.open.value })
      )
  },
})
