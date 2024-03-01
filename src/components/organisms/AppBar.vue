<template>
  <header class="h-20">
    <div class="fixed top-0 left-0 h-20 w-full bg-primary text-white">
      <div class="max-w-[1324px] flex items-center w-full h-full mx-auto">
        <div class="flex space-x-10 items-center">
          <img
            src="/imgs/logo.png"
            alt="aiqfome"
            class="w-[73px] h-[40px] ml-4"
          />

          <AddressSelector />
        </div>

        <div class="ml-20 mr-auto w-full max-w-[420px]">
          <SearchInput placeholder="Buscar" />
        </div>

        <div class="mr-6">
          <BaseButton variant="secondary">
            <img class="h-6 w-6 mr-2" src="/icons/bookmark.svg" alt="" />
            Ver ticket</BaseButton
          >
        </div>

        <BaseButton>
          <img class="h-6 w-6 mr-2" src="/icons/accountAvatar.svg" alt="" />
          Entrar</BaseButton
        >
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import AddressSelector from "../atoms/AddressSelector.vue";
import BaseButton from "../atoms/BaseButton.vue";
import SearchInput from "../atoms/SearchInput.vue";
</script>

<style scoped></style>
