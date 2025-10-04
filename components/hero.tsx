export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl lg:text-6xl text-balance">
            바로티켓
          </h1>

          <p className="mb-8 text-base md:text-lg lg:text-xl text-muted-foreground text-pretty">
            소액결제 현금화, 신용카드 현금화
          </p>
        </div>
      </div>
    </section>
  )
}
