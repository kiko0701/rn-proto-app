/**
 * ヘッダータブコンポーネント用型定義
 */
export interface TabItem {
  tabName?: string;
  renderPage?: React.ReactNode;
}

export interface HeaderTabComponentProps {
  tabs: TabItem[];
}

export interface HeaderTabComponentState {
  tabName: string;
}