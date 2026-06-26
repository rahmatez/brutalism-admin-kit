import { PageHeader } from '@neo-admin/core';
import {
  Button,
  Checkbox,
  FormActions,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormRoot,
  Input,
  Label,
  Select,
  SelectOption,
  Split,
  Stack,
  Switch,
  Textarea,
  useToast,
} from 'neobrutalism-ui-react';
import { useForm } from 'react-hook-form';
import { ShowcaseSection } from '../../components/showcase-section';

export default function FormsPage() {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: { name: '', email: '', role: '', bio: '', agree: false, notify: true },
  });

  return (
    <Stack gap="xl">
      <PageHeader
        title="Forms"
        badge="Showcase"
        description="Form inputs, selects, checkboxes, and validation-ready fields."
      />

      <Split ratio="1:1" collapse="lg">
        <ShowcaseSection title="Contact form" description="react-hook-form + FormRoot integration">
          <FormRoot
            form={form}
            onSubmit={() => toast({ title: 'Form submitted', description: 'Demo form data captured.' })}
          >
            <Stack gap="md">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Jane Doe" {...field} />
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
                      <Input type="email" placeholder="jane@company.com" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="role"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Role</FormLabel>
                    <FormControl>
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectOption value="admin">Admin</SelectOption>
                        <SelectOption value="editor">Editor</SelectOption>
                        <SelectOption value="viewer">Viewer</SelectOption>
                      </Select>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="bio"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bio</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Short bio..." {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="agree"
                render={({ field }) => (
                  <FormItem layout="horizontal">
                    <FormLabel>Agree to terms</FormLabel>
                    <FormControl>
                      <Checkbox checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="notify"
                render={({ field }) => (
                  <FormItem layout="horizontal">
                    <FormLabel>Email notifications</FormLabel>
                    <FormControl>
                      <Switch checked={field.value} onChange={(e) => field.onChange(e.target.checked)} />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormActions>
                <Button type="submit">Submit</Button>
                <Button type="button" tone="secondary" onClick={() => form.reset()}>
                  Reset
                </Button>
              </FormActions>
            </Stack>
          </FormRoot>
        </ShowcaseSection>

        <ShowcaseSection title="Input states" description="Disabled and placeholder examples">
          <Stack gap="md">
            <Stack gap="sm">
              <Label htmlFor="forms-disabled-input">Disabled input</Label>
              <Input id="forms-disabled-input" disabled value="Read-only value" />
            </Stack>
            <Stack gap="sm">
              <Label htmlFor="forms-placeholder-input">With placeholder</Label>
              <Input id="forms-placeholder-input" placeholder="Search users..." />
            </Stack>
            <Stack gap="sm">
              <Label htmlFor="forms-textarea">Textarea</Label>
              <Textarea id="forms-textarea" placeholder="Write your message..." rows={4} />
            </Stack>
          </Stack>
        </ShowcaseSection>
      </Split>
    </Stack>
  );
}
