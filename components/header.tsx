import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">바</span>
          </div>
          <span className="text-xl font-bold text-foreground">바로티켓</span>
        </div>

        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
          <a href="https://untactsave.com" target="_blank" rel="noopener noreferrer">
            상담하러 가기
          </a>
        </Button>
      </div>
    </header>
  )
}
