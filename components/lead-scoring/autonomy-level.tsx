import { Progress } from "@/components/ui/progress"

export function AutonomyLevel() {
  const autonomyPercentage = 75

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <span>AI-Driven Actions</span>
        <span>{autonomyPercentage}%</span>
      </div>
      <Progress value={autonomyPercentage} className="w-full" />
      <p className="text-sm text-muted-foreground">
        The Lead Scoring Agent is currently operating at {autonomyPercentage}% autonomy, with the remaining actions
        requiring human oversight or intervention.
      </p>
    </div>
  )
}

