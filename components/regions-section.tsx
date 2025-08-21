"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "@/lib/motion"
import { MapPin, Phone, Globe, Building2, Clock, Users } from "lucide-react"
import { LocationMap } from "@/components/location-map"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const regions = [
  { 
    name: "Littoral Region", 
    icon: <Globe className="w-6 h-6" />,
    description: "Covering Cameroon's economic capital and coastal areas",
    cities: ["Douala", "Edéa", "Nkongsamba"],
    color: "bg-primary/10"
  },
  { 
    name: "Southwest Region", 
    icon: <MapPin className="w-6 h-6" />,
    description: "Serving the scenic southwest with stunning coastal venues",
    cities: ["Limbe", "Buea", "Tiko", "Kumba"],
    color: "bg-accent/10"
  },
  { 
    name: "Limbe", 
    icon: <Building2 className="w-6 h-6" />,
    description: "Beach city with premiere oceanfront event locations",
    features: ["Beach weddings", "Corporate retreats", "Cultural festivals"],
    color: "bg-primary/10"
  },
  { 
    name: "Buea", 
    icon: <Users className="w-6 h-6" />,
    description: "Mountain city with scenic views and exclusive venues",
    features: ["Mountain resorts", "University events", "Government functions"],
    color: "bg-accent/10"
  },
  { 
    name: "Douala", 
    icon: <Clock className="w-6 h-6" />,
    description: "Urban sophistication for corporate and luxury events",
    features: ["Corporate galas", "International conferences", "Luxury weddings"],
    color: "bg-primary/10"
  },
]

