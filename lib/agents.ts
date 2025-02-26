import { type Lead } from "@/shared/schema";
import { apiRequest } from "./queryClient";

export interface AgentResult {
  success: boolean;
  updates: Partial<Lead>;
  nextAgent?: string;
}

export const agents = {
  "DataEnrichmentAgent": async (lead: Lead): Promise<AgentResult> => {
    // Simulate enrichment processing
    const enrichedData = {
      linkedinProfile: `linkedin.com/in/${lead.name.toLowerCase().replace(/\s+/g, '-')}`,
      companySize: "50-200",
      industry: "Technology",
      location: "San Francisco, CA"
    };

    return {
      success: true,
      updates: {
        enrichedData,
        currentAgent: "EngagementAnalysisAgent",
        status: "enriched"
      }
    };
  },

  "EngagementAnalysisAgent": async (lead: Lead): Promise<AgentResult> => {
    // Simulate engagement scoring
    const engagementScore = Math.floor(Math.random() * 100);

    return {
      success: true,
      updates: {
        engagementScore,
        currentAgent: "LeadScoringAgent",
        status: "analyzed"
      }
    };
  },

  "LeadScoringAgent": async (lead: Lead): Promise<AgentResult> => {
    // Simulate lead scoring with safe null handling
    const baseScore = (lead.engagementScore || 0) * 0.7;
    const randomFactor = Math.random() * 30;
    const leadScore = Math.floor(baseScore + randomFactor);
    const isQualified = leadScore >= 80;

    return {
      success: true,
      updates: {
        leadScore,
        isQualified,
        currentAgent: isQualified ? "HandoffToSales" : "FollowUpAgent",
        status: isQualified ? "qualified" : "needs_followup"
      }
    };
  },

  "FollowUpAgent": async (lead: Lead): Promise<AgentResult> => {
    // Simulate follow-up actions
    return {
      success: true,
      updates: {
        currentAgent: "PipelineOptAgent",
        status: "following_up"
      }
    };
  },

  "PipelineOptAgent": async (lead: Lead): Promise<AgentResult> => {
    // Simulate pipeline optimization
    return {
      success: true,
      updates: {
        currentAgent: "HistoricalAgent",
        status: "optimizing"
      }
    };
  },

  "HistoricalAgent": async (lead: Lead): Promise<AgentResult> => {
    // Simulate historical analysis
    return {
      success: true,
      updates: {
        currentAgent: "LeadScoringAgent", // Feed back to scoring
        status: "analyzed"
      }
    };
  }
};

export async function processLead(lead: Lead): Promise<Lead> {
  try {
    // Safety check for missing agent
    if (!lead.currentAgent) {
      throw new Error("Lead has no assigned agent");
    }

    // Get the agent function
    const agentFunction = agents[lead.currentAgent as keyof typeof agents];
    if (!agentFunction) {
      throw new Error(`Invalid agent: ${lead.currentAgent}`);
    }

    // Process the lead
    const result = await agentFunction(lead);
    if (!result.success) {
      throw new Error(`Agent ${lead.currentAgent} failed to process lead`);
    }

    // Update lead with agent's changes
    const response = await apiRequest(
      "PATCH",
      `/api/leads/${lead.id}`,
      result.updates
    );

    if (!response.ok) {
      throw new Error(`Failed to update lead: ${response.statusText}`);
    }

    const updatedLead = await response.json();

    // Log the agent's action
    await apiRequest("POST", "/api/logs", {
      leadId: lead.id,
      agentName: lead.currentAgent,
      action: "process",
      details: result.updates
    });

    return updatedLead;
  } catch (error) {
    console.error('Error processing lead:', error);
    throw error;
  }
}