<template>
  <label class="relative cursor-pointer select-none" :for="labelId">
    <input
      class="absolute h-0 w-0 cursor-pointer opacity-0"
      type="checkbox"
      :id="labelId"
      :name="name"
      :value="value"
      :checked="isChecked"
      @change="handleChange($event)"
    />

    <span class="flex justify-between items-center h-6">
      <span class="pl-7 font-normal text-muted text-sm">
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
      src="/icons/checkboxChecked.svg"
      alt=""
    />
    <img
      class="absolute top-0 left-0 h-6 w-6"
      src="/icons/checkbox.svg"
      alt=""
    />
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";
import currencyFormatter from "../../utils/currencyFormatter";
const labelId = "label-1" + Math.random().toString(36).substr(2, 9);

const props = defineProps<{
  name: string;
  label: string;
  price: number;
  discountPrice?: number;
  value: string;
}>();

const model = defineModel<Array<string>>("groupModel", {
  default: [],
});

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  if (target.checked) {
    model.value = [...model.value, props.value];
  } else {
    model.value = model.value.filter((item) => item !== props.value);
  }
};

const isChecked = computed(() => model.value.includes(props.value));
</script>

<style scoped>
input:checked ~ .checkmark {
  display: block !important;
}

input:checked ~ span .font-normal {
  font-weight: 700 !important;
}
</style>
