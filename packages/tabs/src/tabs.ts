import { defineComponent, provide, reactive, Ref, toRefs } from 'vue'

export interface TabsContext {
  // State
  activeIndex: Ref<number>

  // State mutators
  updateActiveTab(index: number): void
}

export default defineComponent({
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
      validator: (value: string) => ['horizontal', 'vertical'].includes(value),
    },
  },
  emits: ['update:index'],
  setup(props, { slots, emit }) {
    const { index: activeIndex } = toRefs(props)
    const updateActiveTab = (index) => emit('update:index', index)
    const context = reactive<TabsContext>({
      activeIndex,
      updateActiveTab,
    })
    provide('tabsContext', context)
    return () => slots.default()
  },
})
