<script setup>

import PriceFilter from '@/components/Product/Filters/PriceFilter.vue'
import SizeFilter from '@/components/Product/Filters/SizeFilter.vue'
import GenreFilter from '@/components/Product/Filters/GenreFilter.vue'
</script>

<template>
  <aside class="md:w-1/4">
    <h2 class="text-lg font-semibold mb-4">Filtres</h2>
    <div class="space-y-4">
      <GenreFilter />
      <PriceFilter />
      <SizeFilter />
    </div>
  </aside>
</template>
