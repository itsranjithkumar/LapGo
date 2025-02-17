"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Laptop,
  Shield,
  Phone,
  Code,
  PenToolIcon as Tool,
  Cpu,
  Headphones,
  Settings,
  LineChart,
  Users,
  WalletCards,
  ShieldCheck,
} from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { motion, animate, useInView, AnimatePresence } from "framer-motion"
import Image from 'next/image';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add state for background image
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const backgroundImages = [
    '/lap1.jpg',
    '/lap.jpg',
    '/lap2.jpg',
    '/lap3.jpg'
  ];

  // Add useEffect to cycle through background images
  useEffect(() => {
    const interval = setInterval(() => {
      setBackgroundIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]); // Added dependency

  // Refactor financial overview section to use a separate component for count animation
  const AnimatedCount = ({ stat }: { stat: { title: string; value: number; prefix: string; suffix: string } }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
      if (inView) {
        const duration = 2; // Animation duration in seconds
        const startCount = 0;
        const endCount = stat.value;

        const animation = animate(startCount, endCount, {
          duration: duration,
          onUpdate: (latest) => {
            setCount(Math.round(latest));
          },
        });

        return () => animation.stop();
      }
    }, [inView, stat.value]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <Card className="text-center p-6">
          <h3 className="text-lg font-medium text-muted-foreground mb-2">{stat.title}</h3>
          <p className="text-3xl font-bold">
            {stat.prefix}{count.toLocaleString()}{stat.suffix}
          </p>
        </Card>
      </motion.div>
    );
  };

  return (
    <div className="flex min-h-screen flex-col">
      {/* Navigation */}
      <header
        className={`sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-200 ${
          isScrolled ? "bg-background/95" : "bg-transparent border-transparent"
        }`}
      >
        <div className="container flex h-16 items-center">
          <div className="mr-4 hidden md:flex">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <Laptop className="h-6 w-6" />
              <span className="hidden font-bold sm:inline-block">TechRent</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <Link className="transition-colors hover:text-foreground/80" href="#features">
                Features
              </Link>
              <Link className="transition-colors hover:text-foreground/80" href="#services">
                Services
              </Link>
              <Link className="transition-colors hover:text-foreground/80" href="#market-demand">
                Market Analysis
              </Link>
              <Link className="transition-colors hover:text-foreground/80" href="#pricing">
                Pricing
              </Link>
              <Link className="transition-colors hover:text-foreground/80" href="#security">
                Security
              </Link>
            </nav>
          </div>
          <Button className="ml-auto" size="sm">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={backgroundIndex}
            animate={{
              scale: [1, 1.1],
              backgroundPosition: ['center center', 'center center', 'left top', 'right bottom']
            }}
            transition={{
              duration: 5,
              ease: "easeInOut"
            }}
            className="absolute inset-0 z-0 bg-cover bg-center"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImages[backgroundIndex]})`,
              backgroundSize: 'cover',
            }}
          >
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div className="absolute inset-0 bg-grid-white/[0.02]" />
          </motion.div>
        </AnimatePresence>
        <div className="container relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center space-y-8 text-center text-white"
          >
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl">
              Empower Your
              <br />
              Tech Journey
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl">
              Premium laptop rentals with comprehensive IT support for students pursuing their tech dreams.
            </p>
            <div className="space-x-4">
              <Button size="lg" className="h-12 px-8 text-lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 text-lg text-black bg-white border-white/50 border-2 hover:bg-white/90 hover:text-black transition-colors duration-300 font-bold tracking-wider shadow-lg hover:shadow-xl">
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Demand */}
      <section id="market-demand" className="py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Market Demand Insights</h2>
            <p className="text-tech-body text-muted-foreground">
              Understanding the evolving needs of IT students and professionals
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image 
                src="/tech.jpg" 
                alt="Market Demand and Technology Trends" 
                width={500} 
                height={400} 
                className="rounded-xl shadow-lg object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
              {[
                {
                  icon: Users,
                  title: "Growing Demand",
                  description: "The demand for affordable, high-performance laptops among IT students in India is significant. Many students face financial constraints that make purchasing new laptops challenging.",
                },
                {
                  icon: LineChart,
                  title: "Technology Evolution",
                  description: "The rapid evolution of technology necessitates frequent upgrades, further burdening students financially. Our rental services provide a cost-effective solution.",
                },
                {
                  icon: ShieldCheck,
                  title: "Access to Latest Tech",
                  description: "By offering rental services, we ensure students have access to the latest technology without the hefty investment, addressing their immediate academic and professional needs.",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <item.icon className="h-10 w-10 mb-5 transition-transform group-hover:scale-110" />
                      <h3 className="text-tech-card-title font-bold mb-3">{item.title}</h3>
                      <p className="text-tech-card-description text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Strategy */}
      <section id="pricing" className="py-32 bg-gradient-to-b from-background to-secondary/20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Pricing Strategy</h2>
            <p className="text-tech-body text-muted-foreground">
              Flexible and affordable rental solutions tailored to your needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: WalletCards,
                title: "Tiered Pricing Model",
                description: "Rental prices determined by laptop specifications, duration, and selected allied services to ensure affordability and profitability.",
              },
              {
                icon: Laptop,
                title: "Model-Based Pricing",
                description: "Basic models start at ₹1,500 per month, with higher-end machines priced accordingly to reflect their advanced capabilities.",
              },
              {
                icon: Settings,
                title: "Customizable Packages",
                description: "Flexible add-ons for allied services and insurance, allowing customers to personalize their rental experience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <item.icon className="h-10 w-10 mb-5 transition-transform group-hover:scale-110" />
                    <h3 className="text-tech-card-title font-bold mb-3">{item.title}</h3>
                    <p className="text-tech-card-description text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section id="services" className="py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Comprehensive Services</h2>
            <p className="text-tech-body text-muted-foreground">
              Everything you need for your academic success
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Laptop,
                title: "Laptop Rental",
                description: "Provision of laptops with specifications ranging from basic models suitable for coding and academic work to high-end machines for graphic-intensive projects.",
              },
              {
                icon: Headphones,
                title: "Allied Support Services",
                description: "Comprehensive assistance including development support via WhatsApp, coding guidance, software setup, and project assistance.",
              },
              {
                icon: Shield,
                title: "Theft Mitigation",
                description: "Advanced protection through KYC verification, GPS tracking with ESP32 module, and optional theft liability insurance.",
              },
              {
                icon: Code,
                title: "Diagnostics Monitoring",
                description: "Automated daily diagnostics logging triggered by startup and internet connectivity to ensure optimal system performance.",
              },
              {
                icon: Settings,
                title: "On-Demand Servicing",
                description: "Monthly regional service personnel assignments for on-premises maintenance and prompt service request resolution.",
              },
              {
                icon: Cpu,
                title: "Customized Services",
                description: "Flexible additional services including software installations, extended support hours, and personalized tutorials to enhance customer experience.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="group hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <item.icon className="h-10 w-10 mb-5 transition-transform group-hover:scale-110" />
                    <h3 className="text-tech-card-title font-bold mb-3">{item.title}</h3>
                    <p className="text-tech-card-description text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Overview */}
      <section id="financials" className="py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Financial Overview</h2>
            <p className="text-tech-body text-muted-foreground">
              Sustainable business model with strong growth potential
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
              {[
                { title: "Monthly Revenue", value: 1000000, prefix: "₹", suffix: "" },
                { title: "Average Rentals", value: 500, prefix: "", suffix: "+" },
                { title: "Monthly EBITDA", value: 350000, prefix: "₹", suffix: "" },
                { title: "Annual EBITDA", value: 4200000, prefix: "₹", suffix: "" },
              ].map((stat, index) => (
                <AnimatedCount key={index} stat={stat} />
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image 
                src="/financial.jpg" 
                alt="Financial Analysis and Marketing Insights" 
                width={500} 
                height={400} 
                className="rounded-xl shadow-lg object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section id="security" className="py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Advanced Security</h2>
            <p className="text-tech-body text-muted-foreground">
              Multi-layered protection for your peace of mind
            </p>
          </motion.div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <Image 
                src="/security.jpg" 
                alt="Advanced Security Protection" 
                width={500} 
                height={400} 
                className="rounded-xl shadow-lg object-cover"
              />
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-1">
              {[
                {
                  icon: ShieldCheck,
                  title: "Data Encryption",
                  description: "End-to-end encryption to protect your sensitive information"
                },
                {
                  icon: Users,
                  title: "Access Control",
                  description: "Granular user permissions and multi-factor authentication"
                },
                {
                  icon: Cpu,
                  title: "AI-Powered Threat Detection",
                  description: "Real-time monitoring and intelligent threat prevention"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <item.icon className="h-10 w-10 mb-5 transition-transform group-hover:scale-110" />
                      <h3 className="text-tech-card-title font-bold mb-3">{item.title}</h3>
                      <p className="text-tech-card-description text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t">
        <div className="container py-24 sm:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 flex max-w-[58rem] flex-col items-center space-y-4 text-center"
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Contact Us</h2>
            <p className="text-tech-body text-muted-foreground max-w-[700px] text-center">
              We&apos;re here to support your technological journey. Reach out to us for any inquiries, support, or collaboration opportunities.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid gap-16 md:grid-cols-2"
          >
            <div>
              <h2 className="text-tech-title">Start Your Journey</h2>
              <p className="mt-4 text-tech-body text-muted-foreground">
                Ready to elevate your tech education? Get in touch with our team today.
              </p>
              <div className="mt-8 grid gap-4">
                <div className="flex items-center gap-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center gap-4">
                  <Tool className="h-6 w-6 text-primary" />
                  <span>24/7 Technical Support</span>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col gap-4"
            >
              <input className="rounded-md border bg-background px-4 py-2" placeholder="Name" type="text" />
              <input className="rounded-md border bg-background px-4 py-2" placeholder="Email" type="email" />
              <textarea className="rounded-md border bg-background px-4 py-2" placeholder="Message" rows={4} />
              <Button size="lg">Send Message</Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-secondary/20">
        <div className="container grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Laptop className="h-6 w-6" />
              <span className="font-bold">TechRent</span>
            </Link>
            <p className="mt-4 text-tech-body text-muted-foreground">
              Empowering IT students with affordable access to technology and comprehensive support services.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-tech-body font-semibold">Services</h3>
            <ul className="grid gap-2 text-tech-body text-muted-foreground">
              <li>Laptop Rental</li>
              <li>Technical Support</li>
              <li>Development Assistance</li>
              <li>Maintenance</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-tech-body font-semibold">Company</h3>
            <ul className="grid gap-2 text-tech-body text-muted-foreground">
              <li>About</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Press</li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-tech-body font-semibold">Legal</h3>
            <ul className="grid gap-2 text-tech-body text-muted-foreground">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookies</li>
              <li>Licenses</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
