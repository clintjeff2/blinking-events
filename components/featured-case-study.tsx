"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Users, MapPin, Award } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "@/lib/motion"

export function FeaturedCaseStudy() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section 
      ref={sectionRef}
      className="py-28 bg-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 -mr-64 -mt-32 w-[800px] h-[800px] bg-[#F5F5F7] rounded-full blur-3xl"
        animate={isInView ? { opacity: [0, 0.4, 0.3] } : { opacity: 0 }}
        transition={{ duration: 3 }}
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative z-10 overflow-hidden rounded-2xl shadow-2xl">
              <img 
                src="/elegant-african-wedding.png" 
                alt="Elegant Wedding at Mountainview Hotel" 
                className="w-full h-auto object-cover"
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
              
              {/* Bottom text */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex justify-between items-center mb-2">
                  <span className="bg-primary/80 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full">
                    Wedding Event
                  </span>
                  <span className="text-sm opacity-80">August 2025</span>
                </div>
                <h3 className="text-xl md:text-2xl font-semibold font-serif">Elegant Wedding at Mountainview Hotel</h3>
              </div>
            </div>
            
            {/* Decorative elements */}
            <motion.div 
              className="absolute -bottom-8 -left-8 w-64 h-64 border-2 border-accent/30 rounded-2xl -z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            />
            
            <motion.div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-accent/10 backdrop-blur-sm rounded-full px-6 py-6 shadow-xl border border-white/20 text-primary font-bold text-xl z-20"
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
              transition={{ 
                delay: 0.6, 
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ scale: 1.05 }}
            >
              FEATURED
            </motion.div>
          </motion.div>
          
          {/* Right column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              className="text-primary font-medium text-sm uppercase tracking-wider mb-3 inline-block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Featured Case Study
            </motion.span>
            
            <motion.h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              A <span className="text-primary">Dream Wedding</span> in Buea's Premier Venue
            </motion.h2>
            
            <motion.p 
              className="text-muted-foreground text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              When Michelle and Tambe approached us to plan their luxury wedding at Mountainview Hotel, 
              we created a bespoke experience blending traditional elements with contemporary elegance. 
              Our team coordinated everything from custom decor to VIP guest logistics, resulting in a 
              seamless celebration that guests are still talking about.
            </motion.p>
            
            {/* Stats */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {[
                { icon: Calendar, value: "1 Day", label: "Planning" },
                { icon: Users, value: "350", label: "Guests" },
                { icon: MapPin, value: "Buea", label: "Location" },
                { icon: Award, value: "Premium", label: "Service" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="bg-secondary/50 p-3 rounded-full mb-3">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-bold text-lg">{stat.value}</div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
            
            {/* Quote */}
            <motion.div 
              className="bg-[#F8F9FA] border border-gray-100 rounded-xl p-6 mb-8 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="text-accent text-6xl font-serif absolute -top-5 -left-2 opacity-20">"</div>
              <p className="text-muted-foreground italic relative z-10">
                "Blinking Events turned our dream wedding into reality. Every detail was perfect,
                from the stunning decor to the impeccable service. Our guests were amazed by the 
                elegance and organization. We couldn't have asked for better partners in planning 
                the most important day of our lives."
              </p>
              <div className="flex items-center mt-4">
                <div className="font-semibold">Michelle & Tambe</div>
                <div className="w-1 h-1 rounded-full bg-muted-foreground/30 mx-2"></div>
                <div className="text-sm text-muted-foreground">Newlyweds</div>
              </div>
            </motion.div>
            
            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <Button 
                size="lg" 
                className="rounded-full px-8 bg-primary hover:bg-primary/90"
                asChild
              >
                <Link href="/portfolio">
                  View More Case Studies
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
