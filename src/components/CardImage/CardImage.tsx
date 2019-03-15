import React from "react";
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import { Image } from "react-native";
import { CardImageProps } from "./CardImage.interface";

/**
 * todo: Functional Componentに書き換える
 */
export class CardImage extends React.Component<CardImageProps> {
  constructor(props: CardImageProps) {
    props = {
      title: 'aaaa',
      uri: 'aaa'
    }
    console.log(props);
    super(props);
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
                source={{ uri: this.props.uri || 'hoge' }}
                style={{ height: 200, flex: 1 }} />
            </CardItem>
            <CardItem>
              <Text>{this.props.title || 'hoge'}</Text>
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