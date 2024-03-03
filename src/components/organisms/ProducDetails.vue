<template>
  <section class="pt-4 pb-12">
    <header class="flex items-center max-w-[1304px] px-4 w-full mx-auto mb-6">
      <img class="w-12 h-12 rounded mr-2" :src="product.company.logo" alt="" />

      <h1 class="text-2xl">
        {{ product.company.name }}
      </h1>
    </header>

    <ProductDescription
      :name="product.itemInfo.name"
      :initialPrice="product.itemInfo.initialPrice"
      :price="product.itemInfo.initialPrice"
      :description="product.itemInfo.description"
      :photoURL="product.itemInfo.image"
      v-model="orderQuantity"
    />
    <HorizontalRuler />

    <template v-for="section in product.sections" :key="section.name">
      <ProductOptionSection
        :name="section.name"
        :description="section.description"
        :options="section.options"
        :type="section.type"
        :isRequired="section.required"
        v-model="sectionsValues[section.id]"
      />
      <HorizontalRuler />
    </template>

    <div class="max-w-[676px] w-full md:mx-auto px-4">
      <TextArea
        v-model="additionalRequests"
        placeholder="alguma observação do item? • opcional
ex: tirar algum ingrediente, ponto do prato"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
import { useProductStore } from "../../stores/product";

import HorizontalRuler from "../atoms/HorizontalRuler.vue";
import TextArea from "../atoms/TextArea.vue";
import ProductDescription from "../molecules/ProductDescription.vue";
import ProductOptionSection from "../molecules/ProductOptionSection.vue";

const product = useProductStore();
await product.fetchProductData();

const { additionalRequests, orderQuantity, sectionsValues } = toRefs(product);
</script>

<style scoped></style>
