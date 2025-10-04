import { CheckCircle2 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/30 py-20 md:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <CheckCircle2 className="h-4 w-4" />
            안전한 상품권 현금화의 시작
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground md:text-6xl text-balance">
            최고가 상품권 매입
            <br />
            <span className="text-primary">상품권 팩토리</span>에서 시작하세요
          </h1>

          <p className="mb-8 text-lg text-muted-foreground md:text-xl text-pretty">
            컬쳐랜드, 해피머니, 북앤라이프 등 모든 상품권을
            <br className="hidden md:block" />
            시중 최고가로 즉시 매입해드립니다
          </p>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>즉시 현금화</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>시중 최고가 매입</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>24시간 빠른 입금</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
