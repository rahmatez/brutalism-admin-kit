/** Shared card chrome for dashboard widgets — spacing via data-* + app styles.css */

export const widgetCardHeaderClassName =
  'flex flex-col gap-0 border-b-2 border-(--nb-border)';

export const widgetCardHeaderTextClassName = 'flex min-w-0 flex-col';

export const widgetCardTitleClassName =
  'font-heading text-base font-black leading-snug tracking-tight';

export const widgetCardDescriptionClassName =
  'text-sm font-medium leading-normal text-pretty opacity-70';

export const widgetCardShellClassName = 'min-w-0 gap-0 py-0';

export const widgetCardBodyClassName = 'p-0';

export const widgetCardChartBodyClassName = 'p-0';

export const widgetCardTableContentClassName = 'min-w-0 p-0';

export const widgetCardProps = { 'data-widget-card': true } as const;

export const widgetChartCardProps = { 'data-widget-chart-card': true } as const;

export const widgetCardBodyProps = { 'data-widget-card-body': true } as const;

export const widgetCardChartBodyProps = { 'data-widget-card-chart': true } as const;

/** @deprecated Use widgetCardShellClassName + widgetChartCardProps */
export const widgetCardChartShellClassName = widgetCardShellClassName;

/** Embedded in cards — allow horizontal scroll when columns exceed card width. */
export const embeddedDataTableClassName =
  'min-w-0 overflow-x-auto rounded-none border-0 border-t-2 border-(--nb-border) shadow-none [&_[data-nb-table]]:w-max [&_[data-nb-table]]:min-w-full';

export const widgetSectionClassName = 'flex flex-col gap-8';

export const widgetSectionHeaderClassName = 'flex flex-col gap-1';

export const widgetSectionTitleClassName =
  'font-heading text-lg font-black uppercase leading-snug tracking-wide';

export const widgetSectionDescriptionClassName =
  'max-w-2xl text-sm font-medium leading-normal text-pretty opacity-70';
