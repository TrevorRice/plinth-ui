import { defineComponent, h, inject, toRefs, computed } from 'vue'
import { TabsContext } from './tabs'

export default defineComponent({
  name: 'Tab',
  props: {
    as: {
      type: String,
      default: 'button',
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props, { slots }) {
    const context = inject<TabsContext>('tabsContext')
    // Figure out reactivity. Shouldn't need to use toRefs (?)
    const { activeIndex } = toRefs(context)
    const active = computed(() => activeIndex.value === props.index)
    return () =>
      h(
        props.as,
        { onClick: () => context.updateActiveTab(props.index) },
        slots.default({ active: active.value })
      )
  },
})
