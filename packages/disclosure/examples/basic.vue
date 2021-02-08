<template>
  <disclosure>
    <disclosure-button>Click!</disclosure-button>
    <disclosure-panel>Content</disclosure-panel>
  </disclosure>
</template>

<script>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@plinth-ui/disclosure/src'

export default {
  components: { Disclosure, DisclosureButton, DisclosurePanel },
}
</script>
