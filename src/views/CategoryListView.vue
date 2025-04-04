<script setup>

import ProductList from '@/components/Product/ProductList.vue'
import ProductFilters from '@/components/Product/ProductFilters.vue'
</script>

<template>
  <main class="max-w-7xl mx-auto px-4 py-10">
    <div class="flex flex-col md:flex-row gap-8">
      <!-- Filtres -->
      <ProductFilters />

      <!-- Liste des produits -->
      <section class="flex-1">
        <h2 class="text-xl font-semibold mb-6">Chaussures pour Homme</h2>
        <ProductList />
      </section>
    </div>
  </main>
</template>
