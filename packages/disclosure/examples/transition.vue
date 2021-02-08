<template>
  <disclosure>
    <disclosure-button>Click!</disclosure-button>
    <transition name="fade">
      <disclosure-panel>Content</disclosure-panel>
    </transition>
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
