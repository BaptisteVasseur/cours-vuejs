<script setup>

const menuItems = [
  { name: 'Accueil', url: '#' },
  { name: 'Nouveautés', url: '#' },
  { name: 'Homme', url: '#' },
  { name: 'Femme', url: '#' },
  { name: 'Contact', url: '#' },
]

</script>

<template>
  <header class="border-b shadow-sm sticky top-0 bg-white z-50">
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
