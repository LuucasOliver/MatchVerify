<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { format, parseISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { useOrderStore } from '../stores/orderStore'
import type { OrderData } from '../stores/orderStore'

const orderStore = useOrderStore()
const searchQuery = ref('')

onMounted(() => {
  orderStore.loadOrders()
})

const filteredOrders = computed(() => {
  if (!searchQuery.value.trim()) {
    return orderStore.orders
  }
  
  const query = searchQuery.value.toLowerCase()
  return orderStore.orders.filter(order => 
    order.package_name.toLowerCase().includes(query) ||
    order.owner_name.toLowerCase().includes(query) ||
    (order.notes && order.notes.toLowerCase().includes(query))
  )
})

const formatDateTime = (dateTimeStr: string) => {
  try {
    return format(parseISO(dateTimeStr), 'PPpp', { locale: ptBR })
  } catch {
    return dateTimeStr
  }
}
</script>

<template>
  <div class="mt-8">
    <div class="flex justify-between items-center mb-4">
      <h2 class="section-title text-primary-dark">Encomendas Registradas</h2>
      
      <div class="relative w-full max-w-xs">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Pesquisar encomendas..."
          class="input pl-9"
        />
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>
    
    <div v-if="orderStore.isLoading" class="text-center py-8">
      <div class="inline-block animate-spin rounded-full h-8 w-8 border-4 border-primary border-t-transparent"></div>
      <p class="mt-2 text-gray-600">Carregando encomendas...</p>
    </div>
    
    <div v-else-if="orderStore.error" class="bg-error/20 text-error px-4 py-3 rounded-md">
      {{ orderStore.error }}
    </div>
    
    <div v-else-if="filteredOrders.length === 0" class="text-center py-8 bg-gray-50 rounded-lg">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
      </svg>
      <p class="mt-2 text-gray-600">
        {{ searchQuery ? 'Nenhuma encomenda corresponde à sua pesquisa' : 'Nenhuma encomenda foi registrada ainda' }}
      </p>
    </div>
    
    <div v-else class="space-y-4">
      <transition-group name="list" tag="div" class="space-y-4">
        <div 
          v-for="order in filteredOrders" 
          :key="order.id || order.created_at" 
          class="card border-l-4 border-primary hover:border-primary-dark transition-colors"
        >
          <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
            <div>
              <h3 class="font-semibold text-lg text-secondary-dark">{{ order.package_name }}</h3>
              <p class="text-sm text-gray-600">
                Destinatário: <span class="font-medium">{{ order.owner_name }}</span>
              </p>
            </div>
            
            <div class="flex flex-col md:items-end">
              <div class="bg-primary/10 text-primary-dark rounded-full px-3 py-1 text-sm inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {{ formatDateTime(order.delivery_time) }}
              </div>
              
              <p v-if="order.created_at" class="text-xs text-gray-500 mt-1">
                Registrado em {{ formatDateTime(order.created_at) }}
              </p>
            </div>
          </div>
          
          <p v-if="order.notes" class="mt-2 text-gray-700 bg-gray-50 p-2 rounded">
            {{ order.notes }}
          </p>
        </div>
      </transition-group>
    </div>
  </div>
</template>