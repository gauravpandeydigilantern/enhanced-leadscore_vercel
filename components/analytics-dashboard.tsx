"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, BarChart, HeatMap } from "@/components/charts"
import { LeadTable } from "@/components/lead-table"

const data = [
  { stage: "Awareness", conversion: 100, dropoff: 0, insight: "Initial reach" },
  { stage: "Interest", conversion: 75, dropoff: 25, insight: "Content engagement needed" },
  { stage: "Consideration", conversion: 50, dropoff: 25, insight: "Value proposition unclear" },
  { stage: "Intent", conversion: 35, dropoff: 15, insight: "Price sensitivity" },
  { stage: "Evaluation", conversion: 25, dropoff: 10, insight: "Competitor comparison" },
  { stage: "Purchase", conversion: 15, dropoff: 10, insight: "Final objections" },
];

export function AnalyticsDashboard() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      <Card className="col-span-2 hover:shadow-lg transition-all duration-200">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl font-semibold">Conversion Rate Over Time
          </CardTitle>
        </CardHeader>
        <CardContent>
          <LineChart
            data={[
              { date: "2025-02-18", rate: 48 },
              { date: "2025-02-19", rate: 35 },
              { date: "2025-02-20", rate: 49 },
              { date: "2025-02-21", rate: 75 },
              { date: "2025-02-22", rate: 51 },
              { date: "2025-02-23", rate: 74 },
              { date: "2025-02-24", rate: 53 },
            ]}
            xAxisLabel="Date"
            yAxisLabel="Conversion Rate (%)"
          />
        </CardContent>
      </Card>
      <Card className="col-span-1 hover:shadow-lg transition-all duration-200">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl font-semibold">Attribution Modeling</CardTitle>
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

      <Card className="col-span-3 hover:shadow-lg transition-all duration-200">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl font-semibold">Top Lead Scoring</CardTitle>
        </CardHeader>
        <CardContent>
          <LeadTable />
        </CardContent>
      </Card>

      <Card className="col-span-3 hover:shadow-lg transition-all duration-200">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl font-semibold">Bottleneck Insights</CardTitle>
        </CardHeader>
        <CardContent>
        <div className="grid grid-cols-2 gap-4">

          <BarChart
            data={[
              { stage: "Awareness", conversion: 100, dropoff: 0, insight: "Initial reach" },
              { stage: "Interest", conversion: 75, dropoff: 25, insight: "Content engagement needed" },
              { stage: "Consideration", conversion: 50, dropoff: 25, insight: "Value proposition unclear" },
              { stage: "Intent", conversion: 35, dropoff: 15, insight: "Price sensitivity" },
              { stage: "Evaluation", conversion: 25, dropoff: 10, insight: "Competitor comparison" },
              { stage: "Purchase", conversion: 15, dropoff: 10, insight: "Final objections" },
            ]}
            xAxisLabel="Percentage (%)"
            yAxisLabel="Stage"

          />



          <div style={{height: "315px",overflow: "auto"}}>
          
          <ul className="space-y-4" >
            {data.map((item, index) => (
              <li key={index} className="p-4 border-l-4 rounded-lg shadow-sm" style={{ 
                borderColor: `hsl(${180 - index * 30}, 70%, 50%)`, 
                padding: "0.5rem", 
                fontSize: "12px", 
                lineHeight: "16px" 
              }}>
                <div className="text-lg font-semibold" style={{fontSize: "15px"}}>{item.stage}</div>
                <div className="text-gray-600">✅ {item.conversion}% Conversion | ❌ {item.dropoff}% Dropoff</div>
                <div className="text-sm text-gray-500 italic">🔍 Insight: {item.insight}</div>
              </li>
            ))}
          </ul>
          </div>

          {/* <div className="mt-4 space-y-2 text-sm">
            <p className="font-medium">Key Bottlenecks:</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full" />
                <span>Interest (-25%): Enhance content engagement</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 bg-orange-500 rounded-full" />
                <span>Consideration (-25%): Clarify value prop</span>
              </div>
            </div>
          </div> */}
          </div>
        </CardContent>
      </Card>

     

      <Card className="col-span-3 hover:shadow-lg transition-all duration-200 p-4">
  <CardHeader className="space-y-1">
    <CardTitle className="text-xl font-semibold">Lead Score Distribution</CardTitle>
    <p className="text-sm text-gray-500">
      Insights into lead engagement, behavior, and conversion potential.
    </p>
  </CardHeader>
  <CardContent>
    <div className="grid grid-cols-2 gap-6">
      {/* Left Column - Chart */}
      <div>
        <BarChart
          data={[
            { name: "Enterprise Corp", score: 92 },
            { name: "Tech Solutions", score: 85 },
            { name: "Global Systems", score: 78 },
            { name: "Startup Inc", score: 65 },
            { name: "Digital Services", score: 45 },
            { name: "Local Business", score: 32 },
          ]}
          xAxisLabel="Score"
          yAxisLabel="Company"
        />
      </div>
      {/* Right Column - Detailed Information */}
      <div  style={{height: "315px",overflow: "auto"}} className="space-y-4 text-sm text-gray-700">
        <div>
          <p className="font-semibold">Enterprise Corp</p>
          <p>💼 High engagement, multiple demos requested</p>
          <p>📧 Frequent email interactions, webinar attendance, decision-maker involvement</p>
          <p>🔥 Engagement: 85 | 🎯 Conversion Rate: 75%</p>
        </div>
        <div>
          <p className="font-semibold">Tech Solutions</p>
          <p>🔬 Active in product trials</p>
          <p>✅ High trial usage, positive feedback, internal discussions ongoing</p>
          <p>🔥 Engagement: 78 | 🎯 Conversion Rate: 68%</p>
        </div>
        <div>
          <p className="font-semibold">Global Systems</p>
          <p>💰 Recent budget approval</p>
          <p>📊 Allocated funds for solution, awaiting final decision</p>
          <p>🔥 Engagement: 72 | 🎯 Conversion Rate: 60%</p>
        </div>
        <div>
          <p className="font-semibold">Startup Inc</p>
          <p>📈 Increasing website visits</p>
          <p>📝 Regular content engagement, but no direct interaction yet</p>
          <p>🔥 Engagement: 60 | 🎯 Conversion Rate: 45%</p>
        </div>
        <div>
          <p className="font-semibold">Digital Services</p>
          <p>🔍 Early stage evaluation</p>
          <p>📉 Exploring options, limited but steady engagement</p>
          <p>🔥 Engagement: 40 | 🎯 Conversion Rate: 30%</p>
        </div>
        <div>
          <p className="font-semibold">Local Business</p>
          <p>❄️ Limited engagement</p>
          <p>🛠 Minimal interactions, may require nurturing</p>
          <p>🔥 Engagement: 25 | 🎯 Conversion Rate: 15%</p>
        </div>
      </div>
    </div>
  </CardContent>
</Card>

      <Card className="col-span-3 hover:shadow-lg transition-all duration-200">
        <CardHeader className="space-y-1">
          <CardTitle className="text-xl font-semibold">Lead Activity Heatmap</CardTitle>
        </CardHeader>
        <CardContent>
          <HeatMap
            data={[]}
            xAxisLabel="Date"
            yAxisLabel="Activity Level"
          />
        </CardContent>
      </Card>



    </div>
  )
}