import { PageHeader } from '@neo-admin/core';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Stack,
  Text,
} from 'neobrutalism-ui-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function CardsPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Cards"
        badge="Showcase"
        description="Card layouts with headers, descriptions, content, and footer actions."
      />

      <ShowcaseSection title="Variants" description="Tone and shadow combinations">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card tone="cream">
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
              <CardDescription>Simple card with description text</CardDescription>
            </CardHeader>
            <CardContent>Content area for metrics, forms, or lists.</CardContent>
          </Card>
          <Card tone="yellow">
            <CardHeader>
              <CardTitle>With Actions</CardTitle>
            </CardHeader>
            <CardContent>Footer actions for primary workflows.</CardContent>
            <CardFooter>
              <CardActions>
                <Button size="sm" tone="secondary">
                  Cancel
                </Button>
                <Button size="sm">Save</Button>
              </CardActions>
            </CardFooter>
          </Card>
          <Card tone="mint" shadow="heavy">
            <CardHeader>
              <CardTitle>Heavy Shadow</CardTitle>
            </CardHeader>
            <CardContent>Neo-brutalist hard shadow for emphasis.</CardContent>
          </Card>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Stat card" description="KPI-style compact card">
        <Card tone="lavender" className="max-w-xs shadow-[6px_6px_0_0_var(--nb-shadow)]">
          <CardContent className="space-y-2 pt-6">
            <Text size="sm" weight="bold" className="uppercase opacity-60">
              Revenue
            </Text>
            <Text size="3xl" weight="bold">
              $24.5K
            </Text>
            <Text size="sm" className="text-(--nb-success)">
              +12.4% vs last month
            </Text>
          </CardContent>
        </Card>
      </ShowcaseSection>
    </Stack>
  );
}
