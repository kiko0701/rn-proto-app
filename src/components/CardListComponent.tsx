import React from "react";
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Image } from "react-native";

/**
 * todo: Functional Componentに書き換える
 */
export class CardListComponent extends React.Component<{}, { uri: string }> {
  constructor(props: any) {
    super(props);
    this.state = {
      uri: ''
    }
  }

  componentWillMount() {
    this.setState({ uri: 'https://harmony-naturally.jp/wp-content/uploads/2018/09/dfa6a5a0e360700dd5f5c60e379300d0.jpg' })
  }

  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{ uri: this.state.uri }}
                style={{ height: 200, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Text>筋トレ最高！</Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="logo-github" />
                  <Text>1,926 stars</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}