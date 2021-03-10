import { defineComponent, h, inject, computed, Ref, InjectionKey } from 'vue'
import { TabsContext } from './tabs'

type TabStateDefinition = {
  index: Ref<number>
}

export const TabContext: InjectionKey<TabStateDefinition> = Symbol('TabContext')

export default defineComponent({
  name: 'Tab',
  props: {
    as: {
      type: String,
      default: 'button',
    },
  },
  setup(props, { slots }) {
    const context = inject(TabsContext)
    const tabContext = inject(TabContext)
    const active = computed(
      () => context?.activeIndex.value === tabContext?.index.value
    )
    return () =>
      h(
        props.as,
        {
          id: `tab--${tabContext?.index.value}`,
          'aria-controls': `panel--${tabContext?.index.value}`,
          'aria-selected': active.value,
          tabindex: active.value ? 0 : -1,
          role: 'tab',
          type: 'button',
          onClick: () => context?.updateActiveTab(tabContext!.index.value),
        },
        slots.default!({ active: active.value })
      )
  },
})
