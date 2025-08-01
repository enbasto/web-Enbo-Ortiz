import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProgramsSection } from "@/components/programs-section"
import { DonationsSection } from "@/components/donations-section"
import { YouTubeSection } from "@/components/youtube-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900">
      <div className="container mx-auto px-8 mt-8">
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <YouTubeSection />
        <DonationsSection />
        <WhatsAppButton />
      </div>
      <Footer />

    </main>
  )
}
