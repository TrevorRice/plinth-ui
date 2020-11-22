<template>
  <slot />
</template>

<script>
import { provide, reactive, toRefs } from 'vue'

export default {
  props: {
    id: {
      type: [String, Number],
      default: 'something',
    },
    open: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['update:open'],
  setup(props, { emit }) {
    const { id, open } = toRefs(props)
    const updateOpen = (open) => emit('update:open', open)
    const disclosureContext = reactive({ id, open, updateOpen })
    provide('disclosureContext', disclosureContext)
  },
}
</script>
