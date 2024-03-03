<template>
  <CounterControll
    v-for="option in options"
    :key="option.id"
    :name="option.name"
    :price="option.price"
    v-model="model[option.id]"
  />
</template>

<script setup lang="ts">
import CounterControll from "./CounterControll.vue";

defineProps<{
  options: Array<{
    id: string;
    name: string;
    price: number;
  }>;
}>();

const model = defineModel<{ [key: string]: number }>({
  default: {},
});
</script>

<style scoped></style>
