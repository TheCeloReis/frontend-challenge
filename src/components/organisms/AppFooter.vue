<template>
  <footer
    class="h-[116px] px-4 shrink-0 bg-foreground w-full text-primary-dark text-center flex flex-col justify-center mt-auto"
  >
    <p class="text-sm">feito com 💜 em maringá-PR</p>
    <p class="text-lg">
      <a
        href="https://aiqfome.com"
        class="text-primary-dark hover:text-primary"
      >
        aiqfome.com
      </a>
      © 2007-{{ currentYear }} aiqfome LTDA . CNPJ: 09.186.786/0001-58
    </p>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<style lang="scss" scoped></style>
