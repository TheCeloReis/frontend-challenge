<template>
  <button
    :class="{
      'h-6 w-6': size === 'small',
      'h-7 w-7': !size || size === 'medium',
      'h-9 w-9': size === 'large',
      'bg-primary-lightest rounded-md': filled,
    }"
    :disabled="disabled"
  >
    <span class="sr-only">{{ label }}</span>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  disabled?: boolean;
  filled?: boolean;
  size?: "small" | "medium" | "large";
}>();
</script>

<style scoped></style>
