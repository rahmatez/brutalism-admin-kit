import type {
  Activity,
  AiGeneration,
  AnalyticsPoint,
  Campaign,
  ChatThread,
  Deal,
  FileItem,
  MailMessage,
  Order,
  Product,
  SalesRep,
  Shipment,
  Stock,
  Subscription,
  Task,
  TopPage,
  Transaction,
  User,
} from './types';

export const analyticsData: readonly AnalyticsPoint[] = [
  { month: 'Jan', visitors: 12400, pageViews: 45200, bounceRate: 42 },
  { month: 'Feb', visitors: 13800, pageViews: 52100, bounceRate: 39 },
  { month: 'Mar', visitors: 15200, pageViews: 58400, bounceRate: 37 },
  { month: 'Apr', visitors: 14100, pageViews: 54800, bounceRate: 40 },
  { month: 'May', visitors: 16800, pageViews: 63200, bounceRate: 35 },
  { month: 'Jun', visitors: 18200, pageViews: 70100, bounceRate: 33 },
];

export const topPages: readonly TopPage[] = [
  { id: '1', path: '/dashboard', views: 12450, avgTime: '4m 32s' },
  { id: '2', path: '/products', views: 9820, avgTime: '3m 18s' },
  { id: '3', path: '/pricing', views: 7640, avgTime: '2m 45s' },
  { id: '4', path: '/blog', views: 6210, avgTime: '5m 12s' },
  { id: '5', path: '/contact', views: 3890, avgTime: '1m 58s' },
];

export const orders: readonly Order[] = [
  { id: 'ORD-1001', customer: 'Alice Chen', product: 'Neo Headphones', amount: 149.99, status: 'delivered', date: '2026-06-20' },
  { id: 'ORD-1002', customer: 'Bob Smith', product: 'Brutal Keyboard', amount: 89.99, status: 'shipped', date: '2026-06-22' },
  { id: 'ORD-1003', customer: 'Carol Diaz', product: 'Bold Monitor', amount: 399.99, status: 'processing', date: '2026-06-23' },
  { id: 'ORD-1004', customer: 'Dan Park', product: 'Hard Case', amount: 49.99, status: 'pending', date: '2026-06-24' },
  { id: 'ORD-1005', customer: 'Eva Wong', product: 'Neo Mouse', amount: 59.99, status: 'cancelled', date: '2026-06-25' },
];

export const products: readonly Product[] = [
  { id: 'P1', name: 'Neo Headphones', category: 'Audio', price: 149.99, stock: 120, sales: 842 },
  { id: 'P2', name: 'Brutal Keyboard', category: 'Peripherals', price: 89.99, stock: 85, sales: 621 },
  { id: 'P3', name: 'Bold Monitor', category: 'Displays', price: 399.99, stock: 42, sales: 318 },
  { id: 'P4', name: 'Hard Case', category: 'Accessories', price: 49.99, stock: 200, sales: 1050 },
  { id: 'P5', name: 'Neo Mouse', category: 'Peripherals', price: 59.99, stock: 150, sales: 734 },
];

export const campaigns: readonly Campaign[] = [
  { id: 'C1', name: 'Summer Launch', channel: 'Email', spend: 2500, conversions: 342, roi: 3.2 },
  { id: 'C2', name: 'Social Blast', channel: 'Social', spend: 4200, conversions: 518, roi: 2.8 },
  { id: 'C3', name: 'Search Ads', channel: 'PPC', spend: 6800, conversions: 891, roi: 4.1 },
  { id: 'C4', name: 'Content Hub', channel: 'SEO', spend: 1200, conversions: 156, roi: 5.6 },
];

export const deals: readonly Deal[] = [
  { id: 'D1', company: 'Acme Corp', contact: 'John Doe', value: 45000, stage: 'proposal', updatedAt: '2026-06-24' },
  { id: 'D2', company: 'Globex Inc', contact: 'Jane Roe', value: 28000, stage: 'negotiation', updatedAt: '2026-06-23' },
  { id: 'D3', company: 'Initech', contact: 'Bill Lumbergh', value: 12000, stage: 'qualified', updatedAt: '2026-06-22' },
  { id: 'D4', company: 'Umbrella Co', contact: 'Alice M', value: 67000, stage: 'won', updatedAt: '2026-06-20' },
  { id: 'D5', company: 'Stark Ind', contact: 'Tony S', value: 95000, stage: 'lead', updatedAt: '2026-06-25' },
];

