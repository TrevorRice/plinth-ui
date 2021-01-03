<template>
  <div>
    <button @click="setAlert">Trigger an alert!</button>
    <alert v-for="(alert, index) in alerts" :key="index" type="assertive">
      {{ alert }}
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
    setAlert() {
      this.alerts.push(`Alert #${this.alerts.length + 1}`)
    },
  },
}
</script>
