
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Users, TrendingUp, Mail, PieChart, Clock } from "lucide-react"
import Link from "next/link"
import { AgentNetworkUML } from "./agent-network-uml"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function AgentDashboard() {
  const agents = [
    { name: "Data Enrichment", icon: Users, description: "Pulls missing lead info from external sources" },
    { name: "Engagement Analysis", icon: Activity, description: "Tracks email opens, call logs, LinkedIn interactions" },
    { name: "Lead Scoring", icon: TrendingUp, description: "Assigns scores dynamically" },
    { name: "Follow-up AI", icon: Mail, description: "Automates personalized responses" },
    { name: "Pipeline Optimization", icon: PieChart, description: "Identifies bottlenecks & suggests fixes" },
    { name: "Historical Analysis", icon: Clock, description: "Compares leads against past closed deals" },
  ]

  return (
    <Tabs defaultValue="grid" className="w-full space-y-4">
      <TabsList>
        <TabsTrigger value="grid">Grid View</TabsTrigger>
        <TabsTrigger value="network">Network View</TabsTrigger>
      </TabsList>
      <TabsContent value="grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      </TabsContent>
      <TabsContent value="network">
        <AgentNetworkUML />
      </TabsContent>
    </Tabs>
  )
}
