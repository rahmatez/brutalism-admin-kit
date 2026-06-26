import { AuthLayout } from '@neo-admin/core';
import { Button, FormActions, FormControl, FormField, FormItem, FormLabel, FormMessage, FormRoot, Input, Stack, useToast } from 'neobrutalism-ui-react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Min 6 characters'),
});

type FormData = z.infer<typeof schema>;

export default function SignInPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { email: '', password: '' } });

  return (
    <AuthLayout title="Sign In" description="Welcome back to Brutalism Admin Kit">
      <FormRoot
        form={form}
        onSubmit={() => {
          toast({ title: 'Signed in', description: 'Redirecting to dashboard...' });
          navigate('/dashboards/analytics');
        }}
      >
        <Stack gap="md">
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem><FormLabel>Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormActions><Button type="submit" fullWidth>Sign In</Button></FormActions>
          <Stack gap="xs" className="text-center text-sm">
            <Link to="/auth/reset-password" className="underline">Forgot password?</Link>
            <Link to="/auth/sign-up" className="underline">Create account</Link>
          </Stack>
        </Stack>
      </FormRoot>
    </AuthLayout>
  );
}
