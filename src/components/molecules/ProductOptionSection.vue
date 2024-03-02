<template>
  <div class="w-full max-w-[1176px] mx-auto">
    <div class="flex justify-between items-center mb-4">
      <div>
        <h3 class="">{{ name }}</h3>
        <p class="text-muted text-xs">{{ description }}</p>
      </div>

      <ChipItem v-if="isRequired"> obrigatório</ChipItem>
    </div>

    <div class="grid grid-cols-3 gap-14">
      <template v-if="type === 'RADIO'">
        <RadioGroup :options="options" />
      </template>
      <template v-else-if="type === 'CHECKBOX'">
        <CheckBoxGroup :options="options" />
      </template>
      <template v-else-if="type === 'COUNTER'">
        <CounterControll
          v-for="option in options"
          :key="option.name"
          :name="option.name"
          :price="option.price"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChipItem from "../atoms/ChipItem.vue";
import RadioGroup from "./RadioGroup.vue";
import CounterControll from "./CounterControll.vue";
import CheckBoxGroup from "./CheckBoxGroup.vue";

defineProps<{
  name: string;
  description: string;
  options: Array<{
    name: string;
    price: number;
    discountPrice?: number;
  }>;
  type: string;
  isRequired: boolean;
}>();
</script>

<style scoped></style>
