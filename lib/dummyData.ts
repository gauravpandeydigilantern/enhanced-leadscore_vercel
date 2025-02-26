import { nanoid } from 'nanoid';

export interface Lead {
  id: string;
  email: string;
  name: string;
  company: string;
  title: string;
  phone: string;
  source: string;
  enrichedData: any;
  engagementScore: number | null;
  leadScore: number | null;
  currentAgent: string;
  status: string;
  isQualified: boolean;
  createdAt: string;
}

export const dummyLeads: Lead[] = [
  {
    id: nanoid(),
    email: "john.smith@techcorp.com",
    name: "John Smith",
    company: "TechCorp",
    title: "CTO",
    phone: "+1-555-0123",
    source: "Website",
    enrichedData: null,
    engagementScore: 85,
    leadScore: 90,
    currentAgent: "EngagementAnalysisAgent",
    status: "qualified",
    isQualified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: nanoid(),
    email: "sarah.j@innovate.io",
    name: "Sarah Johnson",
    company: "Innovate.io",
    title: "Head of Marketing",
    phone: "+1-555-0124",
    source: "LinkedIn",
    enrichedData: null,
    engagementScore: 75,
    leadScore: 60,
    currentAgent: "LeadScoringAgent",
    status: "analyzing",
    isQualified: false,
    createdAt: new Date().toISOString()
  },
  {
    id: nanoid(),
    email: "m.chen@futuretech.com",
    name: "Michael Chen",
    company: "FutureTech",
    title: "Product Manager",
    phone: "+1-555-0125",
    source: "Conference",
    enrichedData: null,
    engagementScore: 95,
    leadScore: 88,
    currentAgent: "HistoricalAgent",
    status: "qualified",
    isQualified: true,
    createdAt: new Date().toISOString()
  },
  {
    id: nanoid(),
    email: "emily.d@growthco.com",
    name: "Emily Davis",
    company: "GrowthCo",
    title: "Sales Director",
    phone: "+1-555-0126",
    source: "Referral",
    enrichedData: null,
    engagementScore: 65,
    leadScore: 45,
    currentAgent: "FollowUpAgent",
    status: "nurturing",
    isQualified: false,
    createdAt: new Date().toISOString()
  },
  {
    id: nanoid(),
    email: "d.wilson@nextstep.tech",
    name: "David Wilson",
    company: "NextStep Technologies",
    title: "Engineering Manager",
    phone: "+1-555-0127",
    source: "Website",
    enrichedData: null,
    engagementScore: 80,
    leadScore: 70,
    currentAgent: "PipelineOptAgent",
    status: "analyzing",
    isQualified: false,
    createdAt: new Date().toISOString()
  }
];
