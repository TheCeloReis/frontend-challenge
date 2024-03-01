<template>
  <button
    :class="[
      'rounded-lg text-base h-9 pl-4 pr-6 inline-flex items-center justify-center',
      {
        'bg-secondary text-white': variant === 'primary',
        'bg-primary-lightest text-primary': variant === 'secondary',
      },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps({
  text: String,
  children: String,
  variant: {
    type: String,
    default: "primary",
  },
});
</script>

<style scoped></style>
