<template>
  <div
    class="bg-white h-10 rounded-lg overflow-hidden flex relative text-muted w-full"
  >
    <img
      src="/icons/search.svg"
      alt="search icon"
      class="h-6 w-6 absolute left-3 top-2"
    />
    <input
      class="pl-11 w-full font-semibold"
      type="text"
      :placeholder="placeholder"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placeholder: string;
}>();
</script>

<style scoped></style>
