import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ReasoningAbilities() {
  const leadScoreBreakdown = [
    { factor: "Website Visits", impact: "High", score: 30 },
    { factor: "Email Engagement", impact: "Medium", score: 20 },
    { factor: "Social Media Interaction", impact: "Low", score: 10 },
    { factor: "Demo Requests", impact: "High", score: 25 },
    { factor: "Content Downloads", impact: "Medium", score: 15 },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lead Score Breakdown</CardTitle>
        <CardDescription>Transparent reasoning for a sample lead score</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {leadScoreBreakdown.map((item, index) => (
            <li key={index} className="flex justify-between items-center">
              <span>{item.factor}</span>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={item.impact === "High" ? "destructive" : item.impact === "Medium" ? "default" : "secondary"}
                >
                  {item.impact}
                </Badge>
                <span className="font-bold">{item.score}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-4 pt-4 border-t">
          <p className="text-sm text-muted-foreground">
            Total Score: <span className="font-bold">100</span>
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            This breakdown shows how different factors contribute to the overall lead score, providing transparency in
            the AI's decision-making process.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}

