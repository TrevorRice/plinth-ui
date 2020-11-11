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
import Tabs from '../../../../packages/tabs/src/Tabs.vue'
import TabList from '../../../../packages/tabs/src/TabList.vue'
import Tab from '../../../../packages/tabs/src/Tab.vue'
import TabPanels from '../../../../packages/tabs/src/TabPanels.vue'
import TabPanel from '../../../../packages/tabs/src/TabPanel.vue'
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
