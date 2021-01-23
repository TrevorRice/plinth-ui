<template>
  <div>
    <alert type="polite" class="my-alert my-alert--polite">
      This is a polite alert!
    </alert>
    <br />
    <alert type="assertive" class="my-alert my-alert--assertive">
      This is an assertive alert!
    </alert>
  </div>
</template>

<script>
import Alert from '@plinth-ui/alert'

export default {
  components: {
    Alert,
  },
}
</script>

<style>
.my-alert {
  padding: 8px;
  border-radius: 2px;
}

.my-alert--assertive {
  background-color: #ffe5e5;
}

.my-alert--polite {
  background-color: #f2f2f2;
}
</style>
