<template>
  <div>
    <input v-model.number="activeTab" type="range" min="0" max="2" />
    <tabs v-model:index="activeTab">
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
import Tabs from '../../../../packages/tabs/src/tabs.js'
import TabList from '../../../../packages/tabs/src/tab-list.js'
import Tab from '../../../../packages/tabs/src/tab.js'
import TabPanels from '../../../../packages/tabs/src/tab-panels.js'
import TabPanel from '../../../../packages/tabs/src/tab-panel.js'
// import { Tabs, TabList, Tab, TabPanels, TabPanel } from '@plinth-ui/tabs'

export default {
  components: {
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  data() {
    return {
      activeTab: 0,
    }
  },
}
</script>
