"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Activity, Users, TrendingUp, Mail, PieChart, Clock, AlertTriangle } from "lucide-react"
import Link from "next/link"
import { AgentNetworkUML } from "./agent-network-uml"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "./ui/badge"

export function AgentDashboard() {
  const agents = [
    { 
      name: "Prompting",
      icon: Users,
      decisions: [
        "Updated lead data quality score",
        "Enriched contact information",
        "Validated company details"
      ],
      accuracy: "99%",
      latency: "75ms",
      capabilities: ["Text", "Chat", "Query"],
      hasWarning: true
    },
    {
      name: "Engagement Analysis",
      icon: Activity,
      decisions: "2,345 decisions",
      accuracy: "95%",
      latency: "120ms",
      capabilities: ["Text", "Audio", "Behavioral"]
    },
    {
      name: "Lead Scoring",
      icon: TrendingUp,
      decisions: "3,456 decisions",
      accuracy: "92%",
      latency: "95ms",
      capabilities: ["Text", "Behavioral"],
      hasWarning: true
    },
    {
      name: "Follow-up AI",
      icon: Mail,
      decisions: "4,567 decisions",
      accuracy: "94%",
      latency: "150ms",
      capabilities: ["Text", "Audio"]
    },
    {
      name: "Pipeline Optimization",
      icon: PieChart,
      decisions: "5,678 decisions",
      accuracy: "91%",
      latency: "200ms",
      capabilities: ["Text", "Behavioral"]
    },
    {
      name: "Historical Analysis",
      icon: Clock,
      decisions: "6,789 decisions",
      accuracy: "96%",
      latency: "180ms",
      capabilities: ["Text", "Behavioral"],
      errors: 1
    }
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
                <CardTitle className="text-sm font-medium flex items-center gap-2">
                  <agent.icon className="h-4 w-4 text-muted-foreground" />
                  {agent.name}
                  {agent.hasWarning && <AlertTriangle className="h-4 w-4 text-yellow-500" />}
                  {agent.errors && <Badge variant="destructive">{agent.errors}</Badge>}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 mb-4">
                  {Array.isArray(agent.decisions) ? (
                    agent.decisions.map((decision, i) => (
                      <p key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        {decision}
                      </p>
                    ))
                  ) : (
                    <p className="text-sm text-muted-foreground">{agent.decisions}</p>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-2xl font-bold">{agent.accuracy}</p>
                    <p className="text-xs text-muted-foreground">Accuracy</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{agent.latency}</p>
                    <p className="text-xs text-muted-foreground">Latency</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {agent.capabilities.map((capability) => (
                    <Badge key={capability} variant="secondary" className="capitalize">
                      {capability}
                    </Badge>
                  ))}
                </div>
                <Button className="mt-4 w-full" variant="outline" asChild>
                  <Link href={`/agent/${agent.name.toLowerCase().replace(" ", "-")}`}>View Details</Link>
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