import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Text Data", value: 50 },
  { name: "Audio Data", value: 30 },
  { name: "Behavioral Analytics", value: 20 },
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"]

export function MultimodalCapabilities() {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} fill="#8884d8" dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <p className="mt-4 text-sm text-muted-foreground">
        This chart shows the distribution of data types processed by the Lead Scoring Agent, demonstrating its
        multimodal capabilities.
      </p>
    </div>
  )
}

