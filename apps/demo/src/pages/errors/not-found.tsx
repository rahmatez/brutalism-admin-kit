import { Button, Display, Stack, Text } from 'neobrutalism-ui-react';
import { useNavigate } from 'react-router-dom';

export default function NotFoundPage() {
  const navigate = useNavigate();
  return (
    <Stack gap="lg" align="center" className="flex min-h-svh justify-center p-8 text-center">
      <Display size="xl">404</Display>
      <Text size="xl" weight="bold">Page not found</Text>
      <Text className="max-w-md opacity-70">The page you're looking for doesn't exist or has been moved.</Text>
      <Button onClick={() => navigate('/')}>Back to Dashboard</Button>
    </Stack>
  );
}
