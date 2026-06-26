import { PageHeader } from '@neo-admin/core';
import { Badge, Card, CardContent, Stack, Tabs, TabsContent, TabsList, TabsTrigger, Text } from 'neobrutalism-ui-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function TabsPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Tabs"
        badge="Showcase"
        description="Tabbed content navigation for settings, dashboards, and detail views."
      />

      <ShowcaseSection title="Default tabs" description="Three-panel tab switcher">
        <Tabs defaultValue="tab1">
          <TabsList>
            <TabsTrigger value="tab1">Overview</TabsTrigger>
            <TabsTrigger value="tab2">Analytics</TabsTrigger>
            <TabsTrigger value="tab3">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1">
            <Card tone="cream">
              <CardContent className="pt-6">
                <Text>Overview panel — summary metrics and quick actions.</Text>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tab2">
            <Card tone="yellow">
              <CardContent className="pt-6">
                <Text>Analytics panel — charts and performance data.</Text>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="tab3">
            <Card tone="mint">
              <CardContent className="pt-6">
                <Text>Settings panel — preferences and configuration.</Text>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ShowcaseSection>

      <ShowcaseSection title="With badges" description="Tabs indicating counts or status">
        <Tabs defaultValue="inbox">
          <TabsList>
            <TabsTrigger value="inbox">
              Inbox <Badge tone="primary" className="ml-2">3</Badge>
            </TabsTrigger>
            <TabsTrigger value="sent">Sent</TabsTrigger>
            <TabsTrigger value="archive">Archive</TabsTrigger>
          </TabsList>
          <TabsContent value="inbox">
            <Card>
              <CardContent className="pt-6">
                <Text size="sm">3 unread messages in your inbox.</Text>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="sent">
            <Card tone="cream">
              <CardContent className="pt-6">
                <Text size="sm">12 messages sent this week.</Text>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="archive">
            <Card tone="yellow">
              <CardContent className="pt-6">
                <Text size="sm">Archived messages are stored here.</Text>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </ShowcaseSection>
    </Stack>
  );
}
