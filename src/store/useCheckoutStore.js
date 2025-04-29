import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCheckoutStore = defineStore('checkout', () => {

  const products = ref([]);

  function addProduct(product) {
    products.value.push(product);
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
