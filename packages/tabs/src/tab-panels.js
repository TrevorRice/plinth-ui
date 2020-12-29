import { h, cloneVNode } from 'vue'

export default {
  name: 'TabPanels',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const tabPanels = slots
      .default()
      .map((node, index) => cloneVNode(node, { index }))
    return () => h(props.as, tabPanels)
  },
}