import { Card } from "@/components/ui/card"
import { ShieldAlert, Phone } from "lucide-react"

export function Warning() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <Card className="border-2 border-red-200 bg-red-50 p-6 md:p-8">
          <div className="space-y-6 text-center">
            <div className="flex justify-center">
              <ShieldAlert className="h-12 w-12 text-red-600" />
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-red-900 md:text-3xl">피싱·사칭에 주의</h3>
              <p className="text-pretty text-base text-red-800 md:text-lg">
                저희 바로티켓은 단, <span className="font-bold">1개</span> 뿐입니다.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6">
              <div className="flex items-center justify-center gap-3">
                <Phone className="h-6 w-6 text-primary" />
                <a href="tel:010-5782-5248" className="text-2xl font-bold text-primary hover:underline md:text-3xl">
                  010-5782-5248
                </a>
              </div>
              <p className="mt-3 text-sm font-semibold text-gray-700 md:text-base">
                전화번호를 <span className="text-red-600">'반드시'</span> 확인 후 이용해주세요.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
