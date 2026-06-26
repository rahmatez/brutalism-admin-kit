import { chatThreads, PageHeader } from '@neo-admin/core';
import {
  Avatar,
  Badge,
  Button,
  Cluster,
  Input,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Stack,
  StatusDot,
  Text,
} from 'neobrutalism-ui-react';
import { Paperclip, Phone, Search, Send, Video } from 'lucide-react';
import { useEffect, useState } from 'react';

const threadMessages: Record<string, { id: string; sender: string; text: string; time: string }[]> = {
  CH1: [
    { id: '1', sender: 'Design Team', text: 'Updated the mockups for the dashboard.', time: '10:28' },
    { id: '2', sender: 'You', text: 'Looks great! Will review after standup.', time: '10:30' },
    { id: '3', sender: 'Design Team', text: 'Thanks — Figma link is in the channel.', time: '10:31' },
  ],
  CH2: [
    { id: '1', sender: 'Alice Chen', text: 'Can you review the PR?', time: '10:30' },
    { id: '2', sender: 'You', text: 'Sure, looking at it now.', time: '10:32' },
    { id: '3', sender: 'Alice Chen', text: 'Thanks! Let me know if you have questions.', time: '10:33' },
  ],
  CH3: [
    { id: '1', sender: 'Engineering', text: 'Deploy scheduled for Friday 3 PM.', time: '09:15' },
    { id: '2', sender: 'You', text: "Noted. I'll be on call.", time: '09:18' },
  ],
  CH4: [
    { id: '1', sender: 'Bob Smith', text: 'Invoice sent to client.', time: 'Yesterday' },
    { id: '2', sender: 'You', text: 'Perfect, thanks!', time: 'Yesterday' },
    { id: '3', sender: 'Bob Smith', text: 'Thanks!', time: 'Yesterday' },
  ],
};

export default function ChatPage() {
  const [activeId, setActiveId] = useState(chatThreads[1]?.id ?? chatThreads[0]?.id);
  const [draft, setDraft] = useState('');
  const [query, setQuery] = useState('');

  const activeThread = chatThreads.find((t) => t.id === activeId);
  const messages = threadMessages[activeId ?? ''] ?? [];
  const filteredThreads = chatThreads.filter((t) =>
    t.name.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (filteredThreads.length === 0) return;
    if (!filteredThreads.some((t) => t.id === activeId)) {
      setActiveId(filteredThreads[0]!.id);
    }
  }, [filteredThreads, activeId]);

  return (
    <Stack gap="xl">
      <PageHeader
        title="Chat"
        badge="Live"
        description="Real-time messaging with threads, presence, and rich composer."
      />

      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[560px] overflow-hidden rounded-(--nb-radius) border-2 border-(--nb-border) shadow-[6px_6px_0_0_var(--nb-shadow)]"
      >
        <ResizablePanel defaultSize={30} minSize={22}>
          <Stack gap="none" className="h-full bg-(--nb-surface)">
            <div className="border-b-2 border-(--nb-border) p-3">
              <div className="relative">
                <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 opacity-50" />
                <Input
                  placeholder="Search conversations..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="pl-9"
                  aria-label="Search conversations"
                />
              </div>
            </div>
            <div className="flex-1 overflow-auto">
              {filteredThreads.length === 0 ? (
                <Text size="sm" className="p-6 text-center opacity-60">
                  No conversations match your search.
                </Text>
              ) : (
                filteredThreads.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveId(t.id)}
                  className={`flex w-full items-center gap-3 border-b-2 border-(--nb-border) p-3 text-left transition-colors hover:bg-(--nb-yellow) ${
                    activeId === t.id ? 'bg-(--nb-mint)' : ''
                  }`}
                >
                  <div className="relative">
                    <Avatar alt={t.name} tone="primary" />
                    <StatusDot state="online" size="sm" className="absolute -right-0.5 -bottom-0.5" />
                  </div>
                  <Stack gap="none" className="min-w-0 flex-1">
                    <Cluster justify="between">
                      <Text weight="bold" size="sm">
                        {t.name}
                      </Text>
                      <Text size="xs" className="opacity-60">
                        {t.time}
                      </Text>
                    </Cluster>
                    <Text size="xs" className="truncate opacity-70">
                      {t.lastMessage}
                    </Text>
                  </Stack>
                  {t.unread > 0 && <Badge tone="danger">{t.unread}</Badge>}
                </button>
              ))
              )}
            </div>
          </Stack>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={70}>
          <Stack gap="none" className="h-full">
            {activeThread && (
              <Cluster
                justify="between"
                className="border-b-2 border-(--nb-border) bg-(--nb-cream) px-4 py-3"
              >
                <Cluster gap="sm">
                  <Avatar alt={activeThread.name} tone="primary" />
                  <Stack gap="none">
                    <Text weight="bold">{activeThread.name}</Text>
                    <Cluster gap="xs" align="center">
                      <StatusDot state="online" size="xs" />
                      <Text size="xs" className="opacity-60">
                        Online
                      </Text>
                    </Cluster>
                  </Stack>
                </Cluster>
                <Cluster gap="sm">
                  <Button tone="secondary" size="sm" aria-label="Start voice call">
                    <Phone className="size-4" />
                  </Button>
                  <Button tone="secondary" size="sm" aria-label="Start video call">
                    <Video className="size-4" />
                  </Button>
                </Cluster>
              </Cluster>
            )}
            <div className="flex-1 space-y-3 overflow-auto p-4">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`max-w-[75%] rounded-(--nb-radius) border-2 border-(--nb-border) p-3 shadow-[3px_3px_0_0_var(--nb-shadow)] ${
                    m.sender === 'You'
                      ? 'ml-auto bg-(--nb-primary)'
                      : 'bg-(--nb-cream)'
                  }`}
                >
                  <Text size="sm">{m.text}</Text>
                  <Text size="xs" className="mt-1 opacity-60">
                    {m.time}
                  </Text>
                </div>
              ))}
            </div>
            <Cluster gap="sm" className="border-t-2 border-(--nb-border) bg-(--nb-surface) p-4">
              <Button tone="secondary" size="sm" aria-label="Attach file">
                <Paperclip className="size-4" />
              </Button>
              <Input
                placeholder="Type a message..."
                className="flex-1"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
              />
              <Button tone="primary" size="sm" disabled={!draft.trim()} aria-label="Send message">
                <Send className="size-4" />
              </Button>
            </Cluster>
          </Stack>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Stack>
  );
}
