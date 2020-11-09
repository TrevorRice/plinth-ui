<template>
  <component :is="as">
    <slot />
  </component>
</template>

<script>
import { provide, reactive, computed, toRefs } from 'vue'

export default {
  props: {
    as: {
      type: String,
      default: 'div',
    },
    index: {
      type: Number,
      default: 0,
    },
    orientation: {
      type: String,
      default: 'horizontal',
      validator: (value) => ['horizontal', 'vertical'].includes(value),
    },
  },
  emits: ['update:index'],
  setup(props, { emit }) {
    const { index: activeIndex } = toRefs(props)
    const updateActiveTab = (index) => emit('update:index', index)
    const tabsContext = reactive({
      activeIndex,
      updateActiveTab,
    })
    provide('tabsContext', tabsContext)
  },
}
</script>
