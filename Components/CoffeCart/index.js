import React, { Component } from "react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

// Images
import starbucks from "../../images/starbucks.png";
import starbucks2 from "../../images/starbucks.jpg";

// Style
import styles from "./styles";
import CoffeDetail from "../CoffeDetail";
import ListStore from "../../Stores/ListStore";

class CoffeCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // orders: [
      //   {
      //     drink: 0,
      //     option: 0,
      //     quantity: 1
      //   },
      //   {
      //     drink: 1,
      //     option: 1,
      //     quantity: 2
      //   }
      // ],
      // shop: {
      // name: "StarBucks",
      // location: "Salmiya",
      // distance: "5 kilometers",
      // image: starbucks,
      // background: starbucks2,
      // lat: 29.32825632,
      // lng: 47.9258696
      // }
    };
  }

  renderItem(item, index) {
    return (
      <ListItem key={index}>
        <Left>
          <Text>
            {item.drink === 0 ? "Espresso" : "Latte"}
            {"\n"}
            {item.option === 0 ? "Small" : "Large"}
          </Text>
        </Left>
        <Body>
          <Text>{item.quantity}</Text>
        </Body>
      </ListItem>
    );
  }

  render() {
    return (
      <List>
        <ListItem style={styles.top}>
          <Left>
            <Text style={styles.text}>
              {/* {ListStore.list[ListStore.currentShop].name + "\n"} */}
              {/* <Text note>{ListStore.list[ListStore.currentShop]}</Text> */}
              {ListStore.Current.name + "\n"}
              <Text note>{ListStore.Current.location}</Text>
            </Text>
          </Left>
          <Body />
          <Right>
            <Thumbnail bordered source={ListStore.Current.image} />
          </Right>
        </ListItem>
        {ListStore.orders.map((item, index) => this.renderItem(item, index))}
      </List>
    );
  }
}

export default CoffeCart;
