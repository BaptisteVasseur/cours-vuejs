<script setup>

import BaseButton from '@/components/BaseButton.vue'
</script>

<template>
  <section class="bg-gray-100 py-16">
    <div class="max-w-7xl mx-auto px-4 text-center">
      <h2 class="text-4xl font-bold mb-4">Trouvez la paire parfaite</h2>
      <p class="text-lg text-gray-600 mb-8">
        Découvrez notre sélection de chaussures pour toutes les occasions, avec un style moderne et raffiné.
      </p>

      <BaseButton content="Découvrir la collection" />

      <BaseButton>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><defs><mask id="solarCardBold0"><g fill="none"><path fill="#fff" d="M14 4h-4C6.229 4 4.343 4 3.172 5.172c-.844.843-1.08 2.057-1.146 4.078h19.948c-.066-2.021-.302-3.235-1.146-4.078C19.657 4 17.771 4 14 4m-4 16h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12q0-.662-.002-1.25H2.002Q1.999 11.338 2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20"/><path fill="#000" fill-rule="evenodd" d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75m6.5 0a.75.75 0 0 1 .75-.75H14a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75" clip-rule="evenodd"/></g></mask></defs><path fill="currentColor" d="M0 0h24v24H0z" mask="url(#solarCardBold0)"/></svg>
        Mon button 2
      </BaseButton>
    </div>
  </section>
</template>
