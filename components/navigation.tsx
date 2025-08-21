"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "@/lib/motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MessageCircle, ChevronDown, CalendarCheck, Camera, Users, Shield, ChefHat, Gift } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Services",
    href: "/services",
    megaMenu: [
      {
        category: "Planning & Coordination",
        icon: CalendarCheck,
        services: [
          {
            name: "Event Planning & Coordination",
            href: "/services/event-planning",
            description: "End-to-end event management",
            image: "/elegant-african-celebration.png"
          },
          {
            name: "Wedding Planning",
            href: "/services/wedding-planning",
            description: "Complete wedding coordination",
            image: "/happy-african-couple-wedding.png"
          },
          {
            name: "Corporate & VIP Events",
            href: "/services/corporate",
            description: "Executive and government functions",
            image: "/confident-african-businesswoman.png"
          },
        ],
      },
      {
        category: "Staffing Services",
        icon: Users,
        services: [
          { 
            name: "Hostess Services", 
            href: "/services/hostesses", 
            description: "Professional event hostesses",
            image: "/professional-african-hostesses.png"
          },
          {
            name: "Security Services",
            href: "/services/security",
            description: "Event security and protection",
            image: "/placeholder-u13uz.png"
          },
          { 
            name: "MCs & Speakers", 
            href: "/services/mc-speakers", 
            description: "Professional hosts and speakers",
            image: "/placeholder-w1z5t.png"
          },
        ],
      },
      {
        category: "Production & Media",
        icon: Camera,
        services: [
          { 
            name: "Catering & Blinking Kitchen", 
            href: "/services/catering", 
            description: "Gourmet catering services",
            image: "/placeholder-6nl0q.png"
          },
          {
            name: "Photography & Videography",
            href: "/services/photo-video",
            description: "Professional event coverage",
            image: "/african-wedding-photographer.png"
          },
          { 
            name: "Graphics & Branding", 
            href: "/services/graphics", 
            description: "Event branding and design",
            image: "/placeholder-4rq2v.png"
          },
        ],
      },
    ],
  },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Pricing", href: "/pricing" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const [activeMenuItem, setActiveMenuItem] = useState("")
  const [isHomePage, setIsHomePage] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    // Get current path for active menu item highlighting
    const path = window.location.pathname
    setActiveMenuItem(path)
    setIsHomePage(path === "/")
    
    // Set initial scrolled state for non-home pages
    if (path !== "/") {
      setIsScrolled(true)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          isScrolled || !isHomePage
            ? "bg-white/95 dark:bg-blinking-charcoal/95 backdrop-blur-md shadow-lg py-2" 
            : "bg-transparent py-4"
        )}
      >
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group flex items-center space-x-2 z-10 relative">
              <motion.div 
                className="h-10 w-10 rounded-full bg-primary flex items-center justify-center shadow-md overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 15px rgba(225, 38, 44, 0.5)" 
                }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-white font-bold text-lg">B</span>
                
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-primary to-primary/50"
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: [0, 0.5, 0], 
                    rotate: [0, 180]
                  }}
                  transition={{ 
                    duration: 3, 
                    ease: "linear", 
                    repeat: Infinity,
                    repeatType: "loop"
                  }}
                />
              </motion.div>
              
              <div className="relative">
                <span className={cn(
                  "font-serif text-xl font-bold transition-colors duration-300",
                  isScrolled || !isHomePage ? "text-foreground" : "text-white"
                )}>
                  Blinking Events
                </span>
                <motion.div 
                  className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ 
                    duration: 0.3, 
                    delay: 0.5,
                    ease: [0.16, 1, 0.3, 1]
                  }}
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => item.megaMenu && setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center text-sm font-medium transition-colors duration-300",
                      activeMenuItem === item.href 
                        ? "text-primary font-semibold" 
                        : isScrolled || !isHomePage
                          ? "text-foreground hover:text-primary" 
                          : "text-white hover:text-white/80"
                    )}
                  >
                    {item.name}
                    {item.megaMenu && <ChevronDown className={cn(
                      "ml-1 h-4 w-4 transition-transform duration-300",
                      hoveredMenu === item.name ? "rotate-180" : ""
                    )} />}
                  </Link>
                  
                  {/* Indicator for active page */}
                  {activeMenuItem === item.href && (
                    <motion.div 
                      className="absolute -bottom-1 left-0 h-[2px] bg-primary"
                      layoutId="activeIndicator"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                    />
                  )}

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {item.megaMenu && hoveredMenu === item.name && (
                      <motion.div 
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-6xl bg-white dark:bg-blinking-charcoal shadow-2xl rounded-lg border border-border p-0 z-50 overflow-hidden"
                        initial={{ opacity: 0, y: 10, height: 0 }}
                        animate={{ opacity: 1, y: 0, height: "auto" }}
                        exit={{ opacity: 0, y: 10, height: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      >
                        <div className="flex h-full">
                          {/* Featured image */}
                          <div className="w-1/4 bg-gradient-to-br from-primary to-accent/50 p-8 text-white hidden lg:flex flex-col justify-between">
                            <div>
                              <h3 className="font-serif text-xl font-bold mb-2">Our Services</h3>
                              <p className="text-white/80 text-sm">From concept to applause, we deliver unforgettable events.</p>
                            </div>
                            <Button 
                              asChild
                              className="mt-4 bg-white text-primary hover:bg-white/90"
                            >
                              <Link href="/services">View All Services</Link>
                            </Button>
                          </div>
                          
                          {/* Menu content */}
                          <div className="w-full lg:w-3/4 p-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {item.megaMenu.map((category, idx) => (
                                <motion.div 
                                  key={category.category}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.3, delay: 0.1 * idx }}
                                >
                                  <div className="flex items-center space-x-2 mb-4">
                                    {category.icon && <category.icon className="h-5 w-5 text-primary" />}
                                    <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">
                                      {category.category}
                                    </h3>
                                  </div>
                                  
                                  <ul className="space-y-3">
                                    {category.services.map((service, serviceIdx) => (
                                      <motion.li 
                                        key={service.name}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: 0.2 + (0.05 * serviceIdx) }}
                                      >
                                        <Link
                                          href={service.href}
                                          className="group block p-3 rounded-lg hover:bg-muted transition-colors"
                                        >
                                          <div className="flex items-start">
                                            <div className="h-10 w-10 rounded-md overflow-hidden relative flex-shrink-0 mr-3">
                                              {service.image && (
                                                <Image 
                                                  src={service.image} 
                                                  alt={service.name}
                                                  fill
                                                  className="object-cover" 
                                                />
                                              )}
                                            </div>
                                            <div>
                                              <div className="font-medium text-foreground text-sm group-hover:text-primary transition-colors">
                                                {service.name}
                                              </div>
                                              <div className="text-xs text-muted-foreground mt-1">
                                                {service.description}
                                              </div>
                                            </div>
                                          </div>
                                        </Link>
                                      </motion.li>
                                    ))}
                                  </ul>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                variant="outline" 
                size="sm" 
                className={cn(
                  "border-2 transition-colors duration-300 shadow-sm",
                  !isScrolled && isHomePage 
                    ? "border-white/70 bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-primary" 
                    : "border-primary/20 text-foreground hover:border-primary hover:text-primary"
                )}
                asChild
              >
                <Link href="tel:+23780117410">
                  <Phone className="h-4 w-4 mr-2" />
                  Call Now
                </Link>
              </Button>
              
              <Button 
                size="sm" 
                className={cn(
                  "shadow-sm",
                  !isScrolled && isHomePage 
                    ? "bg-white/20 backdrop-blur-sm hover:bg-white text-white hover:text-primary border border-white/40" 
                    : "bg-primary hover:bg-primary/90 text-white"
                )}
                asChild
              >
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>

            {/* Mobile menu button */}
            <Button
              variant={isScrolled ? "ghost" : "outline"}
              size="sm"
              className={cn(
                "lg:hidden",
                !isScrolled && isHomePage && "border-white/70 text-white hover:bg-white/20"
              )}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isMobileMenuOpen ? "close" : "menu"}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.div>
              </AnimatePresence>
            </Button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="lg:hidden bg-white dark:bg-blinking-charcoal border-t border-border shadow-lg overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.div 
                className="px-4 py-6 space-y-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                  hidden: {}
                }}
              >
                {navigation.map((item) => (
                  <motion.div 
                    key={item.name}
                    variants={{
                      visible: { opacity: 1, y: 0 },
                      hidden: { opacity: 0, y: 20 }
                    }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "block text-base font-medium transition-colors",
                        activeMenuItem === item.href
                          ? "text-primary font-semibold"
                          : "text-foreground hover:text-primary"
                      )}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.megaMenu && (
                      <div className="ml-4 mt-2 space-y-2 border-l-2 border-border pl-4">
                        {item.megaMenu.flatMap((category) =>
                          category.services.map((service) => (
                            <Link
                              key={service.name}
                              href={service.href}
                              className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {service.name}
                            </Link>
                          )),
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
                <motion.div 
                  className="pt-4 space-y-3"
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 20 }
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                >
                  <Button variant="outline" className="w-full border-2" asChild>
                    <Link href="tel:+23780117410">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Now
                    </Link>
                  </Button>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-white" asChild>
                    <Link href="/contact">Get a Quote</Link>
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-40"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring", 
          stiffness: 260, 
          damping: 20, 
          delay: 1.5 
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button
          size="lg"
          className="rounded-full h-14 w-14 bg-green-500 hover:bg-green-600 shadow-lg"
          asChild
        >
          <Link href="https://wa.me/23780117410?text=Hello%20Blinking%20Events,%20I'm%20interested%20in%20your%20services%20and%20would%20like%20more%20information." target="_blank" rel="noopener noreferrer">
            <MessageCircle className="h-6 w-6" />
          </Link>
        </Button>
      </motion.div>
    </>
  )
}
