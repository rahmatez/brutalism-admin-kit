import { AuthLayout } from '@neo-admin/core';
import { Button, FormActions, FormControl, FormField, FormItem, FormLabel, FormMessage, FormRoot, Input, Stack, useToast } from 'neobrutalism-ui-react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
});

export default function SignUpPage() {
  const navigate = useNavigate();
  const { toast } = useToast();
  const form = useForm({ resolver: zodResolver(schema), defaultValues: { name: '', email: '', password: '' } });

  return (
    <AuthLayout title="Sign Up" description="Create your Brutalism Admin Kit account">
      <FormRoot form={form} onSubmit={() => { toast({ title: 'Account created' }); navigate('/auth/two-step'); }}>
        <Stack gap="md">
          <FormField control={form.control} name="name" render={({ field }) => (
            <FormItem><FormLabel>Name</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="email" render={({ field }) => (
            <FormItem><FormLabel>Email</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormField control={form.control} name="password" render={({ field }) => (
            <FormItem><FormLabel>Password</FormLabel><FormControl><Input type="password" {...field} /></FormControl><FormMessage /></FormItem>
          )} />
          <FormActions><Button type="submit" fullWidth>Create Account</Button></FormActions>
          <Link to="/auth/sign-in" className="text-center text-sm underline">Already have an account?</Link>
        </Stack>
      </FormRoot>
    </AuthLayout>
  );
}
