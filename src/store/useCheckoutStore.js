import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCheckoutStore = defineStore('checkout', () => {

  // TODO : récupérer depuis le local storage
  const products = ref([]);

  function addProduct(product) {
    products.value.push(product);
    // TODO : sauvegarder dans le local storage
  }

  function removeProduct(productId) {
    products.value = products.value.filter(product => product.id !== productId);
  }

  const count = computed(() => {
    return products.value.length;
  })

  return {
    products,
    addProduct,
    removeProduct,
    count,
  }
})
