<script setup>

const props = defineProps({
  title: String,
  quantity: Number,
  price: Number,
})

function deleteElement() {
  // Remonter l'info au parent pour supprimer l'élément (avec un emit)
  // Dans le parent : écouter l'event et supprimer l'élément de la liste
}

</script>

<template>
  <div class="flex items-center justify-between border-b border-gray-200 pb-4">
    <div class="flex items-center gap-4">
      <img src="https://via.placeholder.com/100" class="w-20 h-20 object-cover rounded" alt="Produit">
      <div>
        <p class="font-medium">{{ props.title }}</p>
        <p class="text-gray-500 text-sm">Quantité : {{ props.quantity }}</p>
      </div>
    </div>
    <div class="text-right">
      <p class="font-bold">{{ props.price }} €</p>
      <button class="text-red-500 text-sm hover:underline mt-1" @click="deleteElement">Supprimer</button>
    </div>
  </div>
</template>

<style scoped>

</style>
