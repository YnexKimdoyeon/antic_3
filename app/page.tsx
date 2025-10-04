import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { PricingCards } from "@/components/pricing-cards"
import { PolicyInfo } from "@/components/policy-info"
import { Reviews } from "@/components/reviews"
import { AlternativeMethods } from "@/components/alternative-methods"
import { Warning } from "@/components/warning"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <PricingCards />
      <PolicyInfo />
      <Reviews />
      <AlternativeMethods />
      <Warning />
    </main>
  )
}
