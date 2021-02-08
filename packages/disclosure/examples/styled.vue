<template>
  <disclosure v-slot="{ open }">
    <disclosure-button :class="open ? 'open' : 'closed'">
      Click!
    </disclosure-button>
    <disclosure-panel class="disclosure__panel">
      Here is the disclosed content! Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </disclosure-panel>
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

<style scoped>
.open {
  background: tomato;
}

.closed {
  background: pink;
}
</style>
