import { useMemo, useState } from 'react';
import { useToast } from 'neobrutalism-ui-react';
import {
  DashboardSection,
  DashboardToolbar,
} from '../widgets/dashboard-toolbar';

export function useDashboardPage() {
  const [period, setPeriod] = useState('30d');
  const { toast } = useToast();

  const toolbarProps = useMemo(
    () => ({
      period,
      onPeriodChange: setPeriod,
      onRefresh: () => toast({ title: 'Data refreshed', description: `Showing ${period} data` }),
      onExport: () => toast({ title: 'Export started', description: 'Your report will download shortly.' }),
    }),
    [period, toast],
  );

  return {
    period,
    setPeriod,
    toolbarProps,
    DashboardToolbar,
    DashboardSection,
  };
}
