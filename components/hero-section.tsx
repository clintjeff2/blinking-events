"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Play, MessageCircle, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    // Simulate video loading
    const timer = setTimeout(() => setIsVideoLoaded(true), 1000)
    
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll)
    
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Split headline text for letter animation
  const headlineWords = ["Cameroon's", "Premier", "Events", "Company"]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Parallax Effect */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollPosition * 0.5}px)`,
          transition: "transform 0.1s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
      >
        {/* Video element - hidden on mobile, shown on larger screens */}
        <div className="hidden md:block absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline
            className={`w-full h-full object-cover transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-100' : 'opacity-0'}`}
            poster="/elegant-african-celebration.png"
            onCanPlay={() => setIsVideoLoaded(true)}
          >
            <source src="/hero-video-placeholder.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Image fallback for mobile */}
        <div 
          className="w-full h-full bg-gradient-to-br from-[#E1262C] via-[#1D1D1F] to-[#E1262C] opacity-90 md:hidden"
          style={{
            backgroundImage: `url('/elegant-african-celebration.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/40" />
        
        {/* Decorative red diagonal line */}
        <div className="absolute top-0 bottom-0 left-[15%] w-[1px] bg-primary/20 transform rotate-6 hidden lg:block" />
        <div className="absolute top-0 bottom-0 right-[25%] w-[1px] bg-primary/20 transform -rotate-6 hidden lg:block" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white space-y-8 px-4 py-32 max-w-6xl mx-auto">
        <motion.div 
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <motion.h1 
            className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight"
          >
            {headlineWords.map((word, i) => (
              <motion.span 
                key={i} 
                className="inline-block mr-4 lg:mr-6 text-shadow-md"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + i * 0.15 
                }}
              >
                {word === "Events" ? <span className="luxury-text font-bold">{word}</span> : word}
              </motion.span>
            ))}
          </motion.h1>
          
          <motion.p
            className="text-2xl md:text-3xl font-light text-white/90 tracking-wide"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            Limbe, Buea & Beyond
          </motion.p>
          
          <motion.p
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
          >
            From concept to applause, we plan, produce, and staff unforgettable events that leave lasting impressions.
          </motion.p>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-sm md:text-base text-white/75"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 hidden md:inline-block"></span>
            Trusted by leading brands in Littoral & Southwest
          </span>
          <span className="hidden md:inline-block">•</span>
          <span className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 hidden md:inline-block"></span>
            10+ Years of Excellence
          </span>
          <span className="hidden md:inline-block">•</span>
          <span className="flex items-center">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mr-2 hidden md:inline-block"></span>
            3,500+ Guests Hosted This Year
          </span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 rounded-md"
            asChild
          >
            <Link href="/contact">
              Get a Quote
            </Link>
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-white/80 text-white hover:bg-white hover:text-black px-8 py-6 text-lg bg-transparent/20 backdrop-blur-sm transition-all duration-300 rounded-md"
            asChild
          >
            <Link href="https://wa.me/237" target="_blank">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp
            </Link>
          </Button>
          
          <Button 
            variant="ghost" 
            size="lg" 
            className="text-white hover:bg-white/10 px-8 py-6 text-lg transition-all duration-300 rounded-md" 
            asChild
          >
            <Link href="/portfolio">
              <Play className="mr-2 h-5 w-5" />
              View Portfolio
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col items-center">
          <span className="text-white/60 text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="h-6 w-6 text-white animate-bounce" />
        </div>
      </motion.div>
      
      {/* Decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
    </section>
  )
}
