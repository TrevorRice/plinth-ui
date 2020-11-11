<template>
  <div>
    <h1>Examples</h1>
    <h2>Alert</h2>
    <example-assertive-alert />
    <h2>Tabs</h2>
    <example-tabs-basic />
  </div>
</template>

<script>
import ExampleAssertiveAlert from './components/alert/example-assertive.vue'
import ExampleTabsBasic from './components/tabs/example-tabs-basic.vue'

export default {
  components: {
    ExampleAssertiveAlert,
    ExampleTabsBasic,
  },
}
</script>
