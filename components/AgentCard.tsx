import { Handle, Position } from 'reactflow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/networkui/card';
import { Badge } from '@/components/networkui/badge';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/networkui/tooltip";

interface AgentCardProps {
  data: {
    name: string;
    count: number;
    description: string;
    variant: 'agent' | 'prompting' | 'decision' | 'endpoint' | 'interface' | 'missing';
  };
}

export default function AgentCard({ data }: AgentCardProps) {
  
  const getVariantStyles = () => {
    switch (data.variant) {
      case 'agent':
        return 'bg-blue-50 border-blue-200 hover:bg-blue-100 transition-colors';
      case 'prompting':
        return 'bg-purple-50 border-purple-200 hover:bg-purple-100 transition-colors';
      case 'decision':
        return 'bg-orange-50 border-orange-200 hover:bg-orange-100 transition-colors';
      case 'endpoint':
        return 'bg-green-50 border-green-200 hover:bg-green-100 transition-colors';
      case 'interface':
        return 'bg-pink-50 border-pink-200 hover:bg-pink-100 transition-colors';
      case 'missing':
        return 'bg-red-50 border-red-200 hover:bg-red-100 transition-colors border-dashed';
      default:
        return 'bg-gray-50 border-gray-200 hover:bg-gray-100 transition-colors';
    }
  };

  const getBadgeVariant = () => {
    switch (data.variant) {
      case 'agent':
        return 'secondary';
      case 'prompting':
        return 'default';
      case 'decision':
        return 'destructive';
      case 'endpoint':
        return 'default';
      case 'interface':
        return 'secondary';
      case 'missing':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <Tooltip>
      
      <TooltipTrigger asChild>
        
        <Card className={`w-[220px] shadow-lg ${getVariantStyles()}`}>
          <Handle 
            type="target" 
            position={Position.Left} 
            className="!bg-gray-400 w-3 h-3" 
          />
          <CardHeader className="p-4">
            <CardTitle className="text-sm font-medium flex items-center justify-between">
              <span>{data.name}</span>
              {data.variant !== 'missing' && (
                <Badge variant={getBadgeVariant()} className="ml-2">
                  {data.count}
                </Badge>
              )}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0">
            <p className="text-xs text-muted-foreground">
              {data.description}
            </p>
          </CardContent>
          <Handle 
            type="source" 
            position={Position.Right} 
            className="!bg-gray-400 w-3 h-3" 
          />
        </Card>
      </TooltipTrigger>
      <TooltipContent>
        <p>{data.description}</p>
      </TooltipContent>
    </Tooltip>
  );
}