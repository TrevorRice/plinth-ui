<template>
  <component :is="as" v-show="active">
    <slot />
  </component>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  props: {
    as: {
      type: String,
      default: 'div',
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const tabsContext = inject('tabsContext')
    const active = computed(() => tabsContext.activeIndex === props.index)
    return { active }
  },
}
</script>
