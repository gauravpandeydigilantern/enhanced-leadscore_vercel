import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { type Lead } from "@/lib/dummyData";

interface LeadListProps {
  leads: Lead[];
  isLoading: boolean;
}

export default function LeadList({ leads, isLoading }: LeadListProps) {
  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Company</TableHead>
          <TableHead>Current Agent</TableHead>
          <TableHead>Lead Score</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leads.map((lead) => (
          <TableRow key={lead.id}>
            <TableCell>{lead.name}</TableCell>
            <TableCell>{lead.company}</TableCell>
            <TableCell>
              <Badge variant="outline">
                {lead.currentAgent || 'Unassigned'}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge 
                variant={(lead.leadScore || 0) >= 80 ? "default" : "secondary"}
              >
                {lead.leadScore || 0}
              </Badge>
            </TableCell>
            <TableCell>
              <Badge 
                variant={lead.isQualified ? "default" : "secondary"}
              >
                {lead.status}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}