import ReactFlow, { 
  Background, 
  Controls,
  Node,
  Edge,
  Position,
  MarkerType 
} from 'reactflow';
import 'reactflow/dist/style.css';
import AgentCard from './AgentCard';
import { type Lead } from '@/shared/schema';
import { TooltipProvider } from "@/components/networkui/tooltip";

interface AgentNetworkProps {
  leads: Lead[];
}

export function AgentNetworkUML({ leads }: AgentNetworkProps) {
  const agentCounts = leads.reduce((acc, lead) => {
    const agent = lead.currentAgent || 'unknown';
    acc[agent] = (acc[agent] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Calculate stats
  const qualifiedLeads = leads.filter(l => l.isQualified).length;

  const nodes: Node[] = [
    // Start point
    {
      id: 'Start',
      type: 'custom',
      position: { x: 50, y: 300 },
      data: { 
        name: 'Lead Data Ingestion',
        count: leads.length,
        description: '📥 New leads enter system',
        variant: 'endpoint'
      }
    },
    // Core processing flow
    {
      id: 'EngagementAgent',
      type: 'custom',
      position: { x: 300, y: 300 },
      data: {
        name: '1️⃣ Engagement Analysis',
        count: agentCounts['EngagementAnalysisAgent'] || 0,
        description: '📊 Calculate engagement score',
        variant: 'agent'
      }
    },
    {
      id: 'LeadScoringAgent',
      type: 'custom',
      position: { x: 550, y: 300 },
      data: {
        name: '2️⃣ Lead Scoring',
        count: agentCounts['LeadScoringAgent'] || 0,
        description: '🎯 Predict conversion probability',
        variant: 'agent'
      }
    },
    {
      id: 'QualityCheck',
      type: 'custom',
      position: { x: 800, y: 300 },
      data: {
        name: 'Quality Check',
        count: leads.length,
        description: '✅ Score ≥ 80?',
        variant: 'decision'
      }
    },
    {
      id: 'SalesHandoff',
      type: 'custom',
      position: { x: 1050, y: 200 },
      data: {
        name: 'Sales Team Handoff',
        count: qualifiedLeads,
        description: '👥 Qualified leads to sales',
        variant: 'endpoint'
      }
    },
    {
      id: 'FollowUpAgent',
      type: 'custom',
      position: { x: 1050, y: 400 },
      data: {
        name: '3️⃣ Follow-up',
        count: agentCounts['FollowUpAgent'] || 0,
        description: '✉️ Personalize outreach',
        variant: 'agent'
      }
    },
    {
      id: 'PipelineAgent',
      type: 'custom',
      position: { x: 1300, y: 400 },
      data: {
        name: '4️⃣ Pipeline Optimization',
        count: agentCounts['PipelineOptAgent'] || 0,
        description: '⚡ Optimize conversion flow',
        variant: 'agent'
      }
    },
    {
      id: 'HistoricalAgent',
      type: 'custom',
      position: { x: 1550, y: 400 },
      data: {
        name: '5️⃣ Historical Analysis',
        count: agentCounts['HistoricalAgent'] || 0,
        description: '📈 Pattern analysis',
        variant: 'agent'
      }
    },
    // Prompting agent and interface
    {
      id: 'PromptingAgent',
      type: 'custom',
      position: { x: 800, y: 100 },
      data: {
        name: '6️⃣ Prompting Agent',
        count: leads.length,
        description: '🧠 Orchestrate & generate insights',
        variant: 'prompting'
      }
    },
    {
      id: 'SalesInterface',
      type: 'custom',
      position: { x: 1050, y: 100 },
      data: {
        name: 'Sales Rep Interface',
        count: qualifiedLeads,
        description: '👩‍💼 Human interaction point',
        variant: 'interface'
      }
    }
  ];

  const edges: Edge[] = [
    // Main flow
    {
      id: 'e1',
      source: 'Start',
      target: 'EngagementAgent',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#2196f3' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    {
      id: 'e2',
      source: 'EngagementAgent',
      target: 'LeadScoringAgent',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#2196f3' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    {
      id: 'e3',
      source: 'LeadScoringAgent',
      target: 'QualityCheck',
      type: 'smoothstep',
      style: { stroke: '#2196f3' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    // Quality check outcomes
    {
      id: 'e4',
      source: 'QualityCheck',
      target: 'SalesHandoff',
      type: 'smoothstep',
      label: 'Yes',
      style: { stroke: '#4caf50' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    {
      id: 'e5',
      source: 'QualityCheck',
      target: 'FollowUpAgent',
      type: 'smoothstep',
      label: 'No',
      style: { stroke: '#f44336' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    // Follow-up chain
    {
      id: 'e6',
      source: 'FollowUpAgent',
      target: 'PipelineAgent',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#2196f3' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    {
      id: 'e7',
      source: 'PipelineAgent',
      target: 'HistoricalAgent',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#2196f3' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    // Feedback loop
    {
      id: 'e8',
      source: 'HistoricalAgent',
      target: 'LeadScoringAgent',
      type: 'step',
      animated: true,
      style: { stroke: '#9c27b0', strokeDasharray: '5 5' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    // Prompting agent connections
    {
      id: 'p1',
      source: 'PromptingAgent',
      target: 'EngagementAgent',
      type: 'straight',
      animated: true,
      style: { stroke: '#673ab7', strokeDasharray: '5 5' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    {
      id: 'p2',
      source: 'PromptingAgent',
      target: 'LeadScoringAgent',
      type: 'straight',
      animated: true,
      style: { stroke: '#673ab7', strokeDasharray: '5 5' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    {
      id: 'p3',
      source: 'PromptingAgent',
      target: 'FollowUpAgent',
      type: 'straight',
      animated: true,
      style: { stroke: '#673ab7', strokeDasharray: '5 5' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    {
      id: 'p4',
      source: 'PromptingAgent',
      target: 'PipelineAgent',
      type: 'straight',
      animated: true,
      style: { stroke: '#673ab7', strokeDasharray: '5 5' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    {
      id: 'p5',
      source: 'PromptingAgent',
      target: 'HistoricalAgent',
      type: 'straight',
      animated: true,
      style: { stroke: '#673ab7', strokeDasharray: '5 5' },
      markerEnd: { type: MarkerType.ArrowClosed }
    },
    {
      id: 'p6',
      source: 'PromptingAgent',
      target: 'SalesInterface',
      type: 'smoothstep',
      animated: true,
      style: { stroke: '#673ab7' },
      markerEnd: { type: MarkerType.ArrowClosed }
    }
  ];

  return (
    <TooltipProvider>
      <div style={{ width: '100%', height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={{ custom: AgentCard }}
          fitView
          minZoom={0.5}
          maxZoom={1.5}
        >
          <Background color="#aaa" gap={16} />
          <Controls />
        </ReactFlow>
      </div>
    </TooltipProvider>
  );
}