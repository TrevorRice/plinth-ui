<template>
  <div>
    <button type="button" @click="addAlert('polite')">
      Trigger a polite alert!
    </button>
    <button type="button" @click="addAlert('assertive')">
      Trigger an assertive alert!
    </button>
    <button type="button" @click="clearAlerts">Clear alerts</button>

    <alert v-for="(alert, index) in alerts" :key="index" :type="alert.type">
      {{ alert.message }}
    </alert>
  </div>
</template>

<script>
import { ref } from 'vue'
import Alert from '@plinth-ui/alert'

export default {
  components: {
    Alert,
  },
  setup() {
    const alerts = ref([])

    function addAlert(type) {
      alerts.value.push({ message: `Alert #${this.alerts.length + 1}!`, type })
    }

    function clearAlerts() {
      alerts.value = []
    }

    return { alerts, addAlert, clearAlerts }
  },
}
</script>

<style>
button {
  display: block;
  margin-bottom: 8px;
}
</style>
