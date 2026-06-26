import { DashboardSection, PageHeader } from '@neo-admin/core';
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Checkbox,
  Cluster,
  FormActions,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormRoot,
  Input,
  Select,
  SelectOption,
  Stack,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  useToast,
} from 'neobrutalism-ui-react';
import { Bell, Globe, Lock, User } from 'lucide-react';
import { useForm } from 'react-hook-form';

export default function SettingsPage() {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      name: 'Admin User',
      email: 'admin@neo.admin',
      timezone: 'asia/jakarta',
      language: 'en',
      notifications: true,
      marketing: false,
      weeklyDigest: true,
    },
  });

  return (
    <Stack gap="xl">
      <PageHeader
        title="Settings"
        badge="Preferences"
        description="Manage account details, notifications, and security preferences."
      />

      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">
            <User className="mr-1.5 size-4" />
            Account
          </TabsTrigger>
          <TabsTrigger value="notifications">
            <Bell className="mr-1.5 size-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security">
            <Lock className="mr-1.5 size-4" />
            Security
          </TabsTrigger>
        </TabsList>

        <FormRoot form={form} onSubmit={() => toast({ title: 'Settings saved', description: 'Your preferences were updated.' })}>
          <TabsContent value="account">
            <Stack gap="lg">
              <DashboardSection title="Profile" description="Basic account information">
                <Card tone="cream" className="shadow-[4px_4px_0_0_var(--nb-shadow)]">
                  <CardContent className="pt-6">
                    <Stack gap="md">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Display name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </Stack>
                  </CardContent>
                </Card>
              </DashboardSection>

              <DashboardSection title="Regional" description="Language and timezone">
                <Card tone="white" className="shadow-[4px_4px_0_0_var(--nb-shadow)]">
                  <CardContent className="pt-6">
                    <Stack gap="md">
                      <FormField
                        control={form.control}
                        name="language"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>
                              <span className="inline-flex items-center gap-1.5">
                                <Globe className="size-4" />
                                Language
                              </span>
                            </FormLabel>
                            <FormControl>
                              <Select value={field.value} onValueChange={field.onChange}>
                                <SelectOption value="en">English</SelectOption>
                                <SelectOption value="id">Bahasa Indonesia</SelectOption>
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="timezone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Timezone</FormLabel>
                            <FormControl>
                              <Select value={field.value} onValueChange={field.onChange}>
                                <SelectOption value="asia/jakarta">Asia/Jakarta (WIB)</SelectOption>
                                <SelectOption value="asia/singapore">Asia/Singapore</SelectOption>
                                <SelectOption value="utc">UTC</SelectOption>
                              </Select>
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </Stack>
                  </CardContent>
                </Card>
              </DashboardSection>
            </Stack>
          </TabsContent>

          <TabsContent value="notifications">
            <Card tone="cream" className="shadow-[4px_4px_0_0_var(--nb-shadow)]">
              <CardHeader>
                <CardTitle>Email & push</CardTitle>
              </CardHeader>
              <CardContent>
                <Stack gap="md">
                  <FormField
                    control={form.control}
                    name="notifications"
                    render={({ field }) => (
                      <FormItem layout="horizontal">
                        <Stack gap="xs">
                          <FormLabel>Product updates</FormLabel>
                          <Text size="xs" className="opacity-60">
                            Get notified about new features
                          </Text>
                        </Stack>
                        <FormControl>
                          <Switch checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="weeklyDigest"
                    render={({ field }) => (
                      <FormItem layout="horizontal">
                        <Stack gap="xs">
                          <FormLabel>Weekly digest</FormLabel>
                          <Text size="xs" className="opacity-60">
                            Summary every Monday morning
                          </Text>
                        </Stack>
                        <FormControl>
                          <Switch checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="marketing"
                    render={({ field }) => (
                      <FormItem layout="horizontal">
                        <Stack gap="xs">
                          <FormLabel>Marketing emails</FormLabel>
                          <Text size="xs" className="opacity-60">
                            Tips, offers, and community news
                          </Text>
                        </Stack>
                        <FormControl>
                          <Checkbox checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </Stack>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card tone="yellow" className="shadow-[4px_4px_0_0_var(--nb-shadow)]">
              <CardContent className="pt-6">
                <Stack gap="lg">
                  <Cluster justify="between" wrap="wrap">
                    <Stack gap="xs">
                      <Text weight="bold">Password</Text>
                      <Text size="sm" className="opacity-70">
                        Last changed 30 days ago
                      </Text>
                    </Stack>
                    <Button tone="secondary" size="sm">
                      Change password
                    </Button>
                  </Cluster>
                  <Cluster justify="between" wrap="wrap">
                    <Stack gap="xs">
                      <Text weight="bold">Two-factor auth</Text>
                      <Text size="sm" className="opacity-70">
                        Protect your account with 2FA
                      </Text>
                    </Stack>
                    <Badge tone="warning">Disabled</Badge>
                  </Cluster>
                  <Button tone="primary" size="sm">
                    Enable 2FA
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </TabsContent>

          <FormActions className="mt-6">
            <Button type="submit">Save Changes</Button>
            <Button type="button" tone="secondary" onClick={() => form.reset()}>
              Reset
            </Button>
          </FormActions>
        </FormRoot>
      </Tabs>
    </Stack>
  );
}
