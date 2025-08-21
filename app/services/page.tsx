"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import {
  Calendar,
  Heart,
  Users,
  Shield,
  ChefHat,
  Camera,
  Mic,
  Palette,
  Building,
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "event-planning",
    icon: Calendar,
    title: "Event Planning & Coordination",
    description: "Seamless end-to-end management for flawless execution",
    image: "/elegant-african-celebration.png",
    features: ["Concept & budgeting", "Vendor management", "Run-of-show", "On-site management", "Post-event report"],
    pricing: "From 500,000 XAF",
    popular: true,
  },
  {
    id: "wedding-planning",
    icon: Heart,
    title: "Wedding Planning",
    description: "Your love story, beautifully staged and perfectly executed",
    image: "/elegant-african-wedding.png",
    features: [
      "Ceremony planning",
      "Reception coordination",
      "Vendor selection",
      "Timeline management",
      "Day-of coordination",
    ],
    pricing: "From 1,200,000 XAF",
    popular: true,
  },
  {
    id: "hostess-services",
    icon: Users,
    title: "Hostess Services",
    description: "Elegant, trained, and guest-focused professional hostesses",
    image: "/professional-african-hostesses.png",
    features: [
      "Guest registration",
      "VIP protocol",
      "Ushering services",
      "Multilingual support",
      "Professional uniforms",
    ],
    pricing: "From 25,000 XAF/day per hostess",
    popular: false,
  },
  {
    id: "security-services",
    icon: Shield,
    title: "Security Services",
    description: "Discreet, professional, and reliable event security",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Crowd control", "VIP protection", "Access control", "Risk assessment", "Emergency response"],
    pricing: "From 35,000 XAF/day per officer",
    popular: false,
  },
  {
    id: "catering",
    icon: ChefHat,
    title: "Catering & Blinking Kitchen",
    description: "Delicious menus, cakes, and authentic local cuisine",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Continental cuisine",
      "Local specialties",
      "Wedding cakes",
      "Live cooking stations",
      "Dietary accommodations",
    ],
    pricing: "From 8,000 XAF per guest",
    popular: true,
  },
  {
    id: "photography",
    icon: Camera,
    title: "Photography & Videography",
    description: "Cinematic coverage that captures every precious moment",
    image: "/african-wedding-photographer.png",
    features: ["Event photography", "Cinematic videos", "Drone coverage", "Live streaming", "Same-day highlights"],
    pricing: "From 200,000 XAF",
    popular: false,
  },
  {
    id: "mc-speakers",
    icon: Mic,
    title: "MCs & Speakers",
    description: "Command the room with experienced MCs and keynote speakers",
    image: "/placeholder.svg?height=300&width=400",
    features: [
      "Professional MCs",
      "Keynote speakers",
      "Multilingual hosts",
      "Entertainment coordination",
      "Script development",
    ],
    pricing: "From 75,000 XAF",
    popular: false,
  },
  {
    id: "graphics",
    icon: Palette,
    title: "Graphics & Branding",
    description: "Cohesive event branding from save-the-date to showtime",
    image: "/placeholder.svg?height=300&width=400",
    features: ["Event branding", "Invitation design", "Signage", "Digital assets", "Print materials"],
    pricing: "From 150,000 XAF",
    popular: false,
  },
  {
    id: "corporate",
    icon: Building,
    title: "Corporate & VIP Events",
    description: "Protocol-first planning for executive and government functions",
    image: "/african-corporate-event.png",
    features: [
      "Protocol management",
      "Executive coordination",
      "Government liaison",
      "Media management",
      "Security clearance",
    ],
    pricing: "Custom pricing",
    popular: false,
  },
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredServices = activeTab === "all" ? services : services.filter((service) => service.popular)

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#E1262C] to-[#1D1D1F] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">Our Premium Services</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                From strategy to showtime, Blinking is your single, accountable partner for all event needs
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Limbe
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Buea
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Douala
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white">
                  Nationwide
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid w-full max-w-md grid-cols-2">
                  <TabsTrigger value="all">All Services</TabsTrigger>
                  <TabsTrigger value="popular">Most Popular</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value={activeTab}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredServices.map((service) => (
                    <Card
                      key={service.id}
                      className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg overflow-hidden"
                    >
                      <div className="relative">
                        <div
                          className="h-48 bg-gradient-to-br from-[#E1262C]/20 to-[#1D1D1F]/20 group-hover:scale-110 transition-transform duration-300"
                          style={{
                            backgroundImage: `url('${service.image}')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                          }}
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

                        {service.popular && (
                          <div className="absolute top-4 right-4">
                            <Badge className="bg-[#C8A64B] text-white">
                              <Star className="h-3 w-3 mr-1" />
                              Popular
                            </Badge>
                          </div>
                        )}

                        <div className="absolute top-4 left-4">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <service.icon className="h-6 w-6 text-[#E1262C]" />
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-[#E1262C] transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

                        <div className="space-y-4">
                          <div className="space-y-2">
                            {service.features.slice(0, 3).map((feature, index) => (
                              <div key={index} className="flex items-center text-sm">
                                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                                <span>{feature}</span>
                              </div>
                            ))}
                          </div>

                          <div className="pt-4 border-t border-border">
                            <div className="flex items-center justify-between mb-4">
                              <span className="font-semibold text-[#E1262C]">{service.pricing}</span>
                            </div>

                            <div className="flex gap-2">
                              <Button size="sm" className="flex-1" asChild>
                                <Link href={`/services/${service.id}`}>Learn More</Link>
                              </Button>
                              <Button size="sm" variant="outline" asChild>
                                <Link href="/contact">Book Now</Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-[#F5F5F7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Proven Process</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every successful event follows our time-tested methodology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "01", title: "Discovery Call", description: "Understanding your vision and requirements" },
                { step: "02", title: "Proposal & Budget", description: "Detailed planning and transparent pricing" },
                {
                  step: "03",
                  title: "Design & Vendor Line-up",
                  description: "Creative concepts and vendor coordination",
                },
                { step: "04", title: "Execution & Management", description: "Flawless on-site event management" },
                { step: "05", title: "Debrief & Media", description: "Post-event analysis and media delivery" },
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-[#E1262C] text-white rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {process.step}
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{process.title}</h3>
                  <p className="text-sm text-muted-foreground">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#E1262C] to-[#1D1D1F] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Plan Your Perfect Event?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your vision and create something extraordinary together
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-[#E1262C] hover:bg-gray-100" asChild>
                <Link href="/contact">
                  Get a Custom Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#E1262C] bg-transparent"
                asChild
              >
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
