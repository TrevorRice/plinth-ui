<template>
  <button :aria-controls="id" :aria-open="open" @click="updateOpen(!open)">
    <slot />
  </button>
</template>

<script>
import { inject, toRefs } from 'vue'

export default {
  setup() {
    const disclosureContext = inject('disclosureContext')
    const { id, open, updateOpen } = toRefs(disclosureContext)
    return { id, open, updateOpen }
  },
}
</script>
