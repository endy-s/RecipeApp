import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from './src/components/title'

export default class App extends React.Component {
  state = {
    title: "Hello"
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={styles.helloWorldStyle}>{this.state.title}</Text>
        <Title value="Endy :)" name="Hello">Tested</Title>
        <Title value="Nice!" name="Bye">{42}</Title>

        <Title>Receitas</Title>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "grey",
    paddingTop: 30,
  },
  helloWorldStyle: {
    color: "#F00"
  }
});
