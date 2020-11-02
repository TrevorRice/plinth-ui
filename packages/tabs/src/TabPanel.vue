<template>
  <component :is="as">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'div',
    },
  },
}
</script>
