import React from "react";
import { CardImage } from "../components/CardImage/CardImage";
import { BodyModificationState } from "./BodyModificationPage.interface";
import { Container, Content } from "native-base";

export class BodyModificationPage extends React.Component<{}, BodyModificationState> {

  constructor(props: any) {
    super(props);
    this.state = {
      CardListItems: [
        {
          title: 'がんばるぞ！！！',
          uri: 'https://pbs.twimg.com/profile_images/674523407183036418/s-4xuTsd_400x400.jpg',
        },
        {
          title: '鍛えるぞおお',
          uri: 'http://www.weider-jp.com/protein/images/column/1519635778_mceclip0.jpg',
        }
      ]
    };
  }

  render() {
    return (
      <Container>
        <Content>
          {
            this.state.CardListItems.map((item, key) => {
              return <CardImage key={key} title={item.title} uri={item.uri} />
            })
          }
        </Content>
      </Container>
    );
  }
}