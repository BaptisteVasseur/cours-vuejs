<script setup>

import ProductCard from '@/components/ProductCard.vue'

const products = [
  {
    title: 'Manteau',
    price: 10,
    description: 'aaa',
    image: 'https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358',
  },
  {
    title: 'Chaussure',
    price: 20,
    description: 'bbb',
    image: 'https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358',
  },
  {
    title: 'Babouche (merci Sami)',
    price: 30,
    description: 'ccc',
    image: 'https://images.stockx.com/images/Nike-Air-Force-1-Low-Supreme-Box-Logo-Black-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&q=57&dpr=2&trim=color&updated_at=1738193358',
  }
]

</script>

<template>
  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <h3 class="text-2xl font-semibold mb-8 text-center">Produits en vedette</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <ProductCard v-for="product in products" :title="product.title" :price="product.price" :description="product.description" :image="product.image" />
      </div>
    </div>
  </section>
</template>
