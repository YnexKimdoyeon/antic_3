import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="text-lg font-bold text-primary-foreground">상</span>
          </div>
          <span className="text-xl font-bold text-foreground">상품권 팩토리</span>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            가격안내
          </a>
          <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            이용방법
          </a>
          <a href="#faq" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
            자주묻는질문
          </a>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  )
}
