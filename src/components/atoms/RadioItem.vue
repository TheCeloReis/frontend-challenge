<template>
  <label class="relative cursor-pointer select-none" :for="labelId">
    <input
      class="absolute h-0 w-0 cursor-pointer opacity-0"
      type="radio"
      :id="labelId"
      :name="name"
      :value="value"
      v-model="model"
    />

    <span class="flex justify-between items-center">
      <span class="pl-7 flex font-normal text-muted">
        <img
          class="h-6 w-6 mr-1"
          v-if="discountPrice"
          src="/icons/promo.svg"
          alt=""
        />
        {{ label }}
      </span>

      <span class="text-primary text-sm" v-if="!discountPrice && price > 0"
        >+{{ currencyFormatter(price) }}</span
      >
      <span class="muted text-xs" v-else-if="price && discountPrice">
        de {{ currencyFormatter(price) }} por
        <span class="text-discount text-sm">
          {{ currencyFormatter(discountPrice) }}
        </span>
      </span>
    </span>

    <img
      class="checkmark z-10 absolute top-0 left-0 h-6 w-6 hidden"
      src="/icons/radioSelected.svg"
      alt=""
    />
    <img class="absolute top-0 left-0 h-6 w-6" src="/icons/radio.svg" alt="" />
  </label>
</template>

<script setup lang="ts">
import currencyFormatter from "../../utils/currencyFormatter";
const labelId = "label-1" + Math.random().toString(36).substr(2, 9);

const model = defineModel<string>({
  default: "",
});

defineProps<{
  value: string;
  name: string;
  label: string;
  price: number;
  discountPrice?: number;
}>();
</script>

<style scoped>
input:checked ~ .checkmark {
  display: block !important;
}
input:checked ~ span .font-normal {
  font-weight: 700 !important;
}
</style>
