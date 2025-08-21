"use client"

import React, { useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "@/lib/motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  ArrowRight, 
  Calendar, 
  Heart, 
  Users, 
  Shield, 
  ChefHat, 
  Camera, 
  Mic, 
  Package,
  Palette
} from "lucide-react"
import Image from "next/image"

const services = [
  {
    icon: Calendar,
    title: "Event Planning & Coordination",
    description: "Seamless end-to-end management for flawless execution.",
    image: "/elegant-african-celebration.png",
    href: "/services/event-planning",
    featured: true,
  },
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Your love story, beautifully staged and perfectly executed.",
    image: "/elegant-african-wedding.png",
    href: "/services/wedding-planning",
    featured: true,
  },
  {
    icon: Users,
    title: "Hostess Services",
    description: "Elegant, trained, and guest-focused professional hostesses.",
    image: "/professional-african-hostesses.png",
    href: "/services/hostesses",
  },
  {
    icon: Shield,
    title: "Security Services",
    description: "Discreet, professional, and reliable event security.",
    image: "/placeholder-w1z5t.png",
    href: "/services/security",
  },
  {
    icon: ChefHat,
    title: "Catering & Blinking Kitchen",
    description: "Delicious menus, cakes, and authentic local cuisine.",
    image: "/placeholder-6nl0q.png",
    href: "/services/catering",
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Cinematic coverage that captures every precious moment.",
    image: "/african-wedding-photographer.png",
    href: "/services/photo-video",
  },
]

export function ServicesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  return (
    <section className="py-24 bg-[#F8F9FA]" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 inline-block">Our Expertise</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Premium Services for <span className="text-primary">Premium Events</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From intimate ceremonies to grand celebrations across Limbe, Buea & Cameroon, we deliver excellence in every detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ 
                duration: 0.6, 
                delay: 0.1 * index,
                ease: [0.16, 1, 0.3, 1]
              }}
            >
              <Card
                className={`group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 overflow-hidden h-full 
                  ${service.featured ? 'border-2 border-primary/20 shadow-xl' : 'border-0 shadow-lg'}`}
              >
                <div className="relative h-52 overflow-hidden">
                  <div
                    className="w-full h-full bg-gradient-to-br from-primary/20 to-black/20 group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundImage: `url('${service.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 group-hover:from-black/50 transition-colors duration-300" />
                  
                  {service.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="absolute top-4 left-4 z-10">
                    <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center shadow-md group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <service.icon className="h-6 w-6 transition-colors duration-300" />
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6 flex flex-col h-[calc(100%-13rem)]">
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{service.description}</p>
                  
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-primary font-medium group/link"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button 
            size="lg" 
            asChild
            className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 px-8 py-6 text-lg h-auto"
          >
            <Link href="/services">
              <span className="flex items-center">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </span>
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
    </section>
  )
}
