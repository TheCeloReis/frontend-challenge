<template>
  <button
    :class="[
      'rounded-lg text-base h-9 pl-4 pr-6 inline-flex items-center justify-center leading-4',
      {
        'bg-secondary text-white': variant === 'primary' || !variant,
        'bg-primary-lightest text-primary': variant === 'secondary',
        'bg-muted text-white': variant === 'muted',
        'pl-4': hasLeftIcon,
        'pl-6': !hasLeftIcon,
      },
    ]"
  >
    <slot name="leftIcon"></slot>
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
import { useSlots } from "vue";

defineProps<{
  variant?: string;
}>();

const slots = useSlots();

const hasLeftIcon = !!slots.leftIcon;
</script>

<style scoped></style>
