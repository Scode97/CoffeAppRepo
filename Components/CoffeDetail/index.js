import React, { Component } from "react";

import { observer } from "mobx-react";

// NativeBase Components
import {
  Thumbnail,
  Text,
  Button,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Tab,
  Tabs
} from "native-base";

// Routing
import { Link } from "react-router-native";

// Images
import starbucks from "../../images/starbucks.png";
import starbucks2 from "../../images/starbucks.jpg";

// Style
import styles from "./styles";

//stores
import ListStore from "../../Stores/ListStore";

class CoffeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // detail: {
      //   name: "StarBucks",
      //   location: "Salmiya",
      //   distance: "5 kilometers",
      //   image: starbucks,
      //   background: starbucks2,
      //   lat: 29.32825632,
      //   lng: 47.9258696
      // },
      drink: 0,
      option: 0
    };
  }

  // createOrder = () => {
  //   ListStore.createOrder(this.state.drink, this.state.option);
  // };

  render() {
    let x = this.props.match.params.index;
    let h = ListStore.list[x];
    console.log(h);
    // console.log(ListStore.createOrder);
    // if(h === ListStore.currentShop)
    return (
      <List>
        <ListItem style={styles.top}>
          <Left>
            <Text style={styles.text}>
              {h.name + "\n"}
              <Text note>{h.location}</Text>
            </Text>
          </Left>
          <Body />
          <Right>
            <Thumbnail bordered source={h.image} />
          </Right>
        </ListItem>
        <ListItem>
          <Body>
            <Text style={styles.middleText}>Choose Drink</Text>
          </Body>
        </ListItem>
        <Tabs
          initialPage={0}
          onChangeTab={({ value }) => this.setState({ drink: value })}
        >
          <Tab heading="Espresso" />
          <Tab heading="Latte" />
        </Tabs>
        <ListItem>
          <Body>
            <Text style={styles.middleText}>Choose Option</Text>
          </Body>
        </ListItem>
        <Tabs
          initialPage={0}
          onChangeTab={({ value }) => this.setState({ option: value })}
        >
          <Tab heading="Small" />
          <Tab heading="Large" />
        </Tabs>

        {/* <Button
          full
          danger
          onPress={() => {
            ListStore.createOrder(this.state.drink, this.state.option);
          }}
        >
          <Text>Add</Text>
        </Button> */}

        <Link
          component={Button}
          onPress={() => {
            ListStore.createOrder(this.state.drink, this.state.option, x);
          }}
          to="/CoffeCart"
          full
          danger
        >
          <Text>Add</Text>
        </Link>
      </List>
    );
  }
}

export default observer(CoffeDetail);
