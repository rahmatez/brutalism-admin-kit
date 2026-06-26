import { Display, Stack, Text } from 'neobrutalism-ui-react';

export default function MaintenancePage() {
  return (
    <Stack gap="lg" align="center" className="flex min-h-svh justify-center p-8 text-center">
      <Display size="lg">Under Maintenance</Display>
      <Text className="max-w-md opacity-70">We're performing scheduled maintenance. We'll be back shortly.</Text>
    </Stack>
  );
}
