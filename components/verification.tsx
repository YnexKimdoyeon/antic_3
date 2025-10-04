import { CheckCircle2 } from "lucide-react"

export function Verification() {
  return (
    <section className="py-20 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center justify-center rounded-full bg-primary p-4">
            <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            상품권 팩토리는 <span className="text-primary">자사입니다</span>
          </h2>

          <p className="mb-12 text-lg text-muted-foreground">
            수많은 고객님들이 선택한 안전한 상품권 매입 플랫폼
            <br />
            지금 바로 확인해보세요!
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg bg-secondary/50 p-6">
              <div className="mb-3 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">상품권 진위 확인</h3>
              <p className="text-sm text-muted-foreground">정품 상품권만 매입하여 안전 보장</p>
            </div>

            <div className="rounded-lg bg-secondary/50 p-6">
              <div className="mb-3 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">실시간 채팅 지원</h3>
              <p className="text-sm text-muted-foreground">빠른 문의와 즉각적인 답변</p>
            </div>

            <div className="rounded-lg bg-secondary/50 p-6">
              <div className="mb-3 flex items-center justify-center">
                <div className="rounded-full bg-primary/10 p-3">
                  <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-2 font-semibold text-foreground">즉시 입금 시스템</h3>
              <p className="text-sm text-muted-foreground">확인 즉시 빠른 현금 입금</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
