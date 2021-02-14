<template>
  <label for="slider">I can control the tabs!</label>
  <input id="slider" v-model.number="activeTab" type="range" min="0" max="2" />
  <tabs v-model="activeTab">
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
import { ref } from 'vue'
import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@plinth-ui/tabs/src'

export default {
  components: { Tabs, TabList, Tab, TabPanels, TabPanel },
  setup() {
    const activeTab = ref(0)
    return { activeTab }
  },
}
</script>
