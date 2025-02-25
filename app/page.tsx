import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AgentDashboard } from "@/components/agent-dashboard"
import { AnalyticsDashboard } from "@/components/analytics-dashboard"
import { AskEvoOrch } from "@/components/ask-evo-orch"

export default function Dashboard() {
  return (
    <div className="container mx-auto py-6 px-4 max-w-7xl">
      <h1 className="text-4xl font-bold mb-8 text-gray-900 dark:text-gray-100">Lead Management Platform</h1>
      <Tabs defaultValue="analytics" className="w-full space-y-6">
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