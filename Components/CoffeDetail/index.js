import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Thumbnail, Text, Button, Left, Body, Right, List, ListItem, Tab, Tabs } from 'native-base';
import starbucks from '../../images/starbucks.png';
import starbucks2 from '../../images/starbucks.jpg';
import {observer} from 'mobx-react';
import store from '../Store';

export default observer(class CoffeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
          detail: {
          },
          drink: 0,
          option: 0,

        };
    }
    componentWillMount(){
        this.setState({
            detail: store.currentCoffeShop
        })
    }

 

    handleAdd(){
        let coffe = {
            drink: this.state.drink,
            option: this.state.option,
            quantity: 1
        }
        if (store.currentCartFrom.name === "" || store.currentCartFrom.name === store.currentCoffeShop.name){
            let index = store.cart.findIndex(
                (object) => object.drink === this.state.drink && object.option === this.state.option
            )
            store.currentCartFrom = this.state.detail
            if (index < 0){
                store.cart.push(coffe);
            }
            else {
                store.cart[index].quantity++
            }
        } else {
            alert('You have a pending order')
        }
    }
  render() {
    return (
        <List>
            <ListItem style={styles.top}>
                <Left>
                    <Text style={styles.text}>
                        {this.state.detail.name + '\n'} 
                        <Text note>{this.state.detail.location}</Text>
                    </Text>
                </Left>
                <Body />
                <Right>
                  <Thumbnail bordered source={this.state.detail.image} />
                </Right>
            </ListItem>
            <ListItem >
                <Body >
                    <Text style={styles.middleText}>Choose Drink</Text>
                </Body>
            </ListItem>
            <Tabs initialPage={0} onChangeTab={({ i, ref, from })=> this.setState({drink: i})}>
                <Tab heading="Espresso"/>
                <Tab heading="Latte"/>
            </Tabs>
            <ListItem >
                <Body >
                  <Text style={styles.middleText}>Choose Option</Text>
                </Body>
            </ListItem>
            <Tabs initialPage={0} onChangeTab={({ i, ref, from })=> this.setState({option: i})}>
                <Tab heading="Small"/>
                <Tab heading="Large"/>
            </Tabs>
            <Button full danger onPress={() => this.handleAdd()}>
                <Text>Add</Text>
            </Button>
        </List>
    );
  }
})

const styles = StyleSheet.create({
    text: {
        color: 'black',
        fontSize: 15,
        justifyContent:"center",
        alignItems:'center',
    },
    divider: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
    },
    top:{
        marginLeft: -6,
        backgroundColor: '#ffffcc'
    },
    middleText:{
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17,
        alignSelf: "center"
    }
  });
  
  