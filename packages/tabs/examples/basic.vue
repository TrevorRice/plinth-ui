<template>
  <tabs>
    <tab-list>
      <tab>Tab 1</tab>
      <tab>Tab 2</tab>
      <tab>Tab 3</tab>
    </tab-list>
    <tab-panels>
      <tab-panel>Panel 1</tab-panel>
      <tab-panel>Panel 2</tab-panel>
      <tab-panel>Panel 3</tab-panel>
    </tab-panels>
  </tabs>
</template>

<script>
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@plinth-ui/tabs/src'

export default {
  components: { Tabs, TabList, Tab, TabPanels, TabPanel },
}
</script>
