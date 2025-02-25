import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Bell } from "lucide-react"

export function SituationalAwareness() {
  const recentAlerts = [
    {
      id: 1,
      title: "Sudden increase in website visits",
      description: "Lead XYZ showed a 200% increase in website activity in the last 24 hours.",
    },
    {
      id: 2,
      title: "Multiple demo requests",
      description: "Lead ABC requested 3 product demos within a week, indicating high interest.",
    },
    {
      id: 3,
      title: "Social media engagement spike",
      description: "Lead DEF interacted with 5 company posts on LinkedIn in the past 2 days.",
    },
  ]

  return (
    <div className="space-y-4">
      {recentAlerts.map((alert) => (
        <Alert key={alert.id}>
          <Bell className="h-4 w-4" />
          <AlertTitle>{alert.title}</AlertTitle>
          <AlertDescription>{alert.description}</AlertDescription>
        </Alert>
      ))}
    </div>
  )
}

