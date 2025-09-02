import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Switch } from '@/components/ui/switch'
import { supabase, type Project, type ContactForm } from '@/lib/supabase'
import { useToast } from '@/hooks/use-toast'

const AdminDashboard = () => {
  const [contacts, setContacts] = useState<ContactForm[]>([])
  const [projects, setProjects] = useState<Project[]>([])
  const [newProject, setNewProject] = useState<Partial<Project>>({
    title: '',
    description: '',
    category: '',
    featured: false
  })
  const { toast } = useToast()

  useEffect(() => {
    fetchContacts()
    fetchProjects()
  }, [])

  const fetchContacts = async () => {
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching contacts:', error)
      return
    }

    setContacts(data || [])
  }

  const fetchProjects = async () => {
    const { data, error } = await supabase
      .from('projects')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching projects:', error)
      return
    }

    setProjects(data || [])
  }

  const addProject = async () => {
    if (!newProject.title || !newProject.description) {
      toast({
        title: "Missing fields",
        description: "Please fill in title and description",
        variant: "destructive"
      })
      return
    }

    const { error } = await supabase
      .from('projects')
      .insert([newProject])

    if (error) {
      console.error('Error adding project:', error)
      toast({
        title: "Error",
        description: "Failed to add project",
        variant: "destructive"
      })
      return
    }

    toast({
      title: "Success",
      description: "Project added successfully"
    })

    setNewProject({
      title: '',
      description: '',
      category: '',
      featured: false
    })
    fetchProjects()
  }

  const deleteProject = async (id: string) => {
    const { error } = await supabase
      .from('projects')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Error deleting project:', error)
      return
    }

    toast({
      title: "Success",
      description: "Project deleted successfully"
    })
    fetchProjects()
  }

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>

      {/* Add New Project */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Add New Project</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              id="title"
              value={newProject.title}
              onChange={(e) => setNewProject({ ...newProject, title: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={newProject.description}
              onChange={(e) => setNewProject({ ...newProject, description: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="category">Category</Label>
            <Input
              id="category"
              value={newProject.category}
              onChange={(e) => setNewProject({ ...newProject, category: e.target.value })}
            />
          </div>
          <div className="flex items-center space-x-2">
            <Switch
              id="featured"
              checked={newProject.featured}
              onCheckedChange={(checked) => setNewProject({ ...newProject, featured: checked })}
            />
            <Label htmlFor="featured">Featured Project</Label>
          </div>
          <Button onClick={addProject}>Add Project</Button>
        </CardContent>
      </Card>

      {/* Projects List */}
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Projects ({projects.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 border rounded">
                <div>
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                  {project.featured && <span className="text-xs bg-primary text-primary-foreground px-2 py-1 rounded">Featured</span>}
                </div>
                <Button variant="destructive" size="sm" onClick={() => deleteProject(project.id!)}>
                  Delete
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Contact Messages */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Messages ({contacts.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="p-4 border rounded">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold">{contact.name}</h3>
                  <span className="text-xs text-muted-foreground">
                    {new Date(contact.created_at!).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-2">{contact.email}</p>
                {contact.company && <p className="text-sm text-muted-foreground mb-2">{contact.company}</p>}
                <p className="text-sm">{contact.message}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AdminDashboard