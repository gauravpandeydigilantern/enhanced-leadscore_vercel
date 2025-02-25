import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { agent: "Prompting", efficiency: 95 },
  { agent: "Engagement Analysis", efficiency: 92 },
  { agent: "Follow-up AI", efficiency: 78 },
  { agent: "Pipeline Optimization", efficiency: 88 },
  { agent: "Historical Analysis", efficiency: 95 },
]

export function AgentCollaboration() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="agent" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="efficiency" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
      <p className="mt-4 text-sm text-muted-foreground">
        This chart displays the coordination efficiency between the Lead Scoring Agent and other agents in the system.
      </p>
    </div>
  )
}

