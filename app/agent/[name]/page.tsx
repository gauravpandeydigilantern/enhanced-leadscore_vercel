import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AgentMetrics({ params }: { params: { name: string } }) {
  const agentName = params.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  return (
    <div className="container mx-auto p-4">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>
      <h1 className="text-3xl font-bold mb-6">{agentName} Metrics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Performance metrics placeholder</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Decision History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Decision history placeholder</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

