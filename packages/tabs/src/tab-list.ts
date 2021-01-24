import { defineComponent, h, provide, ref } from 'vue'
import { TabContext } from './tab'

export default defineComponent({
  name: 'TabList',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const children = slots.default?.()
    const tabs = children?.map((child, index) => {
      return h({
        setup() {
          provide(TabContext, { index: ref(index) })
          return () => child
        },
      })
    })
    return () => h(props.as, tabs)
  },
})
