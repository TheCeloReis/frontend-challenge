<template>
  <div class="w-full max-w-[1208px] px-4 mx-auto">
    <div class="flex justify-between items-center mb-4">
      <div>
        <h3 class="mb-0.5">{{ name }}</h3>
        <p class="text-muted text-xs">{{ description }}</p>
      </div>

      <ChipItem v-if="isRequired"> obrigatório</ChipItem>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-14">
      <template v-if="type === 'RADIO'">
        <RadioGroup :options="options" v-model="model" />
      </template>
      <template v-else-if="type === 'CHECKBOX'">
        <CheckBoxGroup :options="options" v-model="model" />
      </template>
      <template v-else-if="type === 'COUNTER'">
        <CounterGroup :options="options" v-model="model" />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import ChipItem from "../atoms/ChipItem.vue";
import RadioGroup from "./RadioGroup.vue";
import CheckBoxGroup from "./CheckBoxGroup.vue";
import CounterGroup from "./CounterGroup.vue";

defineProps<{
  name: string;
  description: string;
  options: Array<{
    id: string;
    name: string;
    price: number;
    discountPrice?: number;
  }>;
  type: string;
  isRequired: boolean;
}>();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const model = defineModel<any>({
  default: "",
});
</script>

<style scoped></style>
