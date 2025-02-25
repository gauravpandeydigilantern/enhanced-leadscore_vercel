
"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, BarChart, HeatMap } from "@/components/charts"

export function AnalyticsDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card>
        <CardHeader>
          <CardTitle>Conversion Rates</CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart 
            data={[
              { date: "2024-01", rate: 0.45 },
              { date: "2024-02", rate: 0.52 },
              { date: "2024-03", rate: 0.61 },
            ]} 
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Top Lead Scoring</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[1,2,3].map(i => (
              <div key={i} className="flex justify-between items-center">
                <span>Lead {i}</span>
                <span className="font-bold">Score: {95 - (i*5)}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lead Activity Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <HeatMap data={[]} />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bottleneck Insights</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart 
            data={[
              { stage: "Initial Contact", dropoff: 25 },
              { stage: "Lead Qualification", dropoff: 40 },
              { stage: "Discovery Call", dropoff: 30 },
              { stage: "Proposal Sent", dropoff: 35 },
              { stage: "Negotiation", dropoff: 20 },
            ]}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lead Score Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <BarChart 
            data={[
              { score: "0-20", count: 10 },
              { score: "21-40", count: 25 },
              { score: "41-60", count: 40 },
              { score: "61-80", count: 30 },
              { score: "81-100", count: 15 },
            ]}
          />
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Attribution Modeling</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { factor: "Email Engagement", weight: 0.3 },
              { factor: "Website Visits", weight: 0.25 },
              { factor: "Social Media", weight: 0.2 },
              { factor: "Direct Contact", weight: 0.25 },
            ].map(item => (
              <div key={item.factor} className="flex justify-between items-center">
                <span>{item.factor}</span>
                <span>{(item.weight * 100).toFixed(0)}%</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
