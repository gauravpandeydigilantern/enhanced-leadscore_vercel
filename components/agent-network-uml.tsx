
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
      type: 'default'
    },
    {
      id: 'engagement-analysis',
      data: { label: 'Engagement Analysis' },
      position: { x: 0, y: 100 },
      type: 'default'
    },
    {
      id: 'lead-scoring',
      data: { label: 'Lead Scoring' },
      position: { x: 250, y: 100 },
      type: 'default'
    },
    {
      id: 'follow-up-ai',
      data: { label: 'Follow-up AI' },
      position: { x: 500, y: 100 },
      type: 'default'
    },
    {
      id: 'pipeline-optimization',
      data: { label: 'Pipeline Optimization' },
      position: { x: 125, y: 200 },
      type: 'default'
    },
    {
      id: 'historical-analysis',
      data: { label: 'Historical Analysis' },
      position: { x: 375, y: 200 },
      type: 'default'
    },
  ];

  const edges: Edge[] = [
    { id: 'e1', source: 'data-enrichment', target: 'lead-scoring' },
    { id: 'e2', source: 'engagement-analysis', target: 'lead-scoring' },
    { id: 'e3', source: 'follow-up-ai', target: 'lead-scoring' },
    { id: 'e4', source: 'lead-scoring', target: 'pipeline-optimization' },
    { id: 'e5', source: 'lead-scoring', target: 'historical-analysis' },
  ];

  const onNodeClick = (event: any, node: Node) => {
    router.push(`/agent/${node.id}`);
  };

  return (
    <div style={{ width: '100%', height: '500px' }}>
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
