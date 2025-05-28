<script setup>

import { computed } from 'vue'

const props = defineProps({
  title: String,
  type: {
    type: String,
    default: 'error' // Default type can be 'error', 'warning', 'info', etc.
  },
  confirmLabel: {
    type: String,
    default: 'Deactivate',
  },
  cancelLabel: {
    type: String,
    default: 'Cancel'
  },
})

const confirmColorButton = computed(() => {
  return props.type === 'error' ? 'bg-red-600 hover:bg-red-500' : 'bg-blue-600 hover:bg-blue-500'
})

const iconColorBackground = computed(() => {
  return props.type === 'error' ? 'bg-red-100' : 'bg-blue-100'
})

</script>

<template>
  <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
      <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">

              <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 class="text-base font-semibold text-gray-900" id="modal-title">{{ title }}</h3>
                <div class="mt-2">
                  <slot />
                </div>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 gap-4 flex items-center justify-center sm:px-6">
            <slot name="confirmButton">
              <button
                type="button"
                class="inline-flex w-full justify-center rounded-md px-3 py-2 text-sm font-semibold text-white shadow-xs sm:ml-3 sm:w-auto"
                :class="confirmColorButton"
                @click="$emit('confirm')"
              >
                {{ confirmLabel }}
              </button>
            </slot>
            <button
              type="button"
              class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
              @click="$emit('close')"
            >
              {{ cancelLabel }}
            </button>
          </div>
          <slot name="footer" />
        </div>
      </div>
    </div>
  </div>
</template>
