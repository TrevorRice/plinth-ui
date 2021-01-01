import { defineComponent, InjectionKey, provide, Ref, toRefs } from 'vue'

type TabsStateDefinition = {
  // State
  activeIndex: Ref<number>

  // State mutators
  updateActiveTab(index: number): void
}

export const TabsContext: InjectionKey<TabsStateDefinition> = Symbol(
  'TabsContext'
)

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
    const updateActiveTab = (index: number) => emit('update:index', index)
    const { index: activeIndex } = toRefs(props)
    const context = { activeIndex, updateActiveTab }
    provide(TabsContext, context)
    return () => slots.default!()
  },
})
