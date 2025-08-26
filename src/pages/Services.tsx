import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: "🎨",
      title: "Creative Design",
      description: "Transforming ideas into visually stunning designs that capture attention and communicate your message effectively.",
      features: ["Brand Identity", "Logo Design", "Print Design", "Digital Graphics"]
    },
    {
      icon: "💻",
      title: "Web Development",
      description: "Building responsive, fast, and user-friendly websites that work seamlessly across all devices and platforms.",
      features: ["Responsive Design", "E-commerce", "CMS Integration", "Performance Optimization"]
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description: "Creating intuitive mobile applications that provide exceptional user experiences on iOS and Android.",
      features: ["iOS Development", "Android Development", "Cross-platform", "App Store Optimization"]
    },
    {
      icon: "🚀",
      title: "Brand Strategy",
      description: "Developing comprehensive brand strategies that resonate with your audience and drive business growth.",
      features: ["Market Research", "Brand Positioning", "Marketing Strategy", "Content Planning"]
    },
    {
      icon: "📊",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing solutions to boost your online presence and drive conversions.",
      features: ["SEO Optimization", "Social Media", "Email Marketing", "Analytics"]
    },
    {
      icon: "🎯",
      title: "Consulting",
      description: "Expert consultation to help you make informed decisions about your digital transformation journey.",
      features: ["Strategy Consulting", "Technical Audit", "Process Optimization", "Team Training"]
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
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions to elevate your brand and drive growth across all platforms.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-8 soft-shadow hover:scale-105 transition-all duration-300 group">
                  <div className="text-5xl mb-6 animate-float">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full">
                      Learn More
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">How We Work</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Our proven process ensures exceptional results every time
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "1", title: "Consultation", desc: "We start by understanding your vision, goals, and requirements through detailed consultation." },
                { number: "2", title: "Planning", desc: "Our team creates a comprehensive strategy and project roadmap tailored to your needs." },
                { number: "3", title: "Execution", desc: "We bring your project to life with meticulous attention to detail and quality." },
                { number: "4", title: "Support", desc: "Ongoing support and maintenance to ensure your success long after launch." }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full hero-gradient text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Flexible Pricing</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect plan for your project needs
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: "Starter",
                  price: "$2,999",
                  description: "Perfect for small businesses and startups",
                  features: ["Brand Identity", "Basic Website", "Logo Design", "3 Revisions", "1 Month Support"]
                },
                {
                  name: "Professional",
                  price: "$7,999",
                  description: "Ideal for growing businesses",
                  features: ["Everything in Starter", "Advanced Website", "Mobile App Design", "SEO Optimization", "6 Months Support"],
                  popular: true
                },
                {
                  name: "Enterprise",
                  price: "Custom",
                  description: "For large organizations with complex needs",
                  features: ["Custom Solutions", "Dedicated Team", "Priority Support", "Unlimited Revisions", "12 Months Support"]
                }
              ].map((plan, index) => (
                <Card key={index} className={`p-8 relative ${plan.popular ? 'border-primary scale-105' : ''} soft-shadow`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="text-4xl font-bold text-primary mb-2">{plan.price}</div>
                    <p className="text-muted-foreground">{plan.description}</p>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact">
                    <Button variant={plan.popular ? "hero" : "outline"} className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and find the perfect solution for your needs.
            </p>
            <div className="space-x-4">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Services;