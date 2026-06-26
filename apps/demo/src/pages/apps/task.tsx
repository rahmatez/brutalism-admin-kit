import { DashboardSection, FilterBar, KpiStatRow, PageHeader, tasks } from '@neo-admin/core';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Cluster,
  Stack,
  Text,
} from 'neobrutalism-ui-react';
import { CheckCircle2, Circle, Clock, Plus } from 'lucide-react';
import { useState } from 'react';

const columns = [
  { key: 'todo', label: 'To Do', tone: 'cream' as const, icon: Circle },
  { key: 'in_progress', label: 'In Progress', tone: 'yellow' as const, icon: Clock },
  { key: 'done', label: 'Done', tone: 'mint' as const, icon: CheckCircle2 },
];

const priorityTone: Record<string, 'danger' | 'warning' | 'secondary'> = {
  high: 'danger',
  medium: 'warning',
  low: 'secondary',
};

export default function TaskPage() {
  const [priorityFilter, setPriorityFilter] = useState<string>('all');

  const filtered = priorityFilter === 'all' ? tasks : tasks.filter((t) => t.priority === priorityFilter);
  const doneCount = tasks.filter((t) => t.status === 'done').length;

  return (
    <Stack gap="xl">
      <PageHeader
        title="Task Board"
        badge="Kanban"
        description="Drag-style kanban board with priority filters and team assignments."
        actions={
          <Button tone="primary" size="sm">
            <Plus className="mr-1.5 size-4" />
            New Task
          </Button>
        }
      />

      <KpiStatRow
        items={[
          { label: 'Total Tasks', value: String(tasks.length), tone: 'yellow' },
          { label: 'In Progress', value: String(tasks.filter((t) => t.status === 'in_progress').length), tone: 'lavender' },
          { label: 'Completed', value: String(doneCount), change: `${Math.round((doneCount / tasks.length) * 100)}%`, changeType: 'up', tone: 'mint' },
          { label: 'High Priority', value: String(tasks.filter((t) => t.priority === 'high').length), tone: 'pink' },
        ]}
      />

      <FilterBar>
        <Cluster gap="sm" wrap="wrap">
          {(['all', 'high', 'medium', 'low'] as const).map((p) => (
            <Button
              key={p}
              size="sm"
              tone={priorityFilter === p ? 'primary' : 'secondary'}
              onClick={() => setPriorityFilter(p)}
            >
              {p === 'all' ? 'All priorities' : p.charAt(0).toUpperCase() + p.slice(1)}
            </Button>
          ))}
        </Cluster>
      </FilterBar>

      <DashboardSection title="Board" description="Tasks grouped by status">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {columns.map((col) => {
            const Icon = col.icon;
            const colTasks = filtered.filter((t) => t.status === col.key);
            return (
              <Card key={col.key} tone={col.tone} className="shadow-[4px_4px_0_0_var(--nb-shadow)]">
                <CardHeader>
                  <Cluster justify="between">
                    <Cluster gap="sm" align="center">
                      <Icon className="size-4" />
                      <CardTitle>{col.label}</CardTitle>
                    </Cluster>
                    <Badge tone="secondary">{colTasks.length}</Badge>
                  </Cluster>
                </CardHeader>
                <CardContent>
                  <Stack gap="sm">
                    {colTasks.map((task) => (
                      <Card key={task.id} tone="white" shadow="sm" className="cursor-pointer hover:translate-x-0.5 hover:translate-y-0.5">
                        <CardContent className="p-3">
                          <Text weight="bold" size="sm">
                            {task.title}
                          </Text>
                          <Cluster gap="xs" className="mt-2" wrap="wrap">
                            <Badge tone={priorityTone[task.priority]}>{task.priority}</Badge>
                            <Text size="xs" className="opacity-70">
                              {task.assignee}
                            </Text>
                          </Cluster>
                        </CardContent>
                      </Card>
                    ))}
                    {colTasks.length === 0 && (
                      <Text size="sm" className="py-4 text-center opacity-50">
                        No tasks
                      </Text>
                    )}
                  </Stack>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </DashboardSection>
    </Stack>
  );
}
