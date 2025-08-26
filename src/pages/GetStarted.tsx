import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Let's Get <span className="text-primary">Started</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tell us about your project and we'll provide you with a detailed proposal and timeline.
            </p>
          </div>
        </section>

        {/* Project Brief Form */}
        <section className="py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <Card className="p-8 soft-shadow">
              <h2 className="text-3xl font-bold mb-2 text-center">Project Brief</h2>
              <p className="text-muted-foreground text-center mb-8">
                Help us understand your vision by filling out this detailed project brief
              </p>
              
              <form className="space-y-8">
                {/* Contact Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your full name" />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="your.email@example.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="+1 (555) 123-4567" />
                    </div>
                    <div>
                      <Label htmlFor="company">Company/Organization</Label>
                      <Input id="company" placeholder="Your company name" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="projectType">Project Type *</Label>
                      <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                        <option>Select project type</option>
                        <option>Website Design & Development</option>
                        <option>Brand Identity & Logo</option>
                        <option>Mobile App Development</option>
                        <option>E-commerce Platform</option>
                        <option>Digital Marketing Campaign</option>
                        <option>UI/UX Design</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range *</Label>
                      <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                        <option>Select budget range</option>
                        <option>$2,000 - $5,000</option>
                        <option>$5,000 - $10,000</option>
                        <option>$10,000 - $25,000</option>
                        <option>$25,000 - $50,000</option>
                        <option>$50,000+</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Desired Timeline *</Label>
                      <select className="w-full px-3 py-2 border border-input rounded-md bg-background">
                        <option>Select timeline</option>
                        <option>ASAP (Rush job)</option>
                        <option>1-2 months</option>
                        <option>2-3 months</option>
                        <option>3-6 months</option>
                        <option>6+ months</option>
                        <option>Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Description</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="description">Describe your project *</Label>
                      <Textarea 
                        id="description" 
                        placeholder="Tell us about your project goals, target audience, and what you hope to achieve..."
                        className="min-h-[120px]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="inspiration">Inspiration & References</Label>
                      <Textarea 
                        id="inspiration" 
                        placeholder="Share any websites, designs, or styles that inspire you. Include URLs if possible..."
                        className="min-h-[80px]"
                      />
                    </div>
                    <div>
                      <Label htmlFor="requirements">Specific Requirements</Label>
                      <Textarea 
                        id="requirements" 
                        placeholder="Any specific features, functionalities, or requirements you need..."
                        className="min-h-[80px]"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Services */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Additional Services</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      "SEO Optimization",
                      "Content Creation",
                      "Social Media Setup",
                      "Analytics Integration",
                      "Ongoing Maintenance",
                      "Training & Documentation"
                    ].map((service, index) => (
                      <label key={index} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-border" />
                        <span>{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <Button variant="hero" size="lg" className="w-full">
                    Submit Project Brief
                  </Button>
                  <p className="text-sm text-muted-foreground text-center mt-4">
                    We'll review your brief and get back to you within 24 hours with a detailed proposal.
                  </p>
                </div>
              </form>
            </Card>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">What Happens Next?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Here's our process after you submit your project brief
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { 
                  step: "1", 
                  title: "Review & Analysis", 
                  desc: "We carefully review your brief and analyze your requirements",
                  time: "Within 2 hours"
                },
                { 
                  step: "2", 
                  title: "Proposal Creation", 
                  desc: "Our team creates a detailed proposal with timeline and pricing",
                  time: "Within 24 hours"
                },
                { 
                  step: "3", 
                  title: "Consultation Call", 
                  desc: "We schedule a call to discuss the proposal and answer questions",
                  time: "Within 48 hours"
                },
                { 
                  step: "4", 
                  title: "Project Kickoff", 
                  desc: "Once approved, we begin working on your project immediately",
                  time: "Same week"
                }
              ].map((step, index) => (
                <Card key={index} className="p-6 text-center soft-shadow">
                  <div className="w-16 h-16 rounded-full hero-gradient text-primary-foreground flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground mb-3">{step.desc}</p>
                  <div className="text-sm text-primary font-medium">{step.time}</div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Prefer to Talk First?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Sometimes it's easier to discuss your project over a call. We're here to help!
            </p>
            <div className="space-x-4">
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Schedule a Call
                </Button>
              </Link>
              <Button variant="ghost" size="lg">
                Call Now: +91 9516317257
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GetStarted;