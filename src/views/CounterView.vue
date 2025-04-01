<script setup>

import { ref } from 'vue'

let counters = ref([]);

function incrementCounter(index) {
  counters.value[index] = counters.value[index] + 1;
}

function decrementCounter(index) {
  counters.value[index] = counters.value[index] - 1;
}

function addCounter() {
  counters.value.push(ref(0));
}

</script>

<template>
  <main class="p-4">
    <h1>Home</h1>

    <div v-for="(counter, index) in counters" :key="index">
      <div class="border-2 p-2 bg-gray-200">
        Compteur : {{ counter }}
      </div>

      <button class="bg-blue-400 rounded-lg px-3 py-1" @click="incrementCounter(index)">Incrémenter</button>
      <button class="bg-green-400 rounded-lg px-3 py-1" @click="decrementCounter(index)">Décrémenter</button>
    </div>

    <button class="bg-green-400 rounded-lg px-3 py-1" @click="addCounter">Ajouter un compteur</button>
  </main>
</template>
