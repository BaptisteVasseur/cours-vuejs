<script setup>

import CheckoutElementCard from '@/components/CheckoutElementCard.vue'
import { computed, ref } from 'vue'

const productsInCheckout = ref([
  {
    id: 1,
    name: 'Chaussure de sport',
    price: 49.99,
    quantity: 1,
  },
  {
    id: 2,
    name: 'Bottines en cuir',
    price: 89.99,
    quantity: 1,
  },
  {
    id: 3,
    name: 'Sandales d’été',
    price: 29.99,
    quantity: 2,
  },
  {
    id: 4,
    name: 'Baskets blanches',
    price: 59.99,
    quantity: 1,
  },
])

let totalPrice = computed(() => {
  let result = 0;
  for (let i = 0; i < productsInCheckout.value.length; i++) {
    result += productsInCheckout.value[i].price * productsInCheckout.value[i].quantity
  }

  return result;
});

function deleteCheckoutItem(id) {
  productsInCheckout.value = productsInCheckout.value.filter((product) => product.id !== id)
  console.log('Produit supprimé avec succès')
}


</script>

<template>
  <div class="max-w-4xl mx-auto px-4 py-10">
    <h2 class="text-2xl font-bold mb-6">Mon Panier</h2>
    <div class="space-y-6">
      <!-- Article -->
      <CheckoutElementCard
        v-for="productInCheckout in productsInCheckout"
        :key="productInCheckout.id"
        :id="productInCheckout.id"
        :title="productInCheckout.name"
        :price="productInCheckout.price"
        :quantity="productInCheckout.quantity"
        @deleteCheckoutItem="deleteCheckoutItem"
      />

      <div class="flex justify-between items-center bg-gray-100 p-4 rounded-lg">
        <p class="text-lg font-semibold">Code de réduction</p>
        <input type="text" placeholder="Entrez votre code" class="border border-gray-300 rounded-lg px-4 py-2 w-1/3" />
      </div>

      <!-- Résumé commande -->
      <div class="text-right mt-10">
        <p class="text-lg font-semibold">Total : <span class="text-blue-600">{{ totalPrice }} €</span></p>
        <button class="mt-4 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">Commander</button>
      </div>
    </div>
  </div>

</template>
