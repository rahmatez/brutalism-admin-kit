import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'react-router-dom',
    'neobrutalism-ui-react',
    'lucide-react',
    'recharts',
    'cmdk',
    'react-hook-form',
  ],
});
