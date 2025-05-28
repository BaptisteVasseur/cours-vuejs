<script setup>

import ProductCard from '@/components/ProductCard.vue'
import { useProductStore } from '@/store/useProductStore.js'
import { onBeforeMount } from 'vue'

const { loading, error, allProducts, getPopularProducts } = useProductStore();

onBeforeMount(getPopularProducts);

</script>

<template>
  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h3 class="text-2xl font-semibold mb-8 text-center">Produits en vedette</h3>

      <div v-if="loading" class="flex justify-center items-center">
        Chargement des produits...
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>

      <div v-if="error" class="text-red-500 text-center">
        Une erreur s'est produite lors du chargement des produits.
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard
          v-for="product in allProducts"
          :key="product.id"
          :title="product.title"
          :price="product.price"
          :description="product.description"
          :image="product.image_url"
        />
      </div>
    </div>
  </section>
</template>
