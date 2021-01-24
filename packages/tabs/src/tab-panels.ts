import { defineComponent, h, provide, ref } from 'vue'
import { TabPanelContext } from './tab-panel'

export default defineComponent({
  name: 'TabPanels',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const children = slots.default?.()
    const tabPanels = children?.map((child, index) => {
      return h({
        setup() {
          provide(TabPanelContext, { index: ref(index) })
          return () => child
        },
      })
    })
    return () => h(props.as, tabPanels)
  },
})
