<template>
  <div>
    <input v-model="open" type="checkbox" />
    <disclosure v-model:open="open">
      <disclosure-button>Click</disclosure-button>
      <disclosure-panel>Content</disclosure-panel>
    </disclosure>
  </div>
</template>

<script>
import Disclosure from '../../../../packages/disclosure/src/index.js'
import DisclosureButton from '../../../../packages/disclosure/src/DisclosureButton.vue'
import DisclosurePanel from '../../../../packages/disclosure/src/DisclosurePanel.vue'

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  },
  data() {
    return {
      open: false,
    }
  },
}
</script>
