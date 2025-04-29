<script setup>
import { useCheckoutStore } from '@/store/useCheckoutStore.js'

const props = defineProps({
  id: Number,
  title: String,
  quantity: Number,
  price: Number,
})

const { removeProduct } = useCheckoutStore()

function deleteElement() {
  removeProduct(props.id)
}
</script>

<template>
  <div class="flex items-center justify-between border-b border-gray-200 pb-4">
    <div class="flex items-center gap-4">
      <img
        src="https://via.placeholder.com/100"
        class="w-20 h-20 object-cover rounded"
        alt="Produit"
      />
      <div>
        <p class="font-medium">{{ props.title }}</p>
        <p class="text-gray-500 text-sm">Quantité : {{ props.quantity }}</p>
      </div>
    </div>
    <div class="text-right">
      <p class="font-bold">{{ props.price }} €</p>
      <button class="text-red-500 text-sm hover:underline mt-1" @click="deleteElement">
        Supprimer
      </button>
    </div>
  </div>
</template>

<style scoped></style>
