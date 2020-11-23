<template>
  <button
    :aria-controls="id"
    :aria-open="open"
    :data-plinth-disclosure-button-state="
      open ? disclosureStates.Open : disclosureStates.Collapsed
    "
    data-plinth-disclosure-button
    @click="updateOpen(!open)"
  >
    <slot />
  </button>
</template>

<script>
import { inject, toRefs } from 'vue'

export default {
  setup() {
    const disclosureStates = inject('disclosureStates')
    const disclosureContext = inject('disclosureContext')
    const { id, open, updateOpen } = toRefs(disclosureContext)
    return { id, open, updateOpen, disclosureStates }
  },
}
</script>
