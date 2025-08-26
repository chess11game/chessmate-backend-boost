import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link, useParams } from "react-router-dom";

const ProjectDetail = () => {
  const { id } = useParams();
  
  const projects = [
    {
      title: "TechStart Brand Identity",
      category: "Brand Identity",
      description: "Complete visual identity for innovative tech startup",
      image: "🎨",
      client: "TechStart Inc.",
      duration: "3 months",
      year: "2024",
      challenge: "Create a modern, tech-forward brand identity that appeals to both B2B clients and consumers.",
      solution: "Developed a clean, minimalist logo with custom typography and a vibrant color palette.",
      results: "150% increase in brand recognition and 200% boost in website conversions."
    },
    {
      title: "E-commerce Platform",
      category: "Web Design",
      description: "Modern e-commerce platform redesign with enhanced UX",
      image: "🛒",
      client: "RetailMax",
      duration: "4 months",
      year: "2024",
      challenge: "Redesign an outdated e-commerce platform to improve user experience and increase sales.",
      solution: "Complete UX overhaul with modern design, improved navigation, and streamlined checkout.",
      results: "45% increase in conversion rate and 60% improvement in mobile user engagement."
    },
    {
      title: "FitTracker Mobile App",
      category: "Mobile App",
      description: "UI/UX design for comprehensive fitness tracking application",
      image: "📱",
      client: "FitLife Technologies",
      duration: "5 months",
      year: "2023",
      challenge: "Design an intuitive fitness app that motivates users to maintain healthy habits.",
      solution: "Created gamified UI with progress tracking, social features, and personalized workouts.",
      results: "4.8-star app store rating and 100k+ downloads in the first month."
    }
  ];

  const projectIndex = parseInt(id || "1") - 1;
  const project = projects[projectIndex] || projects[0];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-sm text-primary font-medium mb-4">{project.category}</div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">{project.title}</h1>
              <p className="text-xl text-muted-foreground mb-8">{project.description}</p>
              
              <div className="flex justify-center items-center space-x-8 text-sm text-muted-foreground">
                <div>
                  <span className="font-medium text-foreground">Client:</span> {project.client}
                </div>
                <div>
                  <span className="font-medium text-foreground">Duration:</span> {project.duration}
                </div>
                <div>
                  <span className="font-medium text-foreground">Year:</span> {project.year}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Image */}
        <section className="py-10">
          <div className="container mx-auto px-6">
            <Card className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center soft-shadow">
              <div className="text-9xl animate-float">{project.image}</div>
            </Card>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Challenge */}
              <Card className="p-8 soft-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
              </Card>

              {/* Solution */}
              <Card className="p-8 soft-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
              </Card>

              {/* Results */}
              <Card className="p-8 soft-shadow">
                <h3 className="text-2xl font-bold mb-4 text-primary">The Results</h3>
                <p className="text-muted-foreground leading-relaxed">{project.results}</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                How we brought this project to life
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { phase: "Research", desc: "Deep dive into user needs and market analysis" },
                { phase: "Design", desc: "Create wireframes and visual designs" },
                { phase: "Develop", desc: "Build and implement the solution" },
                { phase: "Launch", desc: "Deploy and optimize for success" }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full hero-gradient text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.phase}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Used */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Technologies Used</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge tools and technologies that powered this project
              </p>
            </div>
            
            <div className="grid md:grid-cols-6 gap-8">
              {["React", "TypeScript", "Tailwind", "Figma", "Node.js", "MongoDB"].map((tech, index) => (
                <Card key={index} className="p-6 text-center soft-shadow hover:scale-105 transition-transform duration-300">
                  <div className="text-3xl mb-3">⚡</div>
                  <div className="font-medium">{tech}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Other Projects */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">More Projects</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our other creative work
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {projects.filter((_, idx) => idx !== projectIndex).slice(0, 3).map((otherProject, index) => (
                <Card key={index} className="group overflow-hidden soft-shadow hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                    {otherProject.image}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{otherProject.category}</div>
                    <h3 className="text-xl font-semibold mb-3">{otherProject.title}</h3>
                    <p className="text-muted-foreground mb-4">{otherProject.description}</p>
                    <Link to={`/project/${projects.findIndex(p => p.title === otherProject.title) + 1}`}>
                      <Button variant="outline" className="w-full">
                        View Project
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready for Your Own Success Story?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Start your project today.
            </p>
            <div className="space-x-4">
              <Link to="/get-started">
                <Button variant="hero" size="lg">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Discuss Your Ideas
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
