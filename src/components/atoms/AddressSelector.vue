<template>
  <div
    class="flex items-center bg-primary cursor-pointer rounded-lg hover:bg-primary-dark transition-colors"
  >
    <img src="/icons/locationPin.svg" alt="" class="h-6 w-6 mr-3" />

    <div class="flex flex-col">
      <p class="text-primary-light text-sm">entregando em:</p>
      <p class="text-lg inline-flex align-baseline whitespace-nowrap">
        Rua Mandaguari, 198
        <img
          class="inline-block h-6 w-6"
          src="/icons/rightChevron.svg"
          alt=""
        />
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
