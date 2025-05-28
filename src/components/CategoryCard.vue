<script setup>
defineProps({
  category: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <a href="#" class="block border rounded-2xl overflow-hidden shadow hover:shadow-md transition">
    <img src="https://placehold.co/600x400" alt="Ville" class="w-full h-48 object-cover" />
    <div class="p-4">
      <h3 class="font-semibold text-lg">{{ category.name }}</h3>
      <p class="text-gray-600 text-sm">{{ category.description }}</p>
    </div>
  </a>
</template>
