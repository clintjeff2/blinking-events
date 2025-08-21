"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView } from "@/lib/motion"
import { Users, Calendar, Award, MapPin, Star } from "lucide-react"

interface StatItemProps {
  number: number
  label: string
  suffix?: string
  icon: React.ElementType
  delay?: number
}

function StatItem({ number, label, suffix = "", icon: Icon, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      const duration = 1500 // Animation duration in ms
      const startTime = Date.now() + (delay * 1000)
      
      const timer = setInterval(() => {
        const now = Date.now()
        if (now < startTime) return
        
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function - ease out cubic
        const easeProgress = 1 - Math.pow(1 - progress, 3)
        
        setCount(Math.floor(easeProgress * number))
        
        if (progress === 1) {
          clearInterval(timer)
        }
      }, 16) // ~60fps
      
      return () => clearInterval(timer)
    }
  }, [isInView, number, delay])

  return (
    <motion.div 
      ref={ref} 
      className="relative p-6 bg-white rounded-xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 + delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-primary text-white p-2 rounded-full shadow-lg transform transition-transform group-hover:scale-110">
        <Icon className="h-5 w-5" />
      </div>
      
      <div className="text-center py-4">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-serif mb-1 flex items-center justify-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 + delay }}
          >
            {count.toLocaleString()}
            <span className="text-accent">{suffix}</span>
          </motion.span>
        </div>
        
        <div className="text-sm md:text-base text-muted-foreground mt-2 font-medium uppercase tracking-wide">
          {label}
        </div>
      </div>
      
      <motion.div 
        className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20"
        initial={{ width: "0%" }}
        animate={isInView ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 1.2, delay: 0.2 + delay, ease: [0.16, 1, 0.3, 1] }}
      />
    </motion.div>
  )
}

export function StatsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden" ref={sectionRef}>
      <motion.div 
        className="absolute top-0 right-0 -mr-32 -mt-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={isInView ? { 
          opacity: [0, 0.7, 0.5],
          scale: [0.8, 1.2, 1],
        } : {}}
        transition={{ 
          duration: 3,
          ease: "easeInOut",
          times: [0, 0.5, 1],
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 left-0 -ml-32 -mb-32 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
        animate={isInView ? { 
          opacity: [0, 0.7, 0.5],
          scale: [0.8, 1.2, 1],
        } : {}}
        transition={{ 
          duration: 3,
          ease: "easeInOut",
          delay: 0.3,
          times: [0, 0.5, 1],
        }}
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 inline-block">Our Impact</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
            Making Memorable <span className="text-primary">Moments</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            The numbers tell our story of excellence, trust, and success across Littoral & Southwest regions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          <StatItem 
            number={3500} 
            label="Guests Hosted This Year" 
            suffix="+" 
            icon={Users}
            delay={0.1} 
          />
          <StatItem 
            number={450} 
            label="Events Planned & Staffed" 
            suffix="+" 
            icon={Calendar}
            delay={0.2} 
          />
          <StatItem 
            number={150} 
            label="Professional Staff" 
            suffix="+" 
            icon={Star}
            delay={0.3} 
          />
          <StatItem 
            number={10} 
            label="Years of Excellence" 
            suffix="+" 
            icon={Award}
            delay={0.4} 
          />
        </div>
        
        <div className="mt-16 text-center">
          <motion.div
            className="inline-flex items-center space-x-2 text-primary font-medium px-6 py-3 border-2 border-primary/30 rounded-full hover:bg-primary/5 transition-colors cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <MapPin className="h-5 w-5" />
            <span>Serving Littoral & Southwest — Limbe • Buea • Douala</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
