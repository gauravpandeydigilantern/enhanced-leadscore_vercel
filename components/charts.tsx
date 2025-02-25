
"use client"

import { Line, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, LineChart as RechartsLineChart, BarChart as RechartsBarChart } from 'recharts'

export function LineChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RechartsLineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="rate" stroke="#8884d8" />
      </RechartsLineChart>
    </ResponsiveContainer>
  )
}

export function BarChart({ data }: { data: any[] }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <RechartsBarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={Object.keys(data[0])[0]} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={Object.keys(data[0])[1]} fill="#8884d8" />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

export function HeatMap({ data }: { data: any[] }) {
  return (
    <div className="w-full h-[200px] bg-muted/20 rounded-md flex items-center justify-center">
      Heat Map Placeholder
    </div>
  )
}
