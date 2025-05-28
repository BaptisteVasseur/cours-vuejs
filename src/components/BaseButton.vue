<script setup>

defineProps({
  content: String
})

</script>
<template>
  <a href="#" class="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
    {{ content }}
    <slot />
  </a>
</template>
