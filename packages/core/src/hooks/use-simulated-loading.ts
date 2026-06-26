import { useEffect, useState } from 'react';

export function useSimulatedLoading(delayMs = 300): boolean {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = window.setTimeout(() => setLoading(false), delayMs);
    return () => window.clearTimeout(id);
  }, [delayMs]);

  return loading;
}
