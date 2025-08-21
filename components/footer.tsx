"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, useInView } from "@/lib/motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Youtube, ArrowRight, Send, CheckCircle2 } from "lucide-react"

const services = [
  { name: "Event Planning", href: "/services/event-planning" },
  { name: "Wedding Planning", href: "/services/wedding-planning" },
  { name: "Corporate Events", href: "/services/corporate" },
  { name: "Hostess Services", href: "/services/hostesses" },
  { name: "Security Services", href: "/services/security" },
  { name: "Catering Services", href: "/services/catering" },
]

const locations = ["Limbe", "Buea", "Douala", "Littoral Region", "Southwest Region"]

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
  delay?: number;
}

const FooterLink = ({ href, children, delay = 0 }: FooterLinkProps) => (
  <motion.li
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay }}
  >
    <Link 
      href={href} 
      className="text-gray-300 hover:text-white text-sm transition-colors flex items-center group"
    >
      <span className="relative overflow-hidden">
        <span className="inline-block transition-transform duration-500 ease-out group-hover:translate-x-2">
          {children}
        </span>
        <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-accent group-hover:w-full transition-all duration-300"></span>
      </span>
      <ArrowRight className="h-3 w-0 ml-0 text-accent opacity-0 group-hover:opacity-100 group-hover:w-3 group-hover:ml-1.5 transition-all duration-300" />
    </Link>
  </motion.li>
)

export function Footer() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)
  const footerRef = useRef(null)
  const isInView = useInView(footerRef, { once: true, margin: "-100px" })
  
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (email.trim() !== "") {
      // Here you would typically send this to your API
      setIsSubscribed(true)
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail("")
      }, 3000)
    }
  }

  return (
    <footer className="bg-[#1D1D1F] text-white relative overflow-hidden" ref={footerRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E1262C]/80 via-[#C8A64B]/80 to-[#E1262C]/80"></div>
      
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-accent/5 rounded-full blur-[100px]"></div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-12 relative z-10">
        {/* Newsletter section */}
        <motion.div 
          className="bg-[#242426] rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden shadow-2xl border border-gray-800"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent/10 rounded-full blur-3xl"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <motion.h3 
                className="text-3xl font-bold mb-4 font-serif"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Get <span className="text-primary">Exclusive Updates</span> for Your Events
              </motion.h3>
              <motion.p 
                className="text-gray-300 mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Join our newsletter to receive invitations to exclusive events, seasonal promotions, 
                and expert tips for your next celebration.
              </motion.p>
            </div>
            
            <motion.form 
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="relative w-full">
                <Input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#1D1D1F]/60 border-gray-700 w-full py-6 px-4 rounded-lg focus:border-accent focus:ring-accent"
                  required
                  disabled={isSubscribed}
                />
                {isSubscribed && (
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center bg-[#1D1D1F]/95 rounded-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.div 
                      className="flex items-center text-accent"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        type: "spring", 
                        stiffness: 200, 
                        damping: 10 
                      }}
                    >
                      <CheckCircle2 className="mr-2" /> Subscribed!
                    </motion.div>
                  </motion.div>
                )}
              </div>
              
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  type="submit" 
                  disabled={isSubscribed}
                  className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto py-6 px-8"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 xl:gap-12">
          {/* Company Info */}
          <motion.div 
            className="space-y-6 lg:col-span-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link href="/" className="inline-block">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-white font-bold text-lg">B</span>
                </div>
                <span className="font-serif text-2xl font-bold">Blinking Events</span>
              </div>
            </Link>
            
            <p className="text-gray-300 leading-relaxed">
              Cameroon's premier event company, proudly serving Limbe, Buea, Douala, and the wider 
              Littoral and Southwest regions with excellence in event planning and execution.
            </p>
            
            <div className="pt-2">
              <p className="text-[#C8A64B] text-sm font-semibold tracking-wide uppercase mb-3">Follow us</p>
              <div className="flex space-x-3">
                {[
                  { icon: Facebook, label: "Facebook" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Twitter, label: "Twitter" },
                  { icon: Youtube, label: "YouTube" }
                ].map((social, i) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ 
                      scale: 1.1,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.4 + (i * 0.1) }}
                  >
                    <Button 
                      variant="outline" 
                      size="icon"
                      className="rounded-full border-gray-700 bg-[#242426] hover:bg-accent hover:text-white hover:border-accent"
                    >
                      <social.icon className="h-4 w-4" />
                      <span className="sr-only">{social.label}</span>
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-5 font-serif">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, i) => (
                <FooterLink key={service.name} href={service.href} delay={0.3 + (i * 0.05)}>
                  {service.name}
                </FooterLink>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-5 font-serif">We Serve</h3>
            <ul className="space-y-3">
              {locations.map((location, i) => (
                <motion.li 
                  key={location} 
                  className="text-gray-300 text-sm flex items-center"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 + (i * 0.05) }}
                >
                  <div className="w-1 h-1 rounded-full bg-accent mr-2"></div>
                  {location}
                </motion.li>
              ))}
            </ul>
            
            <motion.div 
              className="mt-6 pt-4 border-t border-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link 
                href="/portfolio" 
                className="inline-flex items-center text-sm text-white group"
              >
                <span className="border-b border-transparent group-hover:border-accent">
                  View our portfolio
                </span>
                <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1 text-accent" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Contact */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h3 className="text-xl font-bold mb-5 font-serif">Contact Us</h3>
            <div className="space-y-4">
              <motion.div 
                className="group flex items-center space-x-3 transition-transform hover:translate-x-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">+237 80 117 410</span>
              </motion.div>
              
              <motion.div 
                className="group flex items-center space-x-3 transition-transform hover:translate-x-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-gray-300 text-sm group-hover:text-white transition-colors">events@blinking.cm</span>
              </motion.div>
              
              <motion.div 
                className="group flex items-start space-x-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex-shrink-0 h-8 w-8 bg-primary/10 rounded-full flex items-center justify-center mt-0.5">
                  <MapPin className="h-3.5 w-3.5 text-primary" />
                </div>
                <span className="text-gray-300 text-sm">
                  Limbe • Buea • Douala
                  <br />
                  Cameroon
                </span>
              </motion.div>
            </div>
            
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              <p className="text-[#C8A64B] font-medium px-4 py-2 border border-[#C8A64B]/30 rounded-full text-sm inline-flex">
                Blinking Answer 24/7 - We're always on
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          className="border-t border-gray-800 mt-16 pt-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">© 2025 Blinking Events. All rights reserved.</p>
            <div className="flex flex-wrap justify-center md:justify-end gap-x-6 gap-y-2">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-white text-sm transition-colors">
                Sitemap
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
