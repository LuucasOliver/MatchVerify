<script setup lang="ts">
import { ref } from 'vue'

const isMenuOpen = ref(false)

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <header class="bg-primary text-white shadow-md">
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <span class="text-2xl font-bold">MatchVerify</span>
        </div>
        
        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button @click="toggleMenu" class="focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path v-if="isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        <!-- Desktop menu -->
        <nav class="hidden md:flex space-x-6">
          <router-link 
            to="/" 
            class="text-white hover:text-white/80 transition-colors py-2"
            active-class="border-b-2 border-white"
          >
            Dashboard
          </router-link>
        </nav>
      </div>
      
      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden py-2 pb-4 space-y-2 animate-fadeIn">
        <router-link 
          to="/" 
          class="block py-2 text-white hover:text-white/80 transition-colors"
          active-class="border-l-4 border-white pl-2"
          @click="isMenuOpen = false"
        >
          Dashboard
        </router-link>
      </div>
    </div>
  </header>
</template>