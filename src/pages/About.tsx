import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">Us</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We are a passionate team of designers and developers who believe in the power of creativity to transform businesses and inspire audiences.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  Founded in 2020, Creative Studio emerged from a simple belief: that great design has the power to transform businesses and create meaningful connections with audiences.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  What started as a small team of passionate creatives has grown into a full-service digital agency, helping brands across the globe tell their stories through stunning visual experiences.
                </p>
                <Link to="/portfolio">
                  <Button variant="hero" size="lg">
                    View Our Work
                  </Button>
                </Link>
              </div>
              <div className="relative">
                <Card className="p-8 card-gradient soft-shadow">
                  <div className="grid grid-cols-2 gap-6 text-center">
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">150+</div>
                      <div className="text-muted-foreground">Projects Completed</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">50+</div>
                      <div className="text-muted-foreground">Happy Clients</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">5</div>
                      <div className="text-muted-foreground">Years Experience</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary mb-2">24/7</div>
                      <div className="text-muted-foreground">Support</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
              The creative minds behind every project
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Alex Johnson", role: "Creative Director", image: "👨‍🎨" },
                { name: "Sarah Chen", role: "Lead Developer", image: "👩‍💻" },
                { name: "Mike Rodriguez", role: "UI/UX Designer", image: "👨‍🎨" }
              ].map((member, index) => (
                <Card key={index} className="p-6 text-center soft-shadow hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Get in touch and tell us about your project.
            </p>
            <div className="space-x-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Start a Project
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg">
                  See Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;