import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

const data = [
  { date: "2023-01", adjustments: 15 },
  { date: "2023-02", adjustments: 20 },
  { date: "2023-03", adjustments: 18 },
  { date: "2023-04", adjustments: 25 },
  { date: "2023-05", adjustments: 30 },
  { date: "2023-06", adjustments: 28 },
]

export function ContextDecisions() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="adjustments" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
      <p className="mt-4 text-sm text-muted-foreground">
        This chart shows the number of AI-driven lead score adjustments over time, demonstrating the agent's ability to
        make context-based decisions.
      </p>
    </div>
  )
}

