"use client"

import { notFound } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Heart, Users, CheckCircle, Phone, MessageCircle, Briefcase, Camera, Utensils, PenTool, MapPin } from "lucide-react"
import Link from "next/link"
import { LocationMap } from "@/components/location-map"
import { motion } from "@/lib/motion"

const serviceDetails = {
  "event-planning": {
    icon: Calendar,
    title: "Event Planning & Coordination",
    description:
      "From venue scouting to final teardown, our planners script every detail and orchestrate flawless execution.",
    image: "/elegant-african-celebration.png",
    pricing: "From 500,000 XAF",
    deliverables: [
      "Concept development & budgeting",
      "Comprehensive vendor management",
      "Detailed run-of-show timeline",
      "Professional staffing coordination",
      "On-site event management",
      "Safety planning & risk management",
      "Post-event analysis & reporting",
    ],
    process: [
      {
        title: "Discovery Call",
        description: "We start with understanding your vision, goals, and budget requirements.",
      },
      { title: "Proposal & Budget", description: "Detailed proposal with transparent pricing and timeline breakdown." },
      { title: "Design & Vendor Line-up", description: "Creative concept development and vendor selection process." },
      {
        title: "Execution & On-site Management",
        description: "Professional coordination and real-time event management.",
      },
      { title: "Debrief & Media Delivery", description: "Post-event analysis and delivery of photos/videos." },
    ],
    addOns: [
      "VIP lounge operations",
      "Guest registration systems",
      "Live streaming setup",
      "Media coverage coordination",
    ],
    testimonial: {
      quote:
        "Blinking Events transformed our corporate gala into an unforgettable experience. Every detail was perfect.",
      author: "Dr. Amina Mbeki",
      role: "CEO, Douala Tech Solutions",
    },
  },
  "wedding-planning": {
    icon: Heart,
    title: "Wedding Planning",
    description:
      "We turn your love story into a breathtaking celebration—ceremony, reception, photography, and cuisine aligned to your taste and budget.",
    image: "/elegant-african-wedding.png",
    pricing: "From 1,200,000 XAF",
    deliverables: [
      "Complete ceremony planning",
      "Reception design & coordination",
      "Vendor selection & management",
      "Timeline development & management",
      "Day-of wedding coordination",
      "Bridal party coordination",
      "Emergency contingency planning",
    ],
    process: [
      { title: "Initial Consultation", description: "Understanding your love story and wedding vision." },
      { title: "Venue & Vendor Selection", description: "Finding the perfect venue and trusted vendor partners." },
      { title: "Design & Planning", description: "Creating your unique wedding design and detailed timeline." },
      { title: "Final Preparations", description: "Rehearsal coordination and final detail confirmation." },
      { title: "Wedding Day Management", description: "Seamless execution of your perfect day." },
    ],
    packages: [
      {
        name: "Classic",
        price: "1,200,000 XAF",
        features: [
          "Day-of coordination",
          "Venue recommendations",
          "Basic vendor coordination",
          "Standard decoration setup",
          "Timeline development",
          "Up to 100 guests",
          "8 hours of coverage"
        ],
      },
      {
        name: "Signature",
        price: "2,500,000 XAF",
        features: [
          "Full planning & coordination",
          "Premium venue selection",
          "Complete vendor management",
          "Custom design & styling",
          "Rehearsal coordination",
          "Guest management assistance",
          "Up to 200 guests",
          "12 hours of coverage"
        ],
      },
      {
        name: "Royal",
        price: "4,000,000 XAF",
        features: [
          "Luxury comprehensive planning",
          "Exclusive venue partnerships",
          "Premium vendor curation",
          "Custom design & full styling",
          "Complete coordination services",
          "Full guest experience management",
          "Traditional ceremony integration",
          "Wedding weekend planning",
          "Unlimited guests",
          "Complete weekend coverage"
        ],
      },
    ],
    testimonial: {
      quote: "Our wedding was absolutely perfect! Every moment was magical thanks to the Blinking Events team.",
      author: "Jean-Paul & Marie Nguema",
      role: "Happy Couple",
    },
  },
  "corporate": {
    icon: Briefcase,
    title: "Corporate Events",
    description:
      "Professional planning and execution of business conferences, team building activities, product launches, and corporate celebrations.",
    image: "/confident-african-businesswoman.png",
    pricing: "From 500,000 XAF",
    deliverables: [
      "Venue selection & booking",
      "Corporate branding integration",
      "Catering arrangements",
      "Audio-visual equipment setup",
      "Professional staffing",
      "Guest registration systems",
      "Corporate gift coordination",
      "Event timeline management",
      "VIP logistics handling",
    ],
    process: [
      { title: "Initial Consultation", description: "Understanding your corporate objectives and event requirements." },
      { title: "Proposal Development", description: "Creating a comprehensive event plan and budget." },
      { title: "Vendor Coordination", description: "Securing the right suppliers for your event." },
      { title: "Event Execution", description: "On-site management and coordination." },
      { title: "Post-Event Evaluation", description: "Measuring outcomes against objectives." },
    ],
    coverage: ["Limbe", "Buea", "Douala", "Custom locations nationwide"],
    testimonial: {
      quote: "Blinking Events transformed our annual conference into an impressive brand experience. The attention to detail and professional execution exceeded our expectations.",
      author: "Eric Ngolle",
      role: "Marketing Director, AfricaLink Technologies",
    },
    packages: [
      {
        name: "Essential Corporate",
        price: "500,000 XAF",
        features: [
          "Event planning & coordination",
          "Venue selection assistance",
          "Basic corporate branding",
          "Standard AV equipment",
          "Event staffing (2 personnel)",
          "Up to 50 attendees"
        ]
      },
      {
        name: "Executive Corporate",
        price: "1,200,000 XAF",
        features: [
          "Comprehensive event management",
          "Premium venue partnerships",
          "Full corporate branding integration",
          "Advanced AV setup with technical support",
          "Full staffing solution (4-6 personnel)",
          "VIP guest management",
          "Up to 150 attendees"
        ]
      },
      {
        name: "Platinum Corporate",
        price: "2,500,000 XAF+",
        features: [
          "End-to-end event production",
          "Exclusive venue access",
          "Comprehensive branding experience",
          "Custom stage design & AV production",
          "Complete staffing solution",
          "VIP concierge services",
          "Custom guest experience design",
          "Unlimited attendees"
        ]
      }
    ],
  },
  "hostesses": {
    icon: Users,
    title: "Hostesses & Models",
    description:
      "Professional, multilingual hostesses and promotional models representing your brand with elegance and professionalism.",
    image: "/professional-african-hostesses.png",
    pricing: "From 25,000 XAF per hostess/day",
    deliverables: [
      "Professional hostess selection",
      "Brand-specific training",
      "Multiple language capabilities",
      "Elegant uniform options",
      "Guest reception & management",
      "Product demonstration training",
      "Detailed post-event reports",
    ],
    process: [
      { title: "Requirements Analysis", description: "Understanding your specific needs and event context." },
      { title: "Hostess Selection", description: "Choosing the right team based on event requirements." },
      { title: "Brand Training", description: "Ensuring team members understand your brand values." },
      { title: "Event Execution", description: "Professional service delivery throughout your event." },
      { title: "Performance Review", description: "Post-event feedback and service evaluation." },
    ],
    coverage: ["Limbe", "Buea", "Douala", "Nationwide deployments available"],
    testimonial: {
      quote: "The hostesses were incredibly professional and made our guests feel truly welcomed.",
      author: "Minister Joseph Etame",
      role: "Government Official",
    },
    packages: [
      {
        name: "Basic Staffing",
        price: "25,000 XAF per hostess/day",
        features: [
          "Professional hostesses",
          "Standard attire",
          "English & French language",
          "Basic brand training",
          "4-hour minimum booking",
          "Guest reception duties"
        ]
      },
      {
        name: "Premium Team",
        price: "40,000 XAF per hostess/day",
        features: [
          "Professional hostesses with experience",
          "Custom-branded attire options",
          "Multilingual capabilities",
          "Comprehensive brand training",
          "Guest management & VIP handling",
          "Full-day availability (8 hours)",
          "Team supervisor included"
        ]
      },
      {
        name: "Elite Experience",
        price: "60,000 XAF per hostess/day",
        features: [
          "Premium hostesses & models",
          "Custom designer uniforms",
          "Multiple languages including pidgin",
          "Product demonstration skills",
          "VIP & celebrity handling experience",
          "Flexible hours & overnight events",
          "Dedicated team manager",
          "Detailed performance reporting"
        ]
      }
    ],
  },
  "security": {
    icon: CheckCircle,
    title: "Security Services",
    description:
      "Professional security personnel ensuring the safety of your guests and venue while maintaining an unobtrusive presence.",
    image: "/placeholder-w1z5t.png",
    pricing: "From 35,000 XAF/day per security officer",
    deliverables: [
      "Professional security assessment",
      "Uniformed security officers",
      "VIP protection services",
      "Access control management",
      "Emergency response coordination",
      "Crowd management",
      "Discreet monitoring & reporting",
    ],
    process: [
      { title: "Security Assessment", description: "Analyzing your event for potential security requirements." },
      { title: "Security Plan Development", description: "Creating a comprehensive security strategy." },
      { title: "Team Assignment", description: "Selecting qualified officers for your specific needs." },
      { title: "Event Day Operations", description: "Professional security coverage throughout the event." },
      { title: "Post-Event Reporting", description: "Detailed report of security operations and incidents." },
    ],
    coverage: ["All major cities in Cameroon", "Remote locations upon assessment"],
    testimonial: {
      quote: "The security team was highly professional, maintaining safety without disrupting our high-profile diplomatic event.",
      author: "Adeline Meyongo",
      role: "Head of Protocol, International Summit",
    },
    packages: [
      {
        name: "Basic Security",
        price: "35,000 XAF per officer/day",
        features: [
          "Trained security personnel",
          "Standard uniforms",
          "Access point monitoring",
          "Basic crowd management",
          "8-hour shift coverage",
          "Event perimeter security"
        ]
      },
      {
        name: "Enhanced Protection",
        price: "50,000 XAF per officer/day",
        features: [
          "Experienced security professionals",
          "Professional attire options",
          "Complete access control",
          "Advanced crowd management",
          "Communication equipment",
          "Emergency response protocols",
          "Security supervisor included",
          "12-hour shift coverage"
        ]
      },
      {
        name: "Executive Security",
        price: "75,000 XAF per officer/day",
        features: [
          "Elite security personnel",
          "Plainclothes or formal options",
          "VIP protection specialists",
          "Close protection services",
          "Risk assessment & management",
          "24-hour coverage available",
          "Security operations center",
          "Dedicated security manager",
          "Post-event security report"
        ]
      }
    ],
  },
  "mc-speakers": {
    icon: MessageCircle,
    title: "MC & Professional Speakers",
    description:
      "Charismatic, experienced MCs and speakers who engage your audience, maintain event flow, and elevate the entire experience.",
    image: "/placeholder-6nl0q.png",
    pricing: "From 150,000 XAF per event",
    deliverables: [
      "Professional event hosting",
      "Bilingual presentation (English/French)",
      "Customized script development",
      "Audience engagement",
      "Program timing management",
      "VIP introductions & protocol",
      "Impromptu situation handling",
    ],
    process: [
      { title: "Brief Development", description: "Understanding your event tone, audience, and objectives." },
      { title: "MC Selection", description: "Matching the right personality to your event style." },
      { title: "Content Preparation", description: "Creating customized scripts and introduction materials." },
      { title: "Pre-Event Rehearsal", description: "Ensuring seamless coordination with your program." },
      { title: "Professional Delivery", description: "Expert hosting that elevates your event." },
    ],
    specialties: ["Corporate galas", "Award ceremonies", "Weddings", "Product launches", "Cultural events"],
    testimonial: {
      quote: "Our MC was outstanding! He kept our wedding reception lively, respectful, and perfectly timed.",
      author: "Florence & Pierre Mbarga",
      role: "Wedding Clients",
    },
    packages: [
      {
        name: "Standard MC",
        price: "150,000 XAF",
        features: [
          "Professional event host",
          "English/French capability",
          "Up to 4 hours of service",
          "Basic script preparation",
          "Event flow management",
          "Standard formal attire"
        ]
      },
      {
        name: "Premium Host",
        price: "300,000 XAF",
        features: [
          "Experienced bilingual MC",
          "Custom script development",
          "Up to 8 hours of service",
          "Audience engagement techniques",
          "Cultural protocol knowledge",
          "VIP introductions & management",
          "Professional formal attire"
        ]
      },
      {
        name: "Celebrity Presenter",
        price: "500,000 XAF+",
        features: [
          "Well-known personality/celebrity",
          "Full event hosting experience",
          "Customized entertainment segments",
          "Complete program management",
          "Media-ready presentation",
          "Personal consultation before event",
          "Full-day availability",
          "Premium formal attire"
        ]
      }
    ],
  },
  "catering": {
    icon: Utensils,
    title: "Catering Services",
    description:
      "Exquisite cuisine blending traditional Cameroonian flavors with international standards, custom-designed for your event.",
    image: "/placeholder-u13uz.png",
    pricing: "From 15,000 XAF per person",
    deliverables: [
      "Customized menu planning",
      "Professional food preparation",
      "Elegant presentation setup",
      "Service staff coordination",
      "Dietary accommodations",
      "Beverage service options",
      "Complete cleanup services",
    ],
    process: [
      { title: "Menu Consultation", description: "Exploring your culinary preferences and dietary requirements." },
      { title: "Tasting Session", description: "Sampling selected dishes to perfect your menu." },
      { title: "Service Planning", description: "Determining staff needs and service style for your event." },
      { title: "Execution & Presentation", description: "Professional food service with impeccable presentation." },
      { title: "Quality Assurance", description: "Ensuring guest satisfaction throughout the event." },
    ],
    specialties: ["Cameroonian cuisine", "Pan-African dishes", "International options", "Fusion menus"],
    testimonial: {
      quote: "The food was outstanding. Our international guests were particularly impressed with the local delicacies served with such elegance.",
      author: "Dr. Olivia Nkeng",
      role: "Conference Organizer",
    },
    packages: [
      {
        name: "Standard Buffet",
        price: "15,000 XAF per person",
        features: [
          "Selection of 3 main dishes",
          "2 side dishes",
          "1 dessert option",
          "Basic non-alcoholic beverages",
          "Standard serving equipment",
          "Service staff (1 per 20 guests)"
        ]
      },
      {
        name: "Premium Service",
        price: "25,000 XAF per person",
        features: [
          "Selection of 5 main dishes",
          "3 specialty side dishes",
          "2 dessert options",
          "Full beverage service",
          "Premium serving equipment",
          "Professional waitstaff (1 per 15 guests)",
          "Elegant table settings"
        ]
      },
      {
        name: "Deluxe Experience",
        price: "40,000 XAF per person",
        features: [
          "Custom menu development",
          "Signature dishes & chef specialties",
          "Live cooking stations",
          "Premium dessert display",
          "Full bar service option",
          "Luxury presentation materials",
          "Executive waitstaff (1 per 10 guests)",
          "Complete setup & teardown"
        ]
      }
    ],
  },
  "photo-video": {
    icon: Camera,
    title: "Photography & Videography",
    description:
      "Capture your event with stunning photography and cinematic videography that preserves every emotion and important moment.",
    image: "/african-event-highlights.png",
    pricing: "From 200,000 XAF per event",
    deliverables: [
      "Professional event coverage",
      "High-resolution digital images",
      "Cinematic highlight video",
      "Drone aerial footage",
      "Same-day photo previews",
      "Edited content delivery",
      "Online gallery sharing",
    ],
    process: [
      { title: "Creative Consultation", description: "Understanding your vision and important moments to capture." },
      { title: "Shot List Development", description: "Creating a comprehensive list of must-have shots." },
      { title: "Team Assignment", description: "Selecting the right professionals for your event style." },
      { title: "Event Day Coverage", description: "Capturing every important moment with minimal intrusion." },
      { title: "Post-Production", description: "Professional editing and content delivery." },
    ],
    packages: [
      {
        name: "Essential",
        price: "200,000 XAF",
        features: [
          "Single professional photographer",
          "4 hours of event coverage",
          "100+ edited digital photos",
          "Online gallery with sharing",
          "Standard editing process",
          "Delivery within 2 weeks"
        ],
      },
      {
        name: "Premium",
        price: "400,000 XAF",
        features: [
          "1 photographer + 1 videographer",
          "8 hours of comprehensive coverage",
          "300+ edited digital photos",
          "5-minute highlight video",
          "Drone aerial footage",
          "Online gallery with sharing",
          "Express delivery (1 week)"
        ],
      },
      {
        name: "Luxury",
        price: "700,000 XAF",
        features: [
          "2 photographers + 2 videographers",
          "Full-day coverage (12 hours)",
          "500+ professionally edited photos",
          "10-minute cinematic film",
          "Drone coverage + same-day previews",
          "Custom photo album",
          "Premium online gallery",
          "Express delivery (72 hours)"
        ],
      },
    ],
    testimonial: {
      quote: "The photo and video team captured moments we didn't even realize were happening. The results were absolutely stunning.",
      author: "Germaine Biya",
      role: "Anniversary Celebration Client",
    },
  },
  "graphics": {
    icon: PenTool,
    title: "Graphic Design & Printing",
    description:
      "Exceptional design services for all your event materials from invitations and programs to signage and digital displays.",
    image: "/placeholder-4rq2v.png",
    pricing: "From 75,000 XAF per project",
    deliverables: [
      "Custom invitation design",
      "Event program layouts",
      "Signage & wayfinding",
      "Digital display graphics",
      "Corporate branded materials",
      "High-quality printing services",
      "Rush delivery options",
    ],
    process: [
      { title: "Design Consultation", description: "Understanding your aesthetic preferences and brand guidelines." },
      { title: "Concept Development", description: "Creating initial design concepts for your review." },
      { title: "Revision & Refinement", description: "Perfecting the designs based on your feedback." },
      { title: "Production & Printing", description: "High-quality production of all materials." },
      { title: "Delivery & Installation", description: "Timely delivery and optional on-site setup." },
    ],
    specialties: ["Wedding stationery", "Corporate collateral", "Event signage", "Digital assets"],
    testimonial: {
      quote: "The design team created stunning materials that perfectly captured the essence of our event theme. Our guests were impressed before they even arrived.",
      author: "Charlotte Fouda",
      role: "Gala Organizer",
    },
    packages: [
      {
        name: "Basic Design",
        price: "75,000 XAF",
        features: [
          "Single item design",
          "2 revision rounds",
          "Digital files only",
          "Standard design elements",
          "7-day delivery"
        ]
      },
      {
        name: "Event Package",
        price: "200,000 XAF",
        features: [
          "Full event suite design",
          "3 revision rounds",
          "Digital files + printing",
          "Custom design elements",
          "Premium paper options",
          "5-day express delivery"
        ]
      },
      {
        name: "Branding Collection",
        price: "350,000 XAF",
        features: [
          "Complete event branding",
          "Unlimited revisions",
          "Full print production",
          "Custom illustration work",
          "Large format signage",
          "Rush delivery options",
          "On-site installation available"
        ]
      }
    ],
  },
}

