import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Link } from 'react-router-native'
import { Thumbnail, Text, Left, Body, Right, List,Button, ListItem } from 'native-base';
import starbucks from '../../images/starbucks.png';
import starbucks2 from '../../images/starbucks.jpg';
import {observer} from 'mobx-react';
import store from '../Store';

export default observer(class CoffeDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [
            ],
            shop: {}
             };
    }
    componentWillMount(){
        this.setState({
            orders: store.cart,
            shop: store.currentCartFrom
        })
    }
    handleRemove(){
        store.currentCartFrom = {
            name: "",
        }
        store.cart = []
        this.setState({
            orders:[],
            shop: {}
        })
    }
    renderItem(item,index){
        return (
            <ListItem key={index}>
                <Left>
                    <Text>
                        {item.drink === 0 ? 'Espresso' : 'Latte'}
                        {'\n'}
                        {item.option === 0 ? 'Small' : 'Large'}
                    </Text>
                </Left>
                <Body>
                    <Text>{item.quantity}</Text>
                </Body>
            </ListItem>
        )
    }
    render() {
        return (
            <List>
                <ListItem  style={styles.top}>
                    <Left>
                        <Text style={styles.text}>
                            {this.state.shop.name + '\n'} 
                            <Text note>{this.state.shop.location}</Text>
                        </Text>
                    </Left>
                    <Body/>
                    <Right>
                        <Thumbnail bordered source={this.state.shop.image} />
                    </Right>
                </ListItem>
                {this.state.orders.map(
                (item, index) => this.renderItem(item,index)
                )}
                <ListItem>
                    <Link component={Button} to='/' full onPress={() => this.handleRemove()}>
                        <Text>Remove Cart</Text>
                    </Link>
                </ListItem>
            </List>
        );
    }
});

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
  
  