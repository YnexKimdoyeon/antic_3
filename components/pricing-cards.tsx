import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function PricingCards() {
  const plans = [
    {
      type: "컬쳐랜드",
      discount: "95%",
      description: "문화상품권 최고가 매입",
      color: "bg-blue-500",
    },
    {
      type: "해피머니",
      discount: "96%",
      description: "해피머니 상품권 매입",
      color: "bg-primary",
    },
    {
      type: "북앤라이프",
      discount: "94%",
      description: "도서문화상품권 매입",
      color: "bg-orange-500",
    },
  ]

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">상품권 매입 시세</h2>
          <p className="text-muted-foreground">상품권 종류별 실시간 매입가를 확인하세요</p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className="relative overflow-hidden border-2 p-6 hover:border-primary transition-colors">
              <div className="mb-4">
                <Badge className={`${plan.color} text-white mb-2`}>{plan.type}</Badge>
                <div className="text-4xl font-bold text-primary mb-2">{plan.discount}</div>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">판매하기</Button>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="link" className="text-primary">
            전체 상품권 시세 보기 →
          </Button>
        </div>
      </div>
    </section>
  )
}
