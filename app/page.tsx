import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Activity, Users, TrendingUp, Mail, PieChart, Clock } from "lucide-react"
import Link from "next/link"

export default function Dashboard() {
  const agents = [
    { name: "Data Enrichment", icon: Users, description: "Pulls missing lead info from external sources" },
    {
      name: "Engagement Analysis",
      icon: Activity,
      description: "Tracks email opens, call logs, LinkedIn interactions",
    },
    { name: "Lead Scoring", icon: TrendingUp, description: "Assigns scores dynamically" },
    { name: "Follow-up AI", icon: Mail, description: "Automates personalized responses" },
    { name: "Pipeline Optimization", icon: PieChart, description: "Identifies bottlenecks & suggests fixes" },
    { name: "Historical Analysis", icon: Clock, description: "Compares leads against past closed deals" },
  ]

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Lead Management Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <Card key={agent.name} className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{agent.name}</CardTitle>
              <agent.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <CardDescription>{agent.description}</CardDescription>
              <Button className="mt-4" variant="outline" asChild>
                <Link href={`/agent/${agent.name.toLowerCase().replace(" ", "-")}`}>View Metrics</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Agent Interactions</CardTitle>
          <CardDescription>Adjust agent interactions using the graph editor below</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="graph" className="w-full">
            <TabsList>
              <TabsTrigger value="graph">Graph Editor</TabsTrigger>
              <TabsTrigger value="metrics">Overall Metrics</TabsTrigger>
            </TabsList>
            <TabsContent value="graph">
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Interactive Graph Editor Placeholder</p>
              </div>
            </TabsContent>
            <TabsContent value="metrics">
              <div className="h-[400px] flex items-center justify-center border rounded-md">
                <p className="text-muted-foreground">Overall Metrics Display Placeholder</p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

