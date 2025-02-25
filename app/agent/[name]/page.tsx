
"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function AgentMetrics({ params }: { params: { name: string } }) {
  const agentName = params.name
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")

  const [isAutomatic, setIsAutomatic] = useState(true)
  const [confidence, setConfidence] = useState([0.7])
  const [isActive, setIsActive] = useState(true)

  return (
    <div className="container mx-auto p-4">
      <Button variant="ghost" asChild className="mb-4">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Link>
      </Button>
      <h1 className="text-3xl font-bold mb-6">{agentName} Metrics</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Performance metrics placeholder</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Decision History</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Decision history placeholder</p>
          </CardContent>
        </Card>
        
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Agent Controls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-medium">Agent Status</h3>
                  <p className="text-sm text-muted-foreground">Enable or disable the agent</p>
                </div>
                <Switch checked={isActive} onCheckedChange={setIsActive} />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <h3 className="font-medium">Automatic Mode</h3>
                  <p className="text-sm text-muted-foreground">Allow agent to make decisions automatically</p>
                </div>
                <Switch checked={isAutomatic} onCheckedChange={setIsAutomatic} />
              </div>
              
              <div className="space-y-3">
                <div className="space-y-0.5">
                  <h3 className="font-medium">Confidence Threshold</h3>
                  <p className="text-sm text-muted-foreground">Minimum confidence level for automated decisions</p>
                </div>
                <Slider
                  value={confidence}
                  onValueChange={setConfidence}
                  max={1}
                  step={0.1}
                  className="w-full"
                />
                <div className="text-right text-sm">{(confidence[0] * 100).toFixed(0)}%</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
