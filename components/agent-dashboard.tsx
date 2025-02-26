"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Activity,
  Users,
  TrendingUp,
  Mail,
  PieChart,
  Clock,
} from "lucide-react";
import Link from "next/link";
import  AgentNetworkUML  from "./agent-network-uml";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "./ui/badge";

export function AgentDashboard() {
  const agents = [
    {
      name: "Engagement Analysis",
      sequence: "1️⃣",
      icon: Activity,
      title: "Real-time Interaction Tracking",
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: [
        "Monitors lead interactions",
        "Calculates engagement scores",
        "Applies time decay models",
      ],
      accuracy: "95%",
      capabilities: ["Behavioral", "Analytics", "Real-time"],
      category: "Data Collection",
    },
    {
      name: "Lead Scoring",
      sequence: "2️⃣",
      icon: TrendingUp,
      title: "ML-Powered Score Generation",
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: [
        "Combines engagement data",
        "Applies ML models",
        "Predicts conversion probability",
      ],
      accuracy: "92%",
      capabilities: ["ML", "Prediction", "Analysis"],
      category: "Evaluation",
    },
    {
      name: "Follow-up AI",
      sequence: "3️⃣",
      icon: Mail,
      title: "Automated Response System",
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: [
        "Determines optimal follow-up actions",
        "Selects communication channels",
        "Uses Multi-Armed Bandit algorithms",
      ],
      accuracy: "94%",
      capabilities: ["Automation", "Communication", "Optimization"],
      category: "Action",
    },
    {
      name: "Pipeline Optimization",
      sequence: "4️⃣",
      icon: PieChart,
      title: "Funnel Performance Analyzer",
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: [
        "Identifies dropoff points",
        "Suggests improvements",
        "Adjusts AI model weightings",
      ],
      accuracy: "91%",
      capabilities: ["Analysis", "Optimization", "Strategy"],
      category: "Optimization",
    },
    {
      name: "Historical Analysis",
      sequence: "5️⃣",
      icon: Clock,
      title: "Pattern Recognition Engine",
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: [
        "Compares current leads",
        "Calculates similarity scores",
        "Enhances prediction accuracy",
      ],
      accuracy: "96%",
      capabilities: ["Pattern Recognition", "Analysis", "Historical"],
      category: "Analysis",
    },
    {
      name: "Prompting",
      sequence: "6️⃣",
      icon: Users,
      title: "Natural Language Interface",
      description: "The Six Agents in the Lead Scoring Pipeline",
      decisions: [
        "Generates dynamic queries",
        "Creates conversational insights",
        "Provides real-time recommendations",
      ],
      accuracy: "99%",
      capabilities: ["NLP", "Query", "Communication"],
      category: "Interface",
    },
  ];

  return (
    <Tabs defaultValue="grid" className="w-full space-y-4">
      <TabsList>
        <TabsTrigger value="grid">Grid View</TabsTrigger>
        <TabsTrigger value="network">Network View</TabsTrigger>
      </TabsList>
      <TabsContent value="grid">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent) => (
            <Card
              key={agent.name}
              className="hover:shadow-lg transition-shadow"
            >
              <CardHeader className="space-y-1">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <agent.icon className="h-5 w-5 text-primary" />
                    <CardTitle className="text-lg">{agent.name}</CardTitle>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    Accuracy: {agent.accuracy}
                  </span>
                </div>
                <CardDescription>{agent.title}</CardDescription>
                <Badge variant="secondary" className="mt-1">
                  {agent.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-4">
                  <div>
                    {/* <h4 className="font-semibold mb-2">Goal</h4> */}
                    <p className="text-sm text-muted-foreground">
                      {agent.name === "Lead Scoring" &&
                        "Evaluate and rank leads based on their likelihood to convert using ML models and behavioral data"}
                      {agent.name === "Engagement Analysis" &&
                        "Track and analyze all lead interactions to generate meaningful engagement metrics"}
                      {agent.name === "Follow-up AI" &&
                        "Automate and optimize lead follow-up actions based on scoring and engagement data"}
                      {agent.name === "Pipeline Optimization" &&
                        "Identify and resolve bottlenecks in the sales funnel to improve conversion rates"}
                      {agent.name === "Historical Analysis" &&
                        "Learn from past successful conversions to improve future lead scoring accuracy"}
                      {agent.name === "Prompting" &&
                        "Provide natural language interface for sales team to interact with the AI system"}
                    </p>
                  </div>
                  {/* <div>
                    <h4 className="font-semibold mb-2">Actions</h4>
                    <ul className="space-y-1">
                      {agent.decisions.map((decision, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          {decision}
                        </li>
                      ))}
                    </ul>
                  </div> */}
                  {/* <div>
                    <h4 className="font-semibold mb-2">Workflow</h4>
                    <p className="text-sm text-muted-foreground">
                      {agent.name === "Lead Scoring" && "Data Collection → Feature Engineering → ML Model Application → Score Generation → CRM Update"}
                      {agent.name === "Engagement Analysis" && "Event Tracking → Data Processing → Score Calculation → Time Decay Application → Metric Output"}
                      {agent.name === "Follow-up AI" && "Score Analysis → Channel Selection → Content Generation → Action Execution → Performance Tracking"}
                      {agent.name === "Pipeline Optimization" && "Funnel Analysis → Bottleneck Detection → Strategy Generation → Model Adjustment → Performance Monitoring"}
                      {agent.name === "Historical Analysis" && "Data Mining → Pattern Recognition → Similarity Scoring → Model Enhancement → Accuracy Validation"}
                      {agent.name === "Prompting" && "Query Reception → Intent Analysis → Agent Coordination → Response Generation → Feedback Collection"}
                    </p>
                  </div> */}
                </div>
                <div className="flex flex-wrap gap-2">
                  {agent.capabilities.map((capability) => (
                    <Badge
                      key={capability}
                      variant="secondary"
                      className="capitalize"
                    >
                      {capability}
                    </Badge>
                  ))}
                </div>
                <Button className="mt-4 w-full" variant="outline" asChild>
                  <Link
                    href={`/agent/${agent.name.toLowerCase().replace(" ", "-")}`}
                  >
                    View Details
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>
      <TabsContent value="network">
        <AgentNetworkUML />
      </TabsContent>
    </Tabs>
  );
}
