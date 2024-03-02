<script setup lang="ts">
import Spinner from "./components/atoms/Spinner.vue";
import AppBar from "./components/organisms/AppBar.vue";
import AppFooter from "./components/organisms/AppFooter.vue";
import ProducDetails from "./components/organisms/ProducDetails.vue";
</script>

<template>
  <AppBar />

  <Suspense>
    <ProducDetails />

    <template #fallback>
      <Spinner />
    </template>
  </Suspense>

  <AppFooter />
</template>

<style scoped></style>
