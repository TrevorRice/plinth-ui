<template>
  <!--
    Elements with the role alert have an implicit aria-live value of assertive, and an implicit aria-atomic value of true.
    Elements with the role status have an implicit aria-live value of polite and an implicit aria-atomic value of true.
  -->
  <div :role="type === 'assertive' ? 'alert' : 'status'">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'polite',
      validator: (value) => ['assertive', 'polite'].includes(value),
    },
  },
}
</script>
