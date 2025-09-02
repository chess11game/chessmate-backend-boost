import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { useContact } from "@/hooks/useContact";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  
  const { submitContact, loading } = useContact();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await submitContact(formData);
    if (success) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background to-primary/5">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Get In <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's start a conversation about your next project.
            </p>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <Card className="p-8 soft-shadow">
                <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name" 
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com" 
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input 
                      id="phone" 
                      name="phone"
                      type="tel" 
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 1234567890" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company (Optional)</Label>
                    <Input 
                      id="company" 
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company" 
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>
                  <Button variant="hero" size="lg" className="w-full" type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Let's Create Together</h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    We're here to help bring your vision to life. Reach out through any of these channels, and we'll get back to you within 24 hours.
                  </p>
                </div>

                {/* Contact Cards */}
                <div className="space-y-6">
                  <Card className="p-6 soft-shadow hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">hhog68250@gmail.com</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 soft-shadow hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📱</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <p className="text-muted-foreground">+91 9516317257</p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-6 soft-shadow hover:scale-105 transition-transform duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-2xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-muted-foreground">Pune, Maharashtra</p>
                      </div>
                    </div>
                  </Card>
                </div>

                {/* Quick Links */}
                <Card className="p-6 soft-shadow bg-gradient-to-br from-primary/5 to-primary/10">
                  <h3 className="font-semibold mb-4">Quick Actions</h3>
                  <div className="space-y-3">
                    <Link to="/portfolio">
                      <Button variant="outline" className="w-full justify-start">
                        View Our Portfolio
                      </Button>
                    </Link>
                    <Link to="/services">
                      <Button variant="outline" className="w-full justify-start">
                        Explore Services
                      </Button>
                    </Link>
                    <Link to="/about">
                      <Button variant="outline" className="w-full justify-start">
                        Learn About Us
                      </Button>
                    </Link>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Get quick answers to common questions about our services and process
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "How long does a typical project take?",
                  answer: "Project timelines vary based on complexity, but most projects are completed within 4-12 weeks."
                },
                {
                  question: "Do you offer ongoing support?",
                  answer: "Yes, we provide comprehensive support packages ranging from 1 month to 12 months post-launch."
                },
                {
                  question: "Can you work with our existing team?",
                  answer: "Absolutely! We collaborate seamlessly with in-house teams and other agencies."
                },
                {
                  question: "What's included in your pricing?",
                  answer: "Our pricing includes design, development, testing, and initial support. Additional services are clearly outlined."
                }
              ].map((faq, index) => (
                <Card key={index} className="p-6 soft-shadow">
                  <h3 className="font-semibold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Don't wait to bring your vision to life. Let's schedule a consultation and get started today.
            </p>
            <div className="space-x-4">
              <Link to="/get-started">
                <Button variant="hero" size="lg">
                  Get Started Now
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

export default Contact;