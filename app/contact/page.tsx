"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { motion } from "@/lib/motion"
import { LocationMap } from "@/components/location-map"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter,
  Calendar, 
  MessageSquare, 
  CheckCircle2
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  
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
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, this would send the form data to a backend
    setFormSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false)
      const form = e.target as HTMLFormElement
      form.reset()
    }, 3000)
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
                <span className="decorator-line relative inline-block mb-2 pr-4">Get in</span> Touch
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Have a question about our services or ready to plan your next unforgettable event in Cameroon? Our team is here to help turn your vision into reality.
              </p>
            </motion.div>
          </div>
        </section>
        
        {/* Interactive Location Map */}
        <section className="py-12 bg-gradient-to-b from-secondary/20 to-white dark:from-blinking-charcoal/80 dark:to-blinking-charcoal">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <h2 className="font-serif text-3xl font-bold mb-3 text-foreground">Our Locations</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Find us in Cameroon's most vibrant cities. Our dedicated team is ready to help you create an unforgettable event experience.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden"
            >
              <LocationMap 
                height="550px"
                locations={[
                  {
                    id: "buea-office",
                    name: "Blinking Events Main Office",
                    description: "Our headquarters in Buea",
                    lat: 4.1538,  // Approximate coordinates for Buea
                    lng: 9.2920,
                    address: "Molyko Main Road, Opposite University of Buea, Buea",
                    phone: "+237 80 117 410",
                    type: "office"
                  },
                  {
                    id: "limbe-office",
                    name: "Limbe Branch Office",
                    description: "Our coastal city location",
                    lat: 4.0225,  // Approximate coordinates for Limbe
                    lng: 9.2010,
                    address: "Down Beach Road, Limbe",
                    phone: "+237 80 117 410",
                    type: "office"
                  },
                  {
                    id: "douala-office",
                    name: "Douala Liaison Office",
                    description: "Our economic capital presence",
                    lat: 4.0511,  // Approximate coordinates for Douala
                    lng: 9.7679,
                    address: "Bonanjo, Near Port Authority, Douala",
                    phone: "+237 80 117 410",
                    type: "office"
                  }
                ]}
                initialViewState={{
                  latitude: 4.0917,  // Center between all three cities
                  longitude: 9.2400,
                  zoom: 9
                }}
              />
            </motion.div>
          </div>
        </section>
        
        {/* Contact Details & Form Section */}
        <section className="py-20 bg-white dark:bg-blinking-charcoal">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Contact Information</h2>
                
                <div className="space-y-8">
                  {/* Office Location */}
                  <Card className="p-6 border-none shadow-md bg-secondary/50 dark:bg-blinking-charcoal/50">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Main Office</h3>
                        <p className="text-muted-foreground mb-1">Molyko Main Road</p>
                        <p className="text-muted-foreground mb-1">Opposite University of Buea</p>
                        <p className="text-muted-foreground mb-1">Buea, Southwest Region</p>
                        <p className="text-muted-foreground">Cameroon</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Phone */}
                  <Card className="p-6 border-none shadow-md bg-secondary/50 dark:bg-blinking-charcoal/50">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Phone</h3>
                        <p className="text-muted-foreground mb-1">Call or WhatsApp</p>
                        <p className="text-foreground font-medium">+237 80 117 410</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Email */}
                  <Card className="p-6 border-none shadow-md bg-secondary/50 dark:bg-blinking-charcoal/50">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Email</h3>
                        <p className="text-muted-foreground mb-1">For inquiries and bookings</p>
                        <p className="text-foreground font-medium">events@blinking.cm</p>
                      </div>
                    </div>
                  </Card>
                  
                  {/* Business Hours */}
                  <Card className="p-6 border-none shadow-md bg-secondary/50 dark:bg-blinking-charcoal/50">
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-serif font-bold text-lg mb-2 text-foreground">Business Hours</h3>
                        <p className="text-muted-foreground mb-1">Monday to Friday: 8:00 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </Card>
                </div>
                
                <div className="mt-12">
                  <h3 className="font-serif text-xl font-bold mb-4 text-foreground">Follow Us</h3>
                  <div className="flex gap-4">
                    <a href="https://facebook.com/BlinkingEntertainment" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5 text-primary" />
                    </a>
                    <a href="https://instagram.com/blinking_events" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                    </a>
                    <a href="https://twitter.com/blink002" target="_blank" rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5 text-primary" />
                    </a>
                  </div>
                </div>
              </motion.div>
              
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-serif text-3xl font-bold mb-8 text-foreground">Send Us a Message</h2>
                
                <Card className="p-8 border-none shadow-lg">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center text-center py-8"
                    >
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-serif text-2xl font-bold mb-2 text-foreground">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        Thank you for reaching out. We'll get back to you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input id="name" placeholder="Your name" required />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="Your email" required />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input id="phone" placeholder="Your phone number" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="eventType">Event Type</Label>
                          <select
                            id="eventType"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="">Select event type</option>
                            <option value="wedding">Wedding</option>
                            <option value="corporate">Corporate Event</option>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                            <option value="conference">Conference</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea id="message" placeholder="Tell us about your event or inquiry" rows={5} required />
                      </div>
                      
                      <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                        Send Message
                      </Button>
                    </form>
                  )}
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Quick Contact Options */}
        <section className="py-20 bg-secondary/50 dark:bg-blinking-charcoal/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Quick Options</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Looking for something specific? Choose from these quick contact options to get the help you need.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Option 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <Card className="p-6 border-none shadow-md h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Book a Consultation</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Schedule a free 30-minute consultation with one of our expert event planners to discuss your needs.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <Link href="tel:+23780117410">Call to Schedule</Link>
                  </Button>
                </Card>
              </motion.div>
              
              {/* Option 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="p-6 border-none shadow-md h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground">WhatsApp Support</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Chat directly with our customer service team via WhatsApp for quick responses to your questions.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <a href="https://wa.me/23780117410" target="_blank" rel="noopener noreferrer">
                      Open WhatsApp
                    </a>
                  </Button>
                </Card>
              </motion.div>
              
              {/* Option 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Card className="p-6 border-none shadow-md h-full flex flex-col">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Request a Proposal</h3>
                  <p className="text-muted-foreground mb-6 flex-grow">
                    Know exactly what you need? Request a detailed proposal for your upcoming event.
                  </p>
                  <Button asChild variant="outline" className="mt-auto">
                    <a href="mailto:events@blinking.cm?subject=Event Proposal Request">
                      Email Request
                    </a>
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="bg-white dark:bg-blinking-charcoal py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-10"
            >
              <h2 className="font-serif text-3xl font-bold mb-6 text-foreground">Find Us</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Visit our office in Buea, just opposite the University of Buea entrance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              {/* Embed a map here - this is a placeholder for an actual map */}
              <div className="aspect-[16/9] relative bg-secondary/50 dark:bg-blinking-charcoal/50 flex items-center justify-center">
                <div className="text-center p-4">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-medium text-foreground">
                    Molyko Main Road, Opposite University of Buea
                  </p>
                  <p className="text-muted-foreground">
                    Buea, Southwest Region, Cameroon
                  </p>
                  <Button className="mt-4" asChild>
                    <a href="https://maps.google.com/?q=University+of+Buea,+Buea+Cameroon" target="_blank" rel="noopener noreferrer">
                      View on Google Maps
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
