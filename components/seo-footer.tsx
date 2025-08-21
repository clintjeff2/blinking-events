"use client"

import { motion } from "framer-motion"

export function SeoFooter() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto text-muted-foreground text-base leading-relaxed"
    >
      <h2 className="sr-only">About Blinking Events</h2>
      <p className="mb-4">
        Blinking Events is Cameroon's premier event company, proudly serving Limbe, Buea, Douala, and the wider Littoral 
        and Southwest regions. We design, plan, staff, and produce weddings, corporate functions, private celebrations, 
        and VIP engagements with a standard of excellence that sets us apart.
      </p>
      <p className="mb-4">
        Our elegant hostesses, professional security teams, creative planners, and accomplished kitchen deliver 
        unforgettable experiences—from décor and rentals to photography and cinematic film. Whether you're launching a 
        product, exchanging vows, or hosting dignitaries, we bring calm leadership, reliable logistics, and hospitality 
        that delights every guest.
      </p>
      <p>
        With transparent packages, responsive communication, and 24/7 support through Blinking Answer 247, we make 
        planning effortless and outcomes remarkable. Explore our portfolio of photos, videos, and case studies, then 
        request a quote to reserve your date. Blinking Events—Plan. Staff. Wow.
      </p>
    </motion.div>
  )
}
