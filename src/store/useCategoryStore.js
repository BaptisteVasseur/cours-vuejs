import { defineStore } from 'pinia'
import { ref } from 'vue'
import { supabase } from '@/utils/supabase.js'


export const useCategoryStore = defineStore('category', () => {

  const categories = ref([]);
  const loading = ref(false);
  const error = ref(null);

  async function getCategoriesByGender(gender) {
    loading.value = true;
    error.value = null;

    try {
      const data = await supabase.from('categories').select('*').eq('gender', gender).limit(6)
      console.log(data);
      if (data.error) {
        throw new Error(data.error.message);
      }

      categories.value.splice(0, categories.value.length); // Clear existing categories
      data.data.forEach(category => {
        categories.value.push(category);
      });
    } catch (err) {
      console.error(err);
      error.value = err;
    } finally {
      loading.value = false;
    }
  }

  // récupérer les catégories et les
  // afficher sur la page 'homme'/'femme'
  // grace au store

  return {
    categories,
    loading,
    error,
    getCategoriesByGender,
  }
});
