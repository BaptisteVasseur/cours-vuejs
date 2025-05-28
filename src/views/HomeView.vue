<script setup>

import TitleSection from '@/components/Home/TitleSection.vue'
import PopularSection from '@/components/Home/PopularSection.vue'
import BaseModal from '@/components/BaseModal.vue'
import BaseButton from '@/components/BaseButton.vue'

function confirm() {
  console.log('confirm function called');
}

function close() {
  console.log('close function called');
}

function confirmDeactivate() {
  console.log('confirmDeactivate function called');
}

function closeDeactivate() {
  console.log('closeDeactivate function called');
}

</script>

<template>
  <!-- Hero Section -->
  <TitleSection />

  <!-- Produits en vedette -->
  <PopularSection />

  <BaseModal title="Bravo !" type="success" @confirm="confirm" @close="close">
    Félicitations, vous avez gagné un cadeau !

    <template #footer>
      <div class="text-center py-2">
        Ceci est le footer
      </div>
    </template>
  </BaseModal>

  <BaseModal title="Deactivate account" type="error" @confirm="confirmDeactivate" @close="closeDeactivate">
    Voulez-vous vraiment désactiver votre compte ?

    <template #footer>
      <div class="text-center py-2">
        Ceci est le footer
      </div>
    </template>
  </BaseModal>
</template>
