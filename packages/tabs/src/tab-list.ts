import { defineComponent, h, cloneVNode } from 'vue'

export default defineComponent({
  name: 'TabList',
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const tabs = slots
      .default()
      .map((node, index) => cloneVNode(node, { index }))
    return () => h(props.as, tabs)
  },
})
