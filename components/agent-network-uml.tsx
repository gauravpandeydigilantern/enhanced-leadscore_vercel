import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AgentNetworkUML } from "@/components/AgentNetwork";
import LeadList from "@/components/LeadList";
import { dummyLeads } from "@/lib/dummyData";

interface Lead {
  id: number; // id is a number
  title: string | null;
  source: string;
  email: string;
  name: string;
  company: string;
  phone: string | null;
  enrichedData: unknown;
  engagementScore: number | null;
  leadScore: number | null;
  currentAgent: string | null;
  status: string;
  isQualified: boolean | null;
  createdAt: Date | null;
}

export default function Dashboard() {
  const leads = dummyLeads; // Ensure dummyLeads conforms to the Lead interface

  const stats = {
    total: leads.length,
    qualified: leads.filter((l) => l.isQualified).length,
    processing: leads.filter((l) => !l.isQualified).length,
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Agent Network </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.total}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Qualified Leads
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {stats.qualified}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Processing
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {stats.processing}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Agent Network</CardTitle>
            </CardHeader>
            <CardContent className="h-[400px]">
              <AgentNetworkUML leads={leads} />
            </CardContent>
          </Card>

          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Lead Processing Queue</CardTitle>
            </CardHeader>
            <CardContent>
              <LeadList leads={leads} isLoading={false} />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
