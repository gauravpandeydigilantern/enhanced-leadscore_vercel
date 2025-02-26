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
      name: "Engagement Analysis",
      sequence: "1️⃣",
      icon: Activity,
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: ["Monitors lead interactions", "Calculates engagement scores", "Applies time decay models"],
      accuracy: "95%",
      capabilities: ["Engagement", "Analytics", "Behavioral"]
    },
    {
      name: "Lead Scoring",
      sequence: "2️⃣",
      icon: TrendingUp,
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: ["Combines engagement data", "Applies ML models", "Predicts conversion probability"],
      accuracy: "92%",
      capabilities: ["ML", "Prediction", "Scoring"]
    },
    {
      name: "Follow-up AI",
      sequence: "3️⃣",
      icon: Mail,
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: ["Determines optimal follow-up actions", "Selects communication channels", "Uses Multi-Armed Bandit algorithms"],
      accuracy: "94%",
      capabilities: ["Automation", "Personalization", "Optimization"]
    },
    {
      name: "Pipeline Optimization",
      sequence: "4️⃣",
      icon: PieChart,
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: ["Identifies dropoff points", "Suggests improvements", "Adjusts AI model weightings"],
      accuracy: "91%",
      capabilities: ["Analysis", "Optimization", "Strategy"]
    },
    {
      name: "Historical Analysis",
      sequence: "5️⃣",
      icon: Clock,
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: ["Compares current leads", "Calculates similarity scores", "Enhances prediction accuracy"],
      accuracy: "96%",
      capabilities: ["Pattern Recognition", "Analysis", "Prediction"]
    },
    {
      name: "Prompting",
      sequence: "6️⃣",
      icon: Users,
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: ["Generates dynamic queries across agents", "Creates conversational insights", "Provides real-time recommendations"],
      accuracy: "99%",
      capabilities: ["Text", "Chat", "Query"]
    },
    {
      name: "Engagement Analysis",
      icon: Activity,
      decisions: ["Monitors lead interactions", "Calculates engagement scores", "Applies time decay models"],
      accuracy: "95%",
      capabilities: ["Engagement", "Analytics", "Behavioral"]
    },
    {
      name: "Lead Scoring",
      icon: TrendingUp,
      decisions: ["Combines engagement data", "Applies ML models", "Predicts conversion probability"],
      accuracy: "92%",
      capabilities: ["ML", "Prediction", "Scoring"],
      hasWarning: true
    },
    {
      name: "Follow-up AI",
      icon: Mail,
      decisions: ["Determines optimal follow-up actions", "Selects communication channels", "Uses Multi-Armed Bandit algorithms"],
      accuracy: "94%",
      capabilities: ["Automation", "Personalization", "Optimization"]
    },
    {
      name: "Pipeline Optimization",
      icon: PieChart,
      decisions: ["Identifies dropoff points", "Suggests improvements", "Adjusts AI model weightings"],
      accuracy: "91%",
      capabilities: ["Analysis", "Optimization", "Strategy"]
    },
    {
      name: "Historical Analysis",
      icon: Clock,
      decisions: ["Compares current leads", "Calculates similarity scores", "Enhances prediction accuracy"],
      accuracy: "96%",
      capabilities: ["Pattern Recognition", "Analysis", "Prediction"],
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
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold">{agent.sequence}</span>
                    <agent.icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <CardTitle className="text-lg">{agent.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {agent.description}
                </CardDescription>
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
                <div className="mb-4">
                  <p className="text-2xl font-bold">{agent.accuracy}</p>
                  <p className="text-xs text-muted-foreground">Accuracy</p>
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