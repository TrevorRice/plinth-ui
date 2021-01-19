<template>
  <div>
    <disclosure>
      <disclosure-button v-slot="{ open }">
        Open: {{ open }} | Click!
      </disclosure-button>
      <transition>
        <disclosure-panel v-slot="{ open }">
          Open: {{ open }} Content
        </disclosure-panel>
      </transition>
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
}
</script>
