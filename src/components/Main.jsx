import { Text, View, StyleSheet } from "react-native";
import List from "./List";
import Header from "./Header";
import React from "react";

const Main = () => {
  return (
    <View style={styles.root}>
      <Header />

      <View style={styles.listContainer}>
        <List title={"lista1"} />
        <List title={"lista2"} />
        <List title={"lista3"} />
        <List title={"lista4"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#1E1E2E",
    width: "100%",
  },

  listContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(2,50%)",
    gap: 20
  }
})

export default Main;
