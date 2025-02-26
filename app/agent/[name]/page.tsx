"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { ArrowLeft, Target, Activity, Bell, Brain, AlertCircle, Power, Gauge, Shield, CheckCircle, Clock, LineChart, InfoCircle } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";


export default function AgentMetrics({ params }: { params: { name: string } }) {
  const [isActive, setIsActive] = useState(true);
  const [isAutomatic, setIsAutomatic] = useState(true);
  const [confidence, setConfidence] = useState([75]); // Changed default value to 75
  const [processingPriority, setProcessingPriority] = useState([5]); // Added state for processing priority

  const agentName = params.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className="container mx-auto p-4">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>

      <div className="grid gap-4">
        <h1 className="text-3xl font-bold mb-6">{agentName} Dashboard</h1>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Goal</CardTitle>
              <Target className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Evaluate and rank leads based on their likelihood to convert using ML models and behavioral data analysis
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
                Data Collection → Feature Engineering → ML Model Application → Score Generation → CRM Update
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Agent Status</CardTitle>
              <CardDescription>Control agent operation state</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Power className="h-4 w-4" />
                <span>Active Status</span>
              </div>
              <Switch checked={isActive} onCheckedChange={setIsActive} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Operation Mode</CardTitle>
              <CardDescription>Toggle automatic/manual mode</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Brain className="h-4 w-4" />
                <span>Automatic Mode</span>
              </div>
              <Switch checked={isAutomatic} onCheckedChange={setIsAutomatic} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Confidence Threshold</CardTitle>
              <CardDescription>Minimum confidence for decisions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Slider
                  value={confidence}
                  onValueChange={setConfidence}
                  max={100}
                  min={0}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Min: 0%</span>
                  <span>Max: 100%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Risk Tolerance</CardTitle>
              <CardDescription>Agent risk assessment level</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Slider
                  value={[0.5]}
                  onValueChange={setRiskTolerance}
                  max={1}
                  step={0.1}
                  className="w-full"
                />
                <div className="text-right text-sm">50%</div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Autonomy Level</CardTitle>
              <CardDescription>Agent decision independence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Slider
                  value={autonomyLevel}
                  onValueChange={setAutonomyLevel}
                  max={1}
                  step={0.1}
                  className="w-full"
                />
                <div className="text-right text-sm">{autonomyLevel[0] * 100}%</div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Performance Metrics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <LineChart data={[{ date: '2024-01', rate: 0.65 }, { date: '2024-02', rate: 0.75 }, { date: '2024-03', rate: 0.85 }, { date: '2024-04', rate: 0.8 }]} />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Brain className="h-5 w-5" />
                Learning Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span>Pattern Recognition</span>
                  <span>92%</span>
                </div>
                <div className="flex justify-between">
                  <span>Decision Accuracy</span>
                  <span>87%</span>
                </div>
                <div className="flex justify-between">
                  <span>Adaptation Rate</span>
                  <span>95%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5" />
                Recent Decisions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-sm">
                  <p className="font-medium">Lead Score Updated</p>
                  <p className="text-muted-foreground">5 minutes ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Engagement Pattern Detected</p>
                  <p className="text-muted-foreground">15 minutes ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium">Risk Assessment Complete</p>
                  <p className="text-muted-foreground">1 hour ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Agent Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Automatic Mode</label>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <InfoCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>When enabled, the agent will make decisions without human intervention based on confidence threshold</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch id="automatic-mode" checked={isAutomatic} onCheckedChange={setIsAutomatic} />
                    <span className="text-sm text-muted-foreground">Enable automatic decisions</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Confidence Threshold</label>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <InfoCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Set the minimum confidence level required for the agent to make autonomous decisions (0-100%)</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Slider
                    defaultValue={[75]}
                    min={0}
                    max={100}
                    step={1}
                    className="w-full"
                    value={confidence}
                    onValueChange={setConfidence}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Min: 0%</span>
                    <span>Max: 100%</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <label className="text-sm font-medium">Processing Priority</label>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <InfoCircle className="h-4 w-4 text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Adjust the priority level for processing leads (1-10, higher values indicate higher priority)</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  <Slider
                    defaultValue={[5]}
                    min={1}
                    max={10}
                    step={1}
                    className="w-full"
                    value={processingPriority}
                    onValueChange={setProcessingPriority}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>Low: 1</span>
                    <span>High: 10</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}