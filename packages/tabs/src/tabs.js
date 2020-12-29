import { provide, reactive, toRefs } from 'vue'

export default {
  name: 'Tabs',
  props: {
    as: {
      type: String,
      default: 'div',
    },
    index: {
      type: Number,
      default: 0,
    },
    orientation: {
      type: String,
      default: 'horizontal',
      validator: (value) => ['horizontal', 'vertical'].includes(value),
    },
  },
  emits: ['update:index'],
  setup(props, { slots, emit }) {
    const { index: activeIndex } = toRefs(props)
    const updateActiveTab = (index) => emit('update:index', index)
    const tabsContext = reactive({
      activeIndex,
      updateActiveTab,
    })
    provide('tabsContext', tabsContext)
    return () => slots.default()
  },
}
