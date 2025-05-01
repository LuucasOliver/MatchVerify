<script setup lang="ts">
import { ref, reactive } from 'vue'
import { format } from 'date-fns'
import { useOrderStore } from '../stores/orderStore'
import type { OrderData } from '../stores/orderStore'

const orderStore = useOrderStore()

const defaultFormState = {
  package_name: '',
  owner_name: '',
  delivery_time: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
  notes: ''
}

const formData = reactive<OrderData>({ ...defaultFormState })
const isSubmitting = ref(false)
const formError = ref('')
const successMessage = ref('')

const resetForm = () => {
  Object.assign(formData, defaultFormState)
  formData.delivery_time = format(new Date(), "yyyy-MM-dd'T'HH:mm")
}

const submitForm = async () => {
  formError.value = ''
  successMessage.value = ''
  
  // Validation
  if (!formData.package_name.trim()) {
    formError.value = 'Descrição da encomenda é obrigatória'
    return
  }
  
  if (!formData.owner_name.trim()) {
    formError.value = 'Nome do destinatário é obrigatório'
    return
  }
  
  if (!formData.delivery_time) {
    formError.value = 'Data e hora são obrigatórios'
    return
  }
  
  isSubmitting.value = true
  
  try {
    await orderStore.createOrder(formData)
    successMessage.value = 'Encomenda registrada com sucesso!'
    resetForm()
  } catch (error) {
    formError.value = 'Falha ao registrar encomenda. Por favor, tente novamente.'
    console.error(error)
  } finally {
    isSubmitting.value = false
    
    if (successMessage.value) {
      setTimeout(() => {
        successMessage.value = ''
      }, 3000)
    }
  }
}
</script>

<template>
  <div class="card animate-slideIn">
    <h2 class="section-title text-primary-dark">Registrar Nova Encomenda</h2>
    
    <form @submit.prevent="submitForm" class="space-y-4">
      <div v-if="successMessage" class="bg-success/20 text-success px-4 py-2 rounded-md animate-fadeIn">
        {{ successMessage }}
      </div>
      
      <div v-if="formError" class="bg-error/20 text-error px-4 py-2 rounded-md animate-fadeIn">
        {{ formError }}
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label for="package_name" class="block text-sm font-medium text-secondary-dark mb-1">
            Descrição da Encomenda
          </label>
          <input
            id="package_name"
            v-model="formData.package_name"
            type="text"
            class="input"
            placeholder="Digite a descrição da encomenda"
            :disabled="isSubmitting"
          />
        </div>
        
        <div>
          <label for="owner_name" class="block text-sm font-medium text-secondary-dark mb-1">
            Nome do Destinatário
          </label>
          <input
            id="owner_name"
            v-model="formData.owner_name"
            type="text"
            class="input"
            placeholder="Digite o nome do destinatário"
            :disabled="isSubmitting"
          />
        </div>
      </div>
      
      <div>
        <label for="delivery_time" class="block text-sm font-medium text-secondary-dark mb-1">
          Data e Hora
        </label>
        <input
          id="delivery_time"
          v-model="formData.delivery_time"
          type="datetime-local"
          class="input"
          :disabled="isSubmitting"
        />
      </div>
      
      <div>
        <label for="notes" class="block text-sm font-medium text-secondary-dark mb-1">
          Observações (Opcional)
        </label>
        <textarea
          id="notes"
          v-model="formData.notes"
          class="input min-h-[80px]"
          placeholder="Informações adicionais sobre a encomenda"
          :disabled="isSubmitting"
        ></textarea>
      </div>
      
      <div class="flex justify-end">
        <button 
          type="submit" 
          class="btn-primary"
          :disabled="isSubmitting"
        >
          <span v-if="isSubmitting" class="flex items-center">
            <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processando...
          </span>
          <span v-else>Registrar Encomenda</span>
        </button>
      </div>
    </form>
  </div>
</template>