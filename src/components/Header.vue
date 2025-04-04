<script setup>

const menuItems = [
  { name: 'Accueil', url: '/' },
  { name: 'Nouveautés', url: '#' },
  { name: 'Homme', url: '/categorie/1' },
  { name: 'Femme', url: '/categorie/2' },
  { name: 'Contact', url: '#' },
  { name: 'Panier', url: '/checkout' },
]

</script>

<template>
  <header class="border-b border-gray-100 shadow-sm sticky top-0 bg-white z-50">
    <div class="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-2xl font-bold">Chaussures Élégance</h1>
      <nav class="space-x-6 hidden md:flex">
        <a
          v-for="menuItem in menuItems" :key="menuItem.name"
          :href="menuItem.url" class="hover:text-blue-600"
          >
          {{menuItem.name}}
        </a>
      </nav>
      <button class="md:hidden">☰</button>
    </div>
  </header>
</template>

<style scoped>

</style>
