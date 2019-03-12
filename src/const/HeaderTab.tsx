import { iHeaderTabProp, TabRenderedComponent } from "../components/HeaderTabComponent/HeaderTabComponent.interface";
import { CardListComponent } from "../components/CardListComponent";
import React from "react";

export const defaultHeaderTabs: TabRenderedComponent[] = [
  {
    tabName: "肉体改造",
    renderPage: <CardListComponent />
  },
  {
    tabName: "ホーム",
  },
  {
    tabName: "ダイエット",
    renderPage: <CardListComponent />
  },
  {
    tabName: "ヨガインストラクター",
    renderPage: <CardListComponent />
  },
  {
    tabName: "健康",
    renderPage: <CardListComponent />
  },
];