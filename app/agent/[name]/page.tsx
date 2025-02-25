
"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, Activity, Brain, Settings, History, Target } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { LineChart, BarChart } from "@/components/charts"

export default function AgentMetrics({ params }: { params: { name: string } }) {
  const agentName = params.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const [isAutomatic, setIsAutomatic] = useState(true)
  const [confidence, setConfidence] = useState([0.7])
  const [isActive, setIsActive] = useState(true)

  const performanceData = [
    { date: "Mon", value: 75 },
    { date: "Tue", value: 82 },
    { date: "Wed", value: 78 },
    { date: "Thu", value: 85 },
    { date: "Fri", value: 90 },
  ]

  const decisionData = [
    { name: "Successful", value: 85, color: "#22c55e" },
    { name: "Pending", value: 10, color: "#3b82f6" },
    { name: "Failed", value: 5, color: "#ef4444" },
  ]

  return (
    <div className="container mx-auto p-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
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
        <Button variant="outline" className="gap-2">
          <Settings className="h-4 w-4" />
          Configure
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-blue-500" />
              Performance Score
            </CardTitle>
            <CardDescription>Weekly performance trend</CardDescription>
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
              Decision Distribution
            </CardTitle>
            <CardDescription>Recent decision outcomes</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <BarChart data={decisionData.map(d => ({ name: d.name, score: d.value, impact: '' }))} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <History className="h-5 w-5 text-green-500" />
              Recent Activity
            </CardTitle>
            <CardDescription>Last 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1,2,3].map(i => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span className="text-muted-foreground">Processed lead scoring request</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="lg:col-span-3">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-orange-500" />
              Agent Controls
            </CardTitle>
            <CardDescription>Configure agent behavior and automation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Agent Status</h3>
                    <p className="text-sm text-muted-foreground">Enable or disable the agent</p>
                  </div>
                  <Switch checked={isActive} onCheckedChange={setIsActive} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Automatic Mode</h3>
                    <p className="text-sm text-muted-foreground">Allow automated decisions</p>
                  </div>
                  <Switch checked={isAutomatic} onCheckedChange={setIsAutomatic} />
                </div>
              </div>
              
              <div className="space-y-2">
                <div>
                  <h3 className="font-medium">Confidence Threshold</h3>
                  <p className="text-sm text-muted-foreground">Minimum confidence for automation</p>
                </div>
                <div className="pt-2">
                  <Slider
                    value={confidence}
                    onValueChange={setConfidence}
                    max={1}
                    step={0.1}
                    className="w-full"
                  />
                  <div className="text-right text-sm mt-1">{(confidence[0] * 100).toFixed(0)}%</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
