import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

export function AlternativeMethods() {
  const methods = [
    { name: "컬쳐랜드 현금화", rate: "92%" },
    { name: "소액결제 현금화", rate: "90%" },
    { name: "원스토어 현금화", rate: "90%" },
  ]

  return (
    <section className="bg-gradient-to-b from-white to-red-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <Card className="border-2 border-amber-200 bg-amber-50 p-6 md:p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="h-6 w-6 flex-shrink-0 text-amber-600" />
            <div className="flex-1 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 md:text-2xl">한도초과?</h3>
              <p className="text-pretty text-sm text-gray-700 md:text-base">
                소액결제 한도를 모두 사용하셨나요?
                <br />
                컨텐츠 이용료, 앱스토어 이용료와 같은 수단도 현금화가 가능합니다.
              </p>
            </div>
          </div>
        </Card>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {methods.map((method, index) => (
            <Button
              key={index}
              asChild
              variant="outline"
              size="lg"
              className="h-auto border-2 border-primary/20 bg-white p-6 hover:border-primary hover:bg-primary/5"
            >
              <a
                href="https://untactsave.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center justify-center text-center"
              >
                <div className="text-lg font-bold text-gray-900">{method.name}</div>
                <div className="mt-2 text-2xl font-bold text-primary">{method.rate} 매입</div>
              </a>
            </Button>
          ))}
        </div>

        <div className="mt-6">
          <Button asChild size="lg" className="h-auto w-full p-6 text-lg">
            <a
              href="https://untactsave.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center"
            >
              <div className="font-bold">구글 컨텐츠 이용료</div>
              <div className="mt-1 text-xl">최대 88% 매입</div>
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
