"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import {
  ArrowLeft,
  Brain,
  Activity,
  BotIcon as Robot,
  Users,
  Layers,
  Scale,
} from "lucide-react";
import Link from "next/link";
import { ContextDecisions } from "@/components/lead-scoring/context-decisions";
import { SituationalAwareness } from "@/components/lead-scoring/situational-awareness";
import { AutonomyLevel } from "@/components/lead-scoring/autonomy-level";
import { AgentCollaboration } from "@/components/lead-scoring/agent-collaboration";
import { MultimodalCapabilities } from "@/components/lead-scoring/multimodal-capabilities";
import { ReasoningAbilities } from "@/components/lead-scoring/reasoning-abilities";

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
            <Switch
              id="agent-status"
              checked={isActive}
              onCheckedChange={setIsActive}
            />
            <label htmlFor="agent-status">Active</label>
          </div>
          <Button variant="outline">Reset Agent</Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Goal</CardTitle>
            <Target className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Evaluate and rank leads based on their likelihood to convert using
              ML models and behavioral data analysis
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Action</CardTitle>
            <Activity className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• Combines engagement data</li>
              <li>• Applies ML models</li>
              <li>• Predicts conversion probability</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Workflow</CardTitle>
            <Brain className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Data Collection → Feature Engineering → ML Model Application →
              Score Generation → CRM Update
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Agent Controls</CardTitle>
          <CardDescription>
            Configure agent behavior and thresholds
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Automatic Mode</label>
            <div className="flex items-center gap-2">
              <Switch
                id="automatic-mode"
                checked={isAutomatic}
                onCheckedChange={setIsAutomatic}
              />
              <span className="text-sm text-muted-foreground">
                Enable automatic decisions
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Confidence Threshold</label>
            <Slider
              value={confidence}
              onValueChange={setConfidence}
              max={100}
              step={1}
              className="w-full"
            />
            <span className="text-sm text-muted-foreground">
              Minimum confidence score required for automatic decisions
            </span>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">Processing Priority</label>
            <Slider
              value={processingPriority}
              onValueChange={setProcessingPriority}
              max={10}
              min={1}
              step={1}
              className="w-full"
            />
            <span className="text-sm text-muted-foreground">
              Set priority level for lead processing
            </span>
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
        <TabsContent value="decisions">
          <ContextDecisions />
        </TabsContent>
        <TabsContent value="awareness">
          <SituationalAwareness />
        </TabsContent>
        <TabsContent value="autonomy">
          <AutonomyLevel />
        </TabsContent>
        <TabsContent value="collaboration">
          <AgentCollaboration />
        </TabsContent>
        <TabsContent value="capabilities">
          <MultimodalCapabilities />
        </TabsContent>
        <TabsContent value="reasoning">
          <ReasoningAbilities />
        </TabsContent>
      </Tabs>
    </div>
  );
}
