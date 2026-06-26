import {
  aiGenerations,
  aiUsageData,
  BarChartCard,
  embeddedDataTableClassName,
  KpiStatRow,
  PageHeader,
  useDashboardPage,
  WidgetCardHeader,
  widgetCardBodyClassName,
  widgetCardBodyProps,
  widgetCardProps,
  widgetCardShellClassName,
  widgetCardTableContentClassName,
} from '@neo-admin/core';
import {
  Badge,
  Button,
  Card,
  CardContent,
  Cluster,
  DataTable,
  Split,
  Stack,
  Text,
  Textarea,
  useToast,
} from 'neobrutalism-ui-react';
import { Bot, Code, Image, Send, Sparkles, Type } from 'lucide-react';
import { useState } from 'react';

export default function AiDashboard() {
  const [prompt, setPrompt] = useState('');
  const { toast } = useToast();
  const { toolbarProps, DashboardToolbar, DashboardSection } = useDashboardPage();

  return (
    <Stack gap="xl">
      <PageHeader
        title="AI Studio"
        badge="Beta"
        description="Prompt usage, generation history, token costs, and quick actions."
      />
      <DashboardToolbar {...toolbarProps} />
      <KpiStatRow
        items={[
          { label: 'Generations', value: '2,847', change: '+312', changeType: 'up', icon: <Sparkles className="size-5" />, tone: 'lavender' },
          { label: 'Tokens Used', value: '1.2M', change: '+18%', changeType: 'up', icon: <Bot className="size-5" />, tone: 'mint' },
          { label: 'Avg. Latency', value: '1.4s', change: '-0.2s', changeType: 'down', icon: <Type className="size-5" />, tone: 'yellow' },
          { label: 'Est. Cost', value: '$48.20', change: '+$6.40', changeType: 'up', icon: <Code className="size-5" />, tone: 'pink' },
        ]}
      />
      <Card tone="lavender" shadow="heavy" className={widgetCardShellClassName} {...widgetCardProps}>
        <WidgetCardHeader title="New Generation" description="Describe what you want to create" />
        <CardContent className={widgetCardBodyClassName} {...widgetCardBodyProps}>
          <Stack gap="md">
            <Textarea
              placeholder="e.g. Write a product description for wireless headphones..."
              rows={4}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <Cluster gap="md" wrap="wrap" justify="between" className="gap-y-3">
              <Cluster gap="sm" wrap="wrap">
                <Button tone="primary" size="sm"><Type className="mr-1.5 size-4" /> Text</Button>
                <Button tone="secondary" size="sm"><Image className="mr-1.5 size-4" /> Image</Button>
                <Button tone="secondary" size="sm"><Code className="mr-1.5 size-4" /> Code</Button>
              </Cluster>
              <Button
                disabled={!prompt.trim()}
                onClick={() => {
                  toast({ title: 'Generation started', description: 'Your request is being processed.' });
                  setPrompt('');
                }}
              >
                <Send className="mr-1.5 size-4" />
                Generate
              </Button>
            </Cluster>
          </Stack>
        </CardContent>
      </Card>
      <DashboardSection title="Usage & History" description="Token consumption and recent outputs">
        <Split ratio="1:1" collapse="lg">
          <BarChartCard
            title="Token Usage"
            description="Daily token consumption this week"
            data={aiUsageData}
            dataKey="tokens"
            categoryKey="day"
            tone="cream"
          />
          <Card tone="cream" shadow="hard" className={widgetCardShellClassName} {...widgetCardProps}>
            <WidgetCardHeader title="Recent Generations" description="Your latest AI outputs" />
            <CardContent className={widgetCardTableContentClassName}>
              <DataTable
                className={embeddedDataTableClassName}
                data={[...aiGenerations]}
                columns={[
                  { id: 'prompt', header: 'Prompt', accessorFn: (r) => r.prompt.slice(0, 36) + '…' },
                  { id: 'type', header: 'Type', cell: ({ row }) => <Badge tone="primary">{row.type}</Badge> },
                  { id: 'tokens', header: 'Tokens', accessorKey: 'tokens' },
                  { id: 'createdAt', header: 'Time', accessorKey: 'createdAt' },
                ]}
              />
            </CardContent>
          </Card>
        </Split>
      </DashboardSection>
      <Text size="xs" className="text-center opacity-60">
        AI features are demo-only. Connect your API key in settings to enable live generation.
      </Text>
    </Stack>
  );
}
