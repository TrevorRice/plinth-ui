import { defineComponent, InjectionKey, provide, ref, toRef, Ref } from 'vue'

type TabsStateDefinition = {
  // State
  activeIndex: Ref<number>
  orientation: string

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
    orientation: {
      type: String,
      default: 'horizontal',
      validator: (value: string) => ['horizontal', 'vertical'].includes(value),
    },
    modelValue: {
      type: Number,
      default: null,
    },
  },
  emits: ['update:modelValue'],
  setup(props, { slots, emit }) {
    const isControlled = props.modelValue !== null
    const activeIndex = isControlled ? toRef(props, 'modelValue') : ref(0)

    const updateActiveTab = (index: number) => {
      emit('update:modelValue', index)
      if (!isControlled) {
        activeIndex.value = index
      }
    }

    const context = {
      activeIndex,
      orientation: props.orientation,
      updateActiveTab,
    }
    provide(TabsContext, context)
    return () => slots.default!()
  },
})
