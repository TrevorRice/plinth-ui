<template>
  <label for="checkbox">I can control the disclosure!</label>
  <input id="checkbox" v-model="disclosureValue" type="checkbox" />
  <disclosure v-model="disclosureValue">
    <disclosure-button>Click!</disclosure-button>
    <disclosure-panel>Content</disclosure-panel>
  </disclosure>
</template>

<script>
import { ref } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@plinth-ui/disclosure/src'

export default {
  components: { Disclosure, DisclosureButton, DisclosurePanel },
  setup() {
    const disclosureValue = ref(false)
    return { disclosureValue }
  },
}
</script>
