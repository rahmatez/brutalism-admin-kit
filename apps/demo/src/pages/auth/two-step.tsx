import { AuthLayout } from '@neo-admin/core';
import { Button, InputOTP, Stack, Text, useToast } from 'neobrutalism-ui-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TwoStepPage() {
  const [code, setCode] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  return (
    <AuthLayout title="Two-Step Verification" description="Enter the 6-digit code sent to your email">
      <Stack gap="lg" align="center">
        <InputOTP length={6} value={code} onChange={setCode} />
        <Text size="sm" className="opacity-70">Didn't receive a code? Resend in 30s</Text>
        <Button
          fullWidth
          disabled={code.length < 6}
          onClick={() => { toast({ title: 'Verified' }); navigate('/dashboards/analytics'); }}
        >
          Verify
        </Button>
      </Stack>
    </AuthLayout>
  );
}
