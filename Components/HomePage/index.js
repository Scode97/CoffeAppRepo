import React, { Component } from "react";
import { ImageBackground, View } from "react-native";
import { NativeRouter, Route, Switch } from "react-router-native";

// NativeBase Components
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text
} from "native-base";

// Components
import CoffeList from "../CoffeList";
import CoffeDetail from "../CoffeDetail";
import CoffeCart from "../CoffeCart";
import MyHeader from "../MyHeader";

// Background Image
import background from "../../images/b1.png";

// Style
import styles from "./styles";
//routing

import { Link } from "react-router-native";

class HomePage extends Component {
  componentDidMount() {
    console.log("ccc");
  }
  render() {
    return (
      <ImageBackground
        source={background}
        style={{ height: null, width: null, flex: 1 }}
      >
        <View style={styles.overlay} />
        <Container>
          <MyHeader />

          <Content>
            <Switch>
              <Route path="/CoffeCart" component={CoffeCart} />
              <Route path="/CoffeDetail/:index" component={CoffeDetail} />
              <Route exact path="/" component={CoffeList} />
            </Switch>
          </Content>

          <Footer style={{ backgroundColor: "transparent" }}>
            <FooterTab>
              <Button full>
                {/* <Text style={styles.footerbutton}>
                  <Icon name="cart" style={styles.footericon} />
                  Cart
                </Text> */}
                <Link component={Button} to="/coffeCart" full>
                  <Text style={styles.footerbutton}>
                    <Icon name="cart" style={styles.footericon} />
                    Cart
                  </Text>
                </Link>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </ImageBackground>
    );
  }
}

export default HomePage;
