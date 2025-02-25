
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
        <Tooltip />
        <Bar dataKey={Object.keys(data[0])[1]} fill="#8884d8" />
      </RechartsBarChart>
    </ResponsiveContainer>
  )
}

export function HeatMap() {
  const channels = ['Website', 'Email', 'Social', 'Call', 'Chat'];
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  // Simulated real-time data
  const data = channels.map(channel => ({
    name: channel,
    data: days.map(day => ({
      day,
      value: Math.floor(Math.random() * 100) // In real app, this would be real-time data
    }))
  }));

  return (
    <div className="w-full overflow-auto">
      <div className="grid grid-cols-[auto_repeat(7,1fr)] gap-1">
        <div className="h-6"></div>
        {days.map(day => (
          <div key={day} className="text-xs text-center text-muted-foreground">
            {day}
          </div>
        ))}
        {data.map((channel) => (
          <React.Fragment key={channel.name}>
            <div className="text-xs text-muted-foreground py-1">{channel.name}</div>
            {channel.data.map((day) => (
              <div
                key={day.day}
                className="w-full aspect-square rounded-sm"
                style={{
                  backgroundColor: `hsl(200, 100%, ${100 - day.value}%)`
                }}
                title={`${channel.name} - ${day.day}: ${day.value}% engagement`}
              />
            ))}
          </React.Fragment>
        ))}
      </div>
      <div className="mt-2 text-xs text-muted-foreground">
        Engagement intensity: Light → Dark
      </div>
    </div>
  );

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
