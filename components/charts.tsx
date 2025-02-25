
"use client"

import * as React from 'react'
import { Line, Bar, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, LineChart as RechartsLineChart, BarChart as RechartsBarChart } from 'recharts'

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
  const isFunnelData = data[0]?.stage && data[0]?.conversion;
  const sortedData = isFunnelData ? data : [...data].sort((a, b) => b.score - a.score);
  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart 
        data={sortedData}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis 
          type="number" 
          domain={[0, 100]}
          label={{ value: isFunnelData ? 'Conversion %' : 'Lead Score', position: 'bottom' }} 
        />
        <YAxis 
          type="category" 
          dataKey={isFunnelData ? "stage" : "name"} 
          width={120}
          tick={{ fontSize: 12 }}
        />
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-background border rounded p-2 shadow-lg">
                  <p className="font-medium">{isFunnelData ? data.stage : data.name}</p>
                  <p className="text-sm">{isFunnelData ? `Conversion: ${data.conversion}%` : `Score: ${data.score}`}</p>
                  {!isFunnelData && <p className="text-sm text-muted-foreground">{data.impact}</p>}
                </div>
              );
            }
            return null;
          }}
        />
        <Bar 
          dataKey={isFunnelData ? "conversion" : "score"} 
          background={{ fill: '#eee' }}
        >
          {sortedData.map((entry, index) => (
            <Cell 
              key={`cell-${index}`}
              fill={isFunnelData 
                ? `hsl(${200 + index * 30}, 70%, 50%)`
                : entry.score > 70 ? '#22c55e' : entry.score > 40 ? '#3b82f6' : '#ef4444'
              }
            />
          ))}
        </Bar>
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

export function HeatMap() {
  const channels = ['Website', 'Email', 'Social', 'Chat', 'Call'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Generate stable sample data to avoid hydration errors
  const data = channels.map((channel, i) => ({
    name: channel,
    data: days.map((day, j) => ({
      day,
      value: ((i + 1) * (j + 1) * 7) % 100, // Deterministic value generation
    }))
  }));

  return (
    <div className="space-y-4">
      <div className="w-full overflow-x-auto">
        <div className="grid grid-cols-[150px_repeat(7,1fr)] gap-2 min-w-[600px]">
          <div className="font-medium">Channel</div>
          {days.map(day => (
            <div key={day} className="text-sm text-center font-medium">{day}</div>
          ))}
          
          {data.map((channel) => (
            <React.Fragment key={channel.name}>
              <div className="text-sm py-2">{channel.name}</div>
              {channel.data.map((day) => (
                <div
                  key={day.day}
                  className="aspect-square rounded-md flex items-center justify-center text-xs"
                  style={{
                    backgroundColor: `hsl(200, 70%, ${100 - day.value}%)`,
                    color: day.value > 50 ? 'white' : 'black'
                  }}
                  title={`${channel.name} - ${day.day}: ${day.value}% engagement`}
                >
                  {day.value}%
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      
      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>Low Engagement</span>
        <div className="flex gap-1">
          {[20, 40, 60, 80, 100].map(value => (
            <div
              key={value}
              className="w-4 h-4 rounded"
              style={{
                backgroundColor: `hsl(200, 70%, ${100 - value}%)`
              }}
            />
          ))}
        </div>
        <span>High Engagement</span>
      </div>
    </div>
  );
}
