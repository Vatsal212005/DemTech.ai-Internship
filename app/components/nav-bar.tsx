import Link from "next/link"
import { Button } from "@/components/ui/button"

export function NavBar() {
  return (
    <nav className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold">
            Mailing Scheduler
          </Link>
          <div className="flex space-x-4">
            <Button variant="ghost" asChild className="hover:bg-primary/20">
              <Link href="/">Dashboard</Link>
            </Button>
            <Button variant="ghost" asChild className="hover:bg-primary/20">
              <Link href="/schedule">Schedule Mailing</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

