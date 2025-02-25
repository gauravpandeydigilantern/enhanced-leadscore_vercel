
"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Settings, Activity, Target, Brain, AlertCircle } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { LineChart } from "@/components/charts"

export default function AgentMetrics({ params }: { params: { name: string } }) {
  const agentName = params.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const [isAutomatic, setIsAutomatic] = useState(true)
  const [confidence, setConfidence] = useState([0.7])
  const [isActive, setIsActive] = useState(true)
  const [riskTolerance, setRiskTolerance] = useState([0.5])

  const performanceData = [
    { date: '2024-01', value: 65 },
    { date: '2024-02', value: 75 },
    { date: '2024-03', value: 85 },
    { date: '2024-04', value: 80 },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" asChild>
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Link>
        </Button>
        <h1 className="text-3xl font-bold">{agentName}</h1>
        <div className={`px-2 py-1 rounded-full text-sm ${isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
          {isActive ? 'Active' : 'Inactive'}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="col-span-full">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              Agent Controls
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Agent Status</h3>
                    <p className="text-sm text-muted-foreground">Enable/disable agent</p>
                  </div>
                  <Switch checked={isActive} onCheckedChange={setIsActive} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Automatic Mode</h3>
                    <p className="text-sm text-muted-foreground">Allow autonomous decisions</p>
                  </div>
                  <Switch checked={isAutomatic} onCheckedChange={setIsAutomatic} />
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Confidence Threshold</h3>
                  <p className="text-sm text-muted-foreground">Min confidence for actions</p>
                  <Slider
                    value={confidence}
                    onValueChange={setConfidence}
                    max={1}
                    step={0.1}
                    className="mt-2"
                  />
                  <p className="text-right text-sm mt-1">{(confidence[0] * 100).toFixed(0)}%</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Risk Tolerance</h3>
                  <p className="text-sm text-muted-foreground">Acceptable risk level</p>
                  <Slider
                    value={riskTolerance}
                    onValueChange={setRiskTolerance}
                    max={1}
                    step={0.1}
                    className="mt-2"
                  />
                  <p className="text-right text-sm mt-1">{(riskTolerance[0] * 100).toFixed(0)}%</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-500" />
              Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <LineChart data={performanceData.map(d => ({ date: d.date, rate: d.value / 100 }))} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-purple-500" />
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
              <AlertCircle className="h-5 w-5 text-yellow-500" />
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
      </div>
    </div>
  )
}
