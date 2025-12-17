export interface Tab<T extends string> {
  value: T;
  label: string;
}

export interface TabsProps<T extends string> {
  tabs: Tab<T>[];
  activeTab: T;
  onTabChange: (tab: T) => void;
}
