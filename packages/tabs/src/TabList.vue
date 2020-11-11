<script>
import { h, cloneVNode, computed } from 'vue'

export default {
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
  setup(props, { slots }) {
    const tabs = computed(() => {
      return slots.default().map((node, index) => cloneVNode(node, { index }))
    })
    return { tabs }
  },
  render() {
    return h(this.as, this.tabs)
  },
}
</script>
