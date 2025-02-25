
"use client"

import * as React from 'react'
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
        <Tooltip 
          formatter={(value: number, name: string) => [`${value}%`, 'Drop-off Rate']}
          labelStyle={{ color: '#666' }}
        />
        <Bar 
          dataKey={Object.keys(data[0])[1]} 
          fill="#8884d8"
          radius={[4, 4, 0, 0]}
        >
          {data.map((entry, index) => (
            <Cell 
              key={`cell-${index}`}
              fill={entry[Object.keys(data[0])[1]] > 30 ? '#ff4d4f' : '#8884d8'}
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
