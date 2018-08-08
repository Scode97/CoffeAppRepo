import React from "react";
import { Text, View } from "react-native";

// NativeBase Component
import { Spinner } from "native-base";

// Style
import styles from "./styles";

class Loading extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>MyCoffe!</Text>
        <Spinner color="white" />
      </View>
    );
  }
}

export default Loading;
