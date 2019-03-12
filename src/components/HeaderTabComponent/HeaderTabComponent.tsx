import React from "react";
import {
  Container,
  Header,
  Tab,
  Tabs,
  ScrollableTab,
  Left,
  Body,
  Right,
  Text,
  Badge,
} from "native-base";
import { StyleSheet } from "react-native";
import { iHeaderTabProp, iHeaderTabState, TabRenderedComponent } from './HeaderTabComponent.interface';
import { CardListComponent } from "../CardListComponent";

/**
 * todo: Functional Componentに書き換える
 */
export class HeaderTabComponent extends React.Component<iHeaderTabProp, iHeaderTabState> {
  constructor(props: iHeaderTabProp) {
    super(props);
  }

  render() {
    console.log(this.props.tabs);
    return (
      <Container>
        <Header hasTabs>
          <Left style={styles.Badge}>
            <Badge>
              <Text>プロトタイプ</Text>
            </Badge>
          </Left>
          <Body></Body>
          <Right />
        </Header>
        <Tabs renderTabBar={() => <ScrollableTab />}>
          {this.props.tabs.map(tab => (
            <Tab heading={tab.tabName || ''}>
              {tab.renderPage}
            </Tab>
          ))}
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  Badge: {
    marginTop: "5%",
  },
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center"
  }
});
