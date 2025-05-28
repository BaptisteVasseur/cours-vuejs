<script setup>
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

// import { supabase } from './utils/supabase'
// const data = await supabase.from('products').select();
// console.log(data);

</script>

<template>
  <Header />
  <RouterView />
  <Footer />
</template>
