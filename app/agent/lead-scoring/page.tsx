"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Brain, Activity, BotIcon as Robot, Users, Layers, Scale } from "lucide-react"
import Link from "next/link"
import { ContextDecisions } from "@/components/lead-scoring/context-decisions"
import { SituationalAwareness } from "@/components/lead-scoring/situational-awareness"
import { AutonomyLevel } from "@/components/lead-scoring/autonomy-level"
import { AgentCollaboration } from "@/components/lead-scoring/agent-collaboration"
import { MultimodalCapabilities } from "@/components/lead-scoring/multimodal-capabilities"
import { ReasoningAbilities } from "@/components/lead-scoring/reasoning-abilities"

export default function LeadScoringAgentDashboard() {
  return (
    <div className="container mx-auto p-4">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>
      <h1 className="text-3xl font-bold mb-6">Lead Scoring Agent Dashboard</h1>

      <Tabs defaultValue="context" className="w-full">
        <TabsList className="grid w-full grid-cols-3 md:grid-cols-6">
          <TabsTrigger value="context">
            <Brain className="mr-2 h-4 w-4" />
            Context
          </TabsTrigger>
          <TabsTrigger value="awareness">
            <Activity className="mr-2 h-4 w-4" />
            Awareness
          </TabsTrigger>
          <TabsTrigger value="autonomy">
            <Robot className="mr-2 h-4 w-4" />
            Autonomy
          </TabsTrigger>
          <TabsTrigger value="collaboration">
            <Users className="mr-2 h-4 w-4" />
            Collaboration
          </TabsTrigger>
          <TabsTrigger value="multimodal">
            <Layers className="mr-2 h-4 w-4" />
            Multimodal
          </TabsTrigger>
          <TabsTrigger value="reasoning">
            <Scale className="mr-2 h-4 w-4" />
            Reasoning
          </TabsTrigger>
        </TabsList>
        <TabsContent value="context">
          <Card>
            <CardHeader>
              <CardTitle>Context-Based Decisions</CardTitle>
              <CardDescription>Historical AI lead score adjustments</CardDescription>
            </CardHeader>
            <CardContent>
              <ContextDecisions />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="awareness">
          <Card>
            <CardHeader>
              <CardTitle>Situational Awareness</CardTitle>
              <CardDescription>Alerts on sudden lead activity changes</CardDescription>
            </CardHeader>
            <CardContent>
              <SituationalAwareness />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="autonomy">
          <Card>
            <CardHeader>
              <CardTitle>Autonomy</CardTitle>
              <CardDescription>Level of AI-driven vs. human-driven actions</CardDescription>
            </CardHeader>
            <CardContent>
              <AutonomyLevel />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="collaboration">
          <Card>
            <CardHeader>
              <CardTitle>Multiagent Collaboration</CardTitle>
              <CardDescription>Coordination efficiency with other agents</CardDescription>
            </CardHeader>
            <CardContent>
              <AgentCollaboration />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="multimodal">
          <Card>
            <CardHeader>
              <CardTitle>Multimodal Capabilities</CardTitle>
              <CardDescription>Data processing from text, audio, and behavioral analytics</CardDescription>
            </CardHeader>
            <CardContent>
              <MultimodalCapabilities />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="reasoning">
          <Card>
            <CardHeader>
              <CardTitle>Reasoning Abilities</CardTitle>
              <CardDescription>Transparent breakdown of why a lead received a specific score</CardDescription>
            </CardHeader>
            <CardContent>
              <ReasoningAbilities />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

