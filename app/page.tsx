import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AgentDashboard } from "@/components/agent-dashboard"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { AskEvoOrch } from "@/components/ask-evo-orch"

export default function Dashboard() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Lead Management Platform</h1>
      <Tabs defaultValue="analytics" className="w-full">
        <TabsList>
          <TabsTrigger value="analytics">AI Analytics</TabsTrigger>
          <TabsTrigger value="agents">AI Agents</TabsTrigger>
          <TabsTrigger value="ask">Ask EvoOrch</TabsTrigger>
        </TabsList>
        <TabsContent value="analytics">
          <AnalyticsDashboard />
        </TabsContent>
        <TabsContent value="agents">
          <AgentDashboard />
        </TabsContent>
        <TabsContent value="ask">
          <AskEvoOrch />
        </TabsContent>
      </Tabs>
    </div>
  )
}