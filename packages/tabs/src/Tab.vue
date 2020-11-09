<template>
  <component :is="as" @click="updateActiveTab(index)">
    <slot :active="active" />
  </component>
</template>

<script>
import { inject, computed } from 'vue'

export default {
  name: 'Tab',
  props: {
    as: {
      type: String,
      default: 'button',
    },
    index: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const tabsContext = inject('tabsContext')
    const active = computed(() => tabsContext.activeIndex === props.index)
    return { active, updateActiveTab: tabsContext.updateActiveTab }
  },
}
</script>
