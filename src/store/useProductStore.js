import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { supabase } from '@/utils/supabase.js'

export const useProductStore = defineStore('product', () => {

  const products = ref([]);
  const loading = ref(false);
  const error = ref(null);

  const allProducts = computed(() => {
    return products.value;
  });

  async function getPopularProducts() {

    loading.value = true;
    error.value = null;

    try {
      const data = await supabase.from('products').select('*').limit(6)
      if (data.error) {
        throw new Error(data.error.message);
      }

      data.data.forEach(product => {
        products.value.push(product);
      });
    } catch (err) {
      console.error(err);
      error.value = err;

    } finally {
      loading.value = false;
    }
  }

  return {
    allProducts,
    loading,
    error,
    getPopularProducts,
  }
});
