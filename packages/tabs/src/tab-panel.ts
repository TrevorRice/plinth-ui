import { defineComponent, h, inject, computed } from 'vue'
import { TabsContext } from './tabs'

export default defineComponent({
  name: 'TabPanel',
  props: {
    as: {
      type: String,
      default: 'div',
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    const context = inject(TabsContext)
    const active = computed(() => context?.activeIndex.value === props.index)
    return () =>
      h(
        props.as,
        { style: [{ display: active.value ? 'block' : 'none' }] },
        slots.default!()
      )
  },
})
