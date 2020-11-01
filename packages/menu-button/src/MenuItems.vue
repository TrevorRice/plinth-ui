<template>
  <div>
    <slot />
  </div>
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
