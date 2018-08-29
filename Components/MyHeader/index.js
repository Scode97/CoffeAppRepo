import React, { Component } from "react";

// NativeBase Components
import {
  Header,
  Title,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text
} from "native-base";

// Routing
import { Switch, Route, withRouter } from "react-router-native";

import { Link } from "react-router-native";
import ListStore from "../../Stores/ListStore";

// Style
import styles from "./styles";
import CoffeCart from "../CoffeCart";
import CoffeDetail from "../CoffeDetail";

class MyHeader extends Component {
  back = () => {
    this.props.history.goBack();
  };

  // componentDidMount() {
  //   console.log(this.props);
  // }
  render() {
    // console.log(ListStore.orders.length);
    return (
      <Header style={{ backgroundColor: "transparent" }}>
        <Left>
          {/* <Link component={Button} to="/">
            <Icon style={styles.backicon} name="arrow-back" />
          </Link> */}
          <Switch>
            <Route
              render={() => (
                <Button transparent onPress={this.back}>
                  <Icon style={styles.backicon} name="arrow-back" />
                </Button>
              )}
            />
          </Switch>
        </Left>

        <Body>
          <Title style={styles.header}>
            <Text>Coffe App</Text>
          </Title>
        </Body>
        <Right>
          {/* <Button transparent>
            <Text style={styles.text}>
              3 <Icon name="beer" style={styles.icon} />
            </Text>
          </Button> */}

          <Link to="/CoffeCart" component={Button} transparent>
            <Text style={styles.text}>
              {ListStore.getTotal}

              {/* {ListStore.orders.forEach(order=> order.quantity)} */}
              <Icon name="beer" style={styles.icon} />
            </Text>
          </Link>
        </Right>
      </Header>
    );
  }
}

export default withRouter(MyHeader);