export const activities: readonly Activity[] = [
  { id: 'A1', user: 'Alice Chen', action: 'Updated deal Acme Corp to Proposal', time: '2m ago' },
  { id: 'A2', user: 'Bob Smith', action: 'Called Globex Inc', time: '15m ago' },
  { id: 'A3', user: 'Carol Diaz', action: 'Sent contract to Umbrella Co', time: '1h ago' },
  { id: 'A4', user: 'Dan Park', action: 'Created new lead Stark Ind', time: '2h ago' },
];

export const stocks: readonly Stock[] = [
  { symbol: 'NEO', name: 'Neo Tech', price: 142.5, change: 2.4, volume: 1250000 },
  { symbol: 'BRT', name: 'Brutal Inc', price: 87.2, change: -1.1, volume: 890000 },
  { symbol: 'BOLD', name: 'Bold Systems', price: 234.8, change: 3.7, volume: 450000 },
  { symbol: 'HARD', name: 'Hard Edge', price: 56.3, change: 0.5, volume: 2100000 },
];

export const subscriptions: readonly Subscription[] = [
  { id: 'S1', customer: 'Startup A', plan: 'Pro', mrr: 99, status: 'active' },
  { id: 'S2', customer: 'Agency B', plan: 'Enterprise', mrr: 499, status: 'active' },
  { id: 'S3', customer: 'Freelancer C', plan: 'Starter', mrr: 29, status: 'trialing' },
  { id: 'S4', customer: 'Corp D', plan: 'Enterprise', mrr: 799, status: 'past_due' },
  { id: 'S5', customer: 'Team E', plan: 'Pro', mrr: 99, status: 'cancelled' },
];

export const shipments: readonly Shipment[] = [
  { id: 'SH-001', origin: 'Jakarta', destination: 'Surabaya', status: 'in_transit', eta: '2026-06-27' },
  { id: 'SH-002', origin: 'Bandung', destination: 'Medan', status: 'delivered', eta: '2026-06-24' },
  { id: 'SH-003', origin: 'Semarang', destination: 'Makassar', status: 'delayed', eta: '2026-06-29' },
  { id: 'SH-004', origin: 'Yogyakarta', destination: 'Bali', status: 'pending', eta: '2026-06-28' },
];

export const aiGenerations: readonly AiGeneration[] = [
  { id: 'AI-1', prompt: 'Generate product description for Neo Headphones', type: 'text', tokens: 450, createdAt: '2026-06-25 14:32' },
  { id: 'AI-2', prompt: 'Create hero banner image', type: 'image', tokens: 1200, createdAt: '2026-06-25 13:15' },
  { id: 'AI-3', prompt: 'Refactor dashboard component', type: 'code', tokens: 890, createdAt: '2026-06-25 11:48' },
  { id: 'AI-4', prompt: 'Write marketing email copy', type: 'text', tokens: 320, createdAt: '2026-06-24 16:20' },
];

export const salesReps: readonly SalesRep[] = [
  { id: 'R1', name: 'Alice Chen', quota: 100000, closed: 87000, deals: 12 },
  { id: 'R2', name: 'Bob Smith', quota: 80000, closed: 92000, deals: 15 },
  { id: 'R3', name: 'Carol Diaz', quota: 90000, closed: 65000, deals: 9 },
  { id: 'R4', name: 'Dan Park', quota: 75000, closed: 78000, deals: 11 },
];

export const transactions: readonly Transaction[] = [
  { id: 'T1', description: 'Client payment - Acme', category: 'Revenue', amount: 15000, type: 'income', date: '2026-06-24' },
  { id: 'T2', description: 'Office supplies', category: 'Operations', amount: 450, type: 'expense', date: '2026-06-23' },
  { id: 'T3', description: 'SaaS subscriptions', category: 'Software', amount: 1200, type: 'expense', date: '2026-06-22' },
  { id: 'T4', description: 'Consulting fee', category: 'Revenue', amount: 8500, type: 'income', date: '2026-06-21' },
  { id: 'T5', description: 'Marketing ads', category: 'Marketing', amount: 3200, type: 'expense', date: '2026-06-20' },
];

