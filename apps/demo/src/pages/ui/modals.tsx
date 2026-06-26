import { PageHeader } from '@neo-admin/core';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  Button,
  Cluster,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  Stack,
  Text,
} from 'neobrutalism-ui-react';
import { useRef } from 'react';
import type { DialogHandle } from 'neobrutalism-ui-react';
import { ShowcaseSection } from '../../components/showcase-section';

export default function ModalsPage() {
  const dialogRef = useRef<DialogHandle>(null);
  const alertRef = useRef<DialogHandle>(null);

  return (
    <Stack gap="xl">
      <PageHeader
        title="Modals"
        badge="Showcase"
        description="Dialog and alert dialog overlays with neo-brutalist styling."
      />

      <ShowcaseSection title="Triggers" description="Open standard dialog or destructive alert">
        <Cluster gap="sm" wrap="wrap">
          <Button onClick={() => dialogRef.current?.open()}>Open Dialog</Button>
          <Button tone="danger" onClick={() => alertRef.current?.open()}>
            Open Alert
          </Button>
        </Cluster>
        <Text size="sm" className="mt-4 opacity-60">
          Dialogs use imperative refs via DialogHandle for open/close control.
        </Text>
      </ShowcaseSection>

      <Dialog ref={dialogRef}>
        <DialogContent className="p-6">
          <DialogTitle>Create project</DialogTitle>
          <DialogDescription className="mt-2 opacity-80">
            Start a new workspace for your team. You can invite members after creation.
          </DialogDescription>
          <Cluster gap="sm" className="mt-6">
            <Button tone="secondary" onClick={() => dialogRef.current?.close()}>
              Cancel
            </Button>
            <Button onClick={() => dialogRef.current?.close()}>Create</Button>
          </Cluster>
        </DialogContent>
      </Dialog>

      <AlertDialog ref={alertRef}>
        <AlertDialogContent className="p-6">
          <AlertDialogTitle>Delete this item?</AlertDialogTitle>
          <AlertDialogDescription className="mt-2 opacity-80">
            This action cannot be undone. All associated data will be permanently removed.
          </AlertDialogDescription>
          <Cluster gap="sm" className="mt-6">
            <Button tone="secondary" onClick={() => alertRef.current?.close()}>
              Cancel
            </Button>
            <Button tone="danger" onClick={() => alertRef.current?.close()}>
              Delete
            </Button>
          </Cluster>
        </AlertDialogContent>
      </AlertDialog>
    </Stack>
  );
}
