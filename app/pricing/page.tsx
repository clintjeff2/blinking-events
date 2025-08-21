"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CTABanner } from "@/components/cta-banner"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "framer-motion"
import { 
  Check, 
  HelpCircle, 
  X, 
  ChevronRight, 
  Users, 
  Calendar,
  Sparkles,
  HeartHandshake,
  Clock,
  Percent,
  Info
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(false)
  
  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }
  
  const scaleIn = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-r from-slate-50 to-secondary dark:from-blinking-charcoal dark:to-black border-b border-border">
          <div className="absolute inset-0 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              className="max-w-3xl mx-auto text-center"
            >
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
                <span className="decorator-line relative inline-block mb-2 pr-4">Event</span> Packages
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transparent pricing designed for events of all sizes. Choose the right package for your special occasion and let us create unforgettable memories.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section className="py-20 bg-white dark:bg-blinking-charcoal">
          <div className="container mx-auto px-4">
            <motion.div 
              className="flex flex-col items-center mb-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-center mb-6">
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4 text-foreground">Event Services</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Select from our carefully crafted packages designed to meet the unique needs of events in Cameroon.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {/* Essential Package */}
              <motion.div variants={scaleIn} className="flex flex-col h-full">
                <Card className="border-2 border-border p-8 rounded-xl flex-grow flex flex-col h-full relative overflow-hidden">
                  <div className="mb-6 text-center">
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Essential</h3>
                    <div className="flex justify-center items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-foreground">150,000</span>
                      <span className="text-lg text-muted-foreground">XAF</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Perfect for intimate gatherings and small celebrations
                    </p>
                  </div>
                  
                  <Separator className="mb-6" />
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Up to 50 guests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Event planning and coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Basic venue selection assistance</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Standard decorations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Sound system setup</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground/50">Catering coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground/50">Photography services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground/50">VIP guest management</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </Card>
              </motion.div>
              
              {/* Premium Package */}
              <motion.div variants={scaleIn} className="flex flex-col h-full">
                <Card className="border-2 border-primary p-8 rounded-xl flex-grow flex flex-col h-full relative overflow-hidden shadow-lg">
                  <div className="absolute -right-10 -top-10 w-20 h-20 bg-primary/10 rounded-full" />
                  <div className="absolute -right-5 -top-5 w-10 h-10 bg-primary/20 rounded-full" />
                  
                  <div className="absolute top-0 right-0 bg-primary text-white text-sm font-medium px-3 py-1 rounded-bl-lg">
                    Popular
                  </div>
                  
                  <div className="mb-6 text-center">
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Premium</h3>
                    <div className="flex justify-center items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-foreground">450,000</span>
                      <span className="text-lg text-muted-foreground">XAF</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Ideal for medium to large weddings and corporate events
                    </p>
                  </div>
                  
                  <Separator className="mb-6" />
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Up to 150 guests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Comprehensive event planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Premium venue selection</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Custom themed decorations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Professional sound and lighting</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Catering coordination</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Photography services (4 hours)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-5 w-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground/50">VIP guest management</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </Card>
              </motion.div>
              
              {/* Luxury Package */}
              <motion.div variants={scaleIn} className="flex flex-col h-full">
                <Card className="border-2 border-accent p-8 rounded-xl flex-grow flex flex-col h-full relative overflow-hidden">
                  <div className="mb-6 text-center">
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Luxury</h3>
                    <div className="flex justify-center items-baseline gap-1 mb-6">
                      <span className="text-4xl font-bold text-foreground">1,200,000</span>
                      <span className="text-lg text-muted-foreground">XAF</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      For exclusive celebrations and high-profile events
                    </p>
                  </div>
                  
                  <Separator className="mb-6" />
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Up to 300 guests</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Full-service luxury planning</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Elite venue selection and booking</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Premium custom decorations</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Professional AV system with technician</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Premium catering services</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Full-day photography and video</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">VIP guest management</span>
                    </li>
                  </ul>
                  
                  <Button className="w-full" variant="outline" asChild>
                    <Link href="/contact">Get Started</Link>
                  </Button>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Specialized Services */}
        <section className="py-20 bg-secondary/50 dark:bg-blinking-charcoal/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Specialized Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Beyond our standard packages, we offer these specialized services that can be added to any package or purchased separately.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {/* Traditional Wedding Planning */}
              <motion.div variants={fadeIn} className="h-full">
                <Card className="h-full p-6 border-none shadow-md">
                  <div className="flex flex-col h-full">
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Traditional Wedding Planning</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Complete planning and coordination for traditional Cameroonian wedding ceremonies, including dowry negotiations.
                    </p>
                    <div className="flex items-baseline justify-between mb-6">
                      <div>
                        <span className="font-bold text-2xl text-foreground">350,000</span>
                        <span className="text-muted-foreground text-sm ml-1">XAF</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Base price</span>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
              
              {/* Corporate Event Management */}
              <motion.div variants={fadeIn} className="h-full">
                <Card className="h-full p-6 border-none shadow-md">
                  <div className="flex flex-col h-full">
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Corporate Event Management</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Full-service corporate event planning, including conferences, product launches, and executive retreats.
                    </p>
                    <div className="flex items-baseline justify-between mb-6">
                      <div>
                        <span className="font-bold text-2xl text-foreground">500,000</span>
                        <span className="text-muted-foreground text-sm ml-1">XAF</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Starting at</span>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
              
              {/* Cultural Festival Management */}
              <motion.div variants={fadeIn} className="h-full">
                <Card className="h-full p-6 border-none shadow-md">
                  <div className="flex flex-col h-full">
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Cultural Festival Management</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Planning and executing cultural festivals that showcase Cameroon's rich heritage and traditions.
                    </p>
                    <div className="flex items-baseline justify-between mb-6">
                      <div>
                        <span className="font-bold text-2xl text-foreground">800,000</span>
                        <span className="text-muted-foreground text-sm ml-1">XAF</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Per day</span>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
              
              {/* Destination Wedding Planning */}
              <motion.div variants={fadeIn} className="h-full">
                <Card className="h-full p-6 border-none shadow-md">
                  <div className="flex flex-col h-full">
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Destination Wedding Planning</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Planning services for weddings at Cameroon's most beautiful locations, from Limbe beaches to Kribi coastlines.
                    </p>
                    <div className="flex items-baseline justify-between mb-6">
                      <div>
                        <span className="font-bold text-2xl text-foreground">600,000</span>
                        <span className="text-muted-foreground text-sm ml-1">XAF</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Plus venue costs</span>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
              
              {/* Event Consultation */}
              <motion.div variants={fadeIn} className="h-full">
                <Card className="h-full p-6 border-none shadow-md">
                  <div className="flex flex-col h-full">
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Event Consultation</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Professional guidance for self-planned events, including vendor recommendations and timeline creation.
                    </p>
                    <div className="flex items-baseline justify-between mb-6">
                      <div>
                        <span className="font-bold text-2xl text-foreground">75,000</span>
                        <span className="text-muted-foreground text-sm ml-1">XAF</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Per session</span>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
              
              {/* Day-of Coordination */}
              <motion.div variants={fadeIn} className="h-full">
                <Card className="h-full p-6 border-none shadow-md">
                  <div className="flex flex-col h-full">
                    <h3 className="font-serif text-xl font-bold mb-2 text-foreground">Day-of Coordination</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">
                      Professional coordination on your event day to ensure everything runs smoothly without you having to worry.
                    </p>
                    <div className="flex items-baseline justify-between mb-6">
                      <div>
                        <span className="font-bold text-2xl text-foreground">200,000</span>
                        <span className="text-muted-foreground text-sm ml-1">XAF</span>
                      </div>
                      <span className="text-sm text-muted-foreground">Up to 8 hours</span>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href="/contact">Learn More</Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Add-on Services */}
        <section className="py-20 bg-white dark:bg-blinking-charcoal">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Additional Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Enhance your event with these à la carte services that can be added to any of our packages.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-4 px-4 font-serif text-lg font-bold text-foreground">Service</th>
                      <th className="text-left py-4 px-4 font-serif text-lg font-bold text-foreground">Description</th>
                      <th className="text-right py-4 px-4 font-serif text-lg font-bold text-foreground">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Photography</td>
                      <td className="py-4 px-4 text-muted-foreground">Professional event photography with digital delivery</td>
                      <td className="py-4 px-4 text-right">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="cursor-help">
                              <span className="font-medium mr-1">120,000 XAF</span>
                              <Info className="h-4 w-4 inline text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs w-48">
                                4 hours of coverage. Additional hours at 30,000 XAF per hour.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Videography</td>
                      <td className="py-4 px-4 text-muted-foreground">Professional video coverage with edited highlights</td>
                      <td className="py-4 px-4 text-right">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="cursor-help">
                              <span className="font-medium mr-1">180,000 XAF</span>
                              <Info className="h-4 w-4 inline text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs w-48">
                                4 hours of coverage with a 5-minute highlight reel. Additional hours at 45,000 XAF per hour.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Live Band</td>
                      <td className="py-4 px-4 text-muted-foreground">Local professional musicians performing live</td>
                      <td className="py-4 px-4 text-right font-medium">250,000 XAF</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">DJ Services</td>
                      <td className="py-4 px-4 text-muted-foreground">Professional DJ with sound system</td>
                      <td className="py-4 px-4 text-right font-medium">100,000 XAF</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Traditional Dancers</td>
                      <td className="py-4 px-4 text-muted-foreground">Authentic Cameroonian cultural dance performances</td>
                      <td className="py-4 px-4 text-right font-medium">150,000 XAF</td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Custom Decor</td>
                      <td className="py-4 px-4 text-muted-foreground">Personalized decorations beyond standard package</td>
                      <td className="py-4 px-4 text-right">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="cursor-help">
                              <span className="font-medium mr-1">Varies</span>
                              <Info className="h-4 w-4 inline text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs w-48">
                                Starting at 100,000 XAF depending on requirements and venue size.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Transportation</td>
                      <td className="py-4 px-4 text-muted-foreground">Luxury vehicle rentals for event day</td>
                      <td className="py-4 px-4 text-right">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="cursor-help">
                              <span className="font-medium mr-1">80,000 XAF</span>
                              <Info className="h-4 w-4 inline text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs w-48">
                                Per vehicle, per day. Includes driver and fuel.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </td>
                    </tr>
                    <tr className="border-b border-border">
                      <td className="py-4 px-4 font-medium">Guest Accommodation</td>
                      <td className="py-4 px-4 text-muted-foreground">Hotel booking and coordination for out-of-town guests</td>
                      <td className="py-4 px-4 text-right">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger className="cursor-help">
                              <span className="font-medium mr-1">50,000 XAF</span>
                              <Info className="h-4 w-4 inline text-muted-foreground" />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="text-xs w-48">
                                Service fee only. Hotel costs paid directly by guests or client.
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 px-4 font-medium">Security Services</td>
                      <td className="py-4 px-4 text-muted-foreground">Professional security personnel for event safety</td>
                      <td className="py-4 px-4 text-right font-medium">25,000 XAF per guard</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* FAQs */}
        <section className="py-20 bg-secondary/50 dark:bg-blinking-charcoal/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Frequently Asked Questions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get answers to common questions about our pricing, packages, and planning process.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-lg font-medium text-foreground">
                    Do your prices include venue costs?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    No, our package prices do not include venue rental costs. We assist with venue selection based on your budget and preferences, but the venue fees are paid directly to the venue. We do negotiate preferred rates at many locations across Cameroon.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-lg font-medium text-foreground">
                    What is the payment schedule?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We require a 50% deposit to secure your event date and begin planning. The remaining balance is due 14 days before the event date. For luxury packages, we offer an optional installment plan with three payments.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-lg font-medium text-foreground">
                    Can I customize my package?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Absolutely! Our packages are designed as starting points. We can add or remove services to create a custom package that perfectly matches your needs and budget. Just let us know your specific requirements during your consultation.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-lg font-medium text-foreground">
                    Are there additional costs I should be aware of?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    Potential additional costs include vendor travel fees for events outside major cities, overtime fees for services extending beyond scheduled hours, and any last-minute additions or changes. We're transparent about all costs and will provide a detailed breakdown before you commit.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-lg font-medium text-foreground">
                    What forms of payment do you accept?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    We accept mobile money transfers (MTN Mobile Money and Orange Money), bank transfers to our Cameroon-based accounts, and cash payments at our office. For international clients, we can arrange secure international transfers or PayPal payments.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger className="text-lg font-medium text-foreground">
                    How far in advance should I book?
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    For optimal planning and venue availability, we recommend booking 6-9 months in advance for large events like weddings, and 3-6 months for smaller events. However, we do accommodate last-minute bookings when possible, subject to availability.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </div>
        </section>
        
        {/* CTA Banner */}
        <CTABanner />
      </main>
      
      <Footer />
    </div>
  )
}
