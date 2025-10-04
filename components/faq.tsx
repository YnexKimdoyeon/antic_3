import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  const faqs = [
    {
      question: "어떤 상품권을 매입하나요?",
      answer:
        "컬쳐랜드, 해피머니, 북앤라이프, 도서문화상품권 등 주요 상품권을 모두 매입합니다. 기타 상품권도 문의 주시면 매입 가능 여부를 안내해드립니다.",
    },
    {
      question: "매입 시세는 어떻게 되나요?",
      answer:
        "상품권 종류와 금액에 따라 92%~95%의 시세로 매입합니다. 실시간 시세는 고객센터로 문의하시면 즉시 안내해드립니다.",
    },
    {
      question: "입금은 얼마나 걸리나요?",
      answer:
        "상품권 확인 후 즉시 입금 처리됩니다. 평균 10분 이내에 입금이 완료되며, 늦어도 24시간 이내에 입금을 보장합니다.",
    },
    {
      question: "안전한 거래인가요?",
      answer:
        "네, 모든 상품권은 정품 확인 후 매입하며, 문제 발생 시 100% 책임집니다. 수년간 무사고 운영으로 신뢰를 쌓아왔습니다.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl">
              자주묻는 질문 <span className="text-primary">Q&A</span>
            </h2>
            <p className="text-muted-foreground">궁금하신 내용을 빠르게 확인하세요</p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left hover:text-primary">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <span className="text-sm font-bold text-primary">Q</span>
                    </div>
                    <span className="font-semibold">{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pl-11 text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 rounded-lg bg-secondary/50 p-8 text-center">
            <h3 className="mb-2 text-xl font-semibold text-foreground">더 궁금한 점이 있으신가요?</h3>
            <p className="mb-4 text-muted-foreground">고객센터로 문의주시면 친절하게 답변드리겠습니다</p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                카카오톡 문의하기
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
              >
                이메일 문의하기
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
