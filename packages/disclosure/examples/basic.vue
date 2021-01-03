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
import Disclosure from '../src/disclosure.ts'
import DisclosureButton from '../src/disclosure-button.ts'
import DisclosurePanel from '../src/disclosure-panel.ts'

// import {
//   Disclosure,
//   DisclosureButton,
//   DisclosurePanel,
// } from '@plinth-ui/disclosure'

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
