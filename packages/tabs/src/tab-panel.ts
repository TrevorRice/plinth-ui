import { defineComponent, h, inject, toRefs, computed } from 'vue'
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
    const context = inject<TabsContext>('tabsContext')
    const { activeIndex } = toRefs(context)
    const active = computed(() => activeIndex.value === props.index)
    return () =>
      h(
        props.as,
        { style: [{ display: active.value ? 'block' : 'none' }] },
        slots.default()
      )
  },
})