export function RegionsSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [selectedRegion, setSelectedRegion] = useState("all")
  
  const locationData = {
    "all": [
      {
        id: "buea-office",
        name: "Blinking Events Buea",
        description: "Our mountain city headquarters",
        lat: 4.1538,
        lng: 9.2920,
        address: "Molyko Main Road, Buea",
        phone: "+237 80 117 410",
        type: "office"
      },
      {
        id: "limbe-office",
        name: "Blinking Events Limbe",
        description: "Our coastal city location",
        lat: 4.0225,
        lng: 9.2010,
        address: "Down Beach Road, Limbe",
        phone: "+237 80 117 410",
        type: "office"
      },
      {
        id: "douala-office",
        name: "Blinking Events Douala",
        description: "Our economic capital presence",
        lat: 4.0511,
        lng: 9.7679,
        address: "Bonanjo, Near Port Authority, Douala",
        phone: "+237 80 117 410",
        type: "office"
      },
    ],
    "buea": [
      {
        id: "buea-office",
        name: "Blinking Events Buea",
        description: "Our mountain city headquarters",
        lat: 4.1538,
        lng: 9.2920,
        address: "Molyko Main Road, Buea",
        phone: "+237 80 117 410",
        type: "office"
      },
      {
        id: "mountain-hotel",
        name: "Mountain Hotel",
        description: "Premium event venue",
        lat: 4.1564,
        lng: 9.2818,
        address: "Mountain Hotel Road, Buea",
        type: "venue"
      },
      {
        id: "parliamentary-flats",
        name: "Parliamentary Flats",
        description: "Government reception venue",
        lat: 4.1510,
        lng: 9.2960,
        address: "Parliamentary Flats, Buea",
        type: "venue"
      }
    ],
    "limbe": [
      {
        id: "limbe-office",
        name: "Blinking Events Limbe",
        description: "Our coastal city location",
        lat: 4.0225,
        lng: 9.2010,
        address: "Down Beach Road, Limbe",
        phone: "+237 80 117 410",
        type: "office"
      },
      {
        id: "seme-beach",
        name: "Seme Beach Hotel",
        description: "Beachfront wedding venue",
        lat: 4.0066,
        lng: 9.2155,
        address: "Seme Beach, Limbe",
        type: "venue"
      },
      {
        id: "limbe-wildlife",
        name: "Limbe Wildlife Center",
        description: "Unique event location",
        lat: 4.0237,
        lng: 9.2009,
        address: "Limbe Wildlife Center, Limbe",
        type: "venue"
      }
    ],
    "douala": [
      {
        id: "douala-office",
        name: "Blinking Events Douala",
        description: "Our economic capital presence",
        lat: 4.0511,
        lng: 9.7679,
        address: "Bonanjo, Near Port Authority, Douala",
        phone: "+237 80 117 410",
        type: "office"
      },
      {
        id: "pullman-hotel",
        name: "Pullman Hotel",
        description: "Luxury event venue",
        lat: 4.0532,
        lng: 9.7541,
        address: "Pullman Hotel, Douala",
        type: "venue"
      },
      {
        id: "akwa-palace",
        name: "Akwa Palace Hotel",
        description: "Central downtown venue",
        lat: 4.0543,
        lng: 9.7085,
        address: "Akwa Palace, Douala",
        type: "venue"
      }
    ]
  };
  
  const viewStates = {
    "all": {
      latitude: 4.0917,
      longitude: 9.2400,
      zoom: 8.5
    },
    "buea": {
      latitude: 4.1538,
      longitude: 9.2920,
      zoom: 12
    },
    "limbe": {
      latitude: 4.0225,
      longitude: 9.2010,
      zoom: 12
    },
    "douala": {
      latitude: 4.0511,
      longitude: 9.7679,
      zoom: 12
    }
  };
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-white to-muted/20 dark:from-blinking-charcoal dark:to-black/90 relative overflow-hidden"
    >
      {/* Decorative elements */}
            {/* Decorative elements */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/5 rounded-full blur-3xl" />
      </div>
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            className="text-primary font-medium text-sm uppercase tracking-wider mb-2 inline-block"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our Service Areas
          </motion.span>
          
          <motion.h2 
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-primary">Where</span> We Create Magic
          </motion.h2>
          
          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            With dedicated teams across major cities and regions, we deliver exceptional 
            event experiences throughout Cameroon's beautiful Littoral and Southwest regions
          </motion.p>
        </div>

        {/* Interactive Map Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white dark:bg-blinking-charcoal/50 rounded-2xl shadow-lg border border-border p-6 overflow-hidden">
            {/* Region selector tabs */}
            <Tabs 
              defaultValue="all" 
              className="mb-8"
              onValueChange={setSelectedRegion}
            >
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all">All Regions</TabsTrigger>
                <TabsTrigger value="buea">Buea</TabsTrigger>
                <TabsTrigger value="limbe">Limbe</TabsTrigger>
                <TabsTrigger value="douala">Douala</TabsTrigger>
              </TabsList>
            </Tabs>
            
            {/* Interactive map */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <LocationMap 
                height="450px"
                locations={locationData[selectedRegion as keyof typeof locationData]}
                initialViewState={viewStates[selectedRegion as keyof typeof viewStates]}
              />
            </div>
            
            {/* Legend and information */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-primary"></div>
                <span>Blinking Events Office</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span>Event Venues</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span>Partner Locations</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Region cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { 
              transition: { 
                staggerChildren: 0.1,
              } 
            }
          }}
        >
          {regions.map((region, i) => (
            <motion.div 
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              className="bg-card p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-border"
            >
              <div className={`w-12 h-12 rounded-full ${region.color} flex items-center justify-center mb-4`}>
                {region.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2">{region.name}</h3>
              <p className="text-muted-foreground mb-4">{region.description}</p>
              
              {region.cities ? (
                <div className="flex flex-wrap gap-2">
                  {region.cities.map((city, j) => (
                    <span 
                      key={j}
                      className="text-xs bg-secondary/50 text-foreground py-1 px-3 rounded-full"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              ) : (
                <ul className="space-y-1">
                  {region.features?.map((feature, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
              
              {region.name === "Buea" || region.name === "Limbe" || region.name === "Douala" ? (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-4"
                  onClick={() => setSelectedRegion(region.name.toLowerCase())}
                >
                  <MapPin className="h-3.5 w-3.5 mr-1.5" />
                  Explore {region.name}
                </Button>
              ) : null}
            </motion.div>
          ))}
        </motion.div>
        
        <div className="text-center mt-12">
          <Button asChild>
            <Link href="/contact">
              View All Locations
            </Link>
          </Button>
        </div>
      </div>
      
      
      <style jsx>{`
        .pulse-dot-large {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          position: absolute;
        }
        
        .pulse-dot-large:before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          background-color: inherit;
          border-radius: 50%;
          opacity: 0.8;
          z-index: -1;
          animation: pulse-large 2s infinite;
          transform-origin: center;
        }
        
        @keyframes pulse-large {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          70% {
            transform: scale(3);
            opacity: 0;
          }
          100% {
            transform: scale(3.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  )
}
