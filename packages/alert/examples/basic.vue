<template>
  <div>
    <button @click="setAlerts('polite')">Trigger a polite alert!</button>
    <button @click="setAlerts('assertive')">Trigger an assertive alert!</button>
    <alert v-for="(alert, index) in alerts" :key="index" :type="alert.type">
      {{ alert.message }}
    </alert>
  </div>
</template>

<script>
import Alert from '@plinth-ui/alert'

export default {
  components: {
    Alert,
  },
  data() {
    return {
      alerts: [],
    }
  },
  methods: {
    setAlerts(type) {
      this.alerts.push({ message: `Alert #${this.alerts.length + 1}`, type })
      setTimeout(() => {
        this.alerts = this.alerts.slice(1)
      }, 5000)
    },
  },
}
</script>
