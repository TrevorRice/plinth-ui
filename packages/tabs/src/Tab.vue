<template>
  <component :is="as" :disabled="disabled">
    <slot />
  </component>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    as: {
      type: String,
      default: 'button',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
