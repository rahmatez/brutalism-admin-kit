import { DashboardSection, PageHeader } from '@neo-admin/core';
import {
  Badge,
  Button,
  Calendar,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Cluster,
  Split,
  Stack,
  Text,
} from 'neobrutalism-ui-react';
import { CalendarDays, MapPin, Plus, Video } from 'lucide-react';

const events = [
  { id: '1', title: 'Team Standup', time: '9:00 AM', date: 'Jun 26', type: 'meeting', location: 'Zoom' },
  { id: '2', title: 'Sprint Review', time: '2:00 PM', date: 'Jun 26', type: 'review', location: 'Room A' },
  { id: '3', title: 'Client Call — Acme Corp', time: '4:30 PM', date: 'Jun 27', type: 'call', location: 'Google Meet' },
  { id: '4', title: 'Design Critique', time: '11:00 AM', date: 'Jun 28', type: 'meeting', location: 'Room B' },
];

const typeTone: Record<string, 'primary' | 'warning' | 'success' | 'secondary'> = {
  meeting: 'primary',
  review: 'warning',
  call: 'success',
};

export default function CalendarPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Calendar"
        badge="Schedule"
        description="Month view with upcoming events, locations, and quick actions."
        actions={
          <Button tone="primary" size="sm">
            <Plus className="mr-1.5 size-4" />
            New Event
          </Button>
        }
      />

      <Split ratio="2:1" collapse="lg">
        <DashboardSection title="Month View" description="Select a date to filter events">
          <Card tone="cream" className="shadow-[4px_4px_0_0_var(--nb-shadow)]">
            <CardContent className="pt-6">
              <Calendar mode="single" />
            </CardContent>
          </Card>
        </DashboardSection>

        <DashboardSection title="Upcoming" description="Next 7 days">
          <Card tone="white" className="shadow-[4px_4px_0_0_var(--nb-shadow)]">
            <CardHeader>
              <Cluster gap="sm">
                <CalendarDays className="size-5" />
                <CardTitle>Events</CardTitle>
              </Cluster>
            </CardHeader>
            <CardContent>
              <Stack gap="md">
                {events.map((e) => (
                  <div
                    key={e.id}
                    className="rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-cream) p-3 shadow-[2px_2px_0_0_var(--nb-shadow)]"
                  >
                    <Cluster justify="between" wrap="wrap" className="gap-2">
                      <Text weight="bold">{e.title}</Text>
                      <Badge tone={typeTone[e.type] ?? 'secondary'}>{e.type}</Badge>
                    </Cluster>
                    <Text size="sm" className="mt-1 opacity-70">
                      {e.date} · {e.time}
                    </Text>
                    <Cluster gap="xs" className="mt-2 opacity-60">
                      {e.location.includes('Meet') || e.location.includes('Zoom') ? (
                        <Video className="size-3.5" />
                      ) : (
                        <MapPin className="size-3.5" />
                      )}
                      <Text size="xs">{e.location}</Text>
                    </Cluster>
                  </div>
                ))}
              </Stack>
            </CardContent>
          </Card>
        </DashboardSection>
      </Split>
    </Stack>
  );
}
