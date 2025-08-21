"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Play, X, ChevronLeft, ChevronRight, Calendar, Users, MapPin } from "lucide-react"
import Link from "next/link"

const portfolioItems = [
  {
    id: 1,
    type: "image",
    category: "weddings",
    title: "Elegant Garden Wedding",
    description: "A beautiful outdoor ceremony in Limbe",
    image: "/elegant-african-wedding.png",
    client: "Jean-Paul & Marie Nguema",
    date: "December 2024",
    location: "Limbe Botanical Garden",
    guests: 200,
    featured: true,
  },
  {
    id: 2,
    type: "video",
    category: "corporate",
    title: "Tech Summit Douala",
    description: "Annual technology conference",
    image: "/african-corporate-event.png",
    videoUrl: "/sample-video.mp4",
    client: "Douala Tech Solutions",
    date: "November 2024",
    location: "Douala Conference Center",
    guests: 500,
    featured: true,
  },
  {
    id: 3,
    type: "image",
    category: "weddings",
    title: "Traditional Ceremony",
    description: "Cultural wedding celebration",
    image: "/african-wedding-ceremony.png",
    client: "Private Client",
    date: "October 2024",
    location: "Buea Cultural Center",
    guests: 300,
    featured: false,
  },
  {
    id: 4,
    type: "image",
    category: "corporate",
    title: "Product Launch Event",
    description: "Luxury brand unveiling",
    image: "/african-corporate-event.png",
    client: "Luxury Brand Co.",
    date: "September 2024",
    location: "Douala Hilton",
    guests: 150,
    featured: false,
  },
  {
    id: 5,
    type: "image",
    category: "social",
    title: "Birthday Celebration",
    description: "Milestone birthday party",
    image: "/african-wedding-reception-dancing.png",
    client: "Private Client",
    date: "August 2024",
    location: "Private Residence, Limbe",
    guests: 80,
    featured: false,
  },
  {
    id: 6,
    type: "video",
    category: "weddings",
    title: "Wedding Highlights Reel",
    description: "Cinematic wedding coverage",
    image: "/happy-african-couple-wedding.png",
    videoUrl: "/wedding-highlights.mp4",
    client: "David & Grace Mbeki",
    date: "July 2024",
    location: "Buea Mountain Resort",
    guests: 250,
    featured: true,
  },
  {
    id: 7,
    type: "image",
    category: "corporate",
    title: "Government Gala",
    description: "State function dinner",
    image: "/placeholder.svg?height=400&width=600",
    client: "Ministry of Culture",
    date: "June 2024",
    location: "Yaoundé Convention Center",
    guests: 400,
    featured: false,
  },
  {
    id: 8,
    type: "image",
    category: "social",
    title: "Graduation Party",
    description: "University graduation celebration",
    image: "/african-wedding-reception-dancing.png",
    client: "University of Buea Alumni",
    date: "May 2024",
    location: "University of Buea",
    guests: 120,
    featured: false,
  },
]

const categories = [
  { id: "all", name: "All Events", count: portfolioItems.length },
  { id: "featured", name: "Featured", count: portfolioItems.filter((item) => item.featured).length },
  { id: "weddings", name: "Weddings", count: portfolioItems.filter((item) => item.category === "weddings").length },
  { id: "corporate", name: "Corporate", count: portfolioItems.filter((item) => item.category === "corporate").length },
  { id: "social", name: "Social Events", count: portfolioItems.filter((item) => item.category === "social").length },
]

