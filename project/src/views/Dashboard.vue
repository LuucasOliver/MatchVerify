<script setup lang="ts">
import OrderForm from '../components/OrderForm.vue'
import OrderList from '../components/OrderList.vue'
</script>

<template>
  <div class="container mx-auto px-4">
    <div class="flex justify-center mb-8">
      <img 
        src="C:\Users\lucas\Documents\TrabFacul\MatchVerify\project\src\assets\logo_principal1.svg" 
        alt="Package Management System Logo" 
        class="h-24 w-auto"
      />
    </div>
    <OrderForm />
    <OrderList />
  </div>
</template>