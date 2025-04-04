<script setup>

import CategoryCard from '@/components/CategoryCard.vue'

</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-8 text-center">Chaussures Homme</h2>
    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      <CategoryCard />
      <CategoryCard />
      <CategoryCard />
    </section>
  </div>
</template>
