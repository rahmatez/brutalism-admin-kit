export interface AnalyticsPoint {
  readonly month: string;
  readonly visitors: number;
  readonly pageViews: number;
  readonly bounceRate: number;
}

export interface TopPage {
  readonly id: string;
  readonly path: string;
  readonly views: number;
  readonly avgTime: string;
}

export interface Order {
  readonly id: string;
  readonly customer: string;
  readonly product: string;
  readonly amount: number;
  readonly status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  readonly date: string;
}

export interface Product {
  readonly id: string;
  readonly name: string;
  readonly category: string;
  readonly price: number;
  readonly stock: number;
  readonly sales: number;
}

export interface Campaign {
  readonly id: string;
  readonly name: string;
  readonly channel: string;
  readonly spend: number;
  readonly conversions: number;
  readonly roi: number;
}

export interface Deal {
  readonly id: string;
  readonly company: string;
  readonly contact: string;
  readonly value: number;
  readonly stage: 'lead' | 'qualified' | 'proposal' | 'negotiation' | 'won' | 'lost';
  readonly updatedAt: string;
}

export interface Activity {
  readonly id: string;
  readonly user: string;
  readonly action: string;
  readonly time: string;
}

export interface Stock {
  readonly symbol: string;
  readonly name: string;
  readonly price: number;
  readonly change: number;
  readonly volume: number;
}

export interface Subscription {
  readonly id: string;
  readonly customer: string;
  readonly plan: string;
  readonly mrr: number;
  readonly status: 'active' | 'trialing' | 'cancelled' | 'past_due';
}

export interface Shipment {
  readonly id: string;
  readonly origin: string;
  readonly destination: string;
  readonly status: 'pending' | 'in_transit' | 'delivered' | 'delayed';
  readonly eta: string;
}

export interface AiGeneration {
  readonly id: string;
  readonly prompt: string;
  readonly type: 'text' | 'image' | 'code';
  readonly tokens: number;
  readonly createdAt: string;
}

export interface SalesRep {
  readonly id: string;
  readonly name: string;
  readonly quota: number;
  readonly closed: number;
  readonly deals: number;
}

export interface Transaction {
  readonly id: string;
  readonly description: string;
  readonly category: string;
  readonly amount: number;
  readonly type: 'income' | 'expense';
  readonly date: string;
}

export interface User {
  readonly id: string;
  readonly name: string;
  readonly email: string;
  readonly role: string;
  readonly avatar?: string;
  readonly status: 'active' | 'inactive';
}

export interface MailMessage {
  readonly id: string;
  readonly from: string;
  readonly subject: string;
  readonly preview: string;
  readonly date: string;
  readonly read: boolean;
  readonly starred: boolean;
}

export interface ChatThread {
  readonly id: string;
  readonly name: string;
  readonly lastMessage: string;
  readonly time: string;
  readonly unread: number;
}

export interface Task {
  readonly id: string;
  readonly title: string;
  readonly status: 'todo' | 'in_progress' | 'done';
  readonly priority: 'low' | 'medium' | 'high';
  readonly assignee: string;
}

export interface FileItem {
  readonly id: string;
  readonly name: string;
  readonly type: 'folder' | 'image' | 'document' | 'video';
  readonly size: string;
  readonly modified: string;
}