export const users: readonly User[] = [
  { id: 'U1', name: 'Alice Chen', email: 'alice@neo.admin', role: 'Admin', status: 'active' },
  { id: 'U2', name: 'Bob Smith', email: 'bob@neo.admin', role: 'Editor', status: 'active' },
  { id: 'U3', name: 'Carol Diaz', email: 'carol@neo.admin', role: 'Viewer', status: 'inactive' },
  { id: 'U4', name: 'Dan Park', email: 'dan@neo.admin', role: 'Editor', status: 'active' },
];

export const mailMessages: readonly MailMessage[] = [
  { id: 'M1', from: 'support@brutalism.admin', subject: 'Welcome to Brutalism Admin Kit', preview: 'Thanks for signing up...', date: 'Jun 25', read: false, starred: true },
  { id: 'M2', from: 'billing@neo.admin', subject: 'Invoice #1042', preview: 'Your monthly invoice is ready', date: 'Jun 24', read: true, starred: false },
  { id: 'M3', from: 'team@neo.admin', subject: 'Sprint review notes', preview: 'Here are the highlights from...', date: 'Jun 23', read: true, starred: false },
  { id: 'M4', from: 'alerts@neo.admin', subject: 'Server alert resolved', preview: 'The incident has been resolved', date: 'Jun 22', read: false, starred: false },
];

export const chatThreads: readonly ChatThread[] = [
  { id: 'CH1', name: 'Design Team', lastMessage: 'Updated the mockups', time: '2m', unread: 3 },
  { id: 'CH2', name: 'Alice Chen', lastMessage: 'Can you review the PR?', time: '15m', unread: 1 },
  { id: 'CH3', name: 'Engineering', lastMessage: 'Deploy scheduled for Friday', time: '1h', unread: 0 },
  { id: 'CH4', name: 'Bob Smith', lastMessage: 'Thanks!', time: '3h', unread: 0 },
];

export const tasks: readonly Task[] = [
  { id: 'TK1', title: 'Design dashboard widgets', status: 'in_progress', priority: 'high', assignee: 'Alice' },
  { id: 'TK2', title: 'Write API documentation', status: 'todo', priority: 'medium', assignee: 'Bob' },
  { id: 'TK3', title: 'Fix sidebar collapse bug', status: 'done', priority: 'high', assignee: 'Carol' },
  { id: 'TK4', title: 'Update dependencies', status: 'todo', priority: 'low', assignee: 'Dan' },
  { id: 'TK5', title: 'Review PR #42', status: 'in_progress', priority: 'medium', assignee: 'Alice' },
];

export const files: readonly FileItem[] = [
  { id: 'F1', name: 'Documents', type: 'folder', size: '—', modified: 'Jun 25' },
  { id: 'F2', name: 'hero-banner.png', type: 'image', size: '2.4 MB', modified: 'Jun 24' },
  { id: 'F3', name: 'report-q2.pdf', type: 'document', size: '1.1 MB', modified: 'Jun 23' },
  { id: 'F4', name: 'demo-video.mp4', type: 'video', size: '45 MB', modified: 'Jun 22' },
];

export const funnelData = [
  { stage: 'Visitors', value: 10000 },
  { stage: 'Leads', value: 3200 },
  { stage: 'Qualified', value: 1400 },
  { stage: 'Customers', value: 520 },
];

export const channelData = [
  { channel: 'Email', value: 35 },
  { channel: 'Social', value: 28 },
  { channel: 'PPC', value: 22 },
  { channel: 'SEO', value: 15 },
];

export const portfolioHistory = [
  { date: 'Mon', value: 102400 },
  { date: 'Tue', value: 103200 },
  { date: 'Wed', value: 101800 },
  { date: 'Thu', value: 104500 },
  { date: 'Fri', value: 105200 },
];

export const cohortData = [
  { month: 'Jan', retained: 100 },
  { month: 'Feb', retained: 87 },
  { month: 'Mar', retained: 78 },
  { month: 'Apr', retained: 72 },
  { month: 'May', retained: 68 },
  { month: 'Jun', retained: 65 },
];

export const expenseBreakdown = [
  { name: 'Payroll', value: 45 },
  { name: 'Marketing', value: 20 },
  { name: 'Software', value: 15 },
  { name: 'Operations', value: 12 },
  { name: 'Other', value: 8 },
];

export const aiUsageData = [
  { day: 'Mon', tokens: 12400 },
  { day: 'Tue', tokens: 15800 },
  { day: 'Wed', tokens: 14200 },
  { day: 'Thu', tokens: 18900 },
  { day: 'Fri', tokens: 16500 },
];
