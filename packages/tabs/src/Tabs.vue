<template>
  <component :is="as">
    <slot />
  </component>
</template>

<script>
import { provide, reactive } from 'vue'

export default {
  props: {
    as: {
      type: String,
      default: 'div',
    },
    value: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const tabsContext = reactive({ activeIndex: props.value })
    provide('tabsContext', tabsContext)
  },
}
</script>
