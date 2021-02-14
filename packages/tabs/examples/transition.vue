<template>
  <tabs>
    <tab-list>
      <tab>Tab 1</tab>
      <tab>Tab 2</tab>
      <tab>Tab 3</tab>
    </tab-list>
    <tab-panels>
      <!-- TODO: Figure out transitions -->
      <!-- <transition-group name="fade" tag="span"> -->
      <tab-panel key="panel-1">Panel 1</tab-panel>
      <tab-panel key="panel-2">Panel 2</tab-panel>
      <tab-panel key="panel-3">Panel 3</tab-panel>
      <!-- </transition-group> -->
    </tab-panels>
  </tabs>
</template>

<script>
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@plinth-ui/tabs/src'

export default {
  components: { Tabs, TabList, Tab, TabPanels, TabPanel },
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
