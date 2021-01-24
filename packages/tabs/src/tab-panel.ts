import { defineComponent, h, inject, computed, Ref, InjectionKey } from 'vue'
import { TabsContext } from './tabs'

type TabPanelStateDefinition = {
  index: Ref<number>
}

export const TabPanelContext: InjectionKey<TabPanelStateDefinition> = Symbol(
  'TabPanelContext'
)

export default defineComponent({
  name: 'TabPanel',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  render() {
    const context = inject(TabsContext)
    const tabPanelContext = inject(TabPanelContext)
    const active = computed(
      () => context?.activeIndex.value === tabPanelContext?.index.value
    )
    return active.value ? h(this.$props.as, this.$slots.default!()) : null
  },
})
