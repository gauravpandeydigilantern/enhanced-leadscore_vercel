
"use client"

import * as React from 'react'
import { Line, Bar, Cell, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart as RechartsLineChart, BarChart as RechartsBarChart } from 'recharts'

export function LineChart({ data, xAxisLabel, yAxisLabel }: { 
  data: any[],
  xAxisLabel?: string,
  yAxisLabel?: string 
}) {
  return (
    <div className="rounded-lg bg-white">
    <p className="text-sm text-gray-600 mb-4">This chart displays the conversion rate trends over time, helping identify key patterns and fluctuations.</p>

    <ResponsiveContainer width="100%" height={300}>
  <RechartsLineChart data={data} margin={{ top: 20, right: 50, left: 70, bottom: 50 }}>
    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
    <XAxis 
      dataKey="date" 
      label={{ 
        value: xAxisLabel, 
        position: 'bottom', 
        offset: 10, 
        style: { fontSize: '12px', fill: '#333' } 
      }}
      tick={{ fontSize: '12px' }} 
    />
    <YAxis
      label={{ 
        value: 'Conversion Rate (%)', 
        angle: -90, 
        position: 'center',
        dx:-20,
        style: { fontSize: '12px', fill: '#333' }
      }}
      tickFormatter={(tick) => `${tick}%`}
      tick={{ fontSize: '12px' }}
    />
    <Tooltip 
      formatter={(value) => [`${value}%`, 'Conversion Rate']} 
      labelFormatter={(label) => `Date: ${label}`}
    />
    <Line type="monotone" dataKey="rate" stroke="#8884d8" strokeWidth={2} dot={{ r: 4 }} activeDot={{ r: 6 }} />
  </RechartsLineChart>
</ResponsiveContainer>

  </div>
  )
}

export function BarChart({ data, xAxisLabel, yAxisLabel }: { 
  data: any[],
  xAxisLabel?: string,
  yAxisLabel?: string 
}) {
  const isFunnelData = data[0]?.stage && data[0]?.conversion;
  const sortedData = isFunnelData ? data : [...data].sort((a, b) => b.score - a.score);
  
  return (
    <ResponsiveContainer width="100%" height={300} >
      <RechartsBarChart 
        data={sortedData}
        layout="vertical"
        margin={{ top: 20, right: 30, left: 50, bottom: 50 }}
      >
        <CartesianGrid strokeDasharray="3 3" horizontal={false} />
        <XAxis 
          type="number" 
          domain={[0, 100]}
          label={{ 
            value: xAxisLabel || (isFunnelData ? 'Conversion %' : 'Company Name'),
            position: 'bottom',
            offset: 15
          }}
        />
        <YAxis 
          type="category" 
          dataKey={isFunnelData ? "stage" : "name"} 
          width={120}
          tick={{ fontSize: 12 }}
          label={{
            value: yAxisLabel,
            angle: -90,
            position: 'insideLeft'
          }}
        />
        <Tooltip 
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload;
              return (
                <div className="bg-background border rounded p-2 shadow-lg">
                  <p className="font-medium">{isFunnelData ? data.stage : data.name}</p>
                  <p className="text-sm">{isFunnelData ? `Conversion: ${data.conversion}%` : `Score: ${data.score}`}</p>
                  {isFunnelData && data.dropoff > 0 && (
                    <p className="text-sm text-red-500">Drop-off: -{data.dropoff}%</p>
                  )}
                  {isFunnelData && (
                    <p className="text-sm text-muted-foreground">{data.insight}</p>
                  )}
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

  // Calculate summary statistics
  const averageEngagementPerChannel = data.map(channel => ({
    name: channel.name,
    avgValue: (
      channel.data.reduce((sum, d) => sum + d.value, 0) / channel.data.length
    ).toFixed(1)
  }));

  const topPerforming = data.flatMap(channel => channel.data)
    .reduce((top, current) => (current.value > top.value ? current : top), { value: 0, day: '' });

  return (
    <>

<div className='space-y-4 pb-4'>
          {/* <h2 className="text-lg font-semibold">Engagement Heatmap</h2> */}
          <p className="text-sm text-muted-foreground">
            This heatmap visualizes user engagement across different channels throughout the week. Darker shades indicate higher engagement.
          </p>
  </div>
     <div className="flex space-x-6 ">
      {/* Heatmap Section */}
      <div className="space-y-4">
        

        <div className="w-full overflow-x-auto">
          <div className="grid grid-cols-[180px_repeat(7,60px)] gap-1 min-w-[560px] border border-gray-200 p-2 rounded-lg shadow-sm">
            <div className="font-medium text-sm">Channel</div>
            {days.map(day => (
              <div key={day} className="text-xs text-center font-medium">{day}</div>
            ))}
            
            {data.map((channel) => (
              <React.Fragment key={channel.name}>
                <div className="text-sm py-2 font-medium text-gray-700">{channel.name}</div>
                {channel.data.map((day) => (
                  <div
                    key={day.day}
                    className="h-8 rounded-sm flex items-center justify-center text-[10px] font-semibold shadow-sm"
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
      </div>

      {/* Right Panel */}
      <div className="space-y-6 w-96">
        {/* Engagement Legend */}
        <div>
          <h3 className="text-sm font-medium">Engagement Legend</h3>
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span className="text-xs">Low</span>
            <div className="flex gap-1 items-center">
              {[20, 40, 60, 80, 100].map(value => (
                <div
                  key={value}
                  className="w-5 h-5 rounded border border-gray-300"
                  style={{
                    backgroundColor: `hsl(200, 70%, ${100 - value}%)`
                  }}
                  title={`${value}% Engagement`}
                />
              ))}
            </div>
            <span className="text-xs">High</span>
          </div>
        </div>
        
        {/* Summary Statistics */}
        <div>
          <h3 className="text-sm font-medium">Weekly Average Summary Statistics</h3>
          <ul className="text-xs text-muted-foreground">
            {averageEngagementPerChannel.map(stat => (
              <li key={stat.name} className="flex justify-between">
                <span>{stat.name}</span>
                <span>{stat.avgValue}%</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Insights Panel */}
        <div>
          <h3 className="text-sm font-medium">Insights</h3>
          <p className="text-xs text-muted-foreground">
            The highest engagement was recorded on <strong>{topPerforming.day}</strong> at <strong>{topPerforming.value}%</strong>.
          </p>
        </div>
      </div>
    </div>
    </>
   
  );
}
