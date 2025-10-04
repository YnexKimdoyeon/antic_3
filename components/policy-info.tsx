import { Card } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export function PolicyInfo() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <Card className="border-2 border-primary/20 bg-white p-6 md:p-8">
          <div className="flex items-start gap-4">
            <AlertCircle className="h-6 w-6 flex-shrink-0 text-primary" />
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-900 md:text-2xl">정책이란?</h3>
              <p className="text-pretty text-sm leading-relaxed text-gray-700 md:text-base">
                <span className="font-semibold">다날 50, 다날 605, 다날 414, 다날 700, 다날 80, 다날 90</span>, 코드가
                보이시나요?
              </p>
              <p className="text-pretty text-sm leading-relaxed text-gray-700 md:text-base">
                현금성 상품 과다 구매 및 잦은 미납 혹은 현재 미납으로 인해 소액결제 대행사에서 임시 차단한 상태를
                일컫는데요,
              </p>
              <p className="text-pretty text-base font-bold text-primary md:text-lg">
                저희 바로티켓에서는 정책, 미납 코드가 떠도 해결해 드립니다.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
