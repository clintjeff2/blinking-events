"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    id: 1,
    name: "Dr. Amina Mbeki",
    role: "CEO",
    company: "Douala Tech Solutions",
    eventType: "Corporate Gala",
    rating: 5,
    quote:
      "Blinking Events transformed our annual tech summit into an unforgettable experience. Their attention to detail, professional staff, and seamless execution exceeded all our expectations. The event generated significant business leads and enhanced our company's reputation.",
    image: "/smiling-african-businesswoman.png",
    featured: true,
    videoTestimonial: true,
  },
  {
    id: 2,
    name: "Jean-Paul & Marie Nguema",
    role: "Newlyweds",
    company: "",
    eventType: "Garden Wedding",
    rating: 5,
    quote:
      "Our wedding was absolutely perfect! From the elegant hostesses to the exquisite catering, every moment was magical. The team handled everything with such grace and professionalism. We couldn't have asked for a better wedding day.",
    image: "/happy-african-couple-wedding.png",
    featured: true,
    videoTestimonial: false,
  },
  {
    id: 3,
    name: "Minister Joseph Etame",
    role: "Government Official",
    company: "Ministry of Culture",
    eventType: "State Function",
    rating: 5,
    quote:
      "The professionalism and security protocols were impeccable. Blinking Events handled our high-profile government function with discretion and excellence. Every detail was managed flawlessly, from VIP protocol to media coordination.",
    image: "/placeholder.svg?height=100&width=100",
    featured: true,
    videoTestimonial: true,
  },
  {
    id: 4,
    name: "Sarah Biya",
    role: "Marketing Director",
    company: "Luxury Brand Co.",
    eventType: "Product Launch",
    rating: 5,
    quote:
      "The team's creativity and execution were outstanding. Our product launch was a huge success thanks to their innovative approach and flawless coordination. The event generated massive social media buzz and exceeded our sales targets.",
    image: "/confident-african-businesswoman.png",
    featured: false,
    videoTestimonial: false,
  },
  {
    id: 5,
    name: "Dr. Emmanuel Fon",
    role: "University Vice-Chancellor",
    company: "University of Buea",
    eventType: "Graduation Ceremony",
    rating: 5,
    quote:
      "Managing a graduation ceremony for 2,000+ graduates and their families is no small feat. Blinking Events coordinated everything perfectly - from guest seating to VIP protocol. The ceremony was dignified and memorable.",
    image: "/placeholder.svg?height=100&width=100",
    featured: false,
    videoTestimonial: false,
  },
  {
    id: 6,
    name: "Grace Mbah",
    role: "Event Organizer",
    company: "Limbe Cultural Festival",
    eventType: "Cultural Festival",
    rating: 5,
    quote:
      "Working with Blinking Events for our annual cultural festival was a game-changer. They brought professionalism and creativity that elevated our event to international standards. The logistics coordination was flawless.",
    image: "/placeholder.svg?height=100&width=100",
    featured: false,
    videoTestimonial: true,
  },
]

const stats = [
  { number: "98%", label: "Client Satisfaction Rate" },
  { number: "450+", label: "Successful Events" },
  { number: "3,500+", label: "Happy Guests" },
  { number: "10+", label: "Years of Excellence" },
]

export default function TestimonialsPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const featuredTestimonials = testimonials.filter((t) => t.featured)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % featuredTestimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length)
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#E1262C] to-[#1D1D1F] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold">Client Testimonials</h1>
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto">
                Hear from our satisfied clients across Cameroon
              </p>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                {stats.map((stat, index) => (
                  <Badge key={index} variant="secondary" className="bg-white/20 text-white">
                    {stat.number} {stat.label}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Testimonial Carousel */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Stories</h2>
              <p className="text-lg text-muted-foreground">Our clients' success stories speak for themselves</p>
            </div>

            <div className="relative max-w-5xl mx-auto">
              <Card className="border-0 shadow-2xl bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Image/Video Side */}
                    <div className="relative h-96 lg:h-auto">
                      <div
                        className="w-full h-full bg-gradient-to-br from-[#E1262C]/20 to-[#1D1D1F]/20"
                        style={{
                          backgroundImage: `url('${featuredTestimonials[currentTestimonial].image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      {featuredTestimonials[currentTestimonial].videoTestimonial && (
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                            <Play className="h-8 w-8 text-[#E1262C] ml-1" />
                          </div>
                        </div>
                      )}
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-[#C8A64B] text-white">
                          {featuredTestimonials[currentTestimonial].eventType}
                        </Badge>
                      </div>
                    </div>

                    {/* Content Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="flex items-center justify-center mb-6">
                        <Quote className="h-12 w-12 text-[#C8A64B] opacity-50" />
                      </div>

                      <div className="flex justify-center mb-6">
                        {[...Array(featuredTestimonials[currentTestimonial].rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-[#C8A64B] fill-current" />
                        ))}
                      </div>

                      <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-8 text-center">
                        "{featuredTestimonials[currentTestimonial].quote}"
                      </blockquote>

                      <div className="text-center">
                        <div className="font-semibold text-lg text-foreground">
                          {featuredTestimonials[currentTestimonial].name}
                        </div>
                        <div className="text-muted-foreground">
                          {featuredTestimonials[currentTestimonial].role}
                          {featuredTestimonials[currentTestimonial].company &&
                            `, ${featuredTestimonials[currentTestimonial].company}`}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation */}
              <div className="flex justify-center items-center space-x-4 mt-8">
                <Button variant="outline" size="sm" onClick={prevTestimonial} className="rounded-full bg-transparent">
                  <ChevronLeft className="h-4 w-4" />
                </Button>

                <div className="flex space-x-2">
                  {featuredTestimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentTestimonial ? "bg-[#E1262C]" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <Button variant="outline" size="sm" onClick={nextTestimonial} className="rounded-full bg-transparent">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="py-20 bg-[#F5F5F7]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">All Client Reviews</h2>
              <p className="text-lg text-muted-foreground">Every event, every client, every success story</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div
                        className="w-12 h-12 rounded-full bg-gradient-to-br from-[#E1262C] to-[#C8A64B] mr-4"
                        style={{
                          backgroundImage: `url('${testimonial.image}')`,
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      />
                      <div className="flex-1">
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {testimonial.role}
                          {testimonial.company && `, ${testimonial.company}`}
                        </div>
                      </div>
                      {testimonial.videoTestimonial && (
                        <div className="w-8 h-8 bg-[#E1262C] rounded-full flex items-center justify-center">
                          <Play className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-[#C8A64B] fill-current" />
                      ))}
                    </div>

                    <Badge variant="outline" className="mb-4 text-xs">
                      {testimonial.eventType}
                    </Badge>

                    <blockquote className="text-sm text-muted-foreground leading-relaxed">
                      "
                      {testimonial.quote.length > 150 ? `${testimonial.quote.substring(0, 150)}...` : testimonial.quote}
                      "
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Success Stories?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's create an unforgettable event that your guests will rave about
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-[#E1262C] hover:bg-gray-100" asChild>
                <Link href="/contact">Start Your Event Journey</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#E1262C] bg-transparent"
                asChild
              >
                <Link href="/portfolio">View Our Portfolio</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
