import React from "react";
import { View, StyleSheet } from "react-native";

export default function Card(props) {
  return <View style={[styles.card, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: "column",
    overflow: "hidden",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 15,
  },
});
