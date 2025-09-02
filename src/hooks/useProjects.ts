import { useState, useEffect } from 'react'
import { supabase, isSupabaseConfigured, type Project } from '@/lib/supabase'

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchProjects = async () => {
    if (!isSupabaseConfigured() || !supabase) {
      setError('Supabase not configured')
      setLoading(false)
      return
    }
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error

      setProjects(data || [])
    } catch (err) {
      console.error('Error fetching projects:', err)
      setError('Failed to load projects')
    } finally {
      setLoading(false)
    }
  }

  const getFeaturedProjects = () => {
    return projects.filter(project => project.featured)
  }

  const getProjectById = (id: string) => {
    return projects.find(project => project.id === id)
  }

  useEffect(() => {
    fetchProjects()
  }, [])

  return {
    projects,
    loading,
    error,
    fetchProjects,
    getFeaturedProjects,
    getProjectById
  }
}