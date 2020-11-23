<template>
  <div
    :id="id"
    :tabindex="-1"
    :data-plinth-disclosure-panel-state="
      open ? disclosureStates.Open : disclosureStates.Collapsed
    "
    data-plinth-disclosure-panel
  >
    <slot />
  </div>
</template>

<script>
import { inject, toRefs, readonly } from 'vue'

export default {
  setup() {
    const disclosureStates = inject('disclosureStates')
    const disclosureContext = inject('disclosureContext')
    const { id, open } = toRefs(disclosureContext)
    return { id: readonly(id), open, disclosureStates }
  },
}
</script>

<style>
[data-plinth-disclosure-panel][data-plinth-disclosure-panel-state='collapsed'] {
  display: none;
}
</style>
