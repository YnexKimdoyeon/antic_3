"use client"

import { useEffect, useState } from "react"

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const deposits = [
    { name: "김**님", amount: "500,000원", time: "방금 전" },
    { name: "이**님", amount: "1,200,000원", time: "2분 전" },
    { name: "박**님", amount: "800,000원", time: "5분 전" },
    { name: "최**님", amount: "2,000,000원", time: "8분 전" },
    { name: "정**님", amount: "650,000원", time: "12분 전" },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % deposits.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [deposits.length])

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-primary/5 to-primary/10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-balance">
            실시간 입금 현황
          </h2>

          <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border-2 border-primary/20 bg-white p-8 shadow-xl">
            <div className="space-y-4">
              {deposits.map((deposit, index) => (
                <div
                  key={index}
                  className={`flex items-center justify-between rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-4 transition-all duration-500 ${
                    index === currentIndex ? "scale-105 border-2 border-primary" : "opacity-50"
                  }`}
                >
                  <div className="text-left">
                    <div className="font-bold text-foreground">{deposit.name}</div>
                    <div className="text-sm text-muted-foreground">{deposit.time}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-bold text-primary">{deposit.amount}</div>
                    <div className="text-xs text-green-600">입금완료</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">* 실시간으로 업데이트되는 입금 현황입니다</p>
        </div>
      </div>
    </section>
  )
}
