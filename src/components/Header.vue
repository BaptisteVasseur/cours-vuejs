<script setup>

import { useCheckoutStore } from '@/store/useCheckoutStore.js'

const menuItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Nouveautés', url: '#' },
  { name: 'Homme', url: '/categorie/1' },
  { name: 'Femme', url: '/categorie/2' },
  { name: 'Contact', url: '#' },
]

const checkoutStore = useCheckoutStore();

</script>

<template>
  <header class="border-b border-gray-100 shadow-sm sticky top-0 bg-white z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Chaussures Élégance</h1>
      <nav class="space-x-6 hidden md:flex">
        <router-link
          v-for="menuItem in menuItems" :key="menuItem.name"
          :to="menuItem.url" class="hover:text-blue-600"
        >
          {{menuItem.name}}
        </router-link>

        <router-link :to="{name: 'checkout'}" class="hover:text-blue-600">
          Panier ({{ checkoutStore.count }})
        </router-link>

      </nav>
      <button class="md:hidden">☰</button>
    </div>
  </header>
</template>

<style scoped>

</style>
