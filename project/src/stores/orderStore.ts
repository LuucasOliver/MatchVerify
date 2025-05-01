import { defineStore } from 'pinia'
import { ref } from 'vue'

export interface OrderData {
  id?: number
  package_name: string
  owner_name: string
  delivery_time: string
  created_at?: string
  notes?: string
}

export const useOrderStore = defineStore('orders', () => {
  const orders = ref<OrderData[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  async function loadOrders() {
    isLoading.value = true
    error.value = null
    
    try {
      // Mock data
      orders.value = []
    } catch (err) {
      error.value = 'Failed to load orders. Please try again.'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  async function createOrder(orderData: OrderData) {
    isLoading.value = true
    error.value = null
    
    try {
      const newOrder = {
        ...orderData,
        id: Math.floor(Math.random() * 1000),
        created_at: new Date().toISOString()
      }
      orders.value = [newOrder, ...orders.value]
      return newOrder
    } catch (err) {
      error.value = 'Failed to create order. Please try again.'
      console.error(err)
      throw err
    } finally {
      isLoading.value = false
    }
  }

  return {
    orders,
    isLoading,
    error,
    loadOrders,
    createOrder
  }
})