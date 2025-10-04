import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PricingCards } from "@/components/pricing-cards"
import { Features } from "@/components/features"
import { HowItWorks } from "@/components/how-it-works"
import { Verification } from "@/components/verification"
import { Reviews } from "@/components/reviews"
import { FAQ } from "@/components/faq"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PricingCards />
      <Features />
      <HowItWorks />
      <Verification />
      <Reviews />
      <FAQ />
    </main>
  )
}
