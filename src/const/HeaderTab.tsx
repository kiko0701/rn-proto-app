import { TabItem } from "../components/HeaderTabComponent/HeaderTabComponent.interface";
import { BodyModificationPage } from "../pages/BodyModificationPage";
import React from "react";

export const defaultHeaderTabs: TabItem[] = [
  {
    tabName: "肉体改造",
    renderPage: <BodyModificationPage />
  },
  {
    tabName: "ホーム",
  },
  {
    tabName: "ダイエット",
    renderPage: <BodyModificationPage />
  },
  {
    tabName: "ヨガインストラクター",
    renderPage: <BodyModificationPage />
  },
  {
    tabName: "健康",
    renderPage: <BodyModificationPage />
  },
];