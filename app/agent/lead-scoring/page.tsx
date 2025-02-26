
"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Brain, Activity, BotIcon as Robot, Users, Layers, Scale } from "lucide-react"
import Link from "next/link"
import { ContextDecisions } from "@/components/lead-scoring/context-decisions"
import { SituationalAwareness } from "@/components/lead-scoring/situational-awareness"
import { AutonomyLevel } from "@/components/lead-scoring/autonomy-level"
import { AgentCollaboration } from "@/components/lead-scoring/agent-collaboration"
import { MultimodalCapabilities } from "@/components/lead-scoring/multimodal-capabilities"
import { ReasoningAbilities } from "@/components/lead-scoring/reasoning-abilities"

export default function LeadScoringAgentDashboard() {
  const [isActive, setIsActive] = useState(true);
  const [isAutomatic, setIsAutomatic] = useState(true);
  const [confidence, setConfidence] = useState([75]);
  const [riskTolerance, setRiskTolerance] = useState([50]);
  const [processingPriority, setProcessingPriority] = useState([5]);
  
  return (
    <div className="container mx-auto p-4">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>
      
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Lead Scoring Agent Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Switch id="agent-status" checked={isActive} onCheckedChange={setIsActive} />
            <label htmlFor="agent-status">Active</label>
          </div>
          <Button variant="outline">Reset Agent</Button>
        </div>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
        <Card>
          <CardHeader>
            <CardTitle>Performance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">92%</div>
            <p className="text-sm text-muted-foreground">Accuracy Rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Processing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">95ms</div>
            <p className="text-sm text-muted-foreground">Average Latency</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Decisions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,456</div>
            <p className="text-sm text-muted-foreground">Total Processed</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Agent Controls</CardTitle>
          <CardDescription>Configure agent behavior and thresholds</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Automatic Mode</label>
            <div className="flex items-center gap-2">
              <Switch id="automatic-mode" checked={isAutomatic} onCheckedChange={setIsAutomatic} />
              <span className="text-sm text-muted-foreground">Enable automatic decisions</span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Confidence Threshold</label>
            <Slider value={confidence} onValueChange={setConfidence} max={100} step={1} className="w-full" />
            <span className="text-sm text-muted-foreground">Minimum confidence score required for automatic decisions</span>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Processing Priority</label>
            <Slider value={processingPriority} onValueChange={setProcessingPriority} max={10} min={1} step={1} className="w-full" />
            <span className="text-sm text-muted-foreground">Set priority level for lead processing</span>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="decisions" className="space-y-4">
        <TabsList>
          <TabsTrigger value="decisions">Decisions</TabsTrigger>
          <TabsTrigger value="awareness">Awareness</TabsTrigger>
          <TabsTrigger value="autonomy">Autonomy</TabsTrigger>
          <TabsTrigger value="collaboration">Collaboration</TabsTrigger>
          <TabsTrigger value="capabilities">Capabilities</TabsTrigger>
          <TabsTrigger value="reasoning">Reasoning</TabsTrigger>
        </TabsList>
        <TabsContent value="decisions"><ContextDecisions /></TabsContent>
        <TabsContent value="awareness"><SituationalAwareness /></TabsContent>
        <TabsContent value="autonomy"><AutonomyLevel /></TabsContent>
        <TabsContent value="collaboration"><AgentCollaboration /></TabsContent>
        <TabsContent value="capabilities"><MultimodalCapabilities /></TabsContent>
        <TabsContent value="reasoning"><ReasoningAbilities /></TabsContent>
      </Tabs>
    </div>
  )
}
