<<<<<<< HEAD
import { Text, View, StyleSheet } from "react-native";
import List from "./List";
import Header from "./Header";
=======
import React from "react";
import {Text, View} from "react-native";
import SQLite from 'react-native-sqlite-storage';
>>>>>>> 13725919febacd98fd4d9333c6a6c993679e91cb

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
