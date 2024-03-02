<template>
  <div
    class="max-w-[1208px] px-4 w-full mx-auto flex flex-col md:flex-row gap-6 justi"
  >
    <div class="w-full">
      <h2 class="text-2xl">
        {{ name }}
      </h2>

      <p class="text-muted">
        a partir de
        <span class="text-primary text-xl">
          {{ formattedInitialPrice }}
        </span>
      </p>

      <p class="font-semibold text-muted">
        {{ description }}
      </p>

      <div
        class="flex h-16 w-full md:max-w-[360px] justify-between items-center mt-8"
      >
        <div class="flex flex-col justify">
          <p :class="{ 'mb-1': count > 0 }">quantos?</p>
          <p v-if="count" class="text-sm text-muted font-semibold">
            total

            <span class="text-base text-baseText font-bold">
              {{ currencyFormatter(props.price * count) }}
            </span>
          </p>
        </div>

        <BaseButton v-if="count === 0" variant="muted" @click="count++">
          adicionar
        </BaseButton>
        <CounterControll displayTrashCan v-model="count" v-else size="large" />
      </div>
    </div>

    <div class="md:max-w-[380px] w-full">
      <img class="rounded-xl" :src="photoURL" alt="" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import currencyFormatter from "../../utils/currencyFormatter";
import BaseButton from "../atoms/BaseButton.vue";
import CounterControll from "./CounterControll.vue";

const count = ref(0);

const props = defineProps<{
  name: string;
  initialPrice: number;
  price: number;
  description: string;
  photoURL: string;
}>();

const formattedInitialPrice = currencyFormatter(props.initialPrice);
</script>

<style scoped></style>
