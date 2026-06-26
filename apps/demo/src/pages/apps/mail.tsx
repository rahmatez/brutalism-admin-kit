import { FilterBar, mailMessages, PageHeader } from '@neo-admin/core';
import {
  Badge,
  Button,
  Card,
  CardContent,
  Cluster,
  Input,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Stack,
  Text,
} from 'neobrutalism-ui-react';
import { Archive, Inbox, Mail, PenSquare, Search, Send, Star, Trash2 } from 'lucide-react';
import { useMemo, useState } from 'react';

const folderDefs = [
  { id: 'inbox', label: 'Inbox', icon: Inbox },
  { id: 'starred', label: 'Starred', icon: Star },
  { id: 'sent', label: 'Sent', icon: Send },
  { id: 'archive', label: 'Archive', icon: Archive },
  { id: 'trash', label: 'Trash', icon: Trash2 },
] as const;

export default function MailPage() {
  const [selected, setSelected] = useState(mailMessages[0]?.id);
  const [folder, setFolder] = useState('inbox');
  const [query, setQuery] = useState('');

  const folders = useMemo(
    () =>
      folderDefs.map((f) => ({
        ...f,
        count:
          f.id === 'inbox'
            ? mailMessages.filter((m) => !m.read).length
            : f.id === 'starred'
              ? mailMessages.filter((m) => m.starred).length
              : 0,
      })),
    [],
  );

  const filtered = useMemo(() => {
    let list = [...mailMessages];
    switch (folder) {
      case 'starred':
        list = list.filter((m) => m.starred);
        break;
      case 'sent':
      case 'archive':
      case 'trash':
        list = [];
        break;
      default:
        break;
    }
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (m) =>
          m.from.toLowerCase().includes(q) ||
          m.subject.toLowerCase().includes(q) ||
          m.preview.toLowerCase().includes(q),
      );
    }
    return list;
  }, [folder, query]);

  const active = filtered.find((m) => m.id === selected) ?? filtered[0];

  return (
    <Stack gap="xl">
      <PageHeader
        title="Mail"
        badge="Inbox"
        description="Split-pane inbox with folders, search, and reading view."
        actions={
          <Button tone="primary" size="sm">
            <PenSquare className="mr-1.5 size-4" />
            Compose
          </Button>
        }
      />

      <FilterBar>
        <Cluster gap="sm" wrap="wrap" className="flex-1">
          {folders.map((f) => {
            const Icon = f.icon;
            return (
              <Button
                key={f.id}
                tone={folder === f.id ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setFolder(f.id)}
              >
                <Icon className="mr-1 size-4" />
                {f.label}
                {f.count > 0 ? ` (${f.count})` : ''}
              </Button>
            );
          })}
        </Cluster>
        <div className="relative min-w-48 flex-1">
          <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 opacity-50" />
          <Input
            placeholder="Search mail..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="pl-9"
            aria-label="Search mail"
          />
        </div>
      </FilterBar>

      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-[560px] overflow-hidden rounded-(--nb-radius) border-2 border-(--nb-border) shadow-[6px_6px_0_0_var(--nb-shadow)]"
      >
        <ResizablePanel defaultSize={34} minSize={24}>
          <Stack gap="none" className="h-full overflow-auto bg-(--nb-surface)">
            {filtered.length === 0 ? (
              <div className="p-8 text-center opacity-60">
                <Mail className="mx-auto mb-2 size-8" />
                <Text size="sm">No messages found</Text>
              </div>
            ) : (
              filtered.map((msg) => (
                <button
                  key={msg.id}
                  type="button"
                  onClick={() => setSelected(msg.id)}
                  className={`w-full border-b-2 border-l-4 p-4 text-left transition-colors hover:bg-(--nb-yellow) ${
                    active?.id === msg.id ? 'bg-(--nb-mint)' : ''
                  } ${!msg.read ? 'border-l-(--nb-primary)' : 'border-l-transparent'}`}
                >
                  <Cluster justify="between" align="start">
                    <Text weight="bold" size="sm" className={!msg.read ? '' : 'opacity-70'}>
                      {msg.from}
                    </Text>
                    <Text size="xs" className="shrink-0 opacity-60">
                      {msg.date}
                    </Text>
                  </Cluster>
                  <Text size="sm" weight="bold" className="mt-1">
                    {msg.subject}
                  </Text>
                  <Text size="xs" className="mt-0.5 truncate opacity-60">
                    {msg.preview}
                  </Text>
                  <Cluster gap="xs" className="mt-2">
                    {!msg.read && <Badge tone="primary">New</Badge>}
                    {msg.starred && <Star className="size-3.5 fill-(--nb-yellow) text-(--nb-yellow)" />}
                  </Cluster>
                </button>
              ))
            )}
          </Stack>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={66}>
          <Card className="h-full rounded-none border-0 shadow-none">
            <CardContent className="flex h-full flex-col pt-6">
              {active ? (
                <>
                  <Cluster justify="between" wrap="wrap" className="gap-3 border-b-2 border-(--nb-border) pb-4">
                    <Stack gap="xs">
                      <Text size="xl" weight="bold">
                        {active.subject}
                      </Text>
                      <Text size="sm" className="opacity-70">
                        From: {active.from} · {active.date}
                      </Text>
                    </Stack>
                    <Cluster gap="sm">
                      <Button tone="secondary" size="sm">
                        Reply
                      </Button>
                      <Button tone="secondary" size="sm">
                        Forward
                      </Button>
                    </Cluster>
                  </Cluster>
                  <div className="flex-1 overflow-auto py-6">
                    <Text className="leading-relaxed">
                      {active.preview} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                      quis nostrud exercitation ullamco laboris.
                    </Text>
                    <Text className="mt-4 leading-relaxed opacity-80">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                      fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </Text>
                  </div>
                </>
              ) : (
                <div className="flex flex-1 items-center justify-center opacity-50">
                  <Text>Select a message to read</Text>
                </div>
              )}
            </CardContent>
          </Card>
        </ResizablePanel>
      </ResizablePanelGroup>
    </Stack>
  );
}