interface ServicePageProps {
  params: {
    slug: string
  }
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = serviceDetails[params.slug as keyof typeof serviceDetails]

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#E1262C] to-[#1D1D1F] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                  <Badge variant="secondary" className="bg-white/20 text-white">
                    Premium Service
                  </Badge>
                </div>
                <h1 className="font-serif text-4xl md:text-5xl font-bold">{service.title}</h1>
                <p className="text-xl opacity-90 leading-relaxed">{service.description}</p>
                <div className="flex items-center space-x-4">
                  <span className="text-2xl font-bold text-[#C8A64B]">{service.pricing}</span>
                  <span className="ml-3 text-xs bg-white/20 px-2 py-1 rounded-full">Updated: August 2025</span>
                </div>
              </div>

              <div className="relative">
                <div
                  className="h-96 rounded-lg shadow-2xl"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-serif text-3xl font-bold mb-8">What's Included</h2>
                <div className="space-y-4">
                  {service.deliverables.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-serif text-3xl font-bold mb-8">Our Process</h2>
                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div key={index} className="flex space-x-4">
                      <div className="w-8 h-8 bg-[#E1262C] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Packages Section (for wedding planning) */}
        {"packages" in service && (
          <section className="py-20 bg-[#F5F5F7]">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold mb-4">
                  {params.slug === "wedding-planning" 
                    ? "Wedding Packages" 
                    : params.slug === "corporate" 
                    ? "Corporate Packages"
                    : params.slug === "photo-video"
                    ? "Photography & Videography Packages"
                    : `${service.title} Packages`}
                </h2>
                <p className="text-muted-foreground">
                  {params.slug === "wedding-planning"
                    ? "Choose the perfect package for your special day"
                    : params.slug === "corporate"
                    ? "Select the ideal package for your business needs"
                    : params.slug === "photo-video"
                    ? "Select the coverage that fits your event requirements"
                    : `Choose the right ${service.title.toLowerCase()} package for your event`}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {service.packages.map((pkg, index) => (
                  <Card key={index} className={`${index === 1 ? "ring-2 ring-[#E1262C] scale-105" : ""} shadow-lg`}>
                    <CardContent className="p-8 text-center">
                      <h3 className="font-serif text-2xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-[#E1262C] mb-6">{pkg.price}</div>
                      <ul className="space-y-3 mb-8">
                        {pkg.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href={`https://wa.me/23780117410?text=I'm interested in the ${pkg.name} package for ${service.title}. Please provide more information.`}>
                        <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                          {index === 1 ? "Recommended" : "Select"} {pkg.name}
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Coverage & Specialties Section */}
        {("coverage" in service || "specialties" in service) && (
          <section className="py-20 bg-white">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {"coverage" in service && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-6">Coverage Areas</h2>
                    <ul className="space-y-3">
                      {service.coverage.map((area, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#E1262C] mr-3" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {"specialties" in service && (
                  <div>
                    <h2 className="font-serif text-2xl font-bold mb-6">Our Specialties</h2>
                    <ul className="space-y-3">
                      {service.specialties.map((specialty, index) => (
                        <li key={index} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-[#E1262C] mr-3" />
                          <span>{specialty}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Testimonial Section */}
        <section className="py-20 bg-[#F5F5F7]">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl font-medium text-foreground mb-6">"{service.testimonial.quote}"</blockquote>
            <div className="text-muted-foreground">
              <div className="font-semibold">{service.testimonial.author}</div>
              <div className="text-sm">{service.testimonial.role}</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#E1262C] to-[#1D1D1F] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Ready to Book This Service?</h2>
                <p className="text-xl mb-8 opacity-90">Let's discuss your requirements and create a custom proposal tailored specifically for your event needs in Cameroon.</p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="secondary" className="bg-white text-[#E1262C] hover:bg-gray-100" asChild>
                    <Link href="/contact">
                      <Calendar className="mr-2 h-5 w-5" />
                      Book Consultation
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-[#E1262C] bg-transparent"
                    asChild
                  >
                    <Link href="tel:+23780117410">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Now
                    </Link>
                  </Button>
                  <Button size="lg" variant="ghost" className="text-white hover:bg-white/10" asChild>
                    <Link 
                      href={`https://wa.me/23780117410?text=Hello%20Blinking%20Events,%20I'm%20interested%20in%20your%20${encodeURIComponent(service.title)}%20services.%20Please%20provide%20more%20information.`} 
                      target="_blank"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      WhatsApp
                    </Link>
                  </Button>
                </div>

                <div className="mt-6 text-sm opacity-75">
                  <p>Serving clients throughout Cameroon including Limbe, Buea, Douala, and beyond.</p>
                  <p className="mt-2">For urgent inquiries, call: +237 80 117 410</p>
                </div>
              </div>

              <div className="bg-black/20 p-6 rounded-lg backdrop-blur">
                <h3 className="text-xl font-bold mb-4">Quick Quote Request</h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm mb-1">Name</label>
                      <input type="text" className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white" />
                    </div>
                    <div>
                      <label className="block text-sm mb-1">Phone</label>
                      <input type="tel" className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Event Date</label>
                    <input type="date" className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white" />
                  </div>
                  <div>
                    <label className="block text-sm mb-1">Message</label>
                    <textarea rows={3} className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-md text-white" placeholder={`I'm interested in ${service.title} for my upcoming event...`}></textarea>
                  </div>
                  <Button className="w-full bg-white text-[#E1262C] hover:bg-gray-100">
                    Request Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Service Locations Map */}
        <section className="py-16 bg-white dark:bg-blinking-charcoal">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-8"
            >
              <Badge variant="outline" className="mb-2">Our Service Locations</Badge>
              <h2 className="text-3xl font-serif font-bold mb-4">Where We Deliver Excellence</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Blinking Events provides {service.title} throughout Cameroon's major cities.
                Our expert teams are strategically located to serve you wherever your event takes place.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <LocationMap 
                height="500px"
                locations={[
                  {
                    id: "buea-service",
                    name: "Buea Service Area",
                    description: service.title + " in Buea",
                    lat: 4.1538,
                    lng: 9.2920,
                    address: "Molyko Main Road, Opposite University of Buea",
                    phone: "+237 80 117 410",
                    type: "office"
                  },
                  {
                    id: "limbe-service",
                    name: "Limbe Service Area",
                    description: service.title + " in Limbe",
                    lat: 4.0225,
                    lng: 9.2010,
                    address: "Down Beach Road, Limbe",
                    phone: "+237 80 117 410",
                    type: "venue"
                  },
                  {
                    id: "douala-service",
                    name: "Douala Service Area",
                    description: service.title + " in Douala",
                    lat: 4.0511,
                    lng: 9.7679,
                    address: "Bonanjo, Near Port Authority, Douala",
                    phone: "+237 80 117 410",
                    type: "venue"
                  }
                ]}
                initialViewState={{
                  latitude: 4.0917,
                  longitude: 9.2400,
                  zoom: 9
                }}
              />
            </motion.div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Buea", "Limbe", "Douala"].map((city) => (
                <Card key={city} className="p-4 border shadow-sm hover:shadow-md transition-all">
                  <CardContent className="p-2 flex items-center">
                    <div className="rounded-full bg-primary/10 p-2 mr-3">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{service.title} in {city}</h3>
                      <p className="text-sm text-muted-foreground">Premium services available</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
