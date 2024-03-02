<template>
  <textarea
    class="w-full py-2.5 px-3 border-border border rounded font-normal resize-none"
    v-model="model"
    cols="2"
    :placeholder="placeholder"
  />
</template>

<script setup lang="ts">
const model = defineModel<string>();

defineProps<{
  placeholder?: string;
}>();
</script>

<style scoped></style>
