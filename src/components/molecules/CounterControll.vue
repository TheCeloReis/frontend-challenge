<template>
  <div class="flex justify-between items-center">
    <div class="flex">
      <div class="flex items-center gap-1">
        <IconButton
          label="Diminuir"
          @click="decrement"
          :disabled="model === 0"
          :size="size"
        >
          <img
            :class="{
              'h-7 w-7': !size || size === 'medium',
              'h-9 w-9': size === 'large',
            }"
            :src="
              model && displayTrashCan && model === 1
                ? '/icons/trashCan.svg'
                : model
                  ? '/icons/minus.svg'
                  : '/icons/minusDisabled.svg'
            "
            alt=""
          />
        </IconButton>
        <span class="w-8 text-center">
          {{ model }}
        </span>
        <IconButton label="Aumentar" @click="increment" :size="size">
          <img
            :class="{
              'h-7 w-7': !size || size === 'medium',
              'h-9 w-9': size === 'large',
            }"
            src="/icons/plus.svg"
            alt=""
          />
        </IconButton>
      </div>

      <p class="ml-2 text-muted font-semibold" v-if="name">
        {{ name }}
      </p>
    </div>

    <p class="text-primary text-sm" v-if="price">
      +{{ currencyFormatter(price * Math.max(1, model)) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import currencyFormatter from "../../utils/currencyFormatter";

import IconButton from "../atoms/IconButton.vue";

defineProps<{
  name?: string;
  price?: number;
  value?: number;
  displayTrashCan?: boolean;
  size?: "medium" | "large";
}>();

const model = defineModel<number>({
  default: 0,
});

const increment = () => {
  if (model.value === undefined) {
    model.value = 0;
  }

  model.value += 1;
};

const decrement = () => {
  if (model.value === undefined) {
    model.value = 0;
  }

  if (model.value > 0) {
    model.value--;
  }
};
</script>

<style scoped></style>
