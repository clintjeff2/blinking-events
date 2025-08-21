"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "@/lib/motion"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Building, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// Partner testimonials
const testimonials = [
  {
    quote: "Blinking Events transformed our annual gala into a spectacular showcase of Cameroonian culture and excellence. Their attention to detail and understanding of local protocols made the event a resounding success.",
    author: "Director of Events",
    partner: "Mountain Hotel Buea",
    role: "Venue Partner",
  },
  {
    quote: "Their attention to local customs and traditions made our official ceremonies truly representative of our diverse culture. We've received numerous compliments on the professionalism and cultural authenticity.",
    author: "Events Coordinator",
    partner: "Limbe City Council",
    role: "Government Partner",
  },
  {
    quote: "Working with Blinking Events to promote tourism through expertly organized conferences has significantly boosted our visibility. They understand what makes Cameroon special and showcase it beautifully.",
    author: "Marketing Manager",
    partner: "Cameroon Tourism Board",
    role: "Tourism Partner",
  },
]

// Partner logos - key partners in Cameroon
const partners = [
  {
    name: "Mountain Hotel Buea",
    logo: "/placeholder-logo.svg",
    category: "Venue Partner",
    region: "Southwest Region",
    type: "Venue"
  },
  {
    name: "Limbe City Council",
    logo: "/placeholder-logo.svg",
    category: "Government Partner",
    region: "Southwest Region",
    type: "Government"
  },
  {
    name: "Cameroon Tourism Board",
    logo: "/placeholder-logo.svg",
    category: "Tourism Authority",
    region: "National",
    type: "Government"
  },
  {
    name: "CRTV",
    logo: "/placeholder-logo.svg",
    category: "Media Partner",
    region: "National",
    type: "Media"
  },
  {
    name: "Southwest Chamber of Commerce",
    logo: "/placeholder-logo.svg",
    category: "Business Association",
    region: "Southwest Region",
    type: "Business"
  },
  {
    name: "Douala Grand Mall",
    logo: "/placeholder-logo.svg",
    category: "Premier Venue",
    region: "Littoral Region",
    type: "Venue"
  },
  {
    name: "Chariot Hotel Buea",
    logo: "/placeholder-logo.svg",
    category: "Accommodation Partner",
    region: "Southwest Region",
    type: "Venue"
  },
  {
    name: "Canal 2 International",
    logo: "/placeholder-logo.svg",
    category: "Media Partner",
    region: "National",
    type: "Media"
  },
  {
    name: "Akwa Palace Hotel",
    logo: "/placeholder-logo.svg",
    category: "Luxury Venue",
    region: "Littoral Region",
    type: "Venue"
  },
  {
    name: "MTN Cameroon",
    logo: "/placeholder-logo.svg",
    category: "Telecom Partner",
    region: "National",
    type: "Business"
  }
]

export function PartnerLogos() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" })
  const [selectedTab, setSelectedTab] = useState("all")
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  
  // Filter partners by category
  const filteredPartners = selectedTab === "all" 
    ? partners 
    : partners.filter(partner => partner.type === selectedTab)
  
  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-3">Strategic Alliances</Badge>
          <h2 className="font-serif text-4xl font-bold mb-4">
            Our Valued <span className="text-primary">Cameroonian Partners</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We've built strong partnerships with leading organizations across Cameroon
            to create exceptional experiences that celebrate our rich cultural heritage
          </p>
        </motion.div>

        {/* Testimonials carousel */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative bg-primary/5 rounded-xl p-8 border border-primary/10 max-w-3xl mx-auto">
            <Quote className="absolute text-primary/10 h-16 w-16 top-4 left-4" />
            <div className="relative pl-6">
              <p className="italic text-lg md:text-xl mb-6">
                "{testimonials[activeTestimonial].quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-foreground">
                    {testimonials[activeTestimonial].author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[activeTestimonial].partner}, {testimonials[activeTestimonial].role}
                  </p>
                </div>
                <div className="flex space-x-2">
                  {testimonials.map((_, i) => (
                    <button 
                      key={i}
                      onClick={() => setActiveTestimonial(i)}
                      className={`h-2 rounded-full transition-all ${
                        activeTestimonial === i ? "w-6 bg-primary" : "w-2 bg-primary/30"
                      }`}
                      aria-label={`View testimonial ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Partner tabs */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-8"
        >
          <Tabs 
            defaultValue="all" 
            className="w-full"
            onValueChange={setSelectedTab}
          >
            <TabsList className="grid grid-cols-3 sm:grid-cols-5 w-full max-w-2xl mx-auto mb-10">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="Venue">Venues</TabsTrigger>
              <TabsTrigger value="Government">Government</TabsTrigger>
              <TabsTrigger value="Media">Media</TabsTrigger>
              <TabsTrigger value="Business">Business</TabsTrigger>
            </TabsList>
            
            <TabsContent value={selectedTab} className="mt-0">
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-stretch justify-items-center"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.05
                    }
                  }
                }}
              >
                {filteredPartners.map((partner, i) => (
                  <motion.div
                    key={i}
                    className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 w-full h-full flex flex-col items-center justify-between text-center border border-muted"
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { 
                        opacity: 1, 
                        y: 0,
                        transition: { duration: 0.4 }
                      }
                    }}
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="relative h-16 w-full mb-3 flex items-center justify-center">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        width={100}
                        height={60}
                        className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div className="mt-auto">
                      <p className="font-medium text-sm">{partner.name}</p>
                      <p className="text-xs text-muted-foreground mt-1">{partner.category}</p>
                      <div className="flex items-center justify-center gap-1 mt-3 text-xs text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        <span>{partner.region}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-muted-foreground mb-4">
            Interested in becoming a strategic partner with Blinking Events?
          </p>
          <Button asChild>
            <Link href="/contact">
              <Building className="mr-2 h-4 w-4" />
              Partner With Us
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
