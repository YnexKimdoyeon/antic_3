export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-8 md:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex justify-center">
          <img
            src="/hero-illustration.png"
            alt="바로티켓 - 소액결제 현금화, 신용카드 현금화 서비스"
            className="w-full max-w-3xl h-auto"
          />
        </div>
      </div>
    </section>
  )
}
