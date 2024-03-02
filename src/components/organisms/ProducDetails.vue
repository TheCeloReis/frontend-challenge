<template>
  <section class="pt-4 pb-12">
    <header class="flex items-center max-w-[1304px] px-4 w-full mx-auto mb-6">
      <img class="w-12 h-12 rounded mr-2" :src="product.company.logo" alt="" />

      <h1 class="text-2xl">
        {{ product.company.name }}
      </h1>
    </header>

    <ProductDescription
      :name="product.item.name"
      :initialPrice="product.item.initialPrice"
      :price="product.item.initialPrice"
      :description="product.item.description"
      :photoURL="product.item.image"
    />
    <HorizontalRuler />

    <template v-for="section in product.item.sections" :key="section.name">
      <ProductOptionSection
        :name="section.name"
        :description="section.description"
        :options="section.options"
        :type="section.type"
        :isRequired="section.required"
      />
      <HorizontalRuler />
    </template>

    <div class="max-w-[676px] w-full md:mx-auto px-4">
      <TextArea
        placeholder="alguma observação do item? • opcional
ex: tirar algum ingrediente, ponto do prato"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { getProduct } from "../../api/product";

import HorizontalRuler from "../atoms/HorizontalRuler.vue";
import TextArea from "../atoms/TextArea.vue";
import ProductDescription from "../molecules/ProductDescription.vue";
import ProductOptionSection from "../molecules/ProductOptionSection.vue";

const product = await getProduct(19282147);
</script>

<style scoped></style>
