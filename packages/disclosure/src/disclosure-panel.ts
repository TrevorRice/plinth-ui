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
  render() {
    const context = inject(DisclosureContext)
    return context?.open.value
      ? h(
          this.$props.as,
          {
            id: context?.id.value,
            tabindex: -1,
          },
          this.$slots.default!({ open: context?.open.value })
        )
      : null
  },
})
