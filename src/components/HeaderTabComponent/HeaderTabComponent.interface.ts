/**
 * ヘッダータブコンポーネント用型定義
 */
export interface TabRenderedComponent {
  tabName?: string;
  renderPage?: React.ReactNode;
}

export interface iHeaderTabProp {
  tabs: TabRenderedComponent[];
}

export interface iHeaderTabState {
  tabName: string;
}