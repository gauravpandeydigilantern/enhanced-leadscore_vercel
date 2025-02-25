
"use client";

import ReactFlow, { Node, Edge, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import { useRouter } from 'next/navigation';

export function AgentNetworkUML() {
  const router = useRouter();

  const nodes: Node[] = [
    { 
      id: 'data-enrichment',
      data: { label: 'Data Enrichment' },
      position: { x: 250, y: 0 },
      style: { background: '#4F46E5', color: 'white', padding: '10px' }
    },
    {
      id: 'engagement-analysis',
      data: { label: 'Engagement Analysis' },
      position: { x: 0, y: 100 },
      style: { background: '#4F46E5', color: 'white', padding: '10px' }
    },
    {
      id: 'lead-scoring',
      data: { label: 'Lead Scoring' },
      position: { x: 250, y: 100 },
      style: { background: '#4F46E5', color: 'white', padding: '10px' }
    },
    {
      id: 'follow-up-ai',
      data: { label: 'Follow-up AI' },
      position: { x: 500, y: 100 },
      style: { background: '#4F46E5', color: 'white', padding: '10px' }
    },
    {
      id: 'pipeline-optimization',
      data: { label: 'Pipeline Optimization' },
      position: { x: 125, y: 200 },
      style: { background: '#4F46E5', color: 'white', padding: '10px' }
    },
    {
      id: 'historical-analysis',
      data: { label: 'Historical Analysis' },
      position: { x: 375, y: 200 },
      style: { background: '#4F46E5', color: 'white', padding: '10px' }
    },
  ];

  const edges: Edge[] = [
    { id: 'e1', source: 'data-enrichment', target: 'lead-scoring', style: { stroke: '#4F46E5' } },
    { id: 'e2', source: 'engagement-analysis', target: 'lead-scoring', style: { stroke: '#4F46E5' } },
    { id: 'e3', source: 'follow-up-ai', target: 'lead-scoring', style: { stroke: '#4F46E5' } },
    { id: 'e4', source: 'lead-scoring', target: 'pipeline-optimization', style: { stroke: '#4F46E5' } },
    { id: 'e5', source: 'lead-scoring', target: 'historical-analysis', style: { stroke: '#4F46E5' } },
  ];

  const onNodeClick = (event: any, node: Node) => {
    router.push(`/agent/${node.id.toLowerCase().replace("-", "-")}`);
  };

  return (
    <div style={{ width: '100%', height: '600px', border: '1px solid #e5e7eb', borderRadius: '8px' }}>
      <ReactFlow 
        nodes={nodes}
        edges={edges}
        onNodeClick={onNodeClick}
        fitView
      >
        <Controls />
      </ReactFlow>
    </div>
  );
}
