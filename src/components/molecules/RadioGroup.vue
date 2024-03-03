<template>
  <RadioItem
    v-for="option in options"
    :key="option.name"
    :name="name"
    :label="option.name"
    :price="option.price"
    :discountPrice="option.discountPrice"
    :value="option.id"
    v-model="model"
  />
</template>

<script setup lang="ts">
import RadioItem from "../atoms/RadioItem.vue";

const name = Math.random().toString(36).substr(2, 9);

defineProps<{
  options: Array<{
    id: string;
    name: string;
    price: number;
    discountPrice?: number;
  }>;
}>();

const model = defineModel<string>({
  default: "",
});
</script>

<style scoped></style>
