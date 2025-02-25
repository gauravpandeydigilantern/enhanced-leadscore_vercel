
"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const leads = [
  {
    name: "Sarah Johnson",
    company: "Enterprise Corp",
    score: 92,
    status: "Hot",
    insights: "High engagement across all channels, multiple demo requests",
    action: "Schedule Executive Meeting",
    emailTemplate: `Subject: Executive Briefing - Next Steps
    
Hi Sarah,

Following your recent interest in our platform, I'd like to schedule an executive meeting to discuss how we can help Enterprise Corp achieve its goals.

Would you be available this week for a 30-minute discussion?

Best regards`,
    tasks: ["Schedule executive meeting", "Prepare ROI presentation", "Review recent demo feedback"]
  },
  {
    name: "Michael Chen",
    company: "Tech Solutions",
    score: 85,
    status: "Hot",
    insights: "Active in product trials, high resource downloads",
    action: "Send Custom ROI Analysis",
    emailTemplate: `Subject: Your Custom ROI Analysis
    
Hi Michael,

Based on your product trial data, I've prepared a detailed ROI analysis showing potential impact for Tech Solutions.

Would you like to schedule a call to review the findings?

Best regards`,
    tasks: ["Generate ROI report", "Follow up on trial feedback", "Schedule analysis review"]
  },
  {
    name: "Emma Davis",
    company: "Global Systems",
    score: 78,
    status: "Warm",
    insights: "Recent budget approval, increasing website visits",
    action: "Schedule Product Demo",
    emailTemplate: `Subject: Product Demo for Global Systems
    
Hi Emma,

I noticed your team's increased interest in our platform. Would you like to schedule a personalized demo focusing on your specific use cases?

Best regards`,
    tasks: ["Set up demo environment", "Prepare custom demo script", "Follow up post-demo"]
  },
  {
    name: "Alex Kumar",
    company: "Startup Inc",
    score: 65,
    status: "Warm",
    insights: "Engaged with email campaigns, moderate web activity",
    action: "Share Case Studies",
    emailTemplate: `Subject: Success Stories Similar to Startup Inc
    
Hi Alex,

I thought you might be interested in how similar companies have achieved success with our platform. Here are some relevant case studies.

Best regards`,
    tasks: ["Send relevant case studies", "Monitor engagement", "Schedule follow-up call"]
  },
  {
    name: "Lisa Thompson",
    company: "Digital Services",
    score: 45,
    status: "Cold",
    insights: "Limited engagement, early evaluation phase",
    action: "Nurture with Content",
    emailTemplate: `Subject: Resources for Digital Services
    
Hi Lisa,

I noticed you recently explored our platform. Here are some resources that might help you understand how we can support Digital Services.

Best regards`,
    tasks: ["Send nurture content", "Set up drip campaign", "Monitor engagement metrics"]
  }
]

export function LeadTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>AI Insights</TableHead>
            <TableHead>Action</TableHead>
            <TableHead>Email Template</TableHead>
            <TableHead>Tasks</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leads.map((lead) => (
            <TableRow key={lead.name}>
              <TableCell className="font-medium">{lead.name}</TableCell>
              <TableCell>{lead.company}</TableCell>
              <TableCell>
                <Badge variant={lead.score >= 80 ? "default" : lead.score >= 60 ? "secondary" : "outline"}>
                  {lead.score}
                </Badge>
              </TableCell>
              <TableCell>
                <Badge variant={
                  lead.status === "Hot" ? "destructive" : 
                  lead.status === "Warm" ? "default" : "secondary"
                }>
                  {lead.status}
                </Badge>
              </TableCell>
              <TableCell className="max-w-xs truncate">{lead.insights}</TableCell>
              <TableCell>{lead.action}</TableCell>
              <TableCell className="max-w-xs">
                <Button variant="outline" className="text-xs" onClick={() => {
                  navigator.clipboard.writeText(lead.emailTemplate);
                  // You could add a toast notification here
                }}>
                  Copy Email Template
                </Button>
              </TableCell>
              <TableCell>
                <ul className="list-disc list-inside text-sm">
                  {lead.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
