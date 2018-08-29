import React, { Component } from "react";
import { ImageBackground, View } from "react-native";

// Data
import list from "./list";

import { observer } from "mobx-react";

// NativeBase Components
import {
  List,
  ListItem,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Left,
  Body
} from "native-base";

// Style
import styles from "./styles";

// Routing
import { Link } from "react-router-native";

//store
import ListStore from "../../Stores/ListStore";

class CoffeList extends Component {
  renderItem(data, index) {
    return (
      <ImageBackground
        source={data.background}
        style={{ height: 180, width: null, flex: 1 }}
        key={data.name + "-" + index}
      >
        <Link
          component={ListItem}
          to={`/CoffeDetail/${index}`}
          style={{
            backgroundColor: "transparent",
            borderTopWidth: 0,
            borderRightWidth: 0,
            borderLeftWidth: 0,
            borderBottomWidth: 0
          }}
        >
          <Card
            style={{
              backgroundColor: "transparent",
              borderTopWidth: 0,
              borderRightWidth: 0,
              borderLeftWidth: 0,
              borderBottomWidth: 0
            }}
          >
            <CardItem style={{ backgroundColor: "transparent" }}>
              <Left>
                <Thumbnail bordered source={data.image} />
                <Body>
                  <Text style={styles.text}>{data.name}</Text>
                  <Text note style={styles.text}>
                    {data.distance}
                  </Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <View style={styles.divider} />
        </Link>
      </ImageBackground>
    );
  }
  render() {
    const ListItems = ListStore.list.map((data, index) =>
      this.renderItem(data, index)
    );
    return <List>{ListItems}</List>;
  }
}

export default observer(CoffeList);
