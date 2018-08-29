import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MyApp from "./Components/MyApp.js";

import { NativeRouter, Route, Link } from "react-router-native";

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
        <MyApp />
      </NativeRouter>
    );
  }
}
