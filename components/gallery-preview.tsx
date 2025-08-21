"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Camera, Plus, ExternalLink, Eye } from "lucide-react"
import Link from "next/link"
import { motion, useInView } from "@/lib/motion"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog"

const galleryItems = [
  {
    type: "image",
    src: "/african-wedding-reception-dancing.png",
    alt: "Elegant Wedding Reception",
    description: "A joyful celebration featuring traditional dances at the Mountainview Hotel",
    category: "Wedding",
    client: "Tambe & Michelle"
  },
  {
    type: "image",
    src: "/african-corporate-event.png",
    alt: "Corporate Award Ceremony",
    description: "Annual gala celebrating business excellence in Douala",
    category: "Corporate",
    client: "Cameroon Business Forum"
  },
  {
    type: "video",
    src: "/african-event-highlights.png",
    alt: "Event Highlights",
    description: "Documentary-style capture of meaningful moments",
    category: "Video Production",
    client: "Various Events"
  },
  {
    type: "image",
    src: "/african-wedding-ceremony.png",
    alt: "Traditional Wedding Ceremony",
    description: "Blending cultural heritage with modern elegance",
    category: "Wedding",
    client: "Jean & Marie"
  },
  {
    type: "image",
    src: "/elegant-african-celebration.png",
    alt: "Premium Catering Setup",
    description: "Exquisite culinary presentation for VIP guests",
    category: "Catering",
    client: "Presidential Dinner"
  },
  {
    type: "image",
    src: "/professional-african-hostesses.png",
    alt: "Professional Hostess Services",
    description: "Highly trained staff ensuring flawless guest experiences",
    category: "Hostess Services",
    client: "Pan-African Conference"
  },
]

const categories = ["All", "Wedding", "Corporate", "Video Production", "Catering", "Hostess Services"]

export function GalleryPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedImage, setSelectedImage] = useState<any>(null)
  const [selectedFilter, setSelectedFilter] = useState("All")
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const filteredItems = selectedFilter === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter)

  return (
    <section className="py-24 bg-[#F8F9FA] relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-32 -left-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={isInView ? { 
          opacity: [0, 0.7, 0.5],
          scale: [0.8, 1.2, 1],
        } : {}}
        transition={{ 
          duration: 8,
          ease: "easeInOut",
          times: [0, 0.5, 1],
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <motion.span 
            className="text-primary font-medium text-sm uppercase tracking-wider mb-2 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Portfolio Showcase
          </motion.span>
          
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Exceptional <span className="text-primary">Moments</span> We've Created
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Explore our curated selection of unforgettable events across Cameroon's Littoral & Southwest regions
          </motion.p>
        </div>

        {/* Filter tabs */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <Button
              key={category}
              variant={selectedFilter === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(category)}
              className={`rounded-full px-6 ${
                selectedFilter === category
                  ? "bg-primary hover:bg-primary/90 text-white"
                  : "bg-white hover:bg-gray-100 text-gray-700 border border-gray-200"
              }`}
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Masonry Grid with staggered animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
              }
            }
          }}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    type: "spring",
                    stiffness: 80
                  }
                }
              }}
              className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 aspect-[${
                index % 3 === 0 ? "3/4" : index % 3 === 1 ? "4/3" : "1/1"
              }]`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => item.type !== "video" && setSelectedImage(item)}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/60 z-10 group-hover:opacity-100 opacity-70 transition-opacity duration-300"></div>
              
              <motion.div
                className="w-full h-full bg-gray-100"
                style={{
                  backgroundImage: `url('${item.src}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === "video" ? (
                    <motion.div 
                      className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="h-8 w-8 text-primary ml-1" />
                    </motion.div>
                  ) : (
                    <motion.div 
                      className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-2xl"
                      initial={{ scale: 0 }}
                      animate={{ scale: hoveredIndex === index ? 1 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Eye className="h-6 w-6 text-primary" />
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-5 z-30 transform transition-transform duration-300 group-hover:translate-y-0 translate-y-4">
                <div className="text-white">
                  <div className="font-medium text-lg mb-1 line-clamp-1">{item.alt}</div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white/80">{item.client}</span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-14"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Button 
            size="lg" 
            className="px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20"
            asChild
          >
            <Link href="/portfolio">
              View Full Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
      
      {/* Image Detail Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-[90vw] p-0 overflow-hidden bg-black border-none">
          <div className="relative">
            <img 
              src={selectedImage?.src} 
              alt={selectedImage?.alt}
              className="w-full h-auto object-cover max-h-[80vh]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent py-8 px-6">
              <DialogTitle className="text-white text-xl md:text-2xl mb-2">{selectedImage?.alt}</DialogTitle>
              <DialogDescription className="text-white/80">
                {selectedImage?.description}
              </DialogDescription>
              <div className="flex items-center justify-between mt-4">
                <div className="text-[#C8A64B]">{selectedImage?.client}</div>
                <div className="text-white text-sm">{selectedImage?.category}</div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
