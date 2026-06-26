import { Card, CardContent, CardHeader, CardTitle, Stack, Text } from 'neobrutalism-ui-react';
import type { ReactNode } from 'react';
import { APP_NAME } from '../navigation/nav.config';

export interface AuthLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

export function AuthLayout({ children, title, description }: AuthLayoutProps) {
  return (
    <div className="flex min-h-svh items-center justify-center bg-(--nb-background) p-4" id="main-content">
      <div className="w-full max-w-md">
        <Stack gap="lg">
          <Stack gap="sm" className="text-center">
            <Text className="font-heading text-3xl font-black uppercase">{APP_NAME}</Text>
            {description ? (
              <Text size="sm" className="opacity-70">
                {description}
              </Text>
            ) : null}
          </Stack>
          <Card tone="cream" shadow="hard">
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent>{children}</CardContent>
          </Card>
        </Stack>
      </div>
    </div>
  );
}
