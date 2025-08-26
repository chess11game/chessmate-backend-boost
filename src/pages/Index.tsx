import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-20 bg-gradient-to-br from-background to-primary/5">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-6xl md:text-7xl font-bold mb-6">
                Where Ideas
                <br />
                <span className="text-primary">Come Alive</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                Transform your vision into stunning digital experiences with our creative team
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/get-started">
                  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                    Get Started
                  </Button>
                </Link>
                <Link to="/portfolio">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                    View Work
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="mt-16 relative">
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <Card className="p-6 text-center card-gradient soft-shadow animate-float">
                  <div className="text-4xl mb-4">🎨</div>
                  <h3 className="font-semibold">Design</h3>
                </Card>
                <Card className="p-6 text-center card-gradient soft-shadow animate-float" style={{animationDelay: '1s'}}>
                  <div className="text-4xl mb-4">💡</div>
                  <h3 className="font-semibold">Innovate</h3>
                </Card>
                <Card className="p-6 text-center card-gradient soft-shadow animate-float" style={{animationDelay: '2s'}}>
                  <div className="text-4xl mb-4">🚀</div>
                  <h3 className="font-semibold">Create</h3>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-xl text-muted-foreground mb-16 max-w-2xl mx-auto">
              We craft digital experiences that inspire and engage
            </p>
            
            <div className="grid md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full hero-gradient text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  01
                </div>
                <h3 className="text-xl font-semibold mb-4">Creative Design</h3>
                <p className="text-muted-foreground">
                  Transforming ideas into visually stunning designs that capture attention and communicate your message effectively.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full hero-gradient text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  02
                </div>
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <p className="text-muted-foreground">
                  Building responsive, fast, and user-friendly websites that work seamlessly across all devices and platforms.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full hero-gradient text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  03
                </div>
                <h3 className="text-xl font-semibold mb-4">Brand Strategy</h3>
                <p className="text-muted-foreground">
                  Developing comprehensive brand strategies that resonate with your audience and drive business growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Work</h2>
              <p className="text-xl text-muted-foreground">
                Explore our latest creative projects
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Brand Identity", desc: "Complete visual identity for tech startup", link: "/project/1" },
                { title: "Web Design", desc: "Modern e-commerce platform redesign", link: "/project/2" },
                { title: "Mobile App", desc: "UI/UX design for fitness tracking app", link: "/project/3" },
                { title: "Marketing Campaign", desc: "Creative campaign for product launch", link: "/portfolio" }
              ].map((item, index) => (
                <Card key={index} className="p-6 soft-shadow hover:scale-105 transition-all duration-300 group">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-3xl">
                      {index === 0 ? "🎨" : index === 1 ? "🌐" : index === 2 ? "📱" : "📊"}
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                  <Link to={item.link}>
                    <Button variant="outline" size="sm" className="w-full">
                      View Project
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Let's Create Together</h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Ready to bring your ideas to life?
            </p>
            
            <div className="max-w-md mx-auto">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="w-full mb-8">
                  Send Message
                </Button>
              </Link>
              
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">📧</div>
                  <div className="text-sm text-muted-foreground">hhog68250@gmail.com</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-sm text-muted-foreground">+91 9516317257</div>
                </div>
                <div>
                  <div className="text-2xl mb-2">📍</div>
                  <div className="text-sm text-muted-foreground">Pune, Maharashtra</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
