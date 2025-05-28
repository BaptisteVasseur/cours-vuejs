<script setup>

import CategoryCard from '@/components/CategoryCard.vue'
import { useCategoryStore } from './../store/useCategoryStore.js'
import { onBeforeMount, watch } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter();
const { categories, loading, error, getCategoriesByGender } = useCategoryStore();

onBeforeMount(() => {
  const gender = router.currentRoute.value.params.id;
  getCategoriesByGender(gender);
})

watch(() => router.currentRoute.value.params.id, (newGender) => {
  getCategoriesByGender(newGender);
});

</script>

<template>
  <div class="max-w-7xl mx-auto px-4 py-10">
    <h2 class="text-3xl font-bold mb-8 text-center">
      Catégories pour {{ router.currentRoute.value.params.id }}
    </h2>

    <div v-if="loading" class="text-center text-gray-500">Chargement...</div>
    <div v-if="error" class="text-center text-red-500">Erreur: {{ error }}</div>

    <section class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      <CategoryCard
        v-for="category in categories"
        :key="category.id"
        :category="category"
      />
    </section>
  </div>
</template>
