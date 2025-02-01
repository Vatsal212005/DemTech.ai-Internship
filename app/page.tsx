import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import ScheduledMailings from "./components/scheduled-mailings"

export default function Home() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <Card>
        <CardHeader>
          <CardTitle>Scheduled Mailings</CardTitle>
          <CardDescription>View and manage your scheduled mailings</CardDescription>
        </CardHeader>
        <CardContent>
          <ScheduledMailings />
        </CardContent>
      </Card>
    </div>
  )
}

