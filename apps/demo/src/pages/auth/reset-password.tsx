import { AuthLayout } from '@neo-admin/core';
import { Button, FormActions, FormControl, FormField, FormItem, FormLabel, FormMessage, FormRoot, Input, Stack, useToast } from 'neobrutalism-ui-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({ email: z.string().email() });

export default function ResetPasswordPage() {
  const { toast } = useToast();
  const form = useForm({ resolver: zodResolver(schema), defaultValues: { email: '' } });

  return (
    <AuthLayout title="Reset Password" description="We'll send you a reset link">
      <FormRoot form={form} onSubmit={() => toast({ title: 'Reset link sent', description: 'Check your email.' })}>
        <Stack gap="md">
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormActions><Button type="submit" fullWidth>Send Reset Link</Button></FormActions>
          <Link to="/auth/sign-in" className="text-center text-sm underline">Back to sign in</Link>
        </Stack>
      </FormRoot>
    </AuthLayout>
  );
}
