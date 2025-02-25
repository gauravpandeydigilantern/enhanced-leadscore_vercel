
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

export function HeatMap() {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const hours = Array.from({ length: 24 }, (_, i) => i);
  
  // Generate sample data
  const data = days.map(day => ({
    name: day,
    data: hours.map(hour => ({
      hour,
      value: Math.floor(Math.random() * 100)
    }))
  }));

  return (
    <div className="w-full h-[200px] overflow-auto">
      <div className="grid grid-cols-[auto_repeat(24,1fr)] gap-1">
        <div className="h-6"></div>
        {hours.map(hour => (
          <div key={hour} className="text-xs text-center text-muted-foreground">
            {hour}h
          </div>
        ))}
        {data.map((day, i) => (
          <React.Fragment key={day.name}>
            <div className="text-xs text-muted-foreground py-1">{day.name}</div>
            {day.data.map((hour, j) => (
              <div
                key={`${i}-${j}`}
                className="w-full aspect-square rounded-sm"
                style={{
                  backgroundColor: `hsl(200, 100%, ${100 - hour.value}%)`
                }}
                title={`${day.name} ${hour.hour}h: ${hour.value}`}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
