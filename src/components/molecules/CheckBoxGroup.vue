<template>
  <CheckBoxItem
    v-for="option in options"
    :key="option.name"
    :name="name"
    :label="option.name"
    :price="option.price"
    :discountPrice="option.discountPrice"
    :value="option.id"
    v-model:groupModel="model"
  />
</template>

<script setup lang="ts">
import CheckBoxItem from "../atoms/CheckBoxItem.vue";

const name = Math.random().toString(36).substr(2, 9);

const model = defineModel<Array<string>>({
  default: [],
});

defineProps<{
  options: Array<{
    id: string;
    name: string;
    price: number;
    discountPrice?: number;
  }>;
}>();
</script>

<style scoped></style>
