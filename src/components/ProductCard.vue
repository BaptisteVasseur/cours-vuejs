<script setup>
const props = defineProps({
  title: String,
  price: {
    type: Number,
    default: 10,
  },
  description: String,
  image: {
    type: String,
    required: true,
  },
  borderColor: String,
})
</script>

<template>
  <div class="border border-gray-100 rounded-2xl overflow-hidden shadow hover:shadow-md transition">
    <img
      :src="props.image"
      :alt="props.title"
      class="w-full h-60 object-cover"
    />
    <div class="p-4">
      <h4 class="font-semibold text-lg">{{ props.title }}</h4>
      <p class="text-gray-600">{{ props.description }}</p>
      <p class="font-bold mt-2">{{ props.price }} €</p>
    </div>
  </div>
</template>
