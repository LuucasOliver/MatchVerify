<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppHeader from './components/AppHeader.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-background">
    <AppHeader />
    <main class="flex-grow container mx-auto px-4 py-6">
      <RouterView />
    </main>
    <footer class="bg-secondary text-white py-4">
      <div class="container mx-auto px-4 text-center">
        <p>&copy; {{ new Date().getFullYear() }} Order Management Platform</p>
      </div>
    </footer>
  </div>
</template>