// Tabs.d.ts
import { ReactNode, FC } from 'react';

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  variant?: 'line' | 'contained';
  defaultActiveId?: string;
  onChange?: (id: string) => void;
  className?: string;
}

declare const Tabs: FC<TabsProps>;

export default Tabs;