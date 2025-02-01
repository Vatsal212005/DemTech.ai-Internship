import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import MailingScheduler from "../components/mailing-scheduler"

export default function SchedulePage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold">Schedule Mailing</h1>
      <Card>
        <CardHeader>
          <CardTitle>Create New Mailing</CardTitle>
          <CardDescription>Schedule a new mailing campaign</CardDescription>
        </CardHeader>
        <CardContent>
          <MailingScheduler />
        </CardContent>
      </Card>
    </div>
  )
}

