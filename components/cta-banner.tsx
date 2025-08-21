"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, Calendar, Star, Sparkles, ChevronRight } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "@/lib/motion"

export function CTABanner() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  return (
    <section 
      ref={sectionRef}
      className="py-28 bg-gradient-to-br from-[#E1262C] via-[#c82426] to-[#1D1D1F] text-white relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div 
        className="absolute inset-0 bg-[url('/elegant-african-celebration.png')] bg-cover bg-center opacity-10 mix-blend-overlay"
        style={{ backgroundSize: '150%' }}
      />
      
      <motion.div 
        className="absolute -left-32 -top-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        animate={isInView ? { 
          opacity: [0.3, 0.15, 0.3],
          scale: [1, 1.2, 1],
        } : {}}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute -right-32 -bottom-32 w-96 h-96 bg-[#C8A64B]/10 rounded-full blur-3xl"
        animate={isInView ? { 
          opacity: [0.2, 0.4, 0.2],
          scale: [1.2, 1, 1.2],
        } : {}}
        transition={{ 
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-12 max-w-4xl mx-auto">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center justify-center space-x-2 mb-1"
            >
              <Sparkles className="h-5 w-5 text-[#C8A64B]" />
              <span className="uppercase tracking-widest text-sm font-medium text-[#C8A64B]">Premium Service</span>
              <Sparkles className="h-5 w-5 text-[#C8A64B]" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Ready to Create <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-[#C8A64B]">Unforgettable</span> Moments?
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed"
            >
              Let's create something extraordinary together. Our team of event experts is ready to bring your vision to life with unmatched elegance and precision.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center space-x-1"
            >
              {[1, 2, 3, 4, 5].map((star, i) => (
                <motion.div
                  key={star}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (i * 0.1) }}
                >
                  <Star className="h-5 w-5 text-[#C8A64B] fill-[#C8A64B]" />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-sm font-medium text-white/80"
            >
              Rated 5/5 by our clients across Littoral & Southwest regions
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                className="bg-white text-[#E1262C] hover:bg-white/90 px-8 py-6 text-lg font-semibold rounded-full shadow-lg shadow-black/20"
                asChild
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Get a Free Quote
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg bg-transparent rounded-full shadow-lg shadow-black/10"
                asChild
              >
                <Link href="tel:+23780117410">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us 24/7
                </Link>
              </Button>
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button 
                size="lg" 
                variant="ghost" 
                className="text-white hover:bg-white/10 px-8 py-6 text-lg border border-white/30 rounded-full" 
                asChild
              >
                <Link href="https://wa.me/237" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp Chat
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="pt-10 border-t border-white/20 max-w-2xl mx-auto"
          >
            <div className="bg-black/30 backdrop-blur-sm px-6 py-4 rounded-2xl inline-block">
              <p className="text-[#C8A64B] font-semibold text-lg flex items-center justify-center">
                <span className="relative pulse-dot mr-2"></span>
                Blinking Answer 24/7 — We're always on
              </p>
              <p className="text-sm opacity-80 mt-2">
                Proudly serving Littoral • Southwest • Limbe • Buea • Douala
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Add some stylish decorative elements at the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      
      <style jsx>{`
        .pulse-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: #C8A64B;
          display: inline-block;
        }
        
        .pulse-dot::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: #C8A64B;
          border-radius: 50%;
          opacity: 0.7;
          z-index: -1;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }
          70% {
            transform: scale(2);
            opacity: 0;
          }
          100% {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
