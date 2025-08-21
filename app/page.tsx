import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesGrid } from "@/components/services-grid"
import { TestimonialsCarousel } from "@/components/testimonials-carousel"
import { GalleryPreview } from "@/components/gallery-preview"
import { CTABanner } from "@/components/cta-banner"
import { FeaturedCaseStudy } from "@/components/featured-case-study"
import { RegionsSection } from "@/components/regions-section"
import { Separator } from "@/components/ui/separator"
import { SeoFooter } from "@/components/seo-footer"
import { PartnerLogos } from "@/components/partner-logos"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="overflow-hidden animate-fade-in-up">
        <HeroSection />
        <StatsSection />
        <ServicesGrid />
        <FeaturedCaseStudy />
        <GalleryPreview />
        <TestimonialsCarousel />
        <RegionsSection />
        <PartnerLogos />
        <CTABanner />
        <section className="container mx-auto py-16 px-4">
          <Separator className="mb-12" />
          <SeoFooter />
        </section>
      </main>

      <Footer />
    </div>
  )
}
