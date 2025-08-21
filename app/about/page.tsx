"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { CTABanner } from "@/components/cta-banner"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Users, Award, Medal, HeartHandshake, Sparkles } from "lucide-react"

export default function AboutPage() {
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
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 lg:py-36 bg-gradient-to-r from-slate-50 to-secondary dark:from-blinking-charcoal dark:to-black border-b border-border">
          <div className="absolute inset-0 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-accent/5 rounded-full blur-3xl" />
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <motion.div 
                className="order-2 lg:order-1"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
              >
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground mb-6">
                  <span className="decorator-line relative inline-block mb-2 pr-4">About</span> Blinking Events
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Cameroon's premier event planning company, delivering exceptional experiences with local expertise and international standards since 2018.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="bg-primary hover:bg-primary/90" asChild>
                    <Link href="/contact">Get in Touch</Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-2" asChild>
                    <Link href="/portfolio">View Our Work</Link>
                  </Button>
                </div>
              </motion.div>
              
              <motion.div 
                className="order-1 lg:order-2"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 blur-lg opacity-70 dark:opacity-30" />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
                    <Image 
                      src="/smiling-african-businesswoman.png" 
                      alt="Blinking Events Team" 
                      width={600} 
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white dark:bg-blinking-charcoal shadow-lg rounded-lg p-4 flex items-center gap-3">
                    <div className="bg-primary/10 rounded-full p-2">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">Award-winning</p>
                      <p className="text-xs text-muted-foreground">Southwest Excellence Awards 2023</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 bg-white dark:bg-blinking-charcoal">
          <div className="container mx-auto px-4">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2018 in the picturesque city of Limbe, Blinking Events has evolved from a small team with big dreams to Cameroon's most sought-after event planning company.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-accent/20 to-primary/20 blur-lg opacity-50 dark:opacity-20" />
                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
                    <Image 
                      src="/african-corporate-event.png" 
                      alt="Early days of Blinking Events" 
                      width={600} 
                      height={450}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="absolute -top-6 -left-6 bg-white dark:bg-blinking-charcoal shadow-lg rounded-lg p-4">
                    <p className="font-serif text-lg font-bold">Est. 2018</p>
                    <p className="text-xs text-muted-foreground">Limbe, Cameroon</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Humble Beginnings</h3>
                  <p className="text-muted-foreground">
                    Our journey began with a small team passionate about creating memorable events that reflect the rich cultural diversity of Cameroon. Starting with weddings in Limbe and corporate gatherings in Douala, we quickly established our reputation for meticulous planning and flawless execution.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Growing Nationwide</h3>
                  <p className="text-muted-foreground">
                    As word spread of our unique approach and attention to detail, we expanded our services across the Southwest and Littoral regions. Today, we're proud to serve clients throughout Cameroon, bringing our signature blend of creativity, professionalism, and warm Cameroonian hospitality to every event.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground">
                    We aim to be the defining voice in Cameroon's event industry, showcasing the country's rich cultural heritage while meeting international standards. Our goal is to put Cameroon on the map as a premier destination for exceptional events and unforgettable experiences.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-20 bg-secondary/50 dark:bg-blinking-charcoal/50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These core principles guide everything we do at Blinking Events, from how we treat our team members to how we create unforgettable experiences for our clients.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {/* Excellence */}
              <motion.div 
                variants={fadeIn}
                className="bg-white dark:bg-blinking-charcoal rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Medal className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We hold ourselves to the highest standards in every aspect of our work, constantly striving to exceed expectations.
                </p>
              </motion.div>
              
              {/* Integrity */}
              <motion.div 
                variants={fadeIn}
                className="bg-white dark:bg-blinking-charcoal rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <HeartHandshake className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Integrity</h3>
                <p className="text-muted-foreground">
                  Transparency, honesty, and ethical conduct form the foundation of our relationships with clients, partners, and team members.
                </p>
              </motion.div>
              
              {/* Innovation */}
              <motion.div 
                variants={fadeIn}
                className="bg-white dark:bg-blinking-charcoal rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously seek fresh ideas and creative solutions, blending Cameroonian traditions with contemporary event design.
                </p>
              </motion.div>
              
              {/* Hospitality */}
              <motion.div 
                variants={fadeIn}
                className="bg-white dark:bg-blinking-charcoal rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-bold mb-3 text-foreground">Hospitality</h3>
                <p className="text-muted-foreground">
                  We embody the warm, welcoming spirit that Cameroon is known for, ensuring every guest feels valued and cared for.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-20 bg-white dark:bg-blinking-charcoal">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-foreground">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our diverse and talented team combines creativity, expertise, and a passion for events to create unforgettable experiences for our clients.
              </p>
            </motion.div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {/* Team Member 1 */}
              <motion.div 
                variants={fadeIn}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="aspect-[3/4]">
                    <Image 
                      src="/confident-african-businesswoman.png" 
                      alt="Lesley Tambe - CEO & Lead Event Strategist" 
                      width={300} 
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm">
                        10+ years of experience in luxury events across Africa
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">Lesley Tambe</h3>
                <p className="text-sm text-primary">CEO & Lead Event Strategist</p>
              </motion.div>
              
              {/* Team Member 2 */}
              <motion.div 
                variants={fadeIn}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="aspect-[3/4]">
                    <Image 
                      src="/placeholder-user.jpg" 
                      alt="Daniel Njie - Creative Director" 
                      width={300} 
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm">
                        Former interior designer with a flair for transformative event spaces
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">Daniel Njie</h3>
                <p className="text-sm text-primary">Creative Director</p>
              </motion.div>
              
              {/* Team Member 3 */}
              <motion.div 
                variants={fadeIn}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="aspect-[3/4]">
                    <Image 
                      src="/placeholder-user.jpg" 
                      alt="Marie-Claire Etonde - Hospitality Manager" 
                      width={300} 
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm">
                        Culinary arts graduate with expertise in Cameroonian and international cuisine
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">Marie-Claire Etonde</h3>
                <p className="text-sm text-primary">Hospitality Manager</p>
              </motion.div>
              
              {/* Team Member 4 */}
              <motion.div 
                variants={fadeIn}
                className="group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="aspect-[3/4]">
                    <Image 
                      src="/placeholder-user.jpg" 
                      alt="Joseph Mbarga - Operations Director" 
                      width={300} 
                      height={400}
                      className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 text-white">
                      <p className="text-sm">
                        Former military logistics expert who ensures flawless event execution
                      </p>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-lg font-bold text-foreground">Joseph Mbarga</h3>
                <p className="text-sm text-primary">Operations Director</p>
              </motion.div>
            </motion.div>
            
            <div className="text-center mt-12">
              <Button asChild>
                <Link href="/contact">Join Our Team</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Key Facts */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Blinking By Numbers</h2>
              <p className="text-lg opacity-90 max-w-3xl mx-auto">
                Our journey so far, measured in satisfied clients, unforgettable events, and meaningful impact.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-serif font-bold mb-2">500+</p>
                <p className="text-lg opacity-90">Events Completed</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-serif font-bold mb-2">20K+</p>
                <p className="text-lg opacity-90">Guests Served</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-serif font-bold mb-2">8</p>
                <p className="text-lg opacity-90">Cities</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center"
              >
                <p className="text-5xl md:text-6xl font-serif font-bold mb-2">98%</p>
                <p className="text-lg opacity-90">Satisfaction Rate</p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Banner */}
        <CTABanner />
      </main>
      
      <Footer />
    </div>
  )
}
