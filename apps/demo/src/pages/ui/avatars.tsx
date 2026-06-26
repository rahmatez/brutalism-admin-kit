import { PageHeader } from '@neo-admin/core';
import { Avatar, AvatarGroup, Cluster, Stack, StatusDot, Text } from 'neobrutalism-ui-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function AvatarsPage() {
  return (
    <Stack gap="xl">
      <PageHeader
        title="Avatars"
        badge="Showcase"
        description="User avatars, tone variants, and overflow groups."
      />

      <ShowcaseSection title="Tones" description="Color variants for avatar backgrounds">
        <Cluster gap="md" wrap="wrap" align="center">
          <Avatar alt="User A" tone="primary" />
          <Avatar alt="User B" tone="secondary" />
          <Avatar alt="User C" tone="mint" />
          <Avatar alt="User D" tone="yellow" />
          <Avatar alt="User E" tone="lavender" />
        </Cluster>
      </ShowcaseSection>

      <ShowcaseSection title="Sizes" description="Default and large profile avatars">
        <Cluster gap="md" align="end">
          <Avatar alt="Small" tone="primary" />
          <Avatar alt="Large" tone="primary" className="size-16 text-lg" />
          <Avatar alt="XL" tone="mint" className="size-20 text-xl" />
        </Cluster>
      </ShowcaseSection>

      <ShowcaseSection title="Avatar group" description="Stacked avatars with overflow count">
        <AvatarGroup overflow={3}>
          <Avatar alt="A" tone="primary" />
          <Avatar alt="B" tone="secondary" />
          <Avatar alt="C" tone="mint" />
          <Avatar alt="D" tone="yellow" />
          <Avatar alt="E" tone="lavender" />
        </AvatarGroup>
        <Cluster gap="sm" className="mt-4" align="center">
          <div className="relative">
            <Avatar alt="Online" tone="primary" />
            <StatusDot state="online" size="sm" className="absolute -right-0.5 -bottom-0.5" />
          </div>
          <Text size="sm" className="opacity-70">
            Avatar with online status dot
          </Text>
        </Cluster>
      </ShowcaseSection>
    </Stack>
  );
}
