import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import designIcon from "@/assets/design-icon.png";
import innovationIcon from "@/assets/innovation-icon.png";
import rocketIcon from "@/assets/rocket-icon.png";
import webIcon from "@/assets/web-icon.png";
import mobileIcon from "@/assets/mobile-icon.png";
import analyticsIcon from "@/assets/analytics-icon.png";
import emailIcon from "@/assets/email-icon.png";
import phoneIcon from "@/assets/phone-icon.png";
import locationIcon from "@/assets/location-icon.png";

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
                <Card className="p-6 text-center card-gradient soft-shadow animate-float hover:scale-105 transition-all duration-300 group cursor-pointer">
                  <div className="w-20 h-20 mx-auto mb-4 relative overflow-hidden rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <img src={designIcon} alt="Design" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Design</h3>
                  <div className="mt-2 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300 mx-auto"></div>
                </Card>
                <Card className="p-6 text-center card-gradient soft-shadow animate-float hover:scale-105 transition-all duration-300 group cursor-pointer" style={{animationDelay: '1s'}}>
                  <div className="w-20 h-20 mx-auto mb-4 relative overflow-hidden rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <img src={innovationIcon} alt="Innovation" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Innovate</h3>
                  <div className="mt-2 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300 mx-auto"></div>
                </Card>
                <Card className="p-6 text-center card-gradient soft-shadow animate-float hover:scale-105 transition-all duration-300 group cursor-pointer" style={{animationDelay: '2s'}}>
                  <div className="w-20 h-20 mx-auto mb-4 relative overflow-hidden rounded-xl group-hover:rotate-12 transition-transform duration-300">
                    <img src={rocketIcon} alt="Create" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">Create</h3>
                  <div className="mt-2 w-0 group-hover:w-full h-0.5 bg-primary transition-all duration-300 mx-auto"></div>
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
                { title: "Brand Identity", desc: "Complete visual identity for tech startup", link: "/project/1", icon: designIcon },
                { title: "Web Design", desc: "Modern e-commerce platform redesign", link: "/project/2", icon: webIcon },
                { title: "Mobile App", desc: "UI/UX design for fitness tracking app", link: "/project/3", icon: mobileIcon },
                { title: "Marketing Campaign", desc: "Creative campaign for product launch", link: "/portfolio", icon: analyticsIcon }
              ].map((item, index) => (
                <Card key={index} className="p-6 soft-shadow hover:scale-105 hover:-translate-y-2 transition-all duration-300 group cursor-pointer">
                  <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl mb-4 flex items-center justify-center relative overflow-hidden group-hover:bg-gradient-to-br group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                    <div className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                      <img src={item.icon} alt={item.title} className="w-full h-full object-contain drop-shadow-lg" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground/80 transition-colors">{item.desc}</p>
                  <Link to={item.link}>
                    <Button variant="outline" size="sm" className="w-full group-hover:border-primary group-hover:text-primary transition-colors">
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
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 mx-auto mb-3 relative">
                    <img src={emailIcon} alt="Email" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">hhog68250@gmail.com</div>
                </div>
                <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 mx-auto mb-3 relative">
                    <img src={phoneIcon} alt="Phone" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">+91 9516317257</div>
                </div>
                <div className="text-center group cursor-pointer hover:scale-105 transition-transform duration-300">
                  <div className="w-12 h-12 mx-auto mb-3 relative">
                    <img src={locationIcon} alt="Location" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                  </div>
                  <div className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">Pune, Maharashtra</div>
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
