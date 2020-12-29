import { h, inject, computed } from 'vue'

export default {
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
    const tabsContext = inject('tabsContext')
    const active = computed(() => tabsContext.activeIndex === props.index)
    return () =>
      h(
        props.as,
        { onClick: () => tabsContext.updateActiveTab(props.index) },
        slots.default({ active: active.value })
      )
  },
}
