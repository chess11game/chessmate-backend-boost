import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Only create client if environment variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => Boolean(supabaseUrl && supabaseAnonKey)

// Database types
export interface ContactForm {
  id?: string
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  created_at?: string
}

export interface Project {
  id?: string
  title: string
  description: string
  image_url?: string
  category: string
  client?: string
  completion_date?: string
  featured: boolean
  created_at?: string
}

export interface User {
  id?: string
  email: string
  full_name?: string
  avatar_url?: string
  role?: 'admin' | 'client'
  created_at?: string
}