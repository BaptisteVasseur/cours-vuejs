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

import { useCheckoutStore } from '@/store/useCheckoutStore.js'

const { addProduct } = useCheckoutStore()

function addProductInCart() {
  addProduct({
    id: Math.floor(Math.random() * 1000),
    name: props.title,
    price: props.price,
    quantity: 1,
  });

  console.log('Produit ajouté au panier avec succès');
}

</script>

<template>
  <div class="border border-gray-100 rounded-2xl text-center overflow-hidden shadow hover:shadow-md transition">
    <img :src="props.image" :alt="props.title" class="w-full h-60 object-cover" />
    <div class="p-4">
      <h4 class="font-semibold text-lg">{{ props.title }}</h4>
      <p class="text-gray-600">{{ props.description }}</p>
      <p class="font-bold mt-2">{{ props.price }} €</p>
    </div>
    <button class="bg-blue-600 rounded px-4 py-2 text-white mx-auto mb-4" @click="addProductInCart">Ajouter au panier</button>
  </div>
</template>
