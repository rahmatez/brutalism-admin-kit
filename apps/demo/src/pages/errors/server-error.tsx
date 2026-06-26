import { Button, Display, Stack, Text } from 'neobrutalism-ui-react';
import { useNavigate } from 'react-router-dom';

export default function ServerErrorPage() {
  const navigate = useNavigate();
  return (
    <Stack gap="lg" align="center" className="flex min-h-svh justify-center p-8 text-center">
      <Display size="xl">500</Display>
      <Text size="xl" weight="bold">Server Error</Text>
      <Text className="max-w-md opacity-70">Something went wrong on our end. Please try again later.</Text>
      <Button onClick={() => navigate('/')}>Back to Dashboard</Button>
    </Stack>
  );
}
