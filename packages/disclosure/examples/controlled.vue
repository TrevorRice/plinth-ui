<template>
  <div>
    <label for="checkbox">I can control the disclosure!</label>
    <input id="checkbox" v-model="disclosureValue" type="checkbox" />
    <disclosure v-model="disclosureValue">
      <disclosure-button>Click!</disclosure-button>
      <disclosure-panel>Content</disclosure-panel>
    </disclosure>
  </div>
</template>

<script>
import { ref } from 'vue'

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
  setup() {
    const disclosureValue = ref(false)
    return { disclosureValue }
  },
}
</script>
