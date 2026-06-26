import { Copy, Check } from 'lucide-react';
import { useCallback, useMemo, useState, type ReactNode } from 'react';

type BrutalCodeLanguage = 'bash' | 'tsx' | 'text';

function highlightLine(line: string, language: BrutalCodeLanguage): ReactNode {
  if (language === 'bash') {
    const commentIndex = line.indexOf('#');
    if (commentIndex >= 0) {
      const command = line.slice(0, commentIndex);
      const comment = line.slice(commentIndex);
      const commandMatch = command.match(/^(\S+)(.*)$/);
      if (!commandMatch) return line;
      return (
        <>
          <span className="brutal-terminal-token-command">{commandMatch[1]}</span>
          <span className="brutal-terminal-token-plain">{commandMatch[2]}</span>
          <span className="brutal-terminal-token-comment">{comment}</span>
        </>
      );
    }
    const commandMatch = line.match(/^(\S+)(.*)$/);
    if (!commandMatch) return line || ' ';
    return (
      <>
        <span className="brutal-terminal-token-command">{commandMatch[1]}</span>
        <span className="brutal-terminal-token-plain">{commandMatch[2]}</span>
      </>
    );
  }

  if (language === 'tsx') {
    const parts: ReactNode[] = [];
    const regex =
      /(\/\/.*$)|('(?:\\.|[^'\\])*'|"(?:\\.|[^"\\])*")|\b(import|export|from|function|return|const|let|type|interface)\b/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(line)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <span key={`${match.index}-plain`} className="brutal-terminal-token-plain">
            {line.slice(lastIndex, match.index)}
          </span>,
        );
      }

      const token = match[0];
      if (token.startsWith('//')) {
        parts.push(
          <span key={`${match.index}-comment`} className="brutal-terminal-token-comment">
            {token}
          </span>,
        );
      } else if (token.startsWith("'") || token.startsWith('"')) {
        parts.push(
          <span key={`${match.index}-string`} className="brutal-terminal-token-string">
            {token}
          </span>,
        );
      } else {
        parts.push(
          <span key={`${match.index}-keyword`} className="brutal-terminal-token-keyword">
            {token}
          </span>,
        );
      }

      lastIndex = match.index + token.length;
    }

    if (lastIndex < line.length) {
      parts.push(
        <span key={`${lastIndex}-tail`} className="brutal-terminal-token-plain">
          {line.slice(lastIndex)}
        </span>,
      );
    }

    return parts.length > 0 ? parts : line || ' ';
  }

  return line || ' ';
}

export function BrutalCodeTerminal({
  code,
  title = 'CODE',
  language = 'text',
  footer,
}: {
  code: string;
  title?: string;
  language?: BrutalCodeLanguage;
  footer?: ReactNode;
}) {
  const lines = useMemo(() => code.replace(/\n$/, '').split('\n'), [code]);
  const [copied, setCopied] = useState(false);

  const copyCode = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setCopied(false);
    }
  }, [code]);

  return (
    <div className="brutal-terminal">
      <div className="brutal-terminal-header">
        <div className="brutal-terminal-dots" aria-hidden>
          <span className="brutal-terminal-dot brutal-terminal-dot-pink" />
          <span className="brutal-terminal-dot brutal-terminal-dot-yellow" />
          <span className="brutal-terminal-dot brutal-terminal-dot-mint" />
        </div>
        <span className="brutal-terminal-title">{title}</span>
      </div>

      <div className="brutal-terminal-body">
        <button
          type="button"
          className="brutal-terminal-copy"
          onClick={copyCode}
          aria-label={copied ? 'Copied' : 'Copy code'}
        >
          {copied ? <Check className="size-3.5" aria-hidden /> : <Copy className="size-3.5" aria-hidden />}
          {copied ? 'COPIED' : 'COPY'}
        </button>

        <div className="brutal-terminal-lines" role="presentation">
          {lines.map((line, index) => (
            <div key={`${index}-${line}`} className="brutal-terminal-line">
              <span className="brutal-terminal-line-number" aria-hidden>
                {index + 1}
              </span>
              <code className="brutal-terminal-line-code">{highlightLine(line, language)}</code>
            </div>
          ))}
        </div>
      </div>

      {footer ? <div className="brutal-terminal-footer">{footer}</div> : null}
    </div>
  );
}
