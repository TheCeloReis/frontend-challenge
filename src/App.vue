<script setup lang="ts">
import AppBar from "./components/organisms/AppBar.vue";
import AppFooter from "./components/organisms/AppFooter.vue";
import ProducDetails from "./components/organisms/ProducDetails.vue";
</script>

<template>
  <AppBar />

  <Suspense>
    <ProducDetails />

    <template #fallback>
      <div>Loading...</div>
    </template>
  </Suspense>

  <AppFooter />
</template>

<style scoped></style>
