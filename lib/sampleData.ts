import { type InsertLead } from "@/shared/schema";
import { apiRequest } from "./queryClient";
import { processLead } from "./agents";

const sampleLeads: InsertLead[] = [
  {
    name: "John Smith",
    email: "john.smith@techcorp.com",
    company: "TechCorp",
    title: "CTO",
    phone: "+1-555-0123",
    source: "Website",
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@innovate.io",
    company: "Innovate.io",
    title: "Head of Marketing",
    phone: "+1-555-0124",
    source: "LinkedIn",
  },
  {
    name: "Michael Chen",
    email: "m.chen@futuretech.com",
    company: "FutureTech",
    title: "Product Manager",
    phone: "+1-555-0125",
    source: "Conference",
  },
  {
    name: "Emily Davis",
    email: "emily.d@growthco.com",
    company: "GrowthCo",
    title: "Sales Director",
    phone: "+1-555-0126",
    source: "Referral",
  },
  {
    name: "David Wilson",
    email: "d.wilson@nextstep.tech",
    company: "NextStep Technologies",
    title: "Engineering Manager",
    phone: "+1-555-0127",
    source: "Website",
  },
  {
    name: "Lisa Zhang",
    email: "l.zhang@datawise.ai",
    company: "DataWise AI",
    title: "AI Research Lead",
    phone: "+1-555-0128",
    source: "AI Conference",
  },
  {
    name: "Alex Thompson",
    email: "alex.t@cloudscape.net",
    company: "Cloudscape",
    title: "Cloud Architect",
    phone: "+1-555-0129",
    source: "Webinar",
  },
  {
    name: "Maria Garcia",
    email: "m.garcia@securetech.io",
    company: "SecureTech",
    title: "Security Officer",
    phone: "+1-555-0130",
    source: "Security Summit",
  },
  {
    name: "James Wilson",
    email: "j.wilson@quantum.dev",
    company: "Quantum Developments",
    title: "Lead Developer",
    phone: "+1-555-0131",
    source: "Dev Conference",
  },
  {
    name: "Rachel Kim",
    email: "r.kim@analytix.com",
    company: "Analytix Solutions",
    title: "Data Scientist",
    phone: "+1-555-0132",
    source: "Data Summit",
  }
];

// Initial agent distribution for demonstration
const initialAgents = [
  "DataEnrichmentAgent",
  "EngagementAnalysisAgent",
  "LeadScoringAgent",
  "FollowUpAgent",
  "PipelineOptAgent",
  "HistoricalAgent"
];

export async function createSampleLeads() {
  try {
    // Clear existing data first
    await apiRequest("POST", "/api/clear-data");

    const createdLeads = [];
    for (let i = 0; i < sampleLeads.length; i++) {
      const lead = sampleLeads[i];
      // Assign different initial agents in a round-robin fashion
      const initialAgent = initialAgents[i % initialAgents.length];

      // Create the lead with the assigned agent
      const response = await apiRequest("POST", "/api/leads", {
        ...lead,
        currentAgent: initialAgent,
        status: "new"
      });

      if (!response.ok) {
        throw new Error(`Failed to create lead: ${response.statusText}`);
      }
      const createdLead = await response.json();
      createdLeads.push(createdLead);
    }

    // Process each lead through the agent network
    for (const lead of createdLeads) {
      try {
        await processLead(lead);
      } catch (error) {
        console.error(`Failed to process lead ${lead.id}:`, error);
        // Continue processing other leads even if one fails
      }
    }
  } catch (error) {
    console.error('Error creating sample leads:', error);
    throw error;
  }
}