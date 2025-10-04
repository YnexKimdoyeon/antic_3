import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function PricingCards() {
  const services = [
    {
      type: "소액결제 현금화",
      rate: "90%",
      description: "내 손안에 비상금\n휴대폰만 있어도 1분만에 비상금 마련",
      subtext: "비대면 무서류 신용조회 없이 빠른 급전마련",
    },
    {
      type: "신용카드 현금화",
      rate: "96%",
      description: "비대면 무서류 무방문\n조회없이 1분만에 비상금 마련",
      subtext: "신용점수 하락없이 카드만 있으면 최대 300만원까지 당일 입금",
    },
    {
      type: "정보이용료 현금화",
      rate: "88%",
      description: "소액결제 한도가 없어도\n높은 정산율 즉시 현금마련",
      subtext: "복잡한 설치 없이 1분만에 빠른 현금화 단순한 과정 빠른 입금",
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="relative overflow-hidden border-2 p-6 hover:border-primary transition-colors">
              <div className="mb-4 text-center">
                <div className="text-lg font-bold text-foreground mb-2">{service.type}</div>
                <div className="text-4xl font-bold text-primary mb-4">{service.rate}</div>
                <p className="text-sm text-muted-foreground whitespace-pre-line mb-3">{service.description}</p>
                <p className="text-xs text-muted-foreground">{service.subtext}</p>
              </div>
              <Button asChild className="w-full bg-primary text-primary-foreground hover:bg-primary/90 mt-4">
                <a href="https://untactsave.com" target="_blank" rel="noopener noreferrer">
                  상담하기
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
