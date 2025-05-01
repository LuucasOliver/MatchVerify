import { createClient } from '@supabase/supabase-js'
import type { Database } from './types'

// Supabase connection will use environment variables that you'll need to set up
// after connecting to Supabase via the "Connect to Supabase" button
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey)

export async function fetchOrders() {
  const { data, error } = await supabase
    .from('orders')
    .select('*')
    .order('created_at', { ascending: false })
  
  if (error) {
    console.error('Error fetching orders:', error)
    return []
  }
  
  return data || []
}

export async function addOrder(orderData: OrderData) {
  const { data, error } = await supabase
    .from('orders')
    .insert([orderData])
    .select()
  
  if (error) {
    console.error('Error adding order:', error)
    throw error
  }
  
  return data?.[0]
}

export interface OrderData {
  id?: number
  package_name: string
  owner_name: string
  delivery_time: string
  created_at?: string
  notes?: string
}

// You'll need to create a migration file for your Supabase database
// This interface should match your database schema
export interface Database {
  public: {
    Tables: {
      orders: {
        Row: {
          id: number
          package_name: string
          owner_name: string
          delivery_time: string
          created_at: string
          notes: string | null
        }
        Insert: {
          id?: number
          package_name: string
          owner_name: string
          delivery_time: string
          created_at?: string
          notes?: string | null
        }
        Update: {
          id?: number
          package_name?: string
          owner_name?: string
          delivery_time?: string
          created_at?: string
          notes?: string | null
        }
      }
    }
  }
}