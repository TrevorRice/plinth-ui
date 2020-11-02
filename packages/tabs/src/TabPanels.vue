<script>
import { h, inject, cloneVNode } from 'vue'

export default {
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const tabsContext = inject('tabsContext')
    const tabPanels = slots
      .default()
      .map((node, index) =>
        cloneVNode(node, { disabled: index === tabsContext.activeIndex })
      )
    return () => h(props.as, {}, tabPanels)
  },
}
</script>
