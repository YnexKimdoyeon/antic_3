export function Reviews() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-primary/10">
      <div className="container px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            고객님들의 생생한 후기
          </div>

          <h2 className="mb-12 text-3xl font-bold text-foreground md:text-4xl">
            고객님들의 실제 거래 후기가 증명합니다
          </h2>

          <div className="relative mx-auto max-w-sm">
            <div className="aspect-[9/16] overflow-hidden rounded-3xl border-8 border-foreground/10 bg-white shadow-2xl">
              <div className="flex h-full flex-col p-6">
                <div className="mb-6 text-left">
                  <div className="mb-2 text-sm text-muted-foreground">고객센터</div>
                  <div className="text-xs text-muted-foreground">오늘 오후 2:30</div>
                </div>

                <div className="flex-1 space-y-4">
                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-muted p-4">
                    <p className="text-sm text-foreground">
                      안녕하세요! 컬쳐랜드 5만원권
                      <br />
                      매입 가능한가요?
                      <br />
                      시세가 어떻게 되나요?
                    </p>
                  </div>

                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-primary p-4">
                    <p className="text-sm text-primary-foreground">
                      안녕하세요 고객님!
                      <br />
                      컬쳐랜드 5만원권은
                      <br />
                      현재 94% 매입 가능합니다 😊
                    </p>
                  </div>

                  <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-muted p-4">
                    <p className="text-sm text-foreground">
                      감사합니다! 그럼 바로
                      <br />
                      판매하겠습니다 👍
                    </p>
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 rounded-full bg-muted px-4 py-3">
                  <input
                    type="text"
                    placeholder="메시지를 입력하세요..."
                    className="flex-1 bg-transparent text-sm outline-none"
                    disabled
                  />
                  <div className="h-6 w-6 rounded-full bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