const caseStudies = [
  {
    id: 1,
    title: "Corporate Gala, Douala",
    client: "Douala Tech Solutions",
    challenge: "Organizing a high-profile tech summit with 500+ attendees, multiple speakers, and live streaming.",
    solution:
      "Implemented a comprehensive event management system with dedicated registration, VIP areas, and professional AV setup.",
    impact: "98% attendee satisfaction, 50K+ online viewers, generated 2M XAF in business leads for the client.",
    image: "/african-corporate-event.png",
    testimonial: {
      quote: "Blinking Events exceeded our expectations. The event was flawlessly executed.",
      author: "Dr. Amina Mbeki, CEO",
    },
  },
  {
    id: 2,
    title: "Garden Wedding, Limbe",
    client: "Jean-Paul & Marie Nguema",
    challenge: "Creating a romantic outdoor wedding with unpredictable weather and complex logistics.",
    solution:
      "Designed weather-resistant setup with backup indoor options, coordinated 15+ vendors, and managed guest experience.",
    impact: "Perfect weather day, 200 happy guests, viral social media coverage with 100K+ views.",
    image: "/elegant-african-wedding.png",
    testimonial: {
      quote: "Our dream wedding became reality. Every detail was perfect!",
      author: "Marie Nguema, Bride",
    },
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState<(typeof portfolioItems)[0] | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredItems = portfolioItems.filter((item) => {
    if (activeCategory === "all") return true
    if (activeCategory === "featured") return item.featured
    return item.category === activeCategory
  })

  const openLightbox = (item: (typeof portfolioItems)[0]) => {
    setCurrentItem(item)
    setCurrentIndex(filteredItems.findIndex((i) => i.id === item.id))
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setCurrentItem(null)
  }

  const nextItem = () => {
    const nextIndex = (currentIndex + 1) % filteredItems.length
    setCurrentIndex(nextIndex)
    setCurrentItem(filteredItems[nextIndex])
  }

  const prevItem = () => {
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length
    setCurrentIndex(prevIndex)
    setCurrentItem(filteredItems[prevIndex])
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#E1262C] to-[#1D1D1F] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">Our Portfolio</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                Explore our collection of unforgettable events across Cameroon
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  450+ Events Completed
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  3,500+ Happy Guests
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  10+ Years Experience
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Gallery */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className="rounded-full"
                >
                  {category.name} ({category.count})
                </Button>
              ))}
            </div>

            {/* Masonry Grid */}
            <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => openLightbox(item)}
                >
                  <div className="relative">
                    <div
                      className="w-full bg-gradient-to-br from-[#E1262C]/20 to-[#1D1D1F]/20 group-hover:scale-110 transition-transform duration-500"
                      style={{
                        backgroundImage: `url('${item.image}')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        aspectRatio: index % 3 === 0 ? "3/4" : index % 3 === 1 ? "4/3" : "1/1",
                      }}
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 flex items-center justify-center">
                        {item.type === "video" ? (
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                            <Play className="h-8 w-8 text-[#E1262C] ml-1" />
                          </div>
                        ) : (
                          <div className="text-white text-center p-4">
                            <div className="font-semibold text-lg mb-2">{item.title}</div>
                            <div className="text-sm opacity-90">{item.description}</div>
                            <div className="text-xs opacity-75 mt-2">{item.client}</div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 text-[#E1262C] capitalize">
                        {item.category === "weddings"
                          ? "Wedding"
                          : item.category === "corporate"
                            ? "Corporate"
                            : "Social"}
                      </Badge>
                    </div>

                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-3 right-3">
                        <Badge className="bg-[#C8A64B] text-white">Featured</Badge>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-[#F5F5F7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Case Studies</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Deep dive into some of our most successful events
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {caseStudies.map((study) => (
                <Card key={study.id} className="overflow-hidden shadow-xl border-0">
                  <div
                    className="h-64 bg-gradient-to-br from-[#E1262C]/20 to-[#1D1D1F]/20"
                    style={{
                      backgroundImage: `url('${study.image}')`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                  <CardContent className="p-8">
                    <h3 className="font-serif text-2xl font-bold mb-2">{study.title}</h3>
                    <p className="text-muted-foreground mb-6">{study.client}</p>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-[#E1262C] mb-2">Challenge</h4>
                        <p className="text-sm text-muted-foreground">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#E1262C] mb-2">Solution</h4>
                        <p className="text-sm text-muted-foreground">{study.solution}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#E1262C] mb-2">Impact</h4>
                        <p className="text-sm text-muted-foreground">{study.impact}</p>
                      </div>
                    </div>

                    <blockquote className="border-l-4 border-[#C8A64B] pl-4 italic text-muted-foreground mb-4">
                      "{study.testimonial.quote}"
                      <footer className="text-xs mt-2 font-medium">— {study.testimonial.author}</footer>
                    </blockquote>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#E1262C] to-[#1D1D1F] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Create Your Own Success Story?</h2>
            <p className="text-xl mb-8 opacity-90">Let's plan an event that your guests will never forget</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-[#E1262C] hover:bg-gray-100" asChild>
                <Link href="/contact">Start Planning Your Event</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#E1262C] bg-transparent"
                asChild
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Lightbox Modal */}
      {lightboxOpen && currentItem && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-6xl w-full max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute top-4 right-4 z-10 text-white hover:bg-white/20"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="sm"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={prevItem}
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-white/20"
              onClick={nextItem}
            >
              <ChevronRight className="h-8 w-8" />
            </Button>

            {/* Content */}
            <div className="bg-white rounded-lg overflow-hidden">
              {currentItem.type === "video" ? (
                <div className="aspect-video bg-black flex items-center justify-center">
                  <div className="text-white text-center">
                    <Play className="h-16 w-16 mx-auto mb-4" />
                    <p>Video Player Placeholder</p>
                    <p className="text-sm opacity-75">{currentItem.title}</p>
                  </div>
                </div>
              ) : (
                <div
                  className="aspect-video bg-gradient-to-br from-[#E1262C]/20 to-[#1D1D1F]/20"
                  style={{
                    backgroundImage: `url('${currentItem.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              )}

              {/* Item Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-serif text-2xl font-bold mb-2">{currentItem.title}</h3>
                    <p className="text-muted-foreground">{currentItem.description}</p>
                  </div>
                  <Badge className="capitalize">
                    {currentItem.category === "weddings"
                      ? "Wedding"
                      : currentItem.category === "corporate"
                        ? "Corporate"
                        : "Social"}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-[#E1262C]" />
                    <span>{currentItem.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2 text-[#E1262C]" />
                    <span>{currentItem.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2 text-[#E1262C]" />
                    <span>{currentItem.guests} guests</span>
                  </div>
                  <div className="text-muted-foreground">
                    <span>{currentItem.client}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
