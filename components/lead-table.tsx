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
    action: "Send personalized follow-up email with an executive meeting invitation.",
  },
  {
    name: "Michael Chen",
    company: "Tech Solutions",
    score: 85,
    status: "Hot",
    insights: "Active in product trials, high resource downloads",
    action: "Send a detailed ROI analysis email with scheduling options for review.",
  },
  {
    name: "Emma Davis",
    company: "Global Systems",
    score: 78,
    status: "Warm",
    insights: "Recent budget approval, increasing website visits",
    action: "Invite for a personalized product demo with key decision-makers.",
  },
  {
    name: "Alex Kumar",
    company: "Startup Inc",
    score: 65,
    status: "Warm",
    insights: "Engaged with email campaigns, moderate web activity",
    action: "Share relevant case studies with a tailored industry insights email.",
  },
  {
    name: "Lisa Thompson",
    company: "Digital Services",
    score: 45,
    status: "Cold",
    insights: "Limited engagement, early evaluation phase",
    action: "Send a nurturing email with educational resources and testimonials.",
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
            <TableHead>Next Best Action</TableHead>
            <TableHead>Action</TableHead>
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
              <TableCell>
                <Button variant="outline" className="text-xs">Perform Action</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
