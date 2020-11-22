<template>
  <div :id="id" :tabindex="-1">
    <slot />
  </div>
</template>

<script>
import { inject, toRefs } from 'vue'

export default {
  setup() {
    const disclosureContext = inject('disclosureContext')
    const { id } = toRefs(disclosureContext)
    return { id }
  },
}
</script>
