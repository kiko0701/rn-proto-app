import React from "react";
import { HeaderTabComponent } from "./src/components/HeaderTabComponent/HeaderTabComponent";
import { defaultHeaderTabs } from "./src/const/HeaderTab";

export default class App extends React.Component {
  render() {
    return <HeaderTabComponent tabs={defaultHeaderTabs} />;
  }
}
