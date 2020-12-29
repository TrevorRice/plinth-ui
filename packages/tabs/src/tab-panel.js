import { h, inject, computed } from 'vue'

export default {
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
    const tabsContext = inject('tabsContext')
    const active = computed(() => tabsContext.activeIndex === props.index)
    return () =>
      h(
        props.as,
        { style: [{ display: active.value ? 'block' : 'none' }] },
        slots.default()
      )
  },
}