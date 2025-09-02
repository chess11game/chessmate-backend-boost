import { useState } from 'react'
import { supabase, type ContactForm } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

export const useContact = () => {
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const submitContact = async (formData: Omit<ContactForm, 'id' | 'created_at'>) => {
    setLoading(true)
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([formData])

      if (error) throw error

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      })

      return true
    } catch (error) {
      console.error('Error submitting contact form:', error)
      toast({
        title: "Error sending message",
        description: "Please try again later or contact us directly.",
        variant: "destructive",
      })
      return false
    } finally {
      setLoading(false)
    }
  }

  return {
    submitContact,
    loading
  }
}