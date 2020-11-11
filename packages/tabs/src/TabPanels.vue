<script>
import { computed, h, cloneVNode } from 'vue'

export default {
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const tabPanels = computed(() => {
      return slots.default().map((node, index) => cloneVNode(node, { index }))
    })
    return { tabPanels }
  },
  render() {
    return h(this.as, this.tabPanels)
  },
}
</script>
