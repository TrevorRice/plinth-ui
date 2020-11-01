<template>
  <button>
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    as: {
      type: String,
      default: 'button',
    },
  },
}
</script>
