import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const projects = [
    {
      title: "TechStart Brand Identity",
      category: "Brand Identity",
      description: "Complete visual identity for innovative tech startup",
      image: "🎨"
    },
    {
      title: "E-commerce Platform",
      category: "Web Design",
      description: "Modern e-commerce platform redesign with enhanced UX",
      image: "🛒"
    },
    {
      title: "FitTracker Mobile App",
      category: "Mobile App",
      description: "UI/UX design for comprehensive fitness tracking application",
      image: "📱"
    },
    {
      title: "Product Launch Campaign",
      category: "Marketing Campaign",
      description: "Creative campaign driving 300% increase in engagement",
      image: "🚀"
    },
    {
      title: "Restaurant Branding",
      category: "Brand Identity",
      description: "Full branding package for upscale dining experience",
      image: "🍽️"
    },
    {
      title: "SaaS Dashboard",
      category: "Web Design",
      description: "Clean, intuitive dashboard for B2B software platform",
      image: "📊"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="text-primary">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our latest creative projects and see how we've helped brands transform their digital presence.
            </p>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="group overflow-hidden soft-shadow hover:scale-105 transition-all duration-300">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-6xl">
                    {project.image}
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-primary font-medium mb-2">{project.category}</div>
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <Link to={`/project/${index + 1}`}>
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

        {/* Process Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Our Creative Process</h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
              From concept to completion, here's how we bring your vision to life
            </p>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Discovery", desc: "Understanding your brand and goals" },
                { step: "02", title: "Strategy", desc: "Developing the perfect approach" },
                { step: "03", title: "Design", desc: "Creating stunning visual solutions" },
                { step: "04", title: "Launch", desc: "Delivering exceptional results" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full hero-gradient text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together. Get in touch to discuss your vision.
            </p>
            <div className="space-x-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Get Started
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg">
                  Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;