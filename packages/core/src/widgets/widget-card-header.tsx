import { Cluster } from 'neobrutalism-ui-react';
import type { ReactNode } from 'react';
import {
  widgetCardDescriptionClassName,
  widgetCardHeaderClassName,
  widgetCardHeaderTextClassName,
  widgetCardTitleClassName,
} from './widget-card-styles';

export interface WidgetCardHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export function WidgetCardHeader({ title, description, actions }: WidgetCardHeaderProps) {
  const text = (
    <div className={widgetCardHeaderTextClassName} data-widget-card-header-text>
      <p className={widgetCardTitleClassName} data-widget-card-title>
        {title}
      </p>
      {description ? (
        <p className={widgetCardDescriptionClassName} data-widget-card-description>
          {description}
        </p>
      ) : null}
    </div>
  );

  return (
    <div className={widgetCardHeaderClassName} data-widget-card-header>
      {actions ? (
        <Cluster justify="between" align="start" className="w-full gap-3">
          {text}
          {actions}
        </Cluster>
      ) : (
        text
      )}
    </div>
  );
}
