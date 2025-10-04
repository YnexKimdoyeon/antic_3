export function HowItWorks() {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center justify-center rounded-full bg-primary p-4">
            <svg className="h-8 w-8 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
            <span className="text-primary">상품권 팩토리는</span> 오늘도
            <br />
            빠르고 안전한 현금화를 도와드립니다
          </h2>

          <p className="mb-12 text-lg text-muted-foreground">24시간 언제든지 안전하게</p>

          <div className="relative mx-auto max-w-sm">
            <div className="aspect-[9/16] overflow-hidden rounded-3xl border-8 border-foreground/10 bg-muted shadow-2xl">
              <div className="flex h-full flex-col bg-white p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-primary/10" />
                  <div className="flex-1">
                    <div className="mb-1 h-3 w-24 rounded bg-muted" />
                    <div className="h-2 w-16 rounded bg-muted" />
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary p-3">
                    <div className="h-2 w-32 rounded bg-primary-foreground/80" />
                  </div>
                  <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-muted p-3">
                    <div className="mb-2 h-2 w-40 rounded bg-foreground/20" />
                    <div className="h-2 w-28 rounded bg-foreground/20" />
                  </div>
                  <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary p-3">
                    <div className="h-2 w-24 rounded bg-primary-foreground/80" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-sm font-medium text-primary">지금 문의하시면 자동으로 매입 절차를 안내받습니다</p>
          </div>
        </div>
      </div>
    </section>
  )
}
