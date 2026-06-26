import { ActivityFeed, activities, DashboardSection, KpiStatRow, PageHeader } from '@neo-admin/core';
import {
  Avatar,
  Badge,
  Button,
  Card,
  CardContent,
  Cluster,
  Split,
  Stack,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
} from 'neobrutalism-ui-react';
import { Calendar, Mail, MapPin, Pencil } from 'lucide-react';

export default function ProfilePage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Profile"
        badge="Account"
        description="Your public profile, activity history, and account overview."
        actions={
          <Button tone="primary" size="sm">
            <Pencil className="mr-1.5 size-4" />
            Edit Profile
          </Button>
        }
      />

      <Card tone="cream" className="shadow-[6px_6px_0_0_var(--nb-shadow)]">
        <CardContent className="p-6">
          <Cluster gap="lg" wrap="wrap" align="center">
            <Avatar alt="Admin User" tone="primary" className="size-24 shrink-0 text-2xl" />
            <Stack gap="sm" className="min-w-0 flex-1">
              <Cluster gap="sm" wrap="wrap" align="center">
                <Text size="2xl" weight="bold">
                  Admin User
                </Text>
                <Badge tone="success">Active</Badge>
              </Cluster>
              <Cluster gap="md" wrap="wrap" className="text-sm opacity-70">
                <Cluster gap="xs" align="center">
                  <Mail className="size-4 shrink-0" aria-hidden />
                  <Text size="sm">admin@neo.admin</Text>
                </Cluster>
                <Cluster gap="xs" align="center">
                  <MapPin className="size-4 shrink-0" aria-hidden />
                  <Text size="sm">Jakarta, Indonesia</Text>
                </Cluster>
                <Cluster gap="xs" align="center">
                  <Calendar className="size-4 shrink-0" aria-hidden />
                  <Text size="sm">Joined Jan 2026</Text>
                </Cluster>
              </Cluster>
              <Text size="sm" className="max-w-xl leading-relaxed opacity-80">
                Product lead building neo-brutalist admin experiences. Passionate about design systems and
                developer tools.
              </Text>
            </Stack>
          </Cluster>
        </CardContent>
      </Card>

      <KpiStatRow
        items={[
          { label: 'Projects', value: '12', change: '+2', changeType: 'up', tone: 'yellow' },
          { label: 'Tasks Done', value: '84', change: '+18%', changeType: 'up', tone: 'mint' },
          { label: 'Team Size', value: '8', change: 'Stable', changeType: 'neutral', tone: 'lavender' },
          { label: 'Response Rate', value: '96%', change: '+4%', changeType: 'up', tone: 'pink' },
        ]}
      />

      <Tabs defaultValue="overview">
        <TabsList className="w-full max-w-md">
          <TabsTrigger value="overview" className="flex-1">
            Overview
          </TabsTrigger>
          <TabsTrigger value="activity" className="flex-1">
            Activity
          </TabsTrigger>
          <TabsTrigger value="security" className="flex-1">
            Security
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-6">
          <Split ratio="1:1" collapse="lg" className="*:min-w-0 items-stretch">
            <Card tone="white" shadow="hard" className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <Stack gap="md" className="h-full">
                  <Text weight="bold">About</Text>
                  <Text size="sm" className="leading-relaxed opacity-80">
                    Role: Administrator · Department: Engineering · Reports to: CTO
                  </Text>
                  <div className="mt-auto rounded-(--nb-radius) border-2 border-(--nb-border) bg-(--nb-mint) p-4">
                    <Stack gap="xs">
                      <Text size="sm" weight="bold">
                        Current focus
                      </Text>
                      <Text size="sm" className="leading-relaxed opacity-80">
                        Shipping Brutalism Admin Kit v1.0 and documentation site.
                      </Text>
                    </Stack>
                  </div>
                </Stack>
              </CardContent>
            </Card>
            <Card tone="yellow" shadow="hard" className="h-full">
              <CardContent className="flex h-full flex-col p-6">
                <Stack gap="md" className="h-full">
                  <Text weight="bold">Skills</Text>
                  <Cluster gap="sm" wrap="wrap" className="content-start">
                    {['React', 'TypeScript', 'Design Systems', 'Tailwind', 'Node.js'].map((s) => (
                      <Badge key={s} tone="secondary">
                        {s}
                      </Badge>
                    ))}
                  </Cluster>
                </Stack>
              </CardContent>
            </Card>
          </Split>
        </TabsContent>
        <TabsContent value="activity" className="mt-6">
          <DashboardSection title="Recent Activity" description="Team-wide CRM events">
            <ActivityFeed data={activities} />
          </DashboardSection>
        </TabsContent>
        <TabsContent value="security" className="mt-6">
          <Card tone="cream" shadow="hard">
            <CardContent className="p-6">
              <Stack gap="md">
                <Cluster justify="between" wrap="wrap" className="gap-4">
                  <Stack gap="xs">
                    <Text weight="bold">Two-factor authentication</Text>
                    <Text size="sm" className="opacity-70">
                      Add an extra layer of security
                    </Text>
                  </Stack>
                  <Badge tone="warning">Not enabled</Badge>
                </Cluster>
                <Cluster justify="between" wrap="wrap" className="gap-4">
                  <Stack gap="xs">
                    <Text weight="bold">Last login</Text>
                    <Text size="sm" className="opacity-70">
                      Today at 9:42 AM · Jakarta
                    </Text>
                  </Stack>
                  <Button tone="secondary" size="sm">
                    View sessions
                  </Button>
                </Cluster>
              </Stack>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </Stack>
  );
}
