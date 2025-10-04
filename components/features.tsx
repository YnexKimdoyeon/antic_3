import { Shield, MessageSquare, Clock, TrendingUp } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Shield,
      title: "신뢰 주고 받는 안전한 거래를 보장합니다",
      description: "모든 거래는 안전하게 보호되며 개인정보는 철저히 관리됩니다",
    },
    {
      icon: MessageSquare,
      title: "신속한 입금과 편리한 상담 제공",
      description: "실시간 상담으로 빠르고 편리하게 거래하세요",
    },
    {
      icon: Clock,
      title: "24시간 언제든지 즉시 현금화",
      description: "원하는 시간에 즉시 상품권을 현금으로 전환할 수 있습니다",
    },
    {
      icon: TrendingUp,
      title: "시중 최고가로 상품권 매입 제공",
      description: "업계 최고 수준의 매입가로 거래할 수 있습니다",
    },
  ]

  return (
    <section id="features" className="py-20 bg-secondary/30">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            이런 분들에게 <span className="text-primary">추천드립니다</span>
          </h2>
        </div>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
