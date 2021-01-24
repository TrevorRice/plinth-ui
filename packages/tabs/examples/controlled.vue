<template>
  <div>
    <label for="slider">I can control the tabs!</label>
    <input
      id="slider"
      v-model.number="activeTab"
      type="range"
      min="0"
      max="2"
    />
    <tabs v-model="activeTab">
      <tab-list>
        <tab v-slot="{ active }">Tab 1: {{ active }}</tab>
        <tab v-slot="{ active }">Tab 2: {{ active }}</tab>
        <tab v-slot="{ active }">Tab 3: {{ active }}</tab>
      </tab-list>
      <tab-panels>
        <tab-panel>Panel 1</tab-panel>
        <tab-panel>Panel 2</tab-panel>
        <tab-panel>Panel 3</tab-panel>
      </tab-panels>
    </tabs>
  </div>
</template>

<script>
import { ref } from 'vue'
import Tabs from '../src/tabs.ts'
import TabList from '../src/tab-list.ts'
import Tab from '../src/tab.ts'
import TabPanels from '../src/tab-panels.ts'
import TabPanel from '../src/tab-panel.ts'

// import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@plinth-ui/tabs'

export default {
  components: {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup() {
    const activeTab = ref(0)
    return { activeTab }
  },
}
</script>
